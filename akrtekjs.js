let arkpopOpen = document.querySelectorAll('.arkpop-open');
let arkpopClose = document.querySelectorAll('.arkpop-close');

arkpopOpen.forEach(function(elem) {
    elem.addEventListener('click', function() {
        let arkpop = document.querySelector(`.${this.dataset.arkpop}`);
        arkpop.style.display = 'block';
        arkpop.classList.add('fade-in');
    });
});

arkpopClose.forEach(function(elem) {
    elem.addEventListener('click', function() {
        let arkpop = this.closest('.arkpop');
        arkpop.style.display = 'none';
        arkpop.classList.remove('fade-in');
    });
});


$('.menu-toggle').click(function() {
  $('.menu').slideToggle();
});

$('.menu-toggle').click(function() {
  $('body').toggleClass('menu-open');
});
