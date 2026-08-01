(function () {
    'use strict';

    document.querySelectorAll('[data-product-name]').forEach(element => {
        element.textContent = SiteConfig.productName;
    });

    document.querySelectorAll('[data-support-email]').forEach(element => {
        const configured = SiteConfig.supportEmail && !SiteConfig.supportEmail.endsWith('.invalid');
        element.textContent = configured ? SiteConfig.supportEmail : 'the support address listed in the Chrome Web Store';
        if (element.tagName === 'A') {
            if (configured) {
                element.href = `mailto:${SiteConfig.supportEmail}`;
            } else {
                element.removeAttribute('href');
            }
        }
    });

    document.querySelectorAll('[data-store-link]').forEach(element => {
        if (SiteConfig.chromeWebStoreUrl) {
            element.href = SiteConfig.chromeWebStoreUrl;
            element.hidden = false;
        } else {
            element.hidden = true;
        }
    });

    const year = document.querySelector('[data-current-year]');
    if (year) year.textContent = String(new Date().getFullYear());
})();