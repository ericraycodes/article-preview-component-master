// check if DOM has loaded
const body = document.querySelector("body");
console.log("DOM body:", Boolean(body));

// DOM REFERENCES
const shareButton = document.getElementById("share-button");
const linksBar = document.getElementById("links-bar");
const shareIconWrapper = document.getElementById("share-icon")

// fetch and append share icon
fetch("./images/icon-share.svg")
  .then((response) => response.text())
  .then((data) => {
    // for the share button
    shareButton.removeChild(shareButton.firstElementChild);
    shareButton.innerHTML = data;
    // share icon
    shareIconWrapper.removeChild(shareIconWrapper.firstElementChild);
    shareIconWrapper.innerHTML = data;
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

// Show to Users the social-links widget
const showLinksBar = (e) => {
  // stop bubbling up
  e.stopPropagation();
  //   console.log("clicked:", e.target);
  linksBar.classList.remove("hidden");
  linksBar.classList.remove("links-bar-mobile-roll-down");
  linksBar.classList.add("links-bar-mobile-roll-up");
  shareButton.classList.add("clicked");
};
shareButton.addEventListener("click", showLinksBar);

// Hide the social links widget
const hideLinksBar = (e) => {
  console.log("clicked:", e.target);
  // only when #links-bar is not user-interacted
  if (e.target.closest("#links-bar") !== linksBar) {
    linksBar.classList.remove("links-bar-mobile-roll-up");
    linksBar.classList.add("links-bar-mobile-roll-down");
    shareButton.classList.remove("clicked");
    // wait for the roll-down transition before hiding the element
    setTimeout(() => {
      linksBar.classList.add("hidden");
    }, 500);
  }
};
body.addEventListener("click", hideLinksBar);
