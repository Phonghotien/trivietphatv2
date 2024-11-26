if (window.innerWidth > 1200) {
    const homeBanner = document.querySelector(".homes-bn")
    if (homeBanner) {
        const homeDec = homeBanner.querySelector(".homes-bn-decor img")
        gsap.from(homeDec, {
            scrollTrigger: {
                scrub: 1,
                trigger: homeBanner,
            },
            x: "-10%"
        });
    }
    

    const marquees = document.querySelectorAll(".marquee")
    marquees.forEach(marquee => {
        const marqueeText = marquee.querySelector(".marquee-text ")
        gsap.to(marqueeText, {
            scrollTrigger: {
                scrub: 1,
                trigger: marquee,
            },
            x: "-20%"
        });
    })
}