document.addEventListener('DOMContentLoaded', function () { //вся HTML-страница будет полностью загружена и готова к работе, тогда ког будет выполняться
  const toggleButton = document.getElementById('menu-toggle'); // получаем кнопку бургер-меню по её ID
  const navMenu = document.querySelector('.nav'); //находим навигационное меню по классу.

  toggleButton.addEventListener('click', function () {
    navMenu.classList.toggle('active'); // переключает (добавляет/удаляет) класс active у меню при каждом клике на кнопку.
  });
});

document.getElementById("downloadBtn").addEventListener("click", function () {

  // Создаём невидимую ссылку и "кликаем" по ней
  const link = document.createElement("a"); // получаем кнопку скачивания по ID.
  link.href = "downloads/quiz.pdf"
  link.download = "quiz.pdf"; // Без этого файл может открыться вместо скачивания!
  document.body.appendChild(link);//
  link.click();//программно "кликаем" по ссылке, запуская скачивание
  document.body.removeChild(link);//удаляем ссылку из DOM после скачивания
});
