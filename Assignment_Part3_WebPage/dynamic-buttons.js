let img = document.querySelector('img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn5 = document.querySelector('#btn5');

btn1.addEventListener('click', () => {
    img.src = 'img/iPhone11.png';
    document.getElementById('caption').innerHTML = 'iPhone 11, released in 2019.';
})

btn2.addEventListener('click', () => {
    img.src = 'img/iPhone12.png';
    document.getElementById('caption').innerHTML = 'iPhone 12, released in 2020.';
    
})

btn3.addEventListener('click', () => {
    img.src = 'img/iPhone13.png';
    document.getElementById('caption').innerHTML = 'iPhone 13, released in 2021.';
})

btn4.addEventListener('click', () => {
    img.src = 'img/iPadPro.png';
    document.getElementById('caption').innerHTML = 'iPad Pro (3rd generation), released in 2018.';
})

btn5.addEventListener('click', () => {
    img.src = 'img/iPadAir.png'
    document.getElementById('caption').innerHTML = 'iPad Air (5th generation), released in 2022.';
})