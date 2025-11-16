document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slider-item');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');

    const slideWidth = slides[0].offsetWidth; // Ширина одного слайда
    const visibleCount = 3; // Количество видимых слайдов
    let currentIndex = 0; // Текущий индекс

    // Функция для перемещения слайдера
    function moveSlider() {
        const offset = -currentIndex * slideWidth;
        sliderTrack.style.transform = `translateX(${offset}px)`;
    }

    // Обработчик кнопки "Вперёд"
    nextButton.addEventListener('click', function() {
        if (currentIndex < slides.length - visibleCount) {
            currentIndex++;
            moveSlider();
        }
    });

    // Обработчик кнопки "Назад"
    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            moveSlider();
        }
    });
});