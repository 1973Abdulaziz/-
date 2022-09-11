$(document).ready(function(){
    $('.bars__button').click(function(){
        $('.site__nav-link').toggleClass('show');
        $('ul').toggleClass('show')
    });
});



let local=document.getElementById('local');
let text15=document.getElementById('text15');
let X=document.getElementById('X');

local.addEventListener(`click`,function(){
    text15.style.display=`block`
});
X.addEventListener(`click`,function(){
    text15.style.display=`none`
})