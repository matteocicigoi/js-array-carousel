'use strict';

//elementi dal dom
const items = document.querySelector('.items');

//img
const img = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

//immagine corrente
let currentImg = 0;

//crea gli elementi nel dom
for(let i = 0; i < img.length; i++){
    const slide = document.createElement('div');
    slide.classList.add('item');
    const elementImg = document.createElement('img');
    elementImg.src = `img/${img[i]}`;
    elementImg.alt = `Immagine ${i}`;
    
    if(currentImg === i){
        slide.classList.add('active');
    }
    slide.append(elementImg);
    items.append(slide);
}

//elementi dal dom
const itemAll = document.querySelectorAll('.item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

//immagine precedente
prev.addEventListener('click', function(){
    itemAll[currentImg].classList.remove('active');
    if(currentImg > 0){
        currentImg--;
    }else{
        currentImg = img.length - 1;
    }
    itemAll[currentImg].classList.add('active');
});

//immagine successiva
next.addEventListener('click', function(){
    itemAll[currentImg].classList.remove('active');
    if(currentImg < img.length - 1){
        currentImg++;
    }else{
        currentImg = 0;
    }
    itemAll[currentImg].classList.add('active');
});