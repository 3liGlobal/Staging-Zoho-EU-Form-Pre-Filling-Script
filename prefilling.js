console.log("testing-1");
 
document.addEventListener("DOMContentLoaded", function () {
    var checkIframe = setInterval(function () {
        const iframe = document.getElementById('iframe');
        if (iframe) {
            let currentLocation = window.location.href.split('#')[0];
            let urlParams = new URL(currentLocation).searchParams;
 
            const utmMedium = urlParams.get('utm_medium');
            const utmSource = urlParams.get('utm_source');
            let attempts = 0;
            let maxAttempts = 10; // Number of times to retry sending the message
 
            function sendMessage() {
                if (attempts >= maxAttempts) {
                    clearInterval(checkIframe);
                    console.error("Max attempts reached. Message not acknowledged.");
                    return;
                }
 
                console.log("Attempting to send message:", attempts + 1);
                iframe.contentWindow.postMessage({ utm_medium: utmMedium, utm_source: utmSource }, '*');
                attempts++;
            }
 
            iframe.onload = function () {
                console.log("Iframe loaded");
                sendMessage();
 
                // Set up an interval to retry sending the message every 1 second
                var retryInterval = setInterval(function () {
                    sendMessage();
                }, 1000);
 
                // Listen for acknowledgment from the child page
                window.addEventListener('message', function (event) {
                    if (event.data.acknowledged) {
                        console.log("Message acknowledged by child page");
                        clearInterval(retryInterval); // Stop retrying when acknowledged
                    }
                });
            };
 
            clearInterval(checkIframe);
        } else {
            console.error("Iframe is null.");
        }
    }, 500);
});