'use strict';


const body = document.querySelector('body'),
      bodyTest = document.querySelector('.bodyTest'),
      boostrap = document.querySelector('#carouselExampleSlidesOnly'),
      main3_out = document.querySelector('#main3_out'),
      dvig = document.querySelector('#dvig'),
      anim = document.querySelector('#anim'),
      audio = document.querySelector('#audio'),
      P_lastGame = document.querySelector('#P_lastGame'),
      StorageJS = document.querySelector('.localStorage'),
      input_gl = document.querySelector('#input_gl');


let sum,
    testik,
    countExample,
    i_otvle4enie = 0,
    idAnim,
    i = 0,
    end = 0,
    pos = 0,
    viborObject,
    start,
    year,
    month,
    day,
    endTime,
    raznica,
    minutes, 
    seconds,
    otvle4enie = false,
    sumOtvle4enie,
    countMinus = 0;



class Symbols {
    constructor(name, count, see) {
        this.name = name;
        this.count = count;
        this.see = see;
    }

}

let arrIcons = [
    '&#127853;', '&#127774;', '&#129418;', 
    '&#128060;', '&#128293;', '&#129365;',
    '&#127850;', '&#128138;', '&#128213;',
    '&#128641;', '&#128308;', '&#127839;',
    '&#128125;', '&#128031;', '&#128056;',
    '&#128684;', '&#128052;', '&#128058;',
    '&#9924;', '&#127945;', '&#127817;'
];

function randIcons() {
    let randomWhy = randomInteger(0, arrIcons.length - 1); // рандомное число 
    let zna4Arr = arrIcons[randomWhy]; // вытаскиваем из массива значение массива
    arrIcons.splice(randomWhy, 1); // удаляем значение из массива
    return zna4Arr;
}

DarkTheme();
function DarkTheme() {
    var date = new Date();
    if (date.getHours() > 18 || date.getHours() < 5) {
        document.body.style.background = '#202124';
        bodyTest.style.background = '#303134';
        dvig.style.color = '#fff';
        main3_out.style.color = '#fff';
        P_lastGame.style.color  = '#fff';
    }
}

    
const hotDog = new Symbols(randIcons(), randomInteger(1, 17), true),
      poganka = new Symbols(randIcons(), randomInteger(1, 17), true),
      hallowen = new Symbols(randIcons(), randomInteger(1, 17), true),
      home = new Symbols(randIcons(), randomInteger(1, 17), true),
      konfeta = new Symbols(randIcons(), randomInteger(1, 17), true),
      znak = new Symbols(randIcons(), randomInteger(1, 17), true),
      sun = new Symbols(randIcons(), randomInteger(1, 17), true);



let arrSimvols = [hotDog, poganka, hallowen, home, znak, konfeta, sun];
let arrNoShow = [];
for (let a = 0; a < 6; a++) {
    // console.log('a = ' + arrSimvols[a].count);
    // console.log('a + 1 = ' + arrSimvols[a + 1].count);
    // console.log('\n');
    arrNoShow.unshift(arrSimvols[a].count);
    arrNoShow.forEach(element => {
        if (arrSimvols[a + 1].count == element) {
            while (arrSimvols[a + 1].count == element) {
                arrSimvols[a + 1].count = randomInteger(1, 20);
            }
        }
    });
}


arrSimvols.sort((a, b) => a.count > b.count ? 1 : -1)
console.dir(arrSimvols);

function test(num, numTwo) {
    if (i >= 1) {
        if (i <= countExample) {
            let plusOrMinus = randomInteger(1,2);
            // let otle4enieRandom = randomInteger(1,3);


            if (plusOrMinus == 1 && sum > 40) {  // если в рандоме выпало 1 - минус и сумма больше 40
                console.log(dvig);
                countMinus++;
                let otle4enieRandom = randomInteger(1,3);

                if (countMinus >= 8 && otle4enieRandom == 1) {
                    otvle4enie = true;
                    // i_otvle4enie++;
                    let symbolOne = randomInteger(0,6);
                    let symbolTwo = randomInteger(0,6);

                    dvig.style.border = '2px solid black';
                    dvig.style.borderRadius = '7px';
                    dvig.innerHTML = `${arrSimvols[symbolOne].name} + ${arrSimvols[symbolTwo].name}`;
    
                    sumOtvle4enie = arrSimvols[symbolOne].count + arrSimvols[symbolTwo].count;
                    console.log(sumOtvle4enie);

                } else {
                    viborObject = randomInteger(4,6);
                    if (arrSimvols[viborObject].see == true) {
                        main3_out.innerHTML = `${arrSimvols[viborObject].name} = ${arrSimvols[viborObject].count}`;
                    }
                    dvig.innerHTML = `&#127804; - ${arrSimvols[viborObject].name}`;
                    sum = sum - arrSimvols[viborObject].count;
                }
  
            } else { // плюс
                viborObject = randomInteger(0,3);
                if (arrSimvols[viborObject].see == true) {
                    main3_out.innerHTML = `${arrSimvols[viborObject].name} = ${arrSimvols[viborObject].count}`;
                }
                dvig.innerHTML = `&#127804; + ${arrSimvols[viborObject].name}`;
                sum = sum + arrSimvols[viborObject].count;
            }
            arrSimvols[viborObject].see = false;
            // console.log(arrSimvols);
            console.log(sum)
        } else { 
            input_gl.style.display = 'none';
            main3_out.remove();
            dvig.innerHTML = `Все братик`;



            let data = new Date();
            let dataEnd = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} - `;
            localStorage.setItem(dataEnd, countExample);
        }
    } else {
        dvig.innerHTML = `&#127804;  =  ${num} + ${numTwo}`;
        sum = num + numTwo;
    }
}


function testAnim() {
    dvig.animate({
        opacity: [0, 1]
    }, 800);
    main3_out.animate({
        opacity: [0, 1]
    }, 800);
}


    // testik = dvig.animate([
    //     {opacity: [0, .1]}
    //     // {transform: 'opacity(0.1)'},
    //     // {transform: 'opacity(0.8)'},
    //     // {transform: 'opacity(1)'}
    // ], 
    // {
    //     duration: 700,
    //     iterations: Infinity
    // }) 
    




//functions
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}






// function myAnimation() {
//     // if (pos > 5) {
//     //     idAnim = requestAnimationFrame(myAnimation);
//     // }
//     // pos = pos - 8;
//     // dvig.style.bottom = `${pos}px`;
//     // if (pos <= 5) {
//     //     pos = 200;
//     //     cancelAnimationFrame(idAnim);
//     // }

//     if (pos < 1) {
//         idAnim = requestAnimationFrame(myAnimation);
//     }
//     pos = pos + 0.01;
//     dvig.style.opacity = `${pos}`;
//     main3_out.style.opacity = `${pos}`;
//     if (pos >= 1) {
//         pos = 0;
//         cancelAnimationFrame(idAnim);
//     }
// }

anim.addEventListener('click', () => {
    boostrap.remove();
    anim.remove();
    StorageJS.style.display = 'none';
    P_lastGame.style.display = 'none';
    countExample = input_gl.value;
    input_gl.value = ''; 
    input_gl.focus(); 
    test(randomInteger(2,10), randomInteger(2,10));
    testAnim();
    // testAnim();
    // myAnimation();
});



input_gl.addEventListener('input', () => {

    if (otvle4enie == true && input_gl.value == sumOtvle4enie) {
        dvig.style.border = 'none';
        otvle4enie = false;
        audio.play();
        clear();
    } else {
        if (input_gl.value == sum) {
            audio.play();
            clear();
        }
    }
});



function clear() {
    input_gl.value = '';
    main3_out.innerHTML = '';
    i++;
    test();
    testAnim();
    // myAnimation();
    // test();
}

// function resultTime() {
//     year = start.getFullYear();
//     month = start.getMonth();
//     day = start.getDate();

//     endTime = new Date();

//     // raznica = endTime - start;
//     minutes = Math.floor((endTime - start / 1000 / 60) % 60);
//     seconds = Math.floor((endTime - start / 1000) % 60);
// }

getData();

function getData() {
    if (localStorage.length) {
        // for (let a = 0; a < localStorage.length; a++)
        for (let a = localStorage.length - 1; a >= 0 ; a--) {
            console.log(localStorage.key(a));
            let key = localStorage.key(a);
            console.log(key + localStorage.getItem(`${key}`));
            StorageJS.innerHTML += "<p>" + key + ' ' + localStorage.getItem(`${key}`) + "</p>";
        }
    }
}

