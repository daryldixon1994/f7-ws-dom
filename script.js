// selectors
// select one element:
// select element by id: document.getElementById("idName")
// const test = document.getElementById("testId"); //element node
// console.log(test);
// select one element with query selector
// const test2 = document.querySelector("#testId");
// console.log(test2);

let classH1 = document.querySelector(".test"); //element node
// console.log(classH1)

// select multiple elements
// select elements by tagName: document.getElementsByTagName("")

let btns = document.getElementsByTagName("button"); //HTMLCollection : like-array
// document.getElementByClassName("classname"), document.getElementByName("name") : HTMLCollection

let headTitles = document.getElementsByClassName("test"); //HTMLCollection
let headsNames = document.getElementsByName("h-1"); //NodeList
// console.log(headsNames);

// diff between HTMLCollection (live)  NodeList (static)
let colors = document.getElementsByClassName("color"); //HTMLCollection
let colorsList = document.querySelectorAll(".color"); // NodeList

console.log(colors);
console.log(colorsList);

const newLi = document.createElement("li"); //<li></li>
newLi.textContent = "Red"; //<li>Red</li>
newLi.setAttribute("class", "color")
const colorsLists = document.getElementById("colors-list");

colorsLists.appendChild(newLi);
let colorsList2 = document.querySelectorAll(".color"); 
console.log(colors);
console.log(colorsList2);