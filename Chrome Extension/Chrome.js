let myTitle = [];
let myWebsite = [];
let numberAdd = [];
let appObj = {};

const title = document.getElementById("title");
const website = document.getElementById("website");
const add = document.getElementById("addRecord");
const total = document.getElementById("total");
const view = document.getElementById("viewRecord");
const display = document.getElementById("displayRecord");

total.innerHTML = `Total Applications = ${numberAdd.length}`;

add.addEventListener("click", function () {
  myTitle.push(title.value);
  myWebsite.push(website.value);
  numberAdd.push("+1");
  myTitle.forEach((key, i) => (appObj[key] = myWebsite[i]));

  total.innerHTML = `Total Applications = ${numberAdd.length}`;
});

view.addEventListener("click", function () {
  for (var key in appObj) {
    display.innerHTML = "Applied for " + key + " @ " + appObj[key];
  }
});
