
//section1

var swiper1 = new Swiper(".section1.mySwiper", {
  navigation: {
    nextEl: ".section1 .swiper-button-next",
    prevEl: ".section1 .swiper-button-prev",
  },
});

//section1

//section3

let underAc = 0;
plusUnderline(underAc);
// Next/previous controls
function plusUnderline(n) {
  showUnderline(n);
}

function showUnderline(n) {
  let i;
  let s = document.getElementsByClassName("under");
  for (i = 0; i < s.length; i++) {
    s[i].classList.remove("ac");
    s[i].classList.remove("myUnderline");
  }
  s[n].classList.add("ac");
  s[n].classList.add("myUnderline");
}




var swiper2 = new Swiper(".section3 .mySwiper", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
    el: ".section3 .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".section3 .swiper-button-next",
    prevEl: ".section3 .swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    676: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1081: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1406: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

//section3

//section4 

const countDown = ()=>{

  const countDownDate = new Date("2026-01-01T00:00:00").getTime();
  const now = new Date().getTime();
  let distance = countDownDate - now;

  const days = Math.floor(distance / (1000*24*60*60));

  distance = distance%(1000*24*60*60);
  const hours = Math.floor(distance / (1000*60*60));

  distance = distance%(1000*60*60);
  const minutes = Math.floor(distance / (1000*60));

  distance = distance%(1000*60);
  const seconds = Math.floor(distance / (1000));

  document.querySelector('#days').textContent = days;
  document.querySelector('#hours').textContent = hours;
  document.querySelector('#minutes').textContent = minutes;
  document.querySelector('#seconds').textContent = seconds;



}

setInterval(()=>{

  countDown();

},1000);


//section7


var swiper3 = new Swiper(".section7.mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  Keyboard:{
    enabled:true,
  },
  pagination: {
    el: ".section7 .swiper-pagination",
    clickable:true,
  },
  navigation: {
    nextEl: ".section7 .swiper-button-next",
    prevEl: ".section7 .swiper-button-prev",
  },
 
});

//section8
let underAc1 = 0;
plusUnderline(underAc1);
// Next/previous controls
function plusUnderline1(n) {
  showUnderline1(n);
}

function showUnderline1(n) {
  let i;
  let s = document.getElementsByClassName("under1");
  for (i = 0; i < s.length; i++) {
    s[i].classList.remove("ac1");
    s[i].classList.remove("myUnderline1");
  }
  s[n].classList.add("ac1");
  s[n].classList.add("myUnderline1");
}


//section9 


var swiper4 = new Swiper(".section9 .mySwiper", {
  slidesPerView: 2,
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
    el: ".section9 .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".section9 .swiper-button-next",
    prevEl: ".section9 .swiper-button-prev",
  },
});



function changeSlidePerView4(x) {
  if (x.matches) { // If media query matches
    swiper4.params.slidesPerView = 1;
  }
  else{
    swiper4.params.slidesPerView = 2;
  }
}
function changeSlidePerView5(x) {
  if (x.matches) { // If media query matches
    swiper4.params.slidesPerView = 1;
  }
}
function changeSlidePerView6(x) {
  if (x.matches) { // If media query matches
    swiper4.params.slidesPerView = 1;
  }
}

// Create a MediaQueryList object
var x4 = window.matchMedia("(max-width: 1450px)");
var x5 = window.matchMedia("(max-width: 1040px)");
var x6 = window.matchMedia("(max-width: 680px)");


// Call listener function at run time
changeSlidePerView4(x4);
changeSlidePerView5(x5);
changeSlidePerView6(x6);


// Attach listener function on state changes
x4.addEventListener("change", function() {
  changeSlidePerView4(x4);
});


x5.addEventListener("change", function() {
  changeSlidePerView5(x5);
});

x6.addEventListener("change", function() {
  changeSlidePerView6(x6);
});







//section11


var swiper5 = new Swiper(".section11 .mySwiper", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".section11 .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    676: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1081: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1406: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});








const toTop = document.querySelector('.to-top');

window.addEventListener("scroll", () => {
  if(window.scrollY > 500){
    toTop.classList.add('active');
  }
  else{
    toTop.classList.remove('active');
  }
});
