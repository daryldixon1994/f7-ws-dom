const btn = document.getElementById("btn");
function generateColors() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
console.log(generateColors())
// btn.addEventListener("click", function () {
//   const bgColorBtn = getComputedStyle(btn).backgroundColor;
//   btn.parentElement.style.backgroundColor = bgColorBtn;
//   btn.style.backgroundColor = generateColors();
// });

const colorInput = document.getElementById("color-input");
// const colorInput = document.querySelector("input[type=color]");
// btn.addEventListener("click", function () {
//   console.log(colorInput.value);
//   btn.parentElement.parentElement.style.backgroundColor = colorInput.value;
// });
// colorInput.addEventListener("change", function (event) {
//   console.log(event.target.value);
//   colorInput.parentElement.parentElement.style.backgroundColor =
//     event.target.value;
// });

// web api method, localStorage, sessionStorage, coockies...
// execute certain statements every range of time
setInterval(function () {
    let r = generateColors();
    console.log(r)
  document.body.style.backgroundColor = r;
}, 300);
// setTimeout(function () {
//   console.log("ok");
// }, 5000);
