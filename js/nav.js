document.addEventListener("DOMContentLoaded", function () {
const button = document.getElementById("aparts");
let menu = null;

  // Функция для создания меню
  function createMenu() {
    menu = document.createElement("div");
    menu.id = "menu"; // id остался прежним (можно убрать, если не нужен)
    menu.className = "amenu"; // новый класс!

    const menuHTML = `
      <ul>
        <a href="arseniya.html"><li>Арсения</li></a>
        <a href="bogdan.html"><li>Богдана Хмельницкого</li></a>
        <a href="krasnyh.html"><li>Красных Зорь</li></a>
        <a href="lezhnevskaya.html"><li>Лежневская</li></a>
<!--        <li><a href="naumova.html">Наумова</a></li>-->
      </ul>
    `;

    menu.innerHTML = menuHTML;
    button.parentNode.insertBefore(menu, button.nextSibling);
  }

  // Переключение меню при клике на кнопку
  button.addEventListener("click", function (e) {
    e.stopPropagation();

    // Создаём меню при первом клике
    if (!menu) {
      createMenu();
    }

    // Переключаем класс show для плавного появления/скрытия
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    } else {
      menu.classList.add("show");
    }
  });

  // Скрываем меню при клике вне его
  document.addEventListener("click", function (e) {
    if (menu && !menu.contains(e.target) && e.target !== button) {
      menu.classList.remove("show");
    }
  });

  // Скрываем меню по Esc
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu) {
      menu.classList.remove("show");
    }
  });
});

// Функция для открытия всплывающего окна
function openPopup() {
    popupOverlay.style.display = 'flex';
}

// Функция для закрытия всплывающего окна
function closePopup() {
    popupOverlay.style.display = 'none';
}

// Обработчики событий
bookingButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);

// Закрытие окна при клике на оверлей (фон)
popupOverlay.addEventListener('click', function(event) {
    if (event.target === popupOverlay) {
        closePopup();
    }
});

// Закрытие окна по клавише Esc
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});

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
