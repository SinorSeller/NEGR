let min = document.querySelector('#min');
let plus = document.querySelector('#pl');
let ch = document.querySelector('#ch');
let selCh = document.querySelector('#childs');
let sel = document.querySelectorAll('.q');
let num = document.querySelector('#num').innerHTML;
let x = 0;
let buttonMoreTours = document.querySelector('.moretours');
let tours = document.querySelector('.tours');
let touri = document.querySelector('.touri');
let arrayOfTours = [{name: 'Германия', city: ['Дюссельдорф','Мюнхен', 'Росток'], hotels: ['Hyatt Regency Dusseldorf','Sofitel Munich Bayerpost', 'Park Hotel Huebner'], tourists: 2, nights: 7, background: 'url("../img/germany.jpg")'}, {name: 'Греция', city: ['Остров Кос','Остров Крит', 'Пелопоннесский полуостров'], hotels: [], tourists: 3, nights: 5, background: 'url("../img/greece.jpeg")'}, {name: 'Грузия', city: ['Анаклия','Батуми', 'Боржоми'], hotels: [], tourists: 5, nights: 14, background: 'url("../img/georgia.jpg")'}, {name: 'Египет', city: ['Хургада','Макади Бей', 'Таба'], hotels: [], tourists: 2, nights: 10, background: 'url("../img/egypt.jpg")'}, {name: 'Испания', city: ['Барселона','Коста-Верде', 'Менорка'], hotels: [], tourists: 4, nights: 8, background: 'url("../img/spain.jpg")'}, {name: 'Норвегия', city: ['Хафьель','Осло', 'Ставангер'], hotels: [], tourists: 7, nights: 20, background: 'url("../img/norway.jpg")'},{name: 'Турция', city: ['Анкара','Анаталья', 'Стамбул'], hotels: [], tourists: 6, nights: 20, background: 'url("../img/turkey.jpg")'}, {name: 'Швейцария', city: ['Давос','Озеро Леман', 'Санкт-Мориц'], hotels: [], tourists: 2, nights: 9, background: 'url("../img/sweatherland.png")'}, {name: 'Швеция', city: ['Оре','Стокгольм', 'Висбю'], hotels: [], tourists: 4, nights: 8, background: 'url("../img/sweeden.jpg")'}, {name: 'Шри-Ланка', city: ['Бадулла','Элла', 'Канди'], hotels: [], tourists: 4, nights: 14, background: 'url("../img/shri-lanka.jpg")'}];
let germany = document.querySelector('.germany');
let georgia = document.querySelector('.georgia');
let greece = document.querySelector('.greece');
let egypt = document.querySelector('.egypt');
arrayOfTours[0].perem = germany;
arrayOfTours[1].perem = greece;
arrayOfTours[2].perem = georgia;
arrayOfTours[3].perem = egypt;
let blurBlock;
for(let i = 0; i<4; i++){
   arrayOfTours[i].perem.style['background-image'] = arrayOfTours[i].background;
   blurBlock = document.createElement('div');
   blurBlock.classList.add('blur');
   arrayOfTours[i].perem.append(blurBlock);
   blurBlock.innerText = arrayOfTours[i].name;
}

buttonMoreTours.addEventListener('click', ()=>{
   buttonMoreTours.innerText = '';
   buttonMoreTours.style.setProperty('--sq-display', 'none');
   buttonMoreTours.style.height = '0%';
   tours.style.height = '1000px';
   tours.style.padding = '0px 0px 50px 0px';
   let secondLine = document.createElement('div');
   let thirdLine = document.createElement('div');
   secondLine.classList.add('tourLine2');
   thirdLine.classList.add('tourLine3');
   tours.append(secondLine);
   tours.append(thirdLine);
   touri.style.height = '33%';

   let spain;
   let norway;
   let turkey;
   let sweatherland;
   let sweeden;
   let shri_lanka;
   let counterCountries = 0;
   let countryTourCreating = (country) => {
      counterCountries++;
      country = document.createElement('div');
      country.classList.add('tour');
      arrayOfTours[counterCountries+3].perem = country;
      if(counterCountries<5) secondLine.append(country)
      else if(counterCountries>4) {
         country.classList.add('tourMarginClass');
         thirdLine.append(country);
      }
   }
   countryTourCreating(spain);
   countryTourCreating(norway);
   countryTourCreating(turkey);
   countryTourCreating(sweatherland);
   countryTourCreating(sweeden);
   countryTourCreating(shri_lanka);
   
   for(let i = 4; i<arrayOfTours.length; i++){
      arrayOfTours[i].perem.style['background-image'] = arrayOfTours[i].background;
      blurBlock = document.createElement('div');
      blurBlock.classList.add('blur');
      arrayOfTours[i].perem.append(blurBlock);
      blurBlock.innerText = arrayOfTours[i].name;

  }

})

let allNum = 0;//!переменная общего числа людишек

min.addEventListener('click', ()=>{
   num--;
   if(num < 1)num = 1;
   document.querySelector('#num').innerHTML = num;
   allNum = num;
});

plus.addEventListener('click', ()=>{
   num++;
   if(num > 20)num = 20;
   document.querySelector('#num').innerHTML = num;
   allNum = num;
});

ch.addEventListener('click', ()=>{
   selCh.classList.toggle('tok');
});

selCh.addEventListener('click', ()=>{
   let n = document.createElement('div');
   n.classList.add('newCh');
   //document.querySelector('.chil').append(n);
});

let ch1 = document.querySelector('.ch1');
let ch2 = document.querySelector('.ch2');
let ch3 = document.querySelector('.ch3');
let ch4 = document.querySelector('.ch4');
ch1.classList.add('active');

ch1.addEventListener('click', function() {
   ch1.classList.add('active');
   ch2.classList.remove('active');
   ch3.classList.remove('active');
   ch4.classList.remove('active');
});

ch2.addEventListener('click',function() {
   ch1.classList.remove('active');
   ch2.classList.add('active');
   ch3.classList.remove('active');
   ch4.classList.remove('active');
});

ch3.addEventListener('click', function() {
   ch1.classList.remove('active');
   ch2.classList.remove('active');
   ch3.classList.add('active');
   ch4.classList.remove('active');
});

ch4.addEventListener('click', function() {
   ch1.classList.remove('active');
   ch2.classList.remove('active');
   ch3.classList.remove('active');
   ch4.classList.toggle('active');
});


let r1 = document.querySelector('.r1');
let r2 =document.querySelector('.r2');
let r3 =document.querySelector('.r3');
let r4 = document.querySelector('.r4');
let r5 = document.querySelector('.r5');
let s1 = document.querySelector(".ss");
let arrow1 = document.querySelector('.arrow1');
let arrow2 = document.querySelector('.arrow2');
let bar = document.getElementsByClassName('bar');

r1.onclick = function() {
    s1.style.marginLeft="0";
    for(let i=0;i<bar.length;i++){
      bar[i].classList.remove('barcheck');
      }
   r1.classList.add('barcheck');

   };
r2.onclick = function() {
   s1.style.marginLeft="-20%";
   for(let i=0;i<bar.length;i++){
   bar[i].classList.remove('barcheck');
   }
   r2.classList.add('barcheck');
};
r3.onclick = function() {
   s1.style.marginLeft="-40%";
   for(let i=0;i<bar.length;i++){
      bar[i].classList.remove('barcheck');
      }
   r3.classList.add('barcheck');
   };

r4.onclick = function() {
   s1.style.marginLeft="-60%";
   for(let i=0;i<bar.length;i++){
      bar[i].classList.remove('barcheck');
      }
   r4.classList.add('barcheck');
   };
r5.onclick = function() {
   s1.style.marginLeft="-80%";
   for(let i=0;i<bar.length;i++){
      bar[i].classList.remove('barcheck');
      }
   r5.classList.add('barcheck');
   };
let magrin = +window.getComputedStyle(s1).marginLeft.slice(0, -2);
arrow1.onclick=function(){
   magrin += 20;
   if(magrin > 0){

      s1.style.marginLeft ="-80%";
      magrin = -80;

}
   else{s1.style.marginLeft = magrin + "%"; }
   k();
}
arrow2.onclick=function(){
   
   magrin -= 20;
   if(magrin < -80){
      s1.style.marginLeft ="0";
      magrin = 0;
}
   else{s1.style.marginLeft = magrin + "%"; }
   k();
}
r1.classList.add('barcheck')
let k = () =>{
   if(magrin == 0){
      for(let i=0;i<bar.length;i++){
         bar[i].classList.remove('barcheck');
         }
      r1.classList.add('barcheck')
   }
   else if(magrin == -20){
      for(let i=0;i<bar.length;i++){
         bar[i].classList.remove('barcheck');
         }
      r2.classList.add('barcheck');
      
   }
   else if(magrin == -40){
      for(let i=0;i<bar.length;i++){
         bar[i].classList.remove('barcheck');
         }
      r3.classList.add('barcheck');
   }
   else if(magrin == -60){
      for(let i=0;i<bar.length;i++){
         bar[i].classList.remove('barcheck');
         }
      r4.classList.add('barcheck');
   }
   else if(magrin == -80){
      for(let i=0;i<bar.length;i++){
         bar[i].classList.remove('barcheck');
         }
      r5.classList.add('barcheck');
   }
}


