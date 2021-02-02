
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
    _ELEMENT.innerHTML = text;
    _PART_INDEX++;

    if(text === _CONTENT[_PART]) {
        _CURSOR.style.display = 'none';

        clearInterval(_INTERVAL_VAL);
        setTimeout(function() {
            _INTERVAL_VAL = setInterval(Delete, 50);
        }, 1000);
    }
}

//Delete effect
function Delete() {
    var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX--;

    if(text === '') {
        clearInterval(_INTERVAL_VAL);

        if(_PART == (_CONTENT.length - 1))
            _PART = 0;
        else
            _PART++;

        _PART_INDEX = 0;

        setTimeout(function() {
            _CURSOR.style.display = 'inline-block';
            _INTERVAL_VAL = setInterval(Type, 100);
        }, 200)
    }
}

//Start typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);

//Inital skrollr to create parallax scrolling effect
var s = skrollr.init();

//Refresh skrollr after resizing sections
s.refresh($('.homeSlide'));