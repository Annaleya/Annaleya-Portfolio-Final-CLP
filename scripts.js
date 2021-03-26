

// list of sentences
const _CONTENT = [
    "Junior Web Developer",
    "Hiding in a cave somewhere",
    "Thanks for checking out my page!"
];

//Sentence being processed
var _PART = 0;

//character of sentence being processed
var _PART_INDEX = 0;

//hold the value returned from setInterval
var _INTERVAL_VAL;

//Element that holds the text
var _ELEMENT = document.querySelector("#text");

//Cursor element
var _CURSOR = document.querySelector("#cursor");

//typing effect
function Type() {
    var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    if (_ELEMENT){
        _ELEMENT.innerHTML=text;
    }
    _PART_INDEX++;

    if(text === _CONTENT[_PART]) {
        if (_CURSOR){
            _CURSOR.style.display = 'none';
        }
        clearInterval(_INTERVAL_VAL);
        setTimeout(function() {
            _INTERVAL_VAL = setInterval(Delete, 50);
        }, 1000);
    }
}

//Delete effect
function Delete() {
    var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    if (_ELEMENT){
    _ELEMENT.innerHTML = text;
    }
    _PART_INDEX--;

    if(text === '') {
        clearInterval(_INTERVAL_VAL);

        if(_PART == (_CONTENT.length - 1)){
            _PART = 0;}

        else{
            _PART++;
        }
        _PART_INDEX = 0;

        setTimeout(function() {
            if (_CURSOR){
            _CURSOR.style.display = 'inline-block';
            }

            _INTERVAL_VAL = setInterval(Type, 100);
        }, 200)
    }
}

//Start typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);

//Validate Contact Form
function validateForm() {
    var FIRST_NAME_VAL = document.forms["contact-me"]["first-name"].value;
    var LAST_NAME_VAL = document.forms["contact-me"]["last-name"].value;
    var EMAIL_VAL = document.forms["contact-me"]["email"].value;
    var PHONE_VAL = document.forms["contact-me"]["phone"].value;
    var MESSAGE_VAL = document.forms["contact-me"]["message"].value;

    if (FIRST_NAME_VAL == "") {
        alert("First Name must be filled out");
        return false;
    }

    if (LAST_NAME_VAL == ""){
        alert("Last Name must be filled out");
        return false;
    }

    if (EMAIL_VAL == "") {
        alert("Please enter your email");
        return false;
    }

    if (PHONE_VAL == "") {
        alert("Please enter a valid phone number");
        return false;
    }

    if (MESSAGE_VAL == "") {
        alert("Please enter a message to send");
        return false;
    }
    else {alert("Thank you for your message!")
}
    return true;
}

//About Page Image Carousel

var currentSlide = 0; //stores index of current slide to determine what slide its on
const slides = document.querySelectorAll(".slides") //Stores all slides in an array for usage

const init = (n) => {
    slides.forEach((slide, index)=>{
        slide.style.display = "none"
    })
    slides[n].style.display = "block"
}

//Next Function
const next = () => {
    currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
    init(currentSlide)
    //check to see what slide we are on if greater than or equal to last index of slides, resets to first slide
}

//Prev function
const prev = () => {
    currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
    init(currentSlide)
}

document.querySelector(".next-slide").addEventListener('click', next) //add event listner for "clicking" and calls the next function
document.querySelector(".prev-slide").addEventListener('click', prev) //add event listner for "clicking" and calls the prev function

//Timer to change slide every 3 seconds
setInterval(() => {
    next()
}, 3000);