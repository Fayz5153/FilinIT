// Navbar
const burger_btn = document.querySelector(".burger__btn button")
const nav = document.querySelector(".nav")

burger_btn.onclick = () =>{
  nav.classList.toggle("nav__show")
  burger_btn.classList.toggle("btn__close")
}
