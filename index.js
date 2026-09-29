
// DOM REFERENCES
const body = document.querySelector("body");
const footer = document.getElementById("footer");
const shareButton = document.getElementById("share-button");
const linksBar = document.getElementById("links-bar");
const shareIconWrapper = document.getElementById("share-icon-wrapper");

// APPEND icon-share.svg
fetch("./images/icon-share.svg")
  .then((response) => response.text())
  .then((data) => {
    // make the string of xml code into adoptable DOM node
    const domParser = new DOMParser();
    const xmlDoc = domParser.parseFromString(data, "text/xml");
    const shareIconSVG = xmlDoc.querySelector("svg");
    shareIconSVG.setAttribute("class", "share-icon");

    // replace the <img> with <svg> within the #share-button and #share-icon-wrapper
    shareButton.replaceChild(shareIconSVG, shareButton.firstElementChild);
    const shareIconSVGClone = shareIconSVG.cloneNode(true);
    shareIconWrapper.replaceChild(
      shareIconSVGClone,
      shareIconWrapper.firstElementChild
    );
  })
  .catch((error) => {
    console.error("Append icon-share.svg error:", error);
  });

// SHOW OR HIDE LINKS BAR
const showOrHideLinksBar = (event) => {
  // When #share-button is 'clicked'
  if (
    event.target.closest("#share-button") &&
    !shareButton.classList.contains("clicked")
  ) {
    // show
    linksBar.classList.remove("no-display");
    setTimeout(() => {
      linksBar.classList.remove("hidden");
      linksBar.classList.add("visible");
      shareButton.classList.add("clicked");
    }, 150);
  }
  // When #links-bar is not 'clicked'
  else if (
    !event.target.closest("#links-bar") &&
    shareButton.classList.contains("clicked")
  ) {
    // wait for the roll down transition to finish before hiding
    setTimeout(() => {
      linksBar.classList.add("hidden");
      linksBar.classList.add("no-display");
    }, 150);
    // hide
    linksBar.classList.remove("visible");
    shareButton.classList.remove("clicked");
  }
};
body.addEventListener("click", showOrHideLinksBar);
