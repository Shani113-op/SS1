const navlinkEls = document.querySelectorAll('.navlink');
const windowPathname = window.location.pathname;

navlinkEls.forEach(navLinkEl => {
    const navLinkPathname = new URL(navLinkEl.href).pathname;

    if((windowPathname === navLinkPathname) || (windowPathname === '/index.html' && navLinkPathname === '/')){
        navLinkEl.classList.add('active');
    }
});