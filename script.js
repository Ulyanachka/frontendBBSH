// получаем кнопку и контейнер для выпадающего меню
const menuButton = document.getElementById('menu');
const menuContainer = document.getElementById('menu-container');

// добавляем обработчик события клика на кнопку
menuButton.addEventListener('click', function() {
    // показываем или скрываем контейнер выпадающего меню
    menuContainer.style.display = menuContainer.style.display === 'block' ? 'none' : 'block';
});
