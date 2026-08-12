// slider
    document.addEventListener("DOMContentLoaded", function () {

        let track = document.getElementById("cardsTrack");
        let prevBtn = document.getElementById("prevBtn");
        let nextBtn = document.getElementById("nextBtn");

        let dots = document.querySelectorAll(".dot");

        let originalCards = Array.from(
            document.querySelectorAll(".testimonial-card")
        );

        let currentIndex = 0;

        let autoSlide;


        originalCards.forEach(function (card) {

            let clone = card.cloneNode(true);

            track.appendChild(clone);

        });


        let allCards =
            track.querySelectorAll(".testimonial-card");


        function getGap() {

            if (window.innerWidth <= 680) {
                return 20;
            }

            return 26;
        }


        function moveSlider(index, animate = true) {

            let cardWidth = allCards[0].getBoundingClientRect().width;

            let gap = getGap();

            let move = (cardWidth + gap) * index;


            if (animate) {

                track.style.transition = "transform 0.6s ease";

            } else {

                track.style.transition = "none";

            }


            track.style.transform = "translateX(-" + move + "px)";


            dots.forEach(function (dot) {

                dot.classList.remove("active");

            });


            dots[index % 4].classList.add("active");

        }


        function nextSlide() {

            currentIndex++;

            moveSlider(currentIndex);

            if (currentIndex === 4) {

                setTimeout(function () {

                    currentIndex = 0;

                    moveSlider(0, false);

                }, 3000);

            }

        }

        function previousSlide() {

            if (currentIndex === 0) {

                currentIndex = 4;

                moveSlider(4, false);


                setTimeout(function () {

                    currentIndex = 3;

                    moveSlider(3);

                }, 3000);

            } else {

                currentIndex--;

                moveSlider(currentIndex);

            }

        }


        nextBtn.addEventListener(
            "click",
            function () {

                nextSlide();

                restartAutoSlide();

            }
        );


        prevBtn.addEventListener(
            "click",
            function () {

                previousSlide();

                restartAutoSlide();

            }
        );


        dots.forEach(function (dot) {

            dot.addEventListener(
                "click",
                function () {

                    let index =
                        Number(
                            dot.getAttribute("data-index")
                        );


                    currentIndex = index;

                    moveSlider(currentIndex);

                    restartAutoSlide();

                }
            );

        });



        function startAutoSlide() {

            autoSlide = setInterval(
                function () {

                    nextSlide();

                },
                3000
            );

        }


        function stopAutoSlide() {

            clearInterval(autoSlide);

        }

        
        function restartAutoSlide() {

            stopAutoSlide();

            startAutoSlide();

        }

        let slider = document.querySelector(".testimonial-slider");


        slider.addEventListener(
            "mouseenter",
            function () {

                stopAutoSlide();

            }
        );


        slider.addEventListener(
            "mouseleave",
            function () {

                startAutoSlide();

            }
        );


        window.addEventListener(
            "resize",
            function () {

                moveSlider(
                    currentIndex,
                    false
                );

            }
        );

        moveSlider(0, false);

        startAutoSlide();

    });
// slider end

// stats
let stats1 = document.getElementById("stats1");
let stats2 = document.getElementById("stats2");
let stats3 = document.getElementById("stats3");
let stats4 = document.getElementById("stats4");


let first = 0;
let second = 0;
let third = 0;
let forth = 0;


let target1 = 18500;
let target2 = 142;
let target3 = 97;
let target4 = 15;


function counter() {

    if (first < target1) {

        first += 100;

        if (first > target1) {
            first = target1;
        }

        stats1.innerText = first.toLocaleString();

    }

    if (second < target2) {

        second++;

        stats2.innerText = second;

    }

    if (third < target3) {

        third++;

        stats3.innerText = third;

    }

    if (forth < target4) {

        forth++;

        stats4.innerText = forth;

    }

    if (first < target1 || second < target2 || third < target3 || forth < target4) {

        setTimeout(counter, 10);

    }

}

counter();

// stats end


// preloader

window.addEventListener("load", function () {

    setTimeout(function () {

        let preloader = document.getElementById("preloader");

        preloader.classList.add("hide");

    }, 300);

});


    // navbar items
let menuBtn = document.getElementById("menuBtn");
let navLinks = document.getElementById("navLinks");

menuBtn.addEventListener('click',()=>{
    navLinks.classList.toggle("show");
});

// more page dropdown1
let dropdown = document.querySelector(".dropdown");
let dropdownLink = document.querySelector(".dropdown-link");

dropdownLink.addEventListener("click", (e) => {

    e.preventDefault();

    dropdown.classList.toggle("active");
});