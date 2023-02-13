const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const textPattern = /^[a-zA-Z]{6,12}$/;
const text = document.querySelector("#username");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(text.value);
  console.log(form.username.value);
});

// const username = "sheh";
// const pattern = /^[a-z]{6,}$/;

// const result = pattern.test(username);
// console.log(result);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   // Validation
//   const text = form.username.value;
//   const textPattern = /^[a-zA-Z]{6,12}$/;

//   // .search() method can also be used
//   if (textPattern.test(text)) {
//     feedback.textContent = "Input is Valid";
//   } else {
//     feedback.textContent =
//       "Username must contain alphabetical letters and must be 6 to 12 characters long";
//   }
// });

form.username.addEventListener("keyup", (e) => {
  // console.log(e.target.value, form.username.value);
  console.log(e.shiftKey);
  if (textPattern.test(e.target.value)) {
    form.username.setAttribute("class", "success");
  } else {
    form.username.setAttribute("class", "error");
  }
});
