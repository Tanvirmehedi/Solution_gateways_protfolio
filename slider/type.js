var obj = [
  "Welcome TO <span style='color:red;'>Solution Gateways</span>",
  "<span style='color:#F1652A;'>We are Developing </span> ",
  "<span style='color:red;'>Website </span> /<span style='color:yellow;'>WordPress</span> /Seo Stuff",
  "<span style='color:#32A7DB;'>What Do You Like!?</span> "
];

let count = 0;

var title = document.querySelector("h1");

title.addEventListener("animationstart", type, false);
title.addEventListener("animationiteration", type, false);

function type(ev) {
  if (ev.animationName !== "typing") return;
  this.style.animationTimingFunction = `steps(${obj[count].length})`;
  this.innerHTML = obj[count];

  count++;
  if (count === obj.length) count = 0;
}
