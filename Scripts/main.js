
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));



let sidebar = document.querySelector("#sidebar");

sidebar.addEventListener('click', () => {
    sidebar.classList.toggle('active')
});


