console.log("testing-1");
document.addEventListener("DOMContentLoaded", function () {
    var checkIframe = setInterval(function () {
        const iframe = document.getElementById('iframe');
        if (iframe) {
            var iframeWindow = iframe.contentWindow;
            if (iframeWindow) {
                let currentLocation = window.location.href.split('#')[0];
                let urlParams = new URL(currentLocation).searchParams;

                const utmMedium = urlParams.get('utm_medium');
                const utmSource = urlParams.get('utm_source');

                console.log(utmMedium, utmSource)

                iframeWindow.postMessage({ utm_medium: utmMedium, utm_source: utmSource }, "*");

                clearInterval(checkIframe);
            } else {
                console.error("IFrame contentWindow is null.");
            }
        } else {
            console.error("IFrame is null.");
        }
    }, 500);
});
