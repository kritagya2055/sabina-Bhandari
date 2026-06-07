'use client';

import { useEffect } from 'react';

export default function NewsletterForm() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src*="flodesk"]');
    if (!existingScript) {
      (function(w, d, t, h, s, n) {
        // @ts-ignore
        w.FlodeskObject = n;
        var fn = function() {
          // @ts-ignore
          (w[n].q = w[n].q || []).push(arguments);
        };
        // @ts-ignore
        w[n] = w[n] || fn;
        var f = d.getElementsByTagName(t)[0];
        var v = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
        var sm = d.createElement(t);
        // @ts-ignore
        sm.async = true;
        // @ts-ignore
        sm.type = 'module';
        // @ts-ignore
        sm.src = h + s + '.mjs' + v;
        if (f && f.parentNode) f.parentNode.insertBefore(sm, f);
        var sn = d.createElement(t);
        // @ts-ignore
        sn.async = true;
        // @ts-ignore
        sn.noModule = true;
        // @ts-ignore
        sn.src = h + s + '.js' + v;
        if (f && f.parentNode) f.parentNode.insertBefore(sn, f);
      })(window, document, 'script', 'https://assets.flodesk.com', '/universal', 'fd');
    }

    // @ts-ignore
    if (window.fd) {
      // @ts-ignore
      window.fd('form', {
        formId: '6a1ffb8575eb5de873a98220',
        containerEl: '#fd-form-6a1ffb8575eb5de873a98220'
      });
    }
  }, []);

  return (
    <div id="fd-form-6a1ffb8575eb5de873a98220"></div>
  );
}
