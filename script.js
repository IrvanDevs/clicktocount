let minus = document.getElementById('minus');
let reset = document.getElementById('reset');
let plus = document.getElementById('plus');
let num = document.getElementById('num');
let countPerClick = document.getElementById('count-per-click');

let defNum = 0;



minus.addEventListener('click', ()=>{
    defNum = defNum - countPerClick.value;
    num.innerHTML= defNum;

});

reset.addEventListener('click',()=>{
    defNum = 0;
    num.innerHTML = defNum;
});

plus.addEventListener('click',()=>{
    defNum = defNum + Number(countPerClick.value);
    num.innerHTML= defNum;
});
