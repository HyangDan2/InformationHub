/* InformationHub — landing page search over /search.json (client side, no server) */
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
    return (
      '<article class="brief-card" data-briefing data-session="' + escapeHtml(item.session) + '">' +
        '<a class="brief-link" href="' + base + String(item.url).replace(/^\//, '') + '">' +
          '<span class="brief-meta">' +
            '<span class="brief-channel">' + escapeHtml(item.channel) + '</span>' +
            '<span class="session-badge is-' + escapeHtml(item.session) + '">' + escapeHtml(item.sessionLabel) + '</span>' +
            '<time datetime="' + escapeHtml(item.date) + '">' + escapeHtml(item.dateLabel) + '</time>' +
          '</span>' +
          '<span class="brief-title">' + escapeHtml(item.title) + '</span>' +
          '<span class="brief-summary">' + escapeHtml(item.summary) + '</span>' +
          '<span class="brief-foot">' +
            '<span>' + item.tickers.length + ' stocks</span>' +
            '<span class="brief-arrow" aria-hidden="true">↗</span>' +
          '</span>' +
        '</a>' +
      '</article>'
    );
  }

  function haystack(item) {
    return [item.title, item.summary, item.date, item.dateLabel, item.sessionLabel, item.sessionKorean, item.channel]
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
        : '<p class="empty-state">No briefing matches “' + escapeHtml(query) + '”. Try a ticker, a company name, or a date.</p>';
      if (status) {
        status.textContent = found.length
          ? found.length + (found.length === 1 ? ' briefing matches' : ' briefings match') + ' “' + query + '”'
          : 'No briefings match “' + query + '”';
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
