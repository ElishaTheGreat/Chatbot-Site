let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times');
};

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
};

window.onscroll = () => {
    navbar.classList.remove('active');
    menu.classList.remove('fa-times');

    // header
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }

    // scroll indicator
    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100;
    document.querySelector('.header .scroll-indicator').style.width = percentage + '%';
};


// Reviews Slider
var swiper = new Swiper(".reviews-container", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
    delay: 9500,
    disableOnInteraction: false,
    },
    grabCursor: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};