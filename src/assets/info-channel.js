/* InformationHub · China AI — the Pre-market / Close filter over the daily archive */
(function () {
  'use strict';

  var bar = document.querySelector('.filter-bar');
  var archive = document.querySelector('[data-archive]');
  if (!bar || !archive) return;

  var tabs = Array.prototype.slice.call(bar.querySelectorAll('[data-filter]'));
  var status = bar.querySelector('[data-filter-status]');
  var rows = Array.prototype.slice.call(archive.querySelectorAll('[data-session]'));
  var days = Array.prototype.slice.call(archive.querySelectorAll('[data-day-group]'));
  var total = rows.length;

  function labelFor(filter) {
    if (filter === 'open') return 'Pre-market';
    if (filter === 'close') return 'Close';
    return 'All';
  }

  function apply(filter, pushHash) {
    var shown = 0;
    rows.forEach(function (row) {
      var visible = filter === 'all' || row.getAttribute('data-session') === filter;
      row.hidden = !visible;
      if (visible) shown += 1;
    });
    days.forEach(function (day) {
      var any = day.querySelector('[data-session]:not([hidden])');
      day.hidden = !any;
    });
    tabs.forEach(function (tab) {
      var active = tab.getAttribute('data-filter') === filter;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    if (status) {
      status.textContent = filter === 'all'
        ? total + ' briefings'
        : shown + ' of ' + total + ' briefings · ' + labelFor(filter);
    }
    if (pushHash) {
      var hash = filter === 'all' ? '' : '#' + filter;
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search + hash);
      }
    }
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      apply(tab.getAttribute('data-filter'), true);
    });
  });

  var initial = (window.location.hash || '').replace('#', '');
  if (initial !== 'open' && initial !== 'close') initial = 'all';
  apply(initial, false);
})();
