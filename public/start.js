'use strict';
moment.locale('ru');



const body = document.querySelector('body'),
      bodyTest = document.querySelector('.bodyTest'),
      boostrap = document.querySelector('.div_test'),
      main3_out = document.querySelector('#main3_out'),
      dvig = document.querySelector('#dvig'),
      anim = document.querySelector('#anim'),
      audio = document.querySelector('#audio'),
      P_lastGame = document.querySelector('#P_lastGame'),
      StorageJS = document.querySelector('.localStorage'),
      input_gl = document.querySelector('#input_gl'),
      testSel = document.querySelector('#testSel'),
      select = document.querySelector('select'),
      counterHTML = document.querySelector('#counter');


let sum,
    testik,
    countExample,
    i_otvle4enie = 0,
    otvle4enieCounter = 0,
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
    sumOtvle4enieTwo = 0,
    otvle4enie2 = false,
    otvle4enieCount = 0,
    isDark = false,
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
    '&#9924;', '&#127945;', '&#127817;',
    '&#128151;', '&#128081;', '&#129412;',
    '&#128048;', '&#128020', '&#128169;',
    '&#127951;', '&#127918;', '&#127795;'
];


// let dfasd = {
//     one: 1,
//     two: 2,
//     three: 3
// }


// for (let key in dfasd) {
//     bodyTest.innerHTML += `<button>${dfasd[key]}</button>`;
//     // console.log(dfasd[key]);
// }




// let das = [
//     fdas,
//     dsa,
//     ytr
// ];


// das.forEach(element => {
//     bodyTest.innerHTML += `<button>${element}</button>`;

// });


// let popp = document.querySelectorAll('button');
// for (i = 1; i < popp.length; i++) {
//     console.log(i);
//     console.log(popp[i]);
//     popp[i].addEventListener('click', function(e) {
//         console.log(e.target.innerText);
//         console.log(dfasd.one);
//         if (e.target.innerText == dfasd.one) console.log('Равно 5');
//   });
// }
// console.log(popp);


// document.querySelector("#submit").onclick = function(e){
//     console.log(e.target.innerText);
// }



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
        isDark = true;
        document.body.style.background = '#202124';
        bodyTest.style.background = '#303134';
        dvig.style.color = '#fff';
        main3_out.style.color = '#fff';
        P_lastGame.style.color  = '#fff';
        counterHTML.style.color = '#fff';
        testSel.style.background = 'rgb(48, 49, 52)';
        select.style.color = '#fff';
    }
}

    
const hotDog = new Symbols(randIcons(), randomInteger(1, 17), true),
      poganka = new Symbols(randIcons(), randomInteger(1, 17), true),
      hallowen = new Symbols(randIcons(), randomInteger(1, 17), true),
      home = new Symbols(randIcons(), randomInteger(1, 17), true),
      konfeta = new Symbols(randIcons(), randomInteger(1, 15), true),
      znak = new Symbols(randIcons(), randomInteger(1, 15), true),
      sun = new Symbols(randIcons(), randomInteger(1, 15), true);

let arrSimvols = [hotDog, poganka, hallowen, home, znak, konfeta, sun];



let arrNoShow = [];
for (let a = 0; a < 6; a++) {
    arrNoShow.unshift(arrSimvols[a].count);
    arrNoShow.forEach(element => {
        if (arrSimvols[a + 1].count == element) {
            while (arrSimvols[a + 1].count == element) {
                arrSimvols[a + 1].count = randomInteger(1, 20);
            }
        }
    });
}


// arrSimvols.sort((a, b) => a.count > b.count ? 1 : -1)
console.dir(arrSimvols);


console.log(dvig.style);

function test(num, numTwo) {
    if (i >= 1) {
        if (i <= countExample) {
            let plusOrMinus = randomInteger(1,2);

            if (plusOrMinus == 1 && sum > 60) {  // если в рандоме выпало 1 - минус и сумма больше 40
                countMinus++;
                let otle4enieRandom = randomInteger(1,8);

                if (countMinus >= 8 && otle4enieRandom == 8) {
                    otvle4enie = true;

                    otvle4enieCounter++;

                    let symbolOne = randomInteger(0,6);
                    let symbolTwo = randomInteger(0,6);

                    if (isDark) {
                        dvig.style.border = '3px solid white';
                    } else {
                        dvig.style.border = '3px solid black';
                    }
                    dvig.style.borderRadius = '7px';
                    dvig.style.animation = 'pulse';
                    dvig.style.animationDuration = '2s';
                    dvig.style.animationIterationCount = '25';
                    // dvig.style.animation = 'pulse'; animate__infinite	infinite

                    if (plusOrMinus == 1) {
                        dvig.innerHTML = `${arrSimvols[symbolOne].name} + ${arrSimvols[symbolTwo].name}`;
    
                        sumOtvle4enie = arrSimvols[symbolOne].count + arrSimvols[symbolTwo].count;
                    } else {
                        dvig.innerHTML = `${arrSimvols[symbolOne].name} - ${arrSimvols[symbolTwo].name}`;
    
                        sumOtvle4enie = arrSimvols[symbolOne].count - arrSimvols[symbolTwo].count;
                    }


                    otvle4enieCount = sumOtvle4enie + sumOtvle4enieTwo;

                    console.log('sumOtvle4enie = ' + sumOtvle4enie);
                    console.log('sumOtvle4enieTwo = ' + sumOtvle4enieTwo);
                    console.log('otvle4enieCount = ' + otvle4enieCount);
                    

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
            console.log('otvle4enieCounter ' + otvle4enieCounter);
            // let sdasd = [
            //     otvle4enieCounter,
            //     otvle4enieCounter - 1, 
            //     otvle4enieCounter + 1
            // ];

            

            input_gl.style.display = 'none';
            main3_out.remove();
            dvig.innerHTML = `Все братик`;
            sendData();
            
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

//functions
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}


anim.addEventListener('click', () => {
    console.log('aga');
    boostrap.remove();
    anim.remove();
    StorageJS.style.display = 'none';
    P_lastGame.style.display = 'none';
    countExample = input_gl.value;
    input_gl.value = ''; 
    input_gl.focus(); 
    test(randomInteger(2,10), randomInteger(2,10));
    counterHTML.style.display = 'flex';
    counterHTML.innerHTML = i + '/' + countExample;


    testAnim();
    // testAnim2();
    // testAnim();
    // myAnimation();
});



input_gl.addEventListener('input', () => {



    if (otvle4enie == true) {
        if (input_gl.value == otvle4enieCount) {
            sumOtvle4enieTwo = sumOtvle4enie;
            dvig.style.border = 'none';
            dvig.style.animation = '';
            otvle4enie = false;
            audio.play();
            clear();
        }
    } else {
        if (input_gl.value == sum) {
            audio.play();
            clear();
        }
    }






    // if (otvle4enie == true) {
    //     if (otvle4enie2 == true) {
    //         if (input_gl.value == otvle4enieCount) {
    //             // sumOtvle4enieTwo = sumOtvle4enie;
    //             sumOtvle4enieTwo = sumOtvle4enie;
    //             dvig.style.border = 'none';
    //             dvig.style.animation = '';
    //             otvle4enie = false;
    //             otvle4enie2 = false;
    //             audio.play();
    //             clear();
    //         }
    //     } else {
    //         if (input_gl.value == sumOtvle4enie) {
    //             sumOtvle4enieTwo = sumOtvle4enie;
    //             dvig.style.border = 'none';
    //             dvig.style.animation = '';
    //             otvle4enie = false;
    //             otvle4enie2 = false;
    //             audio.play();
    //             clear();
    //         }
    //     }
    // } else {
    //     if (input_gl.value == sum) {
    //         audio.play();
    //         clear();
    //     }
    // }




    // if (otvle4enie == true && input_gl.value == sumOtvle4enie) {
    //     sumOtvle4enieTwo = sumOtvle4enie;
    //     dvig.style.border = 'none';
    //     dvig.style.animation = '';
    //     otvle4enie = false;
    //     audio.play();
    //     clear();
    // } else {
    //     if (input_gl.value == sum) {
    //         audio.play();
    //         clear();
    //     }
    // }
});



// input_gl.addEventListener('input', () => {

//     if (otvle4enie == true && input_gl.value == sumOtvle4enie) {
//         sumOtvle4enieTwo = sumOtvle4enie;
//         dvig.style.border = 'none';
//         dvig.style.animation = '';
//         otvle4enie = false;
//         audio.play();
//         clear();
//     } else {
//         if (input_gl.value == sum) {
//             audio.play();
//             clear();
//         }
//     }
// });



function clear() {
    // console.log(dvig.className);
    counterHTML.innerHTML = i + '/' + countExample;
    input_gl.value = '';
    main3_out.innerHTML = '';
    i++;
    test();
    testAnim();
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





async function sendData() {

    let user = {
      datevalue: moment(),
      gameCount: countExample
    };

    let response = await fetch('http://localhost:4444/', {
    method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    });


    console.log(user);
    console.log(JSON.stringify(user));

    console.dir('response= ' + response);
    console.log(typeof(response));
   
    let result = await response.json();
    console.log('result = ' + result);
}


