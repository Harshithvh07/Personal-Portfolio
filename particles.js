particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,  // Adjust number of particles
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"  // White particles for a cosmic look
        },
        shape: {
            type: "circle",  // You can change this to "star" or "triangle"
        },
        opacity: {
            value: 0.5,
            random: true,
        },
        size: {
            value: 3,
            random: true,
        },
        move: {
            enable: true,
            speed: 2,  // Adjust speed of movement
            direction: "none",
            out_mode: "out"
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        }
    }
});
