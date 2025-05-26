document.addEventListener('DOMContentLoaded', function () { //вся HTML-страница будет полностью загружена и готова к работе, тогда ког будет выполняться
  const toggleButton = document.getElementById('menu-toggle'); // получаем кнопку бургер-меню по её ID
  const navMenu = document.querySelector('.nav'); //находим навигационное меню по классу.

  toggleButton.addEventListener('click', function () {
    navMenu.classList.toggle('active'); // переключает (добавляет/удаляет) класс active у меню при каждом клике на кнопку.
  });
});

document.getElementById("downloadBtn").addEventListener("click", function() {
  // Путь к файлу (убедитесь, что он правильный)
  const fileUrl = 'quiz.pdf';
  const fileName = 'cybersecurity-quiz.pdf'; // Можно задать другое имя для скачивания

  // Проверяем доступность файла перед скачиванием
  fetch(fileUrl, { method: 'HEAD' })
    .then(response => {
      if (response.ok) {
        // Файл доступен - начинаем скачивание
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        
        // Для надежности добавляем атрибут target
        link.setAttribute('target', '_blank');
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Освобождаем память (для blob-ссылок)
        setTimeout(() => URL.revokeObjectURL(link.href), 100);
      } else {
        throw new Error('Файл не найден');
      }
    })
    .catch(error => {
      console.error('Ошибка:', error);
      alert('Файл не доступен для скачивания. Пожалуйста, сообщите администратору.');
    });
});
