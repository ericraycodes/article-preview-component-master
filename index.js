// check if DOM has loaded
const body = document.querySelector("body");
console.log("DOM body:", Boolean(body));


// DOM REFERENCES
const shareButton = document.getElementById("share-button");
const linksBar = document.getElementById("links-bar");


// Show the social-links widget
const onShareButtonClicked = (e) => {
    // console.log(e);
    console.log("clicked:", e.target.id);
    linksBar.classList.toggle("hidden");
    linksBar.classList.toggle("links-bar-mobile-roll-up");
};
shareButton.addEventListener("click", onShareButtonClicked);