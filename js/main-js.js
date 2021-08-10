(function() {
    const header = document.querySelector(".header");
    window.onscroll = () => {
        if (window.pageYOffset > 100) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
}());

(function() {
    const menuOpenItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__burger-close')
    menuOpenItem.addEventListener("click", () => {
        menu.classList.add('header__nav_active');
    }); {
        menuCloseItem.addEventListener("click", () => {
            menu.classList.remove('header__nav_active');
        });
    }
}());