/* InformationHub — the KO | EN toggle.
   The click always navigates to the counterpart URL (a shared link must open the
   language it points at), so this only records the reader's choice; nothing is
   redirected on a later visit. */
(function () {
  'use strict';

  var KEY = 'hd2-info-lang';

  document.addEventListener('click', function (event) {
    var link = event.target && event.target.closest ? event.target.closest('[data-lang-link]') : null;
    if (!link) return;
    try {
      window.localStorage.setItem(KEY, link.getAttribute('data-lang-link'));
    } catch (error) {
      /* private mode / storage disabled — the link still works */
    }
  });
})();
