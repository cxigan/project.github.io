document.addEventListener('DOMContentLoaded', function () { //вся HTML-страница будет полностью загружена и готова к работе, тогда ког будет выполняться
  const toggleButton = document.getElementById('menu-toggle'); // получаем кнопку бургер-меню по её ID
  const navMenu = document.querySelector('.nav'); //находим навигационное меню по классу.

  toggleButton.addEventListener('click', function () {
    navMenu.classList.toggle('active'); // переключает (добавляет/удаляет) класс active у меню при каждом клике на кнопку.
  });
});

document.getElementById("downloadBtn").addEventListener("click", async function() {
  const fileUrl = 'quiz.pdf';
  const fileName = 'cybersecurity-quiz.pdf';
  const downloadBtn = this;
  
  try {
    // 1. Показываем индикатор загрузки
    downloadBtn.disabled = true;
    downloadBtn.textContent = 'Подготовка...';
    
    // 2. Проверяем доступность файла
    const response = await fetch(fileUrl, { 
      method: 'HEAD',
      cache: 'no-cache'
    });
    
    if (!response.ok) throw new Error('Файл не найден');
    
    // 3. Создаем ссылку с уникальным временным URL
    const link = document.createElement('a');
    const file = await fetch(fileUrl).then(r => r.blob());
    const tempUrl = URL.createObjectURL(file);
    
    link.href = tempUrl;
    link.download = fileName;
    link.style.display = 'none';
    
    // 4. Особые обработчики для мобильных устройств
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    document.body.appendChild(link);
    link.click();
    
    // 5. Чистка через таймаут (важно!)
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(tempUrl);
      downloadBtn.disabled = false;
      downloadBtn.textContent = 'Скачать квиз-игру';
    }, 1000);
    
  } catch (error) {
    console.error('Ошибка загрузки:', error);
    alert('Не удалось начать загрузку. Попробуйте позже или сообщите администратору.');
    downloadBtn.disabled = false;
    downloadBtn.textContent = 'Скачать квиз-игру';
  }
});
