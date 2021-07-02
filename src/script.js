

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.gsapSection').forEach(section => {
    ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        pin: true,
        pinSpacing: false
    });
});

gsap.from('.section', { duration: 1.5, opacity: 0, x: -50 });
