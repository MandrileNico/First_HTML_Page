
var bCover = document.getElementById('buttomCover');
var emailInputCover = document.getElementById('emailCover');
bCover.addEventListener('click',coverEmail);
emailInputCover.addEventListener('click',coverEmail);
function coverEmail(e){
    e.preventDefault();
     if((e.type === 'click') && (e.type === 'click')){
        window.open('subscription.html');
    }
}