// Реакция на клик на гамбургер: вариант через добавл/удал класса
// класс прописываем в CSS

const burgerFirstClick = document.querySelector("#idBurgerIcon"); // положили бургер-иконку в константу
const mainMenuGrid = document.querySelector("#idMainMenuGrid"); // положили главное боковое меню в константу
let newClass = "menu_visible"; // заводим переменную для имени нового класса и помещаем в нее название класса

burgerFirstClick.addEventListener("click", showMainMenu);

function showMainMenu() {
    //    if (mainMenuGrid.style.opacity == 0) {
    if (mainMenuGrid.classList.contains("menu_visible")) {
        // удаляем новый класс из элемента Главное меню, чтобы его скрыть
        mainMenuGrid.classList.remove(newClass);
        console.log(mainMenuGrid.classList.className);
    } else {
        // добавляем новый класс к элементу Главное меню, чтобы его отобразить и иннициируем opacity
        mainMenuGrid.classList.add(newClass);
    }
}
