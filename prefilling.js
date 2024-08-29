document.addEventListener('DOMContentLoaded', function () {
    const iframe = document.getElementById('iframe');
    const urlParams = new URLSearchParams(iframe.src.split('?')[1]);
    const utmMedium = urlParams.get('utm_medium');
    const utmSource = urlParams.get('utm_source');

    iframe.onload = function () {
        iframe.contentWindow.postMessage({ utm_medium: utmMedium, utm_source: utmSource }, '*');
    };
});