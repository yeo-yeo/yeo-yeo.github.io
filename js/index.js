window.onscroll = function() {
  scrollFunction();
  navLinkActivate();
};

window.addEventListener("load", imageAnimate);
window.addEventListener("scroll", imageAnimate);
window.addEventListener("resize", imageAnimate);

//function to open nav bar on small screens
function toggleNav() {
  var dropdown = document.getElementById("dropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

//function to close small-screen nav bar by clicking anywhere
document.getElementById("main").addEventListener("click", function() {
  var dropdown = document.getElementById("dropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  }
});

//function to extend/shrink nav bar on larger pages
function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("navbarbuttons").style.padding = "10px 10px";
    document.getElementById("navbarbuttons").style.fontSize = "18px";
  } else {
    document.getElementById("navbarbuttons").style.padding = "60px 10px";
    document.getElementById("navbarbuttons").style.fontSize = "28px";
  }
}

//functions to set active class for nav bar sections
function isElemInView(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top <=
      (window.innerHeight || document.documentElement.clientHeight) / 2 &&
    rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) / 2
  );
}

const sections = document.getElementsByClassName("background");
const links = document.getElementById("navbarbuttons").children;
function navLinkActivate() {
  for (var i = 0; i < sections.length; i++) {
    if (isElemInView(sections[i])) {
      links[i].classList.add("active");
      var scrolled = 10 + i * 20;
      document.getElementById("myBar").style.width = scrolled + "%";
    } else {
      links[i].classList.remove("active");
    }
  }
}

//name typing thing on start page
var add;
var messageFinished = ["H", "i", ",", " ", "I", "'", "m", " "];
var message = [];
var nameField = document.getElementById("myname");
var letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var nameArr = [];
var change;
var changeLettersActive = 0;
var finishedName = ["G", "i", "l", "l", "i", "a", "n"];

function showName() {
  if (changeLettersActive == 0) {
    add = setTimeout(addLetters, 100);
  } else {
    change = setTimeout(changeLetters, 100);
  }
}

function addLetters() {
  if (message.length < messageFinished.length) {
    message.push(messageFinished[message.length]);
    nameField.innerText = message.join("") + nameArr.join("");
    showName();
  } else if (nameArr.length < 7) {
    nameArr.push(letters[Math.floor(Math.random() * letters.length)]);
    nameField.innerText = message.join("") + nameArr.join("");
    showName();
  } else {
    changeLettersActive = 1;
    clearTimeout(add);
    showName();
  }
}

var changeCount = 0;
var j = 1;

function changeLetters() {
  if (changeCount < 10) {
    for (var i = 0; i < 7; i++) {
      nameArr[i] = letters[Math.floor(Math.random() * letters.length)];
    }
    nameField.innerText = message.join("") + nameArr.join("");
    changeCount++;
    showName();
  } else {
    nameArr = ["G", "i", "l", "l", "i", "a", "n"];
    for (var i = j; i < 7; i++) {
      nameArr[i] = letters[Math.floor(Math.random() * letters.length)];
    }
    nameField.innerText = message.join("") + nameArr.join("");
    j++;
    if (j < 9) {
      showName();
    } else {
      clearTimeout(change);
    }
  }
}

//fn to check if images are mostly in view to start animation effect
function isElemInView(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.top + rect.height * 0.75 <=
      (window.innerHeight || document.documentElement.clientHeight)
  );
}

/* start animation effect */
const images = document.querySelectorAll(".aboutmepic");
const logos = document.querySelectorAll(".logo");

function imageAnimate() {
  for (var i = 0; i < images.length; i++) {
    if (isElemInView(images[i])) {
      images[i].classList.add("in-view");
    } else {
      images[i].classList.remove("in-view");
    }
  }
  for (var i = 0; i < logos.length; i++) {
    if (isElemInView(logos[i])) {
      logos[i].classList.add("in-view");
    } else {
      logos[i].classList.remove("in-view");
    }
  }
}

window.onload = showName();
