var typed = new Typed(".auto", {
  strings: ["MERN-Stack Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

let sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  alert("Click Ok to send the Message");
});

let links = document.querySelectorAll(".tab-links");
let contents = document.querySelectorAll(".tab-contents");
function opentab(arg) {
  for (link of links) {
    link.classList.remove("active-link");
  }
  for (content of contents) {
    content.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(arg).classList.add("active-tab");
}

let sun = document.querySelector(".fa-sun");
let moon = document.querySelector(".fa-moon");
let body = document.querySelector("body");
let lines = document.querySelectorAll(".line");
let navbar = document.querySelector(".navbar");
let inputs = document.querySelectorAll("input");
let textarea = document.querySelector("textarea");
let footer = document.querySelector(".copyright");
let arrow = document.querySelector(".fa-circle-up");
sun.addEventListener("click", () => {
  body.classList.add("color");
  sun.classList.add("invisible");
  moon.classList.add("visible");
  navbar.classList.add("navbarcolor");
  for (line of lines) {
    line.classList.add("lineStyle");
  }
  for (input of inputs) {
    input.classList.add("form-input");
  }
  textarea.classList.add("form-input");
  footer.classList.add("navbarcolor");
  arrow.classList.add("color");
});

moon.addEventListener("click", () => {
  body.classList.remove("color");
  sun.classList.remove("invisible");
  moon.classList.remove("visible");
  navbar.classList.remove("navbarcolor");
  for (line of lines) {
    line.classList.remove("lineStyle");
  }
  for (input of inputs) {
    input.classList.remove("form-input");
  }
  textarea.classList.remove("form-input");
  footer.classList.remove("navbarcolor");
  arrow.classList.remove("color");
});

let mode1 = document.querySelector(".mode1");
let mode2 = document.querySelector(".mode2");
sun.addEventListener("mouseenter", () => {
  mode1.classList.add("light");
});
sun.addEventListener("mouseleave", () => {
  mode1.classList.remove("light");
});

moon.addEventListener("mouseenter", () => {
  mode2.classList.add("light");
});
moon.addEventListener("mouseleave", () => {
  mode2.classList.remove("light");
});
