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
