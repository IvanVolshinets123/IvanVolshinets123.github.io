window.scrollTo({
  top: 0,
  behavior: "smooth",
});
document.body.style.overflow = 'hidden';

setTimeout(function(){
  $('#preloader').fadeToggle();
  document.body.style.overflow = 'visible';
}, 6000);

// Открыть модальное окно
document.getElementById("open-modal-btn-html").addEventListener("click", function() {
  document.getElementById("my-modal-html").classList.add("open")
  document.body.style.overflow = 'hidden';
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn-html").addEventListener("click", function() {
  document.getElementById("my-modal-html").classList.remove("open")
  document.body.style.overflow = 'visible';
})
// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-modal-html").classList.remove("open")
    document.body.style.overflow = 'visible';
  }
});
// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal-html .modal__box-html").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal-html").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  document.body.style.overflow = 'visible';
});



// Открыть модальное окно
document.getElementById("open-modal-btn-css").addEventListener("click", function() {
  document.getElementById("my-modal-css").classList.add("open")
  document.body.style.overflow = 'hidden';
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn-css").addEventListener("click", function() {
  document.getElementById("my-modal-css").classList.remove("open")
  document.body.style.overflow = 'visible';
})
// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("my-modal-css").classList.remove("open")
      document.body.style.overflow = 'visible';
  }
});
// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal-css .modal__box-css").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal-css").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  document.body.style.overflow = 'visible';
});



// Открыть модальное окно
document.getElementById("open-modal-btn-js").addEventListener("click", function() {
  document.getElementById("my-modal-js").classList.add("open")
  document.body.style.overflow = 'hidden';
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn-js").addEventListener("click", function() {
  document.getElementById("my-modal-js").classList.remove("open")
  document.body.style.overflow = 'visible';
})
// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("my-modal-js").classList.remove("open")
      document.body.style.overflow = 'visible';
  }
});
// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal-js .modal__box-js").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal-js").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  document.body.style.overflow = 'visible';
});



// Открыть модальное окно
document.getElementById("open-modal-btn-figma").addEventListener("click", function() {
  document.getElementById("my-modal-figma").classList.add("open")
  document.body.style.overflow = 'hidden';
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn-figma").addEventListener("click", function() {
  document.getElementById("my-modal-figma").classList.remove("open")
  document.body.style.overflow = 'visible';
})
// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("my-modal-figma").classList.remove("open")
      document.body.style.overflow = 'visible';
  }
});
// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal-figma .modal__box-figma").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal-figma").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  document.body.style.overflow = 'visible';
});


let mob__menu_back = document.getElementsByClassName('mob__menu_back')[0];
let mob_menu = document.getElementsByClassName('mob_menu')[0];
let mob__menu_close = document.getElementById('mob__menu_close');

let burger = document.getElementById('burger');
burger.onclick = () => {
  setTimeout(function(){
    document.body.onclick = (e) => {
      if(mob__menu_back.style.display == 'block'){
        if(e.target!=mob_menu){
          document.body.style.overflow = "visible";
          mob__menu_back.style.display = 'none';
          mob_menu.style.display = 'none';
          document.body.onclick = (e) => {};
        }
      }
    }
  }, 1);
  document.body.style.overflow = "hidden";
  mob__menu_back.style.display = 'block';
  mob_menu.style.display = 'block';
}


