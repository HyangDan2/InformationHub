/* InformationHub — the All / Daily / Spotlight filter on the China AI archive.
   Rows carry data-kind; a day group hides when none of its rows match. */
(function () {
  'use strict';

  var bar = document.querySelector('[data-kind-filter]');
  if (!bar) return;

  var buttons = Array.prototype.slice.call(bar.querySelectorAll('button[data-kind]'));
  var rows = Array.prototype.slice.call(document.querySelectorAll('[data-archive] .brief-row[data-kind]'));
  var days = Array.prototype.slice.call(document.querySelectorAll('[data-archive] .archive-day'));
  var empty = document.querySelector('[data-kind-empty]');
  if (!buttons.length || !rows.length) return;

  function apply(kind) {
    var shown = 0;
    rows.forEach(function (row) {
      var match = kind === 'all' || row.getAttribute('data-kind') === kind;
      row.hidden = !match;
      if (match) shown += 1;
    });
    days.forEach(function (day) {
      var any = Array.prototype.some.call(day.querySelectorAll('.brief-row[data-kind]'), function (row) { return !row.hidden; });
      day.hidden = !any;
    });
    buttons.forEach(function (button) {
      button.setAttribute('aria-pressed', button.getAttribute('data-kind') === kind ? 'true' : 'false');
    });
    if (empty) empty.hidden = shown > 0;
    try { history.replaceState(null, '', kind === 'all' ? location.pathname : location.pathname + '?kind=' + kind); } catch (e) {}
  }

  bar.addEventListener('click', function (event) {
    var button = event.target.closest('button[data-kind]');
    if (!button) return;
    apply(button.getAttribute('data-kind'));
  });

  var initial = 'all';
  try {
    var param = new URLSearchParams(location.search).get('kind');
    if (param === 'daily' || param === 'spotlight') initial = param;
  } catch (e) {}
  apply(initial);
})();
