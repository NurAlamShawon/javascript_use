var slide = document.querySelectorAll(".element");
var count = 1;

    setInterval(() => {
        var current = document.querySelector(".current");
        count++;
        current.classList.remove("current");
        if (count > slide.length) {
            slide[0].classList.add("current");
        } else {
    
            current.nextElementSibling.classList.add("current");
        }
    
    
    }, 2000)

   


