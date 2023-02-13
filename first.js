const wrapper = document.querySelector(".popup-wrapper");
const button = document.querySelector("button");
const close = document.querySelector(".close");

button.addEventListener("click", () => {
  wrapper.style.display = "block";
});

close.addEventListener("click", () => {
  wrapper.style.display = "none";
});

wrapper.addEventListener("click", () => {
  wrapper.style.display = "none";
});
