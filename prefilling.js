console.log("testing-1")
var checkIframe = setInterval(function () {
    console.log("testing-2")
    const iframe = document.getElementById('iframe');
    if (iframe) {
        var iframeWindow = iframe.contentWindow;
        if (iframeWindow) {
            iframeWindow.postMessage({ utm_medium: "utmMedium", utm_source: "utmSource" }, "*");
            clearInterval(checkIframe);
        } else {
            console.error("IFrame contentWindow is null.");
        }
    }
}, 500)
