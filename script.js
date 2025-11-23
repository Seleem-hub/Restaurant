// ========= SMOOTH SCROLLING =========
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ========= NAVBAR SCROLL SHADOW =========
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

// ========= ACTIVE LINK HIGHLIGHT =========
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active-link");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active-link");
        }
    });
});

// ========= SCROLL-TO-TOP BUTTON =========
const topBtn = document.createElement("div");
topBtn.innerHTML = "⬆";
topBtn.classList.add("top-button");
document.body.appendChild(topBtn);

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }
});