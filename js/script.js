/* SCREEN SIZE 375px */

var screen_width = screen.width;
var discount_text = document.querySelector('.discount__text');
var money_text_small = document.querySelector('.if__small');
var money_text_big = document.querySelector('.if__big');
if(screen_width <= 375){
    discount_text.innerHTML = "";
    money_text_small.innerHTML = "<span class='pricing__price'>$<span class='price'></span></span>&nbsp;\\&nbsp;month"
} else {
    discount_text.innerHTML = "discount";
    money_text_big.innerHTML = "<span class='pricing__price'>$<span class='price'></span></span>&nbsp;\\&nbsp;month"
}

var toggle_button = document.querySelector(".toggle");
var toggle_circle = document.querySelector(".toggle__circle");
var isToggled = false;



const inputElement = document.querySelector('[type="range"]');
let isChanging = false;

const setCSSProperty = () => {
  const percent =
    ((inputElement.value - inputElement.min) /
    (inputElement.max - inputElement.min)) *
    100;
  // Here comes the magic 🦄🌈
  inputElement.style.setProperty("--webkitProgressPercent", `${percent}%`);
}

// Set event listeners
const handleMove = () => {
  if (!isChanging) return;
  setCSSProperty();
  if(isToggled == false){
    ranges();
  } else {
      discount();
  }
};
const handleUpAndLeave = () => isChanging = false;
const handleDown = () => isChanging = true;

inputElement.addEventListener("mousemove", handleMove);
inputElement.addEventListener("mousedown", handleDown);
inputElement.addEventListener("mouseup", handleUpAndLeave);
inputElement.addEventListener("mouseleave", handleUpAndLeave);
inputElement.addEventListener("click", setCSSProperty);

// Init input
setCSSProperty();

var views = document.querySelector('.views__number');
var price =  document.querySelector('.price');

function ranges() {
    var slider_value = document.querySelector('.main__slider').value;

    if(slider_value <= 20){
        views.innerHTML = "10K";
        price.innerHTML = "8.00";
    } else if((slider_value > 20) && (slider_value <= 40)){
        views.innerHTML = "50K";
        price.innerHTML = "12.00";
    } else if((slider_value > 40) && (slider_value <= 60)){
        views.innerHTML = "100K";
        price.innerHTML = "16.00";
    } else if((slider_value > 60) && (slider_value <= 80)){
        views.innerHTML = "500K";
        price.innerHTML = "24.00";
    } else {
        views.innerHTML = "1M";
        price.innerHTML = "36.00";
    }
}

ranges();

function discount() {
    var slider_value = document.querySelector('.main__slider').value;

    if(slider_value <= 20){
        views.innerHTML = "10K";
        price.innerHTML = "6.00";
    } else if((slider_value > 20) && (slider_value <= 40)){
        views.innerHTML = "50K";
        price.innerHTML = "9.00";
    } else if((slider_value > 40) && (slider_value <= 60)){
        views.innerHTML = "100K";
        price.innerHTML = "12.00";
    } else if((slider_value > 60) && (slider_value <= 80)){
        views.innerHTML = "500K";
        price.innerHTML = "18.00";
    } else {
        views.innerHTML = "1M";
        price.innerHTML = "27.00";
    }
}

function toggle() {
    if(isToggled == false) {
        toggle_button.style.background = "#10d5c2";
        toggle_circle.style.marginLeft = "27px";
        isToggled = true;
        discount();
    } else {
        toggle_button.style.background = "#cdd7ee";
        toggle_circle.style.marginLeft = "3px";
        isToggled = false;
        ranges();
    }
}




/*  */