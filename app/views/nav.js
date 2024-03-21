var cancelBtn = document.querySelector(".fa-xmark");

var hamBtn = document.querySelector(".fa-bars");

var navLinks = document.querySelector(".nav-links");

hamBtn.addEventListener("click", ()=> {
    navLinks.classList.add("active")
})

cancelBtn.addEventListener("click", ()=> {
    navLinks.classList.remove("active")
})
