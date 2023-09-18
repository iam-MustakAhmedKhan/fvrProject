const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("active");
});

options.forEach(option => {
    option.addEventListener("click", () => {
        if (sBtn_text.innerHTML) {
            sBtn_text.innerHTML=''
            let selectedOption = option.querySelector(".option-text").innerText;
            let img = option.querySelector('.option img').cloneNode(true);

            sBtn_text.insertAdjacentElement('afterbegin', img);
            sBtn_text.innerHTML+=selectedOption
            optionMenu.classList.remove("active");
        }
        
    });
});