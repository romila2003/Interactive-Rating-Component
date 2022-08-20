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
