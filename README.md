# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

- Build out the project to the designs provided

### Screenshot

# Mobile Preview 

![screenshot](https://github.com/romila2003/Interactive-Rating-Component/blob/main/Mobile%20preview.PNG)

# Mobile Preview - active

![screenshot](https://github.com/romila2003/Interactive-Rating-Component/blob/main/Mobile%20preview%20-%20active.PNG)

# Desktop Preview 

![screenshot](https://github.com/romila2003/Interactive-Rating-Component/blob/main/Desktop%20preview.PNG)

# Mobile Preview - active 

![screenshot](https://github.com/romila2003/Interactive-Rating-Component/blob/main/Desktop%20preview%20-%20active.PNG)

### Links

 - Source code: [https://github.com/romila2003/Interactive-Rating-Component](https://github.com/romila2003/Interactive-Rating-Component)
 - Live website: [https://romila-interactive-rating-component.netlify.app/](https://romila-interactive-rating-component.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Plain CSS
- Flexbox
- Mobile-first workflow
- Vanilla Javascript

### What I learned

This was a fun and challenging project and took quite a while to complete this because of the Javascript aspect, especially because I used the radio buttons and did not know how to make the buttons functional so that I could use the value and input it within the Thank You component. Once I realised the issue with my code, when looking at @stijnmeershoek, I understood how to fix my code and make it functional. The design of the card was also pretty simple and straightforward therefore I did not require too much help. Styling the radio buttons was a bit of a challenge but I managed to make the radio buttons look like ordinary buttons that are functional.

Javascript - Rating: 

```javascript

const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thanks-container");
const submitBtn = document.getElementById("submit");
const outputRating = document.getElementById("rating");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  function thanks() {
    thanksContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
  }

  let rating = document.querySelector('.btn:checked');
  if(rating.value === 0) {
    return;
  } else {
    thanks();
    outputRating.innerHTML = rating.value;
  }
});

```

### Continued development

For future developments, I should focus on building web pages to work on my HTML and CSS skills, particularly resizing the images. Also, I should keep learning new javascript concepts and utilising my knowledging in future projects.


## Author

- Frontend Mentor - [@romila2003](https://www.frontendmentor.io/profile/romila2003)
- Twitter - [@romila003](https://www.twitter.com/romila003)

## Acknowledgments

I was inspired by [@stijnmeershoek](https://www.frontendmentor.io/profile/stijnmeershoek) for assigning the `rating` element to the radio buttons when they are clicked/`:checked`. Majority of the Javascript was complete prior to finding @stijnmeershoek Interactive Rating Component however her project helped me to realise what was missing in my JS.
