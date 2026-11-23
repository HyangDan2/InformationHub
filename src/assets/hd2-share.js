/* ==========================================================================
   HD2Lab · floating share (link) button
   --------------------------------------------------------------------------
   The bottom-right button (#hd2ShareToggle) shares the page you are reading:

     · navigator.share where the browser has it (phones; Safari; Chrome on
       Windows) with { title: document.title, url: location.href }, and a
       dismissed share sheet (AbortError) stays silent
     · everywhere else the URL goes to the clipboard — navigator.clipboard,
       with a document.execCommand('copy') fallback — and a toast confirms it

   The toast copy comes from the button's data-copied-label, which base.njk
   fills from the page language: KO "링크가 복사되었어요" / EN "Link copied".
   ========================================================================== */
(function () {
  'use strict';

  var button = document.getElementById('hd2ShareToggle');
  if (!button) return;

  var toast = document.getElementById('hd2Toast');
  var toastText = toast ? toast.querySelector('.hd2-toast-text') : null;
  var timer = null;

  function korean() {
    var lang = (document.documentElement.getAttribute('lang') || '').toLowerCase();
    return lang.indexOf('ko') === 0;
  }

  function copiedLabel() {
    var label = button.getAttribute('data-copied-label');
    if (label) return label;
    return korean() ? '링크가 복사되었어요' : 'Link copied';
  }

  function showToast(message) {
    if (!toast || !toastText) return;
    toastText.textContent = message;
    toast.classList.add('is-visible');
    if (timer) window.clearTimeout(timer);
    timer = window.setTimeout(function () {
      toast.classList.remove('is-visible');
      timer = null;
    }, 2400);
  }

  /* older browsers / insecure origins: the clipboard API needs https */
  function legacyCopy(text) {
    var area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.top = '-1000px';
    area.style.left = '0';
    area.style.opacity = '0';

    var copied = false;
    document.body.appendChild(area);
    try {
      area.select();
      area.setSelectionRange(0, text.length);
      copied = document.execCommand('copy');
    } catch (error) {
      copied = false;
    }
    document.body.removeChild(area);
    return copied;
  }

  function copyLink() {
    var url = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(
        function () {
          showToast(copiedLabel());
        },
        function () {
          if (legacyCopy(url)) showToast(copiedLabel());
        }
      );
      return;
    }
    if (legacyCopy(url)) showToast(copiedLabel());
  }

  button.addEventListener('click', function () {
    var url = window.location.href;

    if (navigator.share) {
      try {
        var shared = navigator.share({ title: document.title, url: url });
        if (shared && typeof shared.catch === 'function') {
          shared.catch(function (error) {
            if (error && error.name === 'AbortError') return;
            copyLink();
          });
        }
      } catch (error) {
        if (error && error.name === 'AbortError') return;
        copyLink();
      }
      return;
    }

    copyLink();
  });
})();
