

function pageTransition() {
    var t1 = gsap.timeline();
    t1.to("ul.transition li", { duration: 0.5, scaleY: 1, transformOrigin: 'top', stagger: 0.2 })
    t1.to("ul.transition li", { duration: 0.5, scaleY: 0, transformOrigin: 'bottom', stagger: 0.1, delay: 0.1 })
}

function delay(n) {
    n = n || 2000
    return new Promise((done) => {
        setTimeout(() => {
            done()
        }, n)
    })
}

function contentAnimation() {
    gsap.from('#app', { duration: 1, opacity: 0, scale: 1.2 });
    gsap.from('.header', { duration: 1, opacity: 0, y: -100, delay: 0.5 });
    gsap.from('.gsap', { duration: 1, opacity: 0, y: 50, delay: 1});
    gsap.from('.image', { duration: 1, opacity: 0, delay: 1.2});
    // gsap.from('.text h2', { duration: 1, opacity: 0, x: -100, delay: 1 });
    // gsap.from('.text h1', { duration: 1, opacity: 0, delay: 1.5 });
    // gsap.from('.text h4', { duration: 1, opacity: 0, delay: 1.7 });
    // gsap.from('.main a', { duration: 1, opacity: 0, y: 50, delay: 1.7 });
    // gsap.from('.main p', { duration: 1, opacity: 0, delay: 1.2 });
    // gsap.from('.image', { duration: 1, opacity: 0, x: 50, delay: 1.8 });
    // gsap.from('.about', { duration: 1, opacity: 0, x: 50, delay: 1.2 });

    // gsap.from('ul.flow', { duration: 1, opacity: 0, delay: 1.3 });
}

barba.init({
    sync: true,

    transitions: [{

        async leave(data) {
            const done = this.async();
            pageTransition();
            delay(1500);
            done()
        },

        async enter(data) {
            delay(10000);
            contentAnimation();
        },

        async once(data) {
            delay(10000);
            contentAnimation();
        },

    }]
});