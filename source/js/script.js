var order = document.querySelector(".weekly-top__order-button");
var modal = document.querySelector(".modal");
var toggle = document.querySelector(".header-top__toggle");
var mainNav1 = document.querySelector(".main-nav--group-1");
var mainNav2 = document.querySelector(".main-nav--group-2");

mainNav1.classList.remove("main-nav--show");
mainNav2.classList.remove("main-nav--show");
toggle.classList.add("header-top__toggle--open");

toggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (toggle.classList.contains("header-top__toggle--close")) {
    toggle.classList.remove("header-top__toggle--close");
    toggle.classList.add("header-top__toggle--open");
    mainNav1.classList.remove("main-nav--show");
    mainNav2.classList.remove("main-nav--show");
  } else if (toggle.classList.contains("header-top__toggle--open")) {
    toggle.classList.remove("header-top__toggle--open");
    toggle.classList.add("header-top__toggle--close");
    mainNav1.classList.add("main-nav--show");
    mainNav2.classList.add("main-nav--show");
  }
})

order.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal--show")) {
      evt.preventDefault();
      modal.classList.remove("modal--show");
    }
  }
});
