/* InformationHub — landing page search over /search.json (client side, no server).
   Every phrase comes from data-* attributes on the form, so the same file serves
   the Korean (search.json) and English (/en/search.json) editions. */
(function () {
  'use strict';

  var form = document.querySelector('[data-hub-search]');
  if (!form) return;

  var input = form.querySelector('[data-search-input]');
  var clear = form.querySelector('[data-search-clear]');
  var status = form.querySelector('[data-search-status]');
  var results = document.querySelector('[data-search-results]');
  var defaults = Array.prototype.slice.call(document.querySelectorAll('[data-search-default]'));
  var base = window.INFO_HUB_BASE || '/InformationHub/';
  var idleStatus = status ? status.textContent : '';
  var entries = null;
  var loading = null;

  var copy = {
    noMatch: form.getAttribute('data-no-match') || 'No report matches “%s%”.',
    matchOne: form.getAttribute('data-match-one') || '%s% report matches “%s%”',
    matchMany: form.getAttribute('data-match-many') || '%s% reports match “%s%”',
    none: form.getAttribute('data-none') || 'No reports match “%s%”',
    stocks: form.getAttribute('data-stocks-many') || '%s% stocks',
    stocksOne: form.getAttribute('data-stocks-one') || '%s% stock',
    sources: form.getAttribute('data-sources-many') || '%s% sources',
    sourcesOne: form.getAttribute('data-sources-one') || '%s% source',
  };

  /** "리포트 %s%편" + [3] → "리포트 3편"; placeholders fill in argument order. */
  function fmt(text, values) {
    var index = 0;
    return String(text).replace(/%s%/g, function () {
      var value = values[index];
      index += 1;
      return value == null ? '' : String(value);
    });
  }

  function load() {
    if (entries) return Promise.resolve(entries);
    if (loading) return loading;
    loading = fetch(base + 'search.json', { cache: 'no-cache' })
      .then(function (response) {
        if (!response.ok) throw new Error('search.json ' + response.status);
        return response.json();
      })
      .then(function (data) {
        entries = (data && data.items) || [];
        return entries;
      })
      .catch(function () {
        entries = [];
        return entries;
      });
    return loading;
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function card(item) {
    var stocks = (item.tickers || []).length;
    var sources = item.sources || 0;
    return (
      '<article class="brief-card" data-briefing>' +
        '<a class="brief-link" href="' + base + String(item.url).replace(/^\//, '') + '">' +
          '<span class="brief-meta">' +
            '<span class="brief-channel">' + escapeHtml(item.channel) + '</span>' +
            '<span class="kind-badge kind-' + escapeHtml(item.kind || 'daily') + '">' + escapeHtml(item.kindLabel || 'Daily') + '</span>' +
            '<time datetime="' + escapeHtml(item.date) + '">' + escapeHtml(item.dateLabel) + '</time>' +
          '</span>' +
          '<span class="brief-title">' + escapeHtml(item.title) + '</span>' +
          '<span class="brief-summary">' + escapeHtml(item.summary) + '</span>' +
          '<span class="brief-foot">' +
            '<span>' + escapeHtml(fmt(stocks === 1 ? copy.stocksOne : copy.stocks, [stocks])) + '</span>' +
            '<span>' + escapeHtml(fmt(sources === 1 ? copy.sourcesOne : copy.sources, [sources])) + '</span>' +
            '<span class="brief-arrow" aria-hidden="true">↗</span>' +
          '</span>' +
        '</a>' +
      '</article>'
    );
  }

  function haystack(item) {
    return [item.title, item.summary, item.date, item.dateLabel, item.channel, item.kindLabel]
      .concat(item.tickers || [])
      .concat([item.text || ''])
      .join(' ')
      .toLowerCase();
  }

  function matches(item, tokens) {
    var hay = haystack(item);
    return tokens.every(function (token) { return hay.indexOf(token) !== -1; });
  }

  function render(query) {
    var tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
    var active = tokens.length > 0;
    if (clear) clear.hidden = !active;
    defaults.forEach(function (node) { node.hidden = active; });
    if (!active) {
      results.hidden = true;
      results.innerHTML = '';
      if (status) status.textContent = idleStatus;
      return;
    }
    load().then(function (items) {
      var found = items.filter(function (item) { return matches(item, tokens); });
      results.hidden = false;
      results.innerHTML = found.length
        ? found.map(card).join('')
        : '<p class="empty-state">' + escapeHtml(fmt(copy.noMatch, [query])) + '</p>';
      if (status) {
        status.textContent = found.length
          ? fmt(found.length === 1 ? copy.matchOne : copy.matchMany, [found.length, query])
          : fmt(copy.none, [query]);
      }
    });
  }

  input.addEventListener('input', function () { render(input.value.trim()); });
  input.addEventListener('search', function () { render(input.value.trim()); });
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    render(input.value.trim());
  });
  if (clear) {
    clear.addEventListener('click', function () {
      input.value = '';
      render('');
      input.focus();
    });
  }
  // Open the data only once someone actually searches.
  input.addEventListener('focus', load, { once: true });
})();
