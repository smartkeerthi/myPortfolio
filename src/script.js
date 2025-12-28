
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(CustomEase, SplitText, ScrollTrigger);
    CustomEase.create("hop", ".8, 0, .3, 1");

    const splitTextElements = (selector, type = "words, chars", addFirstChar = false) => {
        const elements = document.querySelectorAll(selector)
        elements.forEach((element) => {
            const splitText = new SplitText(element, {
                type, wordsClass: "word", charsClass: "char"
            });

            if (type.includes("chars")) {
                splitText.chars.forEach((char, index) => {
                    const originalText = char.textContent;
                    char.innerHTML = `<span>${originalText}</span>`;

                    if (addFirstChar && index == 0) {
                        char.classList.add("first-char");
                    }

                    if (addFirstChar && index == 12) {
                        char.classList.add("first-char-1");
                    }
                });
            }
        });
    }

    const isMobile = window.innerWidth <= 680;

    splitTextElements(".intro-title", "words, chars", true);
    splitTextElements(".about-container div p", "words", false);


    gsap.set([".split-overlay .intro-title .first-char span", ".split-overlay .intro-title .first-char-1 span"], { y: "0%" })
    gsap.set(".split-overlay .intro-title .first-char", {
        x: isMobile ? "9rem" : "17.5rem"
    });
    gsap.set(".split-overlay .intro-title .first-char-1", {
        x: isMobile ? "-1.5rem" : "-2.5rem"
    });

    const tl = gsap.timeline({ defaults: { ease: "hop" } })
    tl.to(".preloader .intro-title .char span", {
        y: "0%",
        opacity: 1,
        duration: 0.75,
        stagger: 0.05
    }, 0.5)
        .to(".preloader .intro-title .char:not(.first-char, .first-char-1) span", {
            y: "100%",
            opacity: 0,
            duration: 0.75,
            stagger: 0.05
        }, 2)
        .to(".first-char", {
            x: isMobile ? "9rem" : "17.5rem",
            duration: 0.75
        }, 3)
        .to(".first-char-1", {
            x: isMobile ? "-1.5rem" : "-2.5rem",
            duration: 0.75,
            onComplete: () => {
                gsap.set(".preloader", {
                    clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)"
                })
                gsap.set(".split-overlay", {
                    clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)"
                })
            }
        }, 3)

    tl.to([".preloader", ".split-overlay"], {
        y: (i) => (i == 0 ? "-50%" : "50%"),
        duration: 1
    }, 4)
        .to(".split-overlay", {
            opacity: 0,
            duration: 1
        }, 4.5)

    tl.to([".navbar", ".mobile-navbar"], {
        y: 0,
        opacity: 1,
        duration: 0.75
    }, 4.5)
        .to(".intro p", {
            opacity: 1,
            duration: 0.75
        }, 5)
        .to([".intro h2 span", ".intro-scrolldown svg path"], {
            y: 0,
            duration: 0.75
        }, 5)
        .to(".social-links ul li a", {
            x: 0,
            opacity: 1,
            duration: 0.75
        }, 5)


    const marqueeContainer = document.querySelectorAll(".marquee-container");

    marqueeContainer.forEach((container, index) => {
        let start = "0%"
        let end = "-15%"

        if (index % 2 === 0) {
            start = "0%"
            end = "10%"
        }

        const marquee = container.querySelector(".marquee")

        gsap.fromTo(
            marquee,
            {
                x: start
            },
            {
                x: end,
                scrollTrigger: {
                    trigger: container,
                    start: "top bottom",
                    end: "150% top",
                    scrub: true
                }
            })
    })

    const tabout = gsap.timeline({
        scrollTrigger: {
            trigger: ".about",
            start: "top 8.5%",
            end: "bottom 10%",
            scrub: true,
            pin: true
        }
    })

    tabout.to(".about .about-container h2", {
        color: "#fff",
        duration: 0.75,
        ease: "hop"
    })
        .to(".about-container div p div", {
            opacity: 1,
            duration: 1,
            ease: "hop",
            stagger: 0.05
        }, 1)
        .to(".about-container .download", {
            opacity: 1,
            y: 0,
            ease: "hop",
            duration: 0.75
        }, 4)

    const skills = gsap.utils.toArray(".description");

    const tskills = gsap.timeline({
        scrollTrigger: {
            trigger: ".skills",
            start: "top 8.5%",
            end: () => `+=${skills.length * 50}%`,
            scrub: true,
            pin: true,
        }
    });

    skills.forEach((skill, i) => {
        if (i === 0) return;

        tskills.to(skill, {
            yPercent: `-${(90) * i}`,
            duration: 1
        }, i - 1);
    });

    const texperinece = gsap.timeline({
        scrollTrigger: {
            trigger: ".experiences",
            start: "top 8.5%",
            end: "bottom 10%",
            scrub: true,
            pin: true
        }
    })

    texperinece.to(".experiences-container .title h2", {
        color: "#fff",
        duration: 0.75,
        ease: "hop"
    })
        .to(".experiences-descriptions ul li p", {
            opacity: 1,
            duration: 1,
            ease: "hop",
            stagger: 0.05
        }, 1)

    const cards = gsap.utils.toArray(".stacking-card");

    const tcards = gsap.timeline({
        scrollTrigger: {
            trigger: ".projects",
            start: "top top",
            end: () => `+=${cards.length * 50}%`,
            scrub: true,
            pin: true
        }
    });

    cards.forEach((card, i) => {
        // if (i === 0) return;

        tcards.to(card, {
            yPercent: `-${(115) * i}`,
            scale: 0.9,
            duration: 1
        }, i - 1);
    });


});
