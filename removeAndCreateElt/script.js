// insert/create new list item

const newLi = document.createElement("li");
const parentUl = document.querySelector("ul");

// newLi.textContent = "This is the new item";

// <li>This is the item </li>
// console.log(parentUl.children);
// console.log(parentUl.childNodes);
// parentUl.children[1].before(newLi);
// parentUl.children[1].remove();
// const closeBtns = document.getElementsByClassName("fa-x");
// const btnsArr = Array.from(closeBtns);
// console.log(btnsArr);

// btnsArr[0].addEventListener("click", function () {
//   btnsArr[0].parentElement.remove();
// });

// btnsArr[1].addEventListener("click", function () {
//   btnsArr[1].parentElement.remove();
// });

// btnsArr[2].addEventListener("click", function () {
//   btnsArr[2].parentElement.remove();
// });

// for (const btn of btnsArr) {
//   btn.addEventListener("click", function () {
//     btn.parentElement.remove();
//   });
// }

// mouse events :
// mousedown
// parentUl.addEventListener("mousedown", function () {
//   parentUl.style.background = "red";
// });

// mouseenter
// parentUl.addEventListener("mouseenter", function () {
//     this.style.backgroundColor = "red";
// });
// mouseleave
// parentUl.addEventListener("mouseleave", function () {
//   console.log("mouse leave");
// });
// parentUl.addEventListener("mouseout", function () {
//   console.log("mouse out");
// });

// parentUl.addEventListener("mousemove", function () {
//   console.log("mouse leave");
// });

// parentUl.addEventListener("mouseover", function () {
//   console.log("mouse over");
// });

// parentUl.addEventListener("mouseup", function () {
//   console.log("mouse over");
// });

let secondItem = document.getElementById("second-item");
console.dir(secondItem);
// nextElementSibling => next element/next tag
// previousElementSibling => previous element/previous tag

// nextSibling => next node : comment/text
// previousSibling => previous node : comment/text
