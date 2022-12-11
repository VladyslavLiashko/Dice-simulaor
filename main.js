let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let cubik = document.querySelector(".cubik");
let wrapperInner = document.querySelector(".wrapper-inner")

let form = document.forms[0];

let spin = document.querySelector("#spin")

let throwBtn = document.querySelector("button");

throwBtn.addEventListener("click", function () {
    let allImg = document.querySelectorAll("img")
    for (let index of allImg) {
        index.style.display = "none";
    };
    spin.style.display = "block";

    let randomValue = Math.floor(Math.random() * 7);
    console.log(randomValue);

    setTimeout(function () {
        switch (randomValue) {
            case 0:
                for (let index of allImg) {
                    index.style.display = "none";
                };
                one.style.display = "block";
            case 1:
                for (let index of allImg) {
                    index.style.display = "none";
                };
                one.style.display = "block";
                break;
            case 2:
                for (let index of allImg) {
                    index.style.display = "none";
                };
                two.style.display = "block";
                break;
            case 3:
                for (let index of allImg) {
                    index.style.display = "none";
                };
                three.style.display = "block";
                break;
            case 4:
                for (let index of allImg) {
                    index.style.display = "none";
                };
                four.style.display = "block";
                break;
            case 5:
                for (let index of allImg) {
                    index.style.display = "none";
                };
                five.style.display = "block";
                break;
            case 6:
                for (let index of allImg) {
                    index.style.display = "none";
                };
                six.style.display = "block";
                break;
        }
    }, 2000)
});

// Два кубика

// form.addEventListener("submit", function(){
//     if(form.numberInp.value == 2){
//         wrapperInner.style.display = "flex"
//         let second = cubik.cloneNode(true)
//         wrapperInner.append(second);
//     }
// })