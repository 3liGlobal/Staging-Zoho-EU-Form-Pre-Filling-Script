console.log("testing-1")
document.addEventListener("DOMContentLoaded", function () {
    console.log("testing-2")
    var checkIframe = setInterval(function () {
        console.log("testing-3")
        const iframe = document.getElementById('iframe');
        if (iframe) {
            console.log("testing-4")
            var iframeWindow = iframe.contentWindow;
            if (iframeWindow) {
                console.log("testing-5")
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