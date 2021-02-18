((win, doc) => {
    const contactBtn = doc.getElementById('contact-button');
    const contactMobileBtn = doc.getElementById('contact-button-mobile');
    const contactMeBtn = doc.getElementById('contact-me');
    const contact = doc.querySelector('.contact');
    const menuButtonMobile = doc.querySelector('.menu-mobile__button');
    const menuMobile = doc.querySelector('.menu-content');
    const closeMenuBtn = doc.querySelector('.menu-content__close-button');

    new Typewriter('#typewriter', {
        strings: ['cats', 'design', 'animation', 'food'],
        loop: true,
        autoStart: true,
        delay: 75,
    });
   
    function scrollToContact(e) {
        win.scrollTo({ top: contact.offsetTop, left: 0, behavior: 'smooth' });
        e.preventDefault();
    }

    function openMobileMenu(e) {
        if (!menuMobile.classList.contains('menu-content--visible')) {
            menuMobile.classList
                .add('menu-content--visible');
        }
        e.stopPropagation();
        e.preventDefault();
    }

    function closeMobileMenu(e) {
        menuMobile.classList
                .remove('menu-content--visible');
        e.preventDefault();
    }

    contactBtn.addEventListener('click', scrollToContact);
    contactMeBtn.addEventListener('click', scrollToContact)
    menuButtonMobile.addEventListener('click', openMobileMenu);
    closeMenuBtn.addEventListener('click', closeMobileMenu)
    contactMobileBtn.addEventListener('click', scrollToContact)

})(window, document);