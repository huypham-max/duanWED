// Toggle menu
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.querySelector('.side-menu .close-btn');

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            sideMenu.classList.toggle('active');
            menuToggle.classList.toggle('active'); // đổi icon khi mở
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            sideMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    }

    // Slider
    let slides = document.querySelectorAll('.slide');
    let dotsContainer = document.querySelector('.dots');
    let prevBtn = document.querySelector('.prev');
    let nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    // Tạo dots
    slides.forEach((_, index) => {
        let dot = document.createElement('span');
        dot.addEventListener('click', () => showSlide(index));
        dotsContainer.appendChild(dot);
    });

    let dots = document.querySelectorAll('.dots span');

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        });
    }

    showSlide(0);

    // Tự động chuyển slide
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 5000);
});
