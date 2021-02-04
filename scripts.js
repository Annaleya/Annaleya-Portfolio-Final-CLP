
// JS to animate hamburger menu

function myFunction(x) {
    x.classList.toggle("change");
}

// list of sentences
var _CONTENT = [
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

        if(_PART == (_CONTENT.length - 1))
            _PART = 0;
        else
            _PART++;

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
    var NAME_VAL = document.forms["contact-me"]["name"].value;
    var EMAIL_VAL = document.forms["contact-me"]["email"].value;
    var PHONE_VAL = document.forms["contact-me"]["phone"].value;
    var MESSAGE_VAL = document.forms["contact-me"]["message"].value;

    if (NAME_VAL == "") {
        alert("Name must be filled out");
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
    return true;
}