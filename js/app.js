let DarkModeBtn = document.querySelector(".navbar .container button.allBtn");
let body = document.querySelector("body");
let moonBtn = document.querySelector(".MoonIcon")

function darkModeOnOff() {
    body.classList.toggle("darkmode") 
}

DarkModeBtn.addEventListener('click',darkModeOnOff);

let sideBar = document.querySelector(".sidebar");
let menuBtn = document.querySelector(".navbar .container .menuBtn");
let CloseBtn = document.querySelector(".sidebar .closeBtn")

function OpenSideBar(){
sideBar.classList.add("active")
}

menuBtn.addEventListener('click',OpenSideBar)

function CloseSideBar(event){
  
    if(  event.target.classList.contains("sidebar") ||
   event.target.classList.contains("bi-x-lg") )
   {
    sideBar.classList.remove("active")
   }
    
}

CloseBtn.addEventListener('click',CloseSideBar)
sideBar.addEventListener('click',CloseSideBar)

let mouseMoveFiled = document.querySelector(".mouseMove-test-field")
let curser = document.querySelector(".curser")
let curserSm1 = document.querySelector(".curser-sm-1")
let curserSm2 = document.querySelector(".curser-sm-2")
let curserSm3 = document.querySelector(".curser-sm-3")


function cursorMove(event) {
  let left = event.pageX;
  let top = event.pageY;
  curser.style.top = `${top}px`;
  curser.style.left = `${left}px`;
  curserSm1.style.top = `${top}px`;
  curserSm1.style.left = `${left}px`;
    curserSm2.style.top = `${top}px`;
  curserSm2.style.left = `${left}px`;
    curserSm3.style.top = `${top}px`;
  curserSm3.style.left = `${left}px`;
}
mouseMoveFiled.addEventListener("mousemove", cursorMove);


let faqs = document.querySelectorAll(".faq");

function toggleFAQ(event) {
  for (faq of faqs) {
    faq.classList.remove("active");
  }

  event.currentTarget.classList.add("active");
}

for (faq of faqs) {
  faq.addEventListener("click", toggleFAQ);
}