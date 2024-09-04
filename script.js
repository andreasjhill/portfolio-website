function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.getElementById('scroll-arrow').addEventListener('click', function() {
    const sections = document.querySelectorAll('section');
    const currentSection = Array.from(sections).findIndex(section => 
        section.getBoundingClientRect().top >= 0
    );

    if (currentSection < sections.length - 1) {
        sections[currentSection + 1].scrollIntoView({ behavior: 'smooth' });
    }
});

