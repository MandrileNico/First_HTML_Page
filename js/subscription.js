var checkhList = [];
var listValues = [];
function onlyLetters(l){
    var inputLetters = l.toLocaleUpperCase();
    var p = 0;
    for(var i = 0; i < inputLetters.length; i++){
        var letter = inputLetters[i];
        if((letter.charCodeAt(0) >= 65) && (letter.charCodeAt(0)) <= 90){
            p++;      
        }
    }
    return p;
}
function onlySpace(l){
    var p = 0;
    for(var i = 0; i < l.length; i++){
        if(l[i].charCodeAt(0) === 32){
            p++;      
        }
    }
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
    return p;
}
function onlyNumber(n){
    var inputNumbers = n;
    var p = 0;
    for(var i = 0; i < inputNumbers.length; i++){
        var letter = inputNumbers[i];
        if(Number.isNaN(parseInt(letter,10))){  
        }else{
            p++;
        }
    }
    return p;
}
function findPoint(l){
    var p = 0;
    for(var i = 0; i < l.length; i++){
        if(l[i].charCodeAt(0) === 46){
            p++;      
        }
    }
    return p;
}
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
            checkhList[0] = true;
            listValues[0] = fullname;
        } else {
            checkhList[0] = false;
            var boxinput = document.getElementById('fullNameForm');
            boxinput.insertAdjacentHTML('afterend', '<span id="wrong1"><i class="far fa-times-circle"></i>Insert a correct Name</span>');
            var nameform = document.querySelector('#wrong1');
            listValues[0] = document.querySelector('#wrong1').textContent;
            nameform.classList.add('errorsForm');
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
        var inputAge = document.getElementById('ageForm').value;
        if((inputAge >=18) && (inputAge < 130)) {
            console.log('Age ok');
            checkhList[1] = true;
            listValues[1] = inputAge;
        } else {
            checkhList[1] = false;
            if(inputAge < 18){
                var boxinput = document.getElementById('ageForm');
                boxinput.insertAdjacentHTML('afterend', '<span id="wrong2"><i class="far fa-times-circle"></i>You are not over 18</span>');
                var agewrong = document.querySelector('#wrong2');
                agewrong.classList.add('errorsForm');
           }
            if(inputAge >130){
                var box2 = document.getElementById('ageForm');
                box2.insertAdjacentHTML('afterend', '<span id="wrong2"><i class="far fa-times-circle"></i>Wrong Age</span>');
                var agewrong = document.querySelector('#wrong2');
                agewrong.classList.add('errorsForm');
            }
            listValues[1] = document.querySelector('#wrong2').textContent;
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
            checkhList[2] = true;
            listValues[2] = inputdni;
        } else {
            checkhList[2] = false;
            var boxinput = document.getElementById('dniForm');
            boxinput.insertAdjacentHTML('afterend', '<span id="wrong3"><i class="far fa-times-circle"></i>Insert a correct DNI number</span>');
            var dnierror = document.querySelector('#wrong3');
            listValues[2] = document.querySelector('#wrong3').textContent;
            dnierror.classList.add('errorsForm');
        }
    }
}
//Validation phone number
var phoneInput = document.getElementById('phoneForm');
phoneInput.addEventListener('focus', phoneVal);
phoneInput.addEventListener('blur', phoneVal);

function phoneVal(e){
    if(e.type === 'focus'){
        var quit = document.querySelector('#wrong4');
        if (quit != null){
            quit.remove();
        }
    }
    if(e.type === 'blur'){
        var inputPhone = document.getElementById('phoneForm').value;
        if((inputPhone.length >= 7) && (inputPhone.length === onlyNumber(inputPhone))) {
            checkhList[3] = true;
            listValues[3] = inputPhone;
        } else {
            checkhList[3] = false;
            var boxinput = document.getElementById('phoneForm');
            boxinput.insertAdjacentHTML('afterend', '<span id="wrong4"><i class="far fa-times-circle"></i>Insert a correct phone number</span>');
            var posterror = document.querySelector('#wrong4');
            listValues[3] = document.querySelector('#wrong4').textContent;
            posterror.classList.add('errorsForm');
        }
    }
}
//Validation Address
var addrInput = document.getElementById('addressForm');
addrInput.addEventListener('focus', addval);
addrInput.addEventListener('blur', addval);

function addval(e){
    if(e.type === 'focus'){
        var quit = document.querySelector('#wrong5');
        if (quit != null){
            quit.remove();
        }
    }
    if(e.type === 'blur'){
        var inputAddr = document.getElementById('addressForm').value;
        var p = onlyLetters(inputAddr) + onlyLettersA(inputAddr) + onlySpace(inputAddr) + findPoint(inputAddr) + onlyNumber(inputAddr) ;
        if((p === inputAddr.length) && (inputAddr.length >= 5)){
            checkhList[4] = true;
            listValues[4] = inputAddr;
        }else{
            checkhList[4] = false;
            var boxinput = document.getElementById('addressForm');
            boxinput.insertAdjacentHTML('afterend', '<span id="wrong5"><i class="far fa-times-circle"></i>Incorrect Address</span>');
            var addresErrors = document.querySelector('#wrong5');
            listValues[4] = document.querySelector('#wrong5').textContent;
            addresErrors.classList.add('errorsForm');
        }  
    } 
}
//Validation Cyti
var cityInput = document.getElementById('cityForm');
cityInput.addEventListener('focus', cityval);
cityInput.addEventListener('blur', cityval);

function cityval(e){
    if(e.type === 'focus'){
        var quit = document.querySelector('#wrong6');
        if (quit != null){
            quit.remove();
        }
    }
    if(e.type === 'blur'){
        var inputCity = document.getElementById('cityForm').value;
        if((inputCity.length >= 3)) {
            var p = onlyLetters(inputCity) + onlyLettersA(inputCity) + onlySpace(inputCity)+findPoint(inputCity) ;
            if(p === inputCity.length){
                checkhList[5] = true;
                listValues[5] = inputCity;
            }else{
                checkhList[5] = false;
                var boxinput = document.getElementById('cityForm');
                boxinput.insertAdjacentHTML('afterend', '<span id="wrong6"><i class="far fa-times-circle"></i>Incorrect city name</span>');
                var cityError = document.querySelector('#wrong6');
                listValues[5] = document.querySelector('#wrong6').textContent;
                cityError.classList.add('errorsForm');
            }
        } else {
            checkhList[5] = false;
            var boxinput = document.getElementById('cityForm');
            boxinput.insertAdjacentHTML('afterend', '<span id="wrong6"><i class="far fa-times-circle"></i>Incorrect city name</span>');
            var cityError = document.querySelector('#wrong6');
            listValues[5] = document.querySelector('#wrong6').textContent;
            cityError.classList.add('errorsForm');
        }
    }
}
//Validation post number
var postInput = document.getElementById('postForm');
postInput.addEventListener('focus', postVal);
postInput.addEventListener('blur', postVal);
function postVal(e){
    if(e.type === 'focus'){
        var quit = document.querySelector('#wrong7');
        if (quit != null){
            quit.remove();
        }
    }
    if(e.type === 'blur'){
        var inputPost = document.getElementById('postForm').value;
        if((inputPost.length >= 3) && (inputPost.length === onlyNumber(inputPost))) {
            checkhList[6] = true;
            listValues[6] = inputPost;
        } else {
            checkhList[6] = false;
            var boxinput = document.getElementById('postForm');
            boxinput.insertAdjacentHTML('afterend', '<span id="wrong7"><i class="far fa-times-circle"></i>Insert a correct post number</span>');
            var postForm = document.querySelector('#wrong7');
            listValues[6] = document.querySelector('#wrong7').textContent;
            postForm.classList.add('errorsForm');
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
        var quit = document.querySelector('#wrong8');
        if (quit != null){
            quit.remove();
        }
    }
    if(e.type === 'blur'){
        var inputMail = document.getElementById('emailForm').value;
        if((inputMail.indexOf('@') != -1) && (inputMail.indexOf('.com') != -1)){
            checkhList[7] = true;
            listValues[7] = inputMail;
        } else {
            checkhList[7] = false;
            var boxinput = document.getElementById('emailForm');
            boxinput.insertAdjacentHTML('afterend', '<span id="wrong8"><i class="far fa-times-circle"></i>Insert a correct email</span>');
            var mailForm = document.querySelector('#wrong8');
            listValues[7] = document.querySelector('#wrong8').textContent;
            mailForm.classList.add('errorsForm');
        }
    }
}
//Validation password
var password1Input = document.getElementById('passForm1');
password1Input.addEventListener('focus', passwordValidation1);
password1Input.addEventListener('blur', passwordValidation1);
var password2Input = document.getElementById('passForm2');
password2Input.addEventListener('focus', passwordValidation2);
password2Input.addEventListener('blur', passwordValidation2);

function passwordValidation1(e){
    if(e.type === 'focus'){
        var quit = document.querySelector('#wrong9');
        if (quit != null){
            quit.remove();
        }
    }
    if(e.type === 'blur'){
        var inputPassword1 = document.getElementById('passForm1').value;
        var p = onlyLetters(inputPassword1) + onlyNumber(inputPassword1);
        if((inputPassword1.length >= 8) && (inputPassword1.length === p)){
            checkhList[8] = true;
            listValues[8] = inputPassword1;
        } else {
            checkhList[8] = false;
            var boxinput = document.getElementById('passForm1');
            boxinput.insertAdjacentHTML('afterend', '<span id="wrong9"><i class="far fa-times-circle"></i>Insert a correct password</span>');
            var pass = document.querySelector('#wrong9');
            listValues[8] = document.querySelector('#wrong9').textContent;
            postForm.classList.add('errorsForm');
        }
    }
}
function passwordValidation2(e){
    if(e.type === 'focus'){
        var quit = document.querySelector('#wrong10');
        if (quit != null){
           quit.remove();
        }
    }
    if(e.type === 'blur'){
        var inputPassword1 = document.getElementById('passForm1').value;
        var inputPassword2 = document.getElementById('passForm2').value;
        if(inputPassword1 === inputPassword2){
            checkhList[9] = true;
            listValues[9] = inputPassword2;
        } else {
            checkhList[9] = false;
            var boxinput = document.getElementById('passForm2');
            boxinput.insertAdjacentHTML('afterend', '<span id="wrong10"><i class="far fa-times-circle"></i>Passwords must match</span>');
            var passwordError = document.querySelector('#wrong10');
            listValues[9] = document.querySelector('#wrong10').textContent;
            passwordError.classList.add('errorsForm');
        }   
    }
}
var submitB = document.getElementById('buttonform');
submitB.addEventListener('click', runSubmit);
function runSubmit(e){
    e.preventDefault();
    errorList = [];
    var p = 0;
    var n = 0;
    for(var i=0; i<checkhList.length; i++){
        if(checkhList[i] === true){
            p++;
        } else {
            if(listValues [i] != null){
                errorList[n]= listValues [i];
                n++
            }
        }
    }
    if(p < checkhList.length){
        alert('Check the erros to subscribe:\n' + errorList.join('\n'));
    } else{
        if((checkhList.length === p) && (checkhList.length != 0)) {
            confirm('Check your personal data: \n -Name:' + listValues[0] + '\n -Age:' + listValues[1] + '\n -DNI:'+ listValues[2] 
            + '\n -Phone number:'+ listValues[3]+ '\n -Adrress:'+ listValues[4]+ '\n -City:'+ listValues[5]+ '\n -Post number:'+ listValues[6] 
            + '\n -Email:'+ listValues[7] + '\n -Password:'+ listValues[8])
        } else {
            alert('Complete the form if you want to subscribe')
        }
    }
}
//bonus
var helloName = document.getElementById('fullNameForm');
helloName.addEventListener('input', enterName);
function enterName() {
    var x = document.getElementById("fullNameForm").value;
    document.getElementById("helloform").innerHTML = "Hello! " + x;
}