((win, doc) => {
    const contactBtn = doc.querySelector('#contact-button');
    const contact = doc.querySelector('.contact');

    contactBtn.addEventListener('click', function(e) {
        win.scroll({ top: contact.offsetTop, left: 0, behavior: 'smooth' });
    });

})(window, document);