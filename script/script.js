///1
const myslide = document.querySelectorAll('.myslide');
let counter = 1;
slidefun(counter);

function plusSlides(n) {
    counter += n;
    slidefun(counter);
    resetTimer();
}

function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
}

function slidefun(n) {

    let i;
    for (i = 0; i < myslide.length; i++) {
        myslide[i].style.display = "none";
    }

    if (n > myslide.length) {
        counter = 1;
    }

    if (n < 1) {
        counter = myslide.length;
    }

    myslide[counter - 1].style.display = "block";
}
///1

///2
myslide2 = document.querySelectorAll('.myslide2');

let counter2 = 1;

slidefun2(counter2);

function plusSlides2(m) {
    counter2 += m;
    slidefun2(counter2);
    resetTimer();
}

function currentSlide2(m) {
    counter2 = m;
    slidefun2(counter2);
    resetTimer();
}

function slidefun2(m) {


    let e;
    for (e = 0; e < myslide2.length; e++) {
        myslide2[e].style.display = "none";
    }

    if (m > myslide2.length) {
        counter2 = 1;
    }

    if (m < 1) {
        counter2 = myslide2.length;
    }

    myslide2[counter2 - 1].style.display = "block";
}
///2

///3
myslide3 = document.querySelectorAll('.myslide3');

let counter3 = 1;

slidefun3(counter3);

function plusSlides3(b) {
    counter3 += b;
    slidefun3(counter3);
    resetTimer();
}

function currentSlide3(b) {
    counter3 = b;
    slidefun3(counter3);
    resetTimer();
}

function slidefun3(b) {


    let u;
    for (u = 0; u < myslide3.length; u++) {
        myslide3[u].style.display = "none";
    }

    if (b > myslide3.length) {
        counter3 = 1;
    }

    if (b < 1) {
        counter3 = myslide3.length;
    }

    myslide3[counter3 - 1].style.display = "block";
}
///3