export let prevScrollpos = window.scrollY;

window.onload = () => {
    const navbar: HTMLElement|null = document.querySelector('.navbar');
    if (navbar) {
        navbar.onclick = () => {
            navbar.classList.remove('nav-hidden')
        }
    }
    window.addEventListener('scroll', () => {
        let currentScrollPos = window.scrollY;
        if (navbar) {
            if (prevScrollpos < currentScrollPos) {
                navbar.classList.add('nav-hidden')
            } else {
                navbar.classList.remove('nav-hidden')
            }
            prevScrollpos = currentScrollPos;
        }
        prevScrollpos = currentScrollPos;
    });
};
