# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon



### Links

- Solution URL: [https://github.com/ericraycodes/article-preview-component-master](https://github.com/ericraycodes/article-preview-component-master)
- Live Site URL: [https://ericraycodes.github.io/article-preview-component-master](https://ericraycodes.github.io/article-preview-component-master)

## My process

### Built with

- Semantic HTML5 markup
- SASS
- Flexbox
- Mobile-first workflow
- JavaScript


### What I learned

I tried to layout *narrow* and *wider* screen simultaneously. I did it because I could not fix a bug when my mobile design was ok and I was styling for a *desktop* design.

I learned to attach an event-listener to the whole body and only add dynamics to selected event-targets.

I learned about `event.target.closest()` to find the nearest specified ancestor of event-targeted children elements.

I learned that you can only use a *DOM node* once for one location in the DOM. I used `document.cloneNode()` to clone the node and use for another area of the DOM.

Since older browsers do not support CSS `polygon()` to create complex shapes, I decided to make fallback shapes for the said browsers. And I used `@supports` to apply such CSS tools for browsers that supports modern CSS styles.

I learned about CSS `width: fit-content`.

### Continued development

- _Mobile-first Design_
- Flexbox

## Author

- Frontend Mentor - [@ericraycodes](https://www.frontendmentor.io/profile/ericraycodes)
- GitHub - [ericraycodes](https://github.com/ericraycodes)
