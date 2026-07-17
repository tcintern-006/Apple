const hamburgerBtn = document.getElementById('hamburgerBtn');
const hamburgerIcon = document.getElementById('hamburgerIcon');
const navMenu = document.getElementById('navMenu');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    if (navMenu.classList.contains('active')) {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-xmark');
    } else {
        hamburgerIcon.classList.remove('fa-xmark');
        hamburgerIcon.classList.add('fa-bars');
    }
});