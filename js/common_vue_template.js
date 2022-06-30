// Бургер меню
Vue.component("burger-menu", {
    template: `
    <div class="burger-container">
        <div class="burger-icon" id="idBurgerIcon">
            <div class="burger-icon__item"></div>
            <div class="burger-icon__item"></div>
            <div class="burger-icon__item"></div>       
        </div>
    </div>`,
});

new Vue({ el: "#idBurgerMenu" });

// Боковое меню
Vue.component("sidebar-menu", {
    template: `
    <div class="main-menu-grid" id="idMainMenuGrid">
        <div class="my-icon-wrapper">
            <!-- Пустой блок для фона иконки  -->
        </div>
        <span class="my-icon-signature">
            Sergey Ivanov
        </span>
        <ul class="menu-list">
            <li class="menu-item">
                <a href="index.html" class="link menu-item_font">Home</a>
            </li>
            <li class="menu-item">
                <a href="portfolio.html" class="link menu-item_font">Collection</a>
            </li>
            <li class="menu-item">
                <a href="#" class="link menu-item_font">About Me</a>
            </li>
            <li class="menu-item">
                <a href="services.html" class="link menu-item_font">My Services</a>
            </li>
            <li class="menu-item">
                <a href="#" class="link menu-item_font">Blog</a>
            </li>
            <li class="menu-item">
                <a href="contact.html" class="link menu-item_font">Contact</a>
            </li>
        </ul>
    </div>`,
});

new Vue({ el: "#idSideBarMenu" });

// Footer
Vue.component("footer-container", {
    template: `
    <footer>
    <div class="footer-grid">
        <div>
            <h3 class="portfolio-head">
                Recent works
            </h3>
            <div class="portfolio-block">
                <a href="#" class="link">
                    <img src="footer_images/girl-1.png" alt="Pig" />
                </a>
                <a href="#" class="link">
                    <img src="footer_images/girl-2.png" alt="Pig" />
                </a>
                <a href="#" class="link">
                    <img src="footer_images/girl-3.png" alt="Pig" />
                </a>
                <a href="#" class="link">
                    <img src="footer_images/girl-4.png" alt="Pig" />
                </a>
                <a href="#" class="link">
                    <img src="footer_images/girl-5.png" alt="Pig" />
                </a>
                <a href="#" class="link">
                    <img src="footer_images/girl-6.png" alt="Pig" />
                </a>
            </div>
        </div>
        <div class="empty-block">
            <!--пустой блок для эффекта аналогичного space-between -->
        </div>
        <div class="contact-container">
            <h3 class="portfolio-head">
                Have a Questions?
            </h3>
            <div class="contact-details">
                <a href="#" class="link">
                    <img class="link-figure" src="home_images/address.png" alt="fig" />
                    <p class="contact-details__item text text_footer text_footer_gray">
                        203 Cheсhov St., Moskow, RUSSIA
                    </p>
                </a>
                <a href="#" class="link">
                    <img class="link-figure" src="home_images/tel.png" alt="fig" />
                    <p class="contact-details__item text text_footer text_footer_white">
                        +2 392 3929 210
                    </p>
                </a>
                <a href="#" class="link">
                    <img class="link-figure" src="home_images/e-mail.png" alt="fig" />
                    <p class="contact-details__item text text_footer text_footer_white">
                        info@yourdomain.com
                    </p>
                </a>
            </div>
        </div>
    </div>
    <div class="position-rights">
        <span class="text text_footer text_footer_gray"> Copyright © 2022 All rights reserved </span>
    </div>
</footer>`
})

new Vue({ el: "#idFooterContainer" });
