

let menu = document.querySelector(".commentBtn");
let wrapper = document.querySelector("#wrapper");
let closeBtn = document.querySelector('.close img');
let cCard = document.querySelectorAll('.c-card');
let cBtns = document.querySelectorAll('.c-btns button');
let navBtn = document.querySelectorAll('.nav-item button');




menu.addEventListener('click', () => {
    wrapper.classList.add('toggled');
});

closeBtn.addEventListener('click', () => {
    wrapper.classList.remove('toggled');

});


for (let i = 0; i < cCard.length; i++) {
    cCard[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("c-active");
        current[0].className = current[0].className.replace(" c-active", "");
        this.className += " c-active";

    });
}

for (let i = 0; i < cBtns.length; i++) {
    cBtns[i].addEventListener("click", function () {
        let current = cBtns[i].getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";

    });
}

for (let i = 0; i < navBtn.length; i++) {
    navBtn[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";

    });
}


let shareBtn = document.querySelector('.shareBtn button');
let model = document.querySelector('#shareModal')
let modal__close = document.querySelector('.modal__close')

shareBtn.addEventListener('click', () => {
    model.classList.add('display')
});
modal__close.addEventListener('click', () => {
    model.classList.remove('display')
})