// Navbar
const burger_btn = document.querySelector(".burger__btn button")
const nav = document.querySelector(".nav")

burger_btn.onclick = () =>{
  nav.classList.toggle("nav__show")
  burger_btn.classList.toggle("btn__close")
}

// Modal
const modal_btn = document.querySelector("#modal__btn")
const rm__close = document.querySelector(".rm__close")
const modal__close = document.querySelector(".modal__close")
const modal = document.querySelector(".result__modal")

let winWidth = window.innerWidth

modal_btn.onclick = () =>{
  modal.classList.add("result__modal__open")
  if (winWidth < 800) {
    document.body.style = "overflow: hidden"
  } else {
    document.body.style = "overflow: hidden; width:calc(100% - 0.4em);"
  }
  
}

function modalClose() {
  modal.classList.remove("result__modal__open")
  document.body.style = "overflow: visible"
}

rm__close.onclick = modalClose
modal__close.onclick = modalClose
