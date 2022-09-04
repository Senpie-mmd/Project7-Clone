const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("mouseover", ()=> left.style ="flex: 4;");
left.addEventListener("mouseleave", ()=> left.style ="flex: 1;");

right.addEventListener("mouseover", ()=> right.style ="flex: 4;");
right.addEventListener("mouseleave", ()=> right.style ="flex: 1;");