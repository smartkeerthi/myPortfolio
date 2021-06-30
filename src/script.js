

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.gsapSection').forEach(section => {
    ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        pin: true,
        pinSpacing: false
    });
});