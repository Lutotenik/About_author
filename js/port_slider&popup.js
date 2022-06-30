document.addEventListener("DOMContentLoaded", () => {
    // (!!!) Родительский эл-т портфолио, на котором все сиждется. Здесь начало магии с получением целевого эл-та, на котором произошло то или иное событие
    const mainWithPortfolio = document.querySelector(".main");
    // это массив фотографий
    const imagesPortfolio = document.querySelectorAll(".my-portfolio-image");
    // это массив ссылок (по кол-ву эл-ов == массиву фотографий)
    const linksPortfolio = document.querySelectorAll(
        ".my-portfolio-content__link"
    );
    // Кнопки
    const buttonPrev = document.querySelector(".button-prev");
    const buttonNext = document.querySelector(".button-next");
    // создание переменной с именем класса для визуализации вообще любого блока (см.применение в CSS)
    const visibleClass = "visible";
    // номер последнего эл-та в массиве портфолио
    const lastNumberArray = imagesPortfolio.length - 1;
    // созд. переменной с элементом - окошко просмотра фотографий
    let slideShow = document.querySelector(".slide-show");
    // задание новых атрибутов в тэгах <a> эл-ов портфолио, которые задают их нумерацию
    let i = 0;
    linksPortfolio.forEach((item) => {
        item.setAttribute("element-number", i++);
    });

    let indexArrayPortfolio = 0;
    // создание слушателя события для получения данных по целевому эл-ту портфолио после клика на эл-т (в нашем случае, эл-т = тэг <a> - затемненный линк в верхнем слое) my-portfolio-content__link.
    // Далее идет сохранение номера эл-та портфолио при клике на его затемненный линк <a>, находящийся в верхнем слое - через свойство target интерфейса Event: event.target - возвращает целевой эл-т, на котором призошло событие в родительском контейнере main.
    mainWithPortfolio.addEventListener("click", (event) => {
        indexArrayPortfolio = event.target.getAttribute("element-number");
        // получаем путь расположения конкретной фотографии на диске
        let srcValue = imagesPortfolio[indexArrayPortfolio].getAttribute("src");

        slideShow.setAttribute("src", srcValue); // установка нового адреса в слайдере

        initPopup(); // popup вызывается первым, после обаботки реакции на клик на эл-т портфолио
    });

    initSlider(); // слайдер вызывается последним, после совместной обработки кликов на эл-нт и открытия popap, т.к. эл-ты управления (стрелки) появляются только в popap

    // Б Л О К   В Н У Т Р Е Н Н И Х   Ф У Н К Ц И Й

    // контроль за порядковым номером выбранного эл-та портфолио для визуализации кнопок/стрелок перемещения по слайдеру
    function checkButtons() {
        // управляем видимостью кнопки Prev
        if (indexArrayPortfolio == 0) {
            buttonPrev.classList.remove(visibleClass);
        } else {
            buttonPrev.classList.add(visibleClass);
        }

        // управляем видимостью кнопки Next
        if (indexArrayPortfolio == lastNumberArray) {
            buttonNext.classList.remove(visibleClass);
        } else {
            buttonNext.classList.add(visibleClass);
        }
    }

    function initSlider() {
        checkButtons();
        
        buttonPrev.addEventListener("click", () => {
            // значением является функция которая указана в {}
            indexArrayPortfolio--;
            srcValue = imagesPortfolio[indexArrayPortfolio].getAttribute("src");
            slideShow.setAttribute("src", srcValue);
            checkButtons();
            console.log("prev");
        });

        buttonNext.addEventListener("click", () => {
            indexArrayPortfolio++;
            srcValue = imagesPortfolio[indexArrayPortfolio].getAttribute("src");
            slideShow.setAttribute("src", srcValue);
            checkButtons();
            console.log("next");
        });
    }

    function initPopup() {
        // заводим все элементы popup в константу
        const openPopupElements = document.querySelectorAll(".overlay, .popup");

        checkButtons();
        // при нажатии на выбранную фотографию в списке (затемненную) - все эл-ты popup делаем видимыми
        openPopupElements.forEach((element) => {
            element.classList.add(visibleClass);
        });

        // закрытие popup будет происходить как по нажатию на "крестик", так и по нажатию на пустое полупрозрачное поле (первый слой popupa) вокруг
        const closePopupElements = document.querySelectorAll(
            ".overlay, .close-button"
        );
        closePopupElements.forEach((closePopupElement) => {
            closePopupElement.addEventListener("click", () => {
                checkButtons();
                openPopupElements.forEach((element) => {
                    element.classList.remove(visibleClass);
                });
            });
        });
    }
}); // закрывающая скобка события загрузки контента

// Б Л О К   В Н Е Ш Н И Х   Ф У Н К Ц И Й
