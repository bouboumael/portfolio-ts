export let prevScrollpos = window.scrollY;

window.onload = () => {
    window.addEventListener('scroll', () => {
        const navbar: HTMLElement|null = document.querySelector('.navbar');
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
