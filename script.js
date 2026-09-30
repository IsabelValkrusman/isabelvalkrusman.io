document.addEventListener("DOMContentLoaded", () => {

    /*
     * Smooth reveal when elements enter the screen
     */

    const elements = document.querySelectorAll(
        ".project-feature, .about-layout, .technology-wall, .contact-big"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    elements.forEach((element) => {

        element.classList.add("reveal");

        observer.observe(element);

    });


    /*
     * Small mouse movement effect
     */

    const photo = document.querySelector(".photo-frame");

    if (photo) {

        document.addEventListener("mousemove", (event) => {

            const x =
                (event.clientX / window.innerWidth - 0.5) * 8;

            const y =
                (event.clientY / window.innerHeight - 0.5) * 8;

            photo.style.transform =
                `rotate(2deg) translate(${x}px, ${y}px)`;

        });

    }


    /*
     * Active navigation
     */

    const sections = document.querySelectorAll(
        "header[id], section[id]"
    );

    const navigationLinks =
        document.querySelectorAll(".menu a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navigationLinks.forEach((link) => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.classList.add("active");

            }

        });

    });

});
