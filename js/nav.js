const bookingButton = document.getElementById('booking-button');
const popupOverlay = document.getElementById('popup-overlay');
const closePopupButton = document.getElementById('close-popup');
const popupContent = document.querySelector('.popup-content');

function openPopup() {
    popupOverlay.style.display = 'flex';

    // Принудительная инициализация прокрутки
    setTimeout(() => {
        // 1. Фокусируем элемент
        popupContent.focus();

        // 2. Минимум прокрутки для активации
        popupContent.scrollTop = 1;

        // 3. Триггер перерисовки для iOS
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            popupContent.style.transform = 'translateZ(0)';
            popupContent.offsetHeight;
        }

        // 4. Проверка готовности прокрутки
        checkScrollReady();
    }, 50);
}

function checkScrollReady() {
    // Проверяем, можно ли прокручивать
    if (popupContent.scrollHeight > popupContent.clientHeight) {
        console.log('Прокрутка доступна');
    } else {
        console.log('Контент не требует прокрутки');
    }
}

function closePopup() {
    popupOverlay.style.display = 'none';
}

// Основные обработчики
bookingButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);

popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) closePopup();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePopup();
});

// Обработка тач-событий
popupContent.addEventListener('touchstart', (e) => {
    popupContent.startY = e.touches[0].clientY;
}, { passive: true });

popupContent.addEventListener('touchmove', (e) => {
    const currentY = e.touches[0].clientY;
    const diff = popupContent.startY - currentY;

    const atTop = popupContent.scrollTop <= 1;
    const atBottom = popupContent.scrollTop + popupContent.clientHeight >= popupContent.scrollHeight - 1;

    let canScroll = false;
    if (diff > 0 && !atBottom) canScroll = true;  // вниз
    if (diff < 0 && !atTop) canScroll = true;     // вверх

    if (!canScroll) {
        e.preventDefault();
    }
}, { passive: false });

// Блокировка скролла фона
popupOverlay.addEventListener('touchmove', (e) => {
    e.preventDefault();
}, { passive: false });
