// check if DOM has loaded
const body = document.querySelector("body");
console.log("DOM body:", Boolean(body));

// DOM REFERENCES
const footer = document.getElementById("footer");
const shareButton = document.getElementById("share-button");
const templateLinksBar = document.getElementById("template-links-bar");
let linksBar;
let shareIconWrapper;

// APPEND SVG ICONS
fetch("./images/icon-share.svg")
  .then((response) => response.text())
  .then((data) => {
    // make the string of xml code into adoptable DOM node
    const domParser = new DOMParser();
    const xmlDoc = domParser.parseFromString(data, "text/xml")
    const shareIconSVG = xmlDoc.querySelector("svg");

    // replace the <img> with <svg> wihthin the #share-button
    shareButton.replaceChild(shareIconSVG, shareButton.firstElementChild);
    
    // replace the <img> with <svg> wihthin the #share-icon-wrapper
    const shareIconWrapper = templateLinksBar.content.querySelector("#share-icon-wrapper");
    const shareIconSVGClone = shareIconSVG.cloneNode(true);
    shareIconWrapper.replaceChild(shareIconSVGClone, shareIconWrapper.firstElementChild)
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

// SHOW OR HIDE LINKS BAR
const showOrHideLinksBar = (event) => {
  console.log("clicked:", event.target);

  // append links bar at first event
  if (!linksBar) {
    // append cloned #links-bar to the dom
    const templateLinksBarClone = templateLinksBar.content.cloneNode(true);
    footer.appendChild(templateLinksBarClone);

    // reference the #links-bar in memory
    linksBar = document.getElementById("links-bar");
  }

  // When #share-button is 'clicked' and on mobile/tablet screenwidth
  if (
    event.target.closest("#share-button") && 
    window.innerWidth < 960
  ) {
    // mobile placement
    linksBar.classList.add("links-bar-mobile");
    // show
    linksBar.classList.add("visible");
    // roll up
    linksBar.classList.remove("links-bar-mobile-roll-down");
    linksBar.classList.add("links-bar-mobile-roll-up");
  }
  // When #links-bar is not 'clicked' and on mobile/tablet screenwidth
  else if (
    !event.target.closest("#links-bar") && 
    window.innerWidth < 960
  ) {
    console.log("closest", event.target.closest("#links-bar"));
    // wait for the roll down transition to finish before hiding
    setTimeout(250, () => {
      linksBar.classList.remove("visible");
    });
    // roll down
    linksBar.classList.add("links-bar-mobile-roll-down");
    linksBar.classList.remove("links-bar-mobile-roll-up");
  }
};
body.addEventListener("click", showOrHideLinksBar);
