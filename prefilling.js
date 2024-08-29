document.addEventListener("DOMContentLoaded", function () {
    var checkIframe = setInterval(function () {
        const iframe = document.getElementById('iframe');
        if (iframe) {
            var iframeWindow = iframe.contentWindow;
            if (iframeWindow) {
                let currentLocation = window.location.href;
                currentLocation = new URLSearchParams(currentLocation.split('?')[1]);
                const utmMedium = currentLocation.get('utm_medium');
                const utmSource = currentLocation.get('utm_source');
                iframeWindow.postMessage({ utm_medium: utmMedium, utm_source: utmSource }, "*");
                clearInterval(checkIframe);
            } else {
                console.error("IFrame contentWindow is null.");
            }
        } else {
            console.error("IFrame is null.");
        }
    }, 500)
});