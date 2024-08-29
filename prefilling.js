document.addEventListener("DOMContentLoaded", function () {
    var checkIframe = setInterval(function(){
        const iframe = document.getElementById('iframe');
        if (iframe) {
            var iframeWindow = iframe.contentWindow;
            if (iframeWindow) {
                iframeWindow.postMessage({ utm_medium: "utmMedium", utm_source: "utmSource" }, "*");
                clearInterval(checkIframe);
            }else{
                console.error("IFrame contentWindow is null.");
            }
        }
    }, 500)
});
 