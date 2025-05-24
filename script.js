document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('.nav');

  toggleButton.addEventListener('click', function () {
    navMenu.classList.toggle('active');
  });
});

document.getElementById("downloadBtn").addEventListener("click", function () {

  // Создаём невидимую ссылку и "кликаем" по ней
  const link = document.createElement("a");
  link.href = "quiz.pdf"
  link.download = "quiz.pdf"; // Без этого файл может открыться вместо скачивания!
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
