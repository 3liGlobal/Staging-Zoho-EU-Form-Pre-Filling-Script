console.log("testing-1");

document.addEventListener("DOMContentLoaded", function () {
  var checkIframe = setInterval(function () {
    const iframe = document.getElementById("iframe");
    if (iframe) {
      let currentLocation = window.location.href.split("#")[0];
      let urlParams = new URL(currentLocation).searchParams;

      const utmMedium = urlParams.get("utm_medium");
      const utmCampaign = urlParams.get("utm_campaign");

      console.log(utmMedium, utmCampaign);

      iframe.contentWindow.postMessage(
        { utm_medium: utmMedium, utm_campaign: utmCampaign },
        "*"
      );

      clearInterval(checkIframe);
    } else {
      console.error("IFrame is null.");
    }
  }, 500);
});
