

let menu = document.querySelector(".commentBtn");
let wrapper = document.querySelector("#wrapper");
let closeBtn = document.querySelector('.close img');
let cCard = document.querySelectorAll('.c-card');
let cBtns = document.querySelectorAll('.c-btns button');
let navBtn = document.querySelectorAll('.nav-item .nav-b');
let historyBtn = document.querySelector('.historyBtn')



menu.addEventListener('click', () => {
    wrapper.classList.add('toggled');
});

closeBtn.addEventListener('click', () => {
    wrapper.classList.remove('toggled');

});


cCard.forEach(function (button) {
    button.addEventListener('click', function () {
        cCard.forEach(function (button) {
            button.classList.remove('c-active');
        });
        button.classList.add('c-active');
    });
})


cBtns.forEach(function (button) {
    button.addEventListener('click', function () {
        cBtns.forEach(function (button) {
            button.classList.remove('active');
        });
        button.classList.add('active');
    });
})

navBtn.forEach(function (button) {
    button.addEventListener('click', function () {
        navBtn.forEach(function (button) {
            button.classList.remove('active');
        });
        button.classList.add('active');
    });
});


let shareBtn = document.querySelector('.shareBtn button');
let model = document.querySelector('#shareModal');
let modal__close = document.querySelector('.modal__close');

shareBtn.addEventListener('click', () => {
    model.classList.add('display');
});
modal__close.addEventListener('click', () => {
    model.classList.remove('display');
});


let dd = document.querySelector('.dropdownCustom');

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('historyBtn')) {
        dd.classList.toggle('visible')
    }
})