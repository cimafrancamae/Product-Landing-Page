document.addEventListener("DOMContentLoaded", function () {

    // mobile menu
    
        const menuMobile = document.querySelector("#menu-mobile");
        const menu = document.querySelector("#menu");
    
        menuMobile.addEventListener("click", () => {
    
            console.log("click");
            console.log(menu);
    
            menuMobile.classList.toggle("active");
            menu.classList.toggle("mobile");
    
        })
    
        document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
            menuMobile.classList.remove("active");
            menu.classList.remove("mobile");
    
            console.log(menuMobile);
            console.log(menu);
        }) )
    
    // dark mode
    
        document.getElementById("dark-mode-toggle").addEventListener("click", () => {
            this.body.classList.toggle("dark-mode");
        })
    
    // header scroll
    
        window.addEventListener("scroll", () => {
    
            const header = document.getElementById("header");
    
            if(window.scrollY > 0) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        })
    
    // reviews slide
    
        const reviewSlides = document.querySelectorAll(".r-pair");
        let currentIndex = 0;
    
        function showSlide(index) {
            console.log(index);
            console.log(reviewSlides);
            reviewSlides.forEach((slide, i) => {
                if (i === index) {
                    slide.style.display = "flex";
                } else {
                    slide.style.display = "none";
                }
            })
        }
    
        function nextSlide() {
            currentIndex++;
            if(currentIndex >= reviewSlides.length) {
                currentIndex = 0;
            }
            showSlide(currentIndex);
        }
    
        showSlide(currentIndex);
        setInterval(nextSlide, 5000)
    
    })
    
    
    