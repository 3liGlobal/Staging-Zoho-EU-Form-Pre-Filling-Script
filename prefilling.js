document.addEventListener('DOMContentLoaded', function () {
    const iframe = document.getElementById('iframe');
    let currentLocation = window.location.href;
    debugger
    currentLocation = new URLSearchParams(currentLocation.split('?')[1]);
    console.log(currentLocation)
    const utmMedium = currentLocation.get('utm_medium');
    const utmSource = currentLocation.get('utm_source') ;

    iframe.onload = function () {
        iframe.contentWindow.postMessage({ utm_medium: utmMedium, utm_source: utmSource }, '*');
    };
});