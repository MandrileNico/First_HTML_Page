//Validation Name:
var itemInput = document.getElementById('fullNameForm');

itemInput.addEventListener('focus', runEvent);
itemInput.addEventListener('blur', runEvent);

function runEvent(e){
    if(e.type === 'focus'){
        var quit = document.querySelector('#wrong1');
        if (quit != null){
            quit.remove();
        }
    }
    if(e.type === 'blur'){
        var fullname = document.getElementById('fullNameForm').value;
        p = onlyLetters(fullname) + onlyLettersA(fullname) + onlySpace(fullname) ;
        if((fullname.length === p) && (onlyLetters(fullname) >= 6) && (onlySpace(fullname) >=1)){
            console.log('nombre ok');
        } else {
            console.log('bad name')
            var boxinput = document.getElementById('fullNameForm');
            boxinput.insertAdjacentHTML('beforebegin', '<span id="wrong1">Insert a correct Name</span>');
            var nameform = document.querySelector('#wrong1');
            nameform.style.fontSize = '10px';
            nameform.style.display = 'flex';
        }
    }
}
//validation Age
var ageInput = document.getElementById('ageForm');
ageInput.addEventListener('focus', checkAge);
ageInput.addEventListener('blur', checkAge);

function checkAge(e){
    if(e.type === 'focus'){
        var quit = document.querySelector('#wrong2');
        if (quit != null){
            quit.remove();
        }
    }
    if(e.type === 'blur'){
        var ageform = document.getElementById('ageForm').value;
        if((ageform >=18) && (ageform < 130)) {
            console.log('Age ok');
        } else {
            console.log('bad Age');
            if(ageform < 18){
                var boxinput = document.getElementById('ageForm');
                boxinput.insertAdjacentHTML('beforebegin', '<span id="wrong2">You are not over 18</span>');
                var ageform = document.querySelector('#wrong2');
                ageform.style.fontSize = '10px';
                ageform.style.display = 'flex';
           }
            if(ageform >130){
                var box2 = document.getElementById('ageForm');
                box2.insertAdjacentHTML('beforebegin', '<span id="wrong2">Wrong Age</span>');
                var ageform = document.querySelector('#wrong2');
                ageform.style.fontSize = '10px';
                ageform.style.display = 'flex';
            }
        } 
    }
}
//DNI validation
var dniInput = document.getElementById('dniForm');
dniInput.addEventListener('focus', dnival);
dniInput.addEventListener('blur', dnival);

function dnival(e){
    if(e.type === 'focus'){
        var quit = document.querySelector('#wrong3');
        if (quit != null){
            quit.remove();
        }
    }
    if(e.type === 'blur'){
        var inputdni = document.getElementById('dniForm').value;
        if(((inputdni.length === 7) || (inputdni.length === 8)) && (inputdni.length === onlyNumber(inputdni))){
            console.log('dni ok');
        } else {
            console.log('bad dni')
            var boxinput = document.getElementById('dniForm');
            boxinput.insertAdjacentHTML('beforebegin', '<span id="wrong3">Insert a correct DNI number</span>');
            var dniform = document.querySelector('#wrong3');
            dniform.style.fontSize = '10px';
            dniform.style.display = 'flex';
        }
    }
}
//Validation post number
var postInput = document.getElementById('postForm');
postInput.addEventListener('focus', postVal);
postInput.addEventListener('blur', postVal);

function postVal(e){
    if(e.type === 'focus'){
        var quit = document.querySelector('#wrong4');
        if (quit != null){
            quit.remove();
        }
    }
    if(e.type === 'blur'){
        var inputPost = document.getElementById('postForm').value;
        console.log(inputPost);
        console.log(inputPost.length);
        console.log(typeof inputPost);
        if((inputPost.length >= 3) && (inputPost.length === onlyNumber(inputPost))) {
            console.log('post number ok');
        } else {
            console.log('bad post number')
            var boxinput = document.getElementById('postForm');
            boxinput.insertAdjacentHTML('beforebegin', '<span id="wrong4">Insert a correct post number</span>');
            var postForm = document.querySelector('#wrong4');
            postForm.style.fontSize = '10px';
            postForm.style.display = 'flex';
        }
    }
}
//Validation Cyti
var cityInput = document.getElementById('cityForm');
cityInput.addEventListener('focus', cityval);
cityInput.addEventListener('blur', cityval);

function cityval(e){
    if(e.type === 'focus'){
        var quit = document.querySelector('#wrong5');
        if (quit != null){
            quit.remove();
        }
    }
    if(e.type === 'blur'){
        var inputPost = document.getElementById('cityForm').value;
        if((inputPost.length >= 3)) {
            var p = onlyLetters(inputPost) + onlyLettersA(inputPost) + onlySpace(inputPost) ;
            if(p === inputPost.length){
                console.log('city ok');
            }else{
                console.log('bad city name')
            var boxinput = document.getElementById('cityForm');
            boxinput.insertAdjacentHTML('beforebegin', '<span id="wrong5">Incorrect city name</span>');
            var postForm = document.querySelector('#wrong5');
            postForm.style.fontSize = '10px';
            postForm.style.display = 'flex';
            }
            
        } else {
            console.log('bad city name')
            var boxinput = document.getElementById('cityForm');
            boxinput.insertAdjacentHTML('beforebegin', '<span id="wrong5">Incorrect city name</span>');
            var postForm = document.querySelector('#wrong5');
            postForm.style.fontSize = '10px';
            postForm.style.display = 'flex';
        }
    }
}
function onlyLetters(l){
    var inputLetters = l.toLocaleUpperCase();
    var p = 0;
    for(var i = 0; i < inputLetters.length; i++){
        var letter = inputLetters[i];
        if((letter.charCodeAt(0) >= 65) && (letter.charCodeAt(0)) <= 90){
            p++;      
        }
    }
    console.log(p)
    return p;
}
function onlySpace(l){
    var p = 0;
    console.log(l)
    for(var i = 0; i < l.length; i++){
        if(l[i].charCodeAt(0) === 32){
            p++;      
        }
    }
    console.log(p)
    return p;
}
function onlyLettersA(l){
    var inputLetters = l.toLocaleUpperCase();
    var p = 0;
    for(var i = 0; i < inputLetters.length; i++){
        var letter = inputLetters[i];
        if((letter.charCodeAt(0) === 193) || (letter.charCodeAt(0) === 201) || (letter.charCodeAt(0) === 211) || (letter.charCodeAt(0) === 205) || (letter.charCodeAt(0) === 218)){
        p++;
        }
    }
    console.log(p)
    return p;
}
function onlyNumber(n){
    var inputNumbers = n;
    var p = 0;
    for(var i = 0; i < inputNumbers.length; i++){
        var letter = inputNumbers[i];
        if(Number.isNaN(parseInt(letter,10))){
            break;      
        }else{
            p++;
        }
    }
    return p;
}
//Validation phone number
var phoneInput = document.getElementById('phoneForm');
phoneInput.addEventListener('focus', phoneVal);
phoneInput.addEventListener('blur', phoneVal);

function phoneVal(e){
    if(e.type === 'focus'){
        var quit = document.querySelector('#wrong6');
        if (quit != null){
            quit.remove();
        }
    }
    if(e.type === 'blur'){
        var inputPhone = document.getElementById('phoneForm').value;
        if((inputPhone.length >= 7) && (inputPhone.length === onlyNumber(inputPhone))) {
            console.log('phone number ok');
        } else {
            console.log('bad phone number')
            var boxinput = document.getElementById('phoneForm');
            boxinput.insertAdjacentHTML('beforebegin', '<span id="wrong6">Insert a correct phone number</span>');
            var postForm = document.querySelector('#wrong6');
            postForm.style.fontSize = '10px';
            postForm.style.display = 'flex';
        }
    }
}
//validation email
// ver luego si anda /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm
var emailInput = document.getElementById('emailForm');
emailInput.addEventListener('focus', emailVal);
emailInput.addEventListener('blur', emailVal);

function emailVal(e){
    if(e.type === 'focus'){
        var quit = document.querySelector('#wrong7');
        if (quit != null){
            quit.remove();
        }
    }
    if(e.type === 'blur'){
        var inputMail = document.getElementById('emailForm').value;
        if((inputMail.indexOf('@') != -1) && (inputMail.indexOf('.com') != -1)){

            console.log('email ok');
        } else {
            console.log('bad email')
            var boxinput = document.getElementById('emailForm');
            boxinput.insertAdjacentHTML('beforebegin', '<span id="wrong7">Insert a correct email</span>');
            var postForm = document.querySelector('#wrong7');
            postForm.style.fontSize = '10px';
            postForm.style.display = 'flex';
        }
    }
}
//Validation password

