let _paq = (window._paq = window._paq || []);
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);
(function () {
  let u = "https://statistics.helo-system.de/";
  _paq.push(["setTrackerUrl", u + "rainbow"]);
  _paq.push(["setSiteId", "3"]);
  let d = document,
    g = d.createElement("script"),
    s = d.getElementsByTagName("script")[0];
  g.async = true;
  g.src = u + "unicorn";
  s.parentNode.insertBefore(g, s);
})();
