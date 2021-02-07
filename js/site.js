((win, doc) => {
    const contactBtn = doc.querySelector('#contact-button');
    const contactMeBtn = doc.querySelector('#contact-me');
    const contact = doc.querySelector('.contact');
    const menuButtonMobile = doc.querySelector('.menu-mobile__button');
    const menuMobile = doc.querySelector('.menu-content');
    const closeMenuBtn = doc.querySelector('.menu-content__close-button');

    const scrollToContact = function(e) {
        win.scrollTo({ top: contact.offsetTop, left: 0, behavior: 'smooth' });
        e.preventDefault();
    }

    const openMobileMenu = function(e) {
        if (!menuMobile.classList.contains('menu-content--visible')) {
            menuMobile.classList
                .add('menu-content--visible');
        }
        e.stopPropagation();
        e.preventDefault();
    }

    const closeMobileMenu = function(e) {
        menuMobile.classList
                .remove('menu-content--visible');
        e.preventDefault();
    }

    contactBtn.addEventListener('click', scrollTo);
    menuButtonMobile.addEventListener('click', openMobileMenu);
    closeMenuBtn.addEventListener('click', closeMobileMenu)
    contactMeBtn && contactMeBtn.addEventListener('click', scrollToContact)

})(window, document);