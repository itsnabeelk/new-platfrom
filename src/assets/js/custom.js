function timelineSlider() {
    $.js = function (el) {
        return $('[data-js=' + el + ']')
    };
    
    function carousel() {
      $.js('timeline-carousel').slick({
        infinite: true,
        arrows: true,
        prevArrow: '<div class="slick-prev"> <div class="btn mr-3 btn-warning d-flex justify-content-center align-items-center"> <div>Previous</div><svg class="ml-1" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"> <path d="M10.1,19.1l1.5-1.5L7,13h14.1v-2H7l4.6-4.6l-1.5-1.5L3,12L10.1,19.1z"/> </svg></div></div>',
        nextArrow: '<div class="slick-next"> <div class="btn btn-warning d-flex justify-content-center align-items-center"> <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M 14 4.9296875 L 12.5 6.4296875 L 17.070312 11 L 3 11 L 3 13 L 17.070312 13 L 12.5 17.570312 L 14 19.070312 L 21.070312 12 L 14 4.9296875 z"/> </svg> <div>Next</div></div></div>',
        dots: true,
        autoplay: true,
        speed: 1100,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
      });
    }
    
    carousel();
}

function cleintSLider(){
  // Slider version 1
$('.owl-carousel.version-1').owlCarousel({
  loop:true,
  margin:20,
  responsiveClass:true,
  autoplay:true,
  responsive:{
      0:{
          items:2,
          nav:false
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:4,
          nav:false
      }
  }
});

// Slider version 2
$('.owl-carousel.version-2').owlCarousel({
  loop:true,
  margin:20,
  center: true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:false
      }
  }
})

$('#play-video').on('click', function(e){
  e.preventDefault();
  $('#video-overlay').addClass('open');
  $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_video();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_video(); }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
};

}

function customSelect(){
const customSelect = document.querySelector(".custom-select");
const selectBtn = document.querySelector(".select-button");
const customSelect2 = document.querySelector(".custom-select2");
const selectBtn2 = document.querySelector(".select-button2");

const selectedValue = document.querySelector(".selected-value");
const selectedValue2 = document.querySelector(".selected-value2");
const optionsList = document.querySelectorAll(".select-dropdown li");
const optionsList2 = document.querySelectorAll(".select-dropdown2 li");

// add click event to select button
selectBtn.addEventListener("click", () => {
  customSelect.classList.toggle("active");
  selectBtn.setAttribute(
    "aria-expanded",
    selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );

});

selectBtn2.addEventListener("click", () => {
  customSelect2.classList.toggle("active");
  selectBtn2.setAttribute(
    "aria-expanded",
    selectBtn2.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );

});

optionsList.forEach((option) => {
  function handler(e) {
    if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
      selectedValue.textContent = this.children[1].textContent;
      customSelect.classList.remove("active");
    }
    // Key Events
    if (e.key === "Enter") {
      selectedValue.textContent = this.textContent;
      customSelect.classList.remove("active");
    }
  }
  option.addEventListener("keyup", handler);
  option.addEventListener("click", handler);
});


optionsList2.forEach((option) => {
  function handler(e) {
    if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
      selectedValue2.textContent = this.children[1].textContent;
      customSelect2.classList.remove("active");
    }
    // Key Events
    if (e.key === "Enter") {
      selectedValue2.textContent = this.textContent;
      customSelect2.classList.remove("active");
    }
  }
  option.addEventListener("keyup", handler);
  option.addEventListener("click", handler);
});

}