// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ================= STICKY HEADER EFFECT =================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {
        header.style.background = "rgba(0,0,0,0.95)";
        header.style.boxShadow = "0 5px 20px rgba(176,38,255,0.3)";
    }
    else {
        header.style.background = "rgba(0,0,0,0.7)";
        header.style.boxShadow = "none";
    }

});


// ================= SCROLL REVEAL =================

const sections = document.querySelectorAll("section");

const reveal = () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            section.classList.add("show");
        }

    });

};

window.addEventListener("scroll", reveal);
reveal();


// ================= COUNTER ANIMATION =================

const counters = document.querySelectorAll(".stat-box h2");

const startCounters = () => {

    counters.forEach(counter => {

        const text = counter.innerText;
        const target =
            parseInt(text.replace(/\D/g, ""));

        let count = 0;

        const update = () => {

            count += Math.ceil(target / 100);

            if (count < target) {

                if (text.includes("%")) {
                    counter.innerText = count + "%";
                }
                else {
                    counter.innerText = count + "+";
                }

                requestAnimationFrame(update);
            }
            else {
                counter.innerText = text;
            }

        };

        update();

    });

};

let counted = false;

window.addEventListener("scroll", () => {

    const stats =
        document.querySelector(".stats");

    const top =
        stats.getBoundingClientRect().top;

    if (top < window.innerHeight && !counted) {
        counted = true;
        startCounters();
    }

});


// ================= TESTIMONIAL SLIDER =================

const testimonials =
    document.querySelectorAll(".testimonials .card");

let current = 0;

function testimonialSlider() {

    testimonials.forEach(card => {
        card.style.display = "none";
    });

    testimonials[current].style.display = "block";

    current++;

    if (current >= testimonials.length) {
        current = 0;
    }
}

if (testimonials.length > 0) {

    testimonialSlider();

    setInterval(() => {
        testimonialSlider();
    }, 4000);

}


// ================= BACK TO TOP BUTTON =================

const topBtn =
document.createElement("button");

topBtn.innerHTML =
'<i class="fas fa-arrow-up"></i>';

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        topBtn.classList.add("show-top");
    }
    else {
        topBtn.classList.remove("show-top");
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================= FLOATING MUSIC NOTES =================

for (let i = 0; i < 20; i++) {

    const note =
        document.createElement("div");

    note.classList.add("music-note");

    note.innerHTML = "♪";

    note.style.left =
        Math.random() * 100 + "vw";

    note.style.animationDuration =
        (5 + Math.random() * 10) + "s";

    note.style.fontSize =
        (15 + Math.random() * 30) + "px";

    document.body.appendChild(note);

}