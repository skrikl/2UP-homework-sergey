// верхнее меню

var navMain = document.querySelector('.menu__clickHandler_disableable');
var clickHandler = document.querySelector('.menu__clickHandler');

  if (clickHandler) {
      clickHandler.addEventListener('click', function() {
    if (navMain.classList.contains('menu__clickHandler_disableable')) {
      navMain.classList.remove('menu__clickHandler_disableable');
    } else {
      navMain.classList.add('menu__clickHandler_disableable');
    }
  })};




