document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("stars-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    const numStars = 100;

    function createStars() {
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5,
                alpha: Math.random(),
                speed: Math.random() * 0.05
            });
        }
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            ctx.fill();
        });
    }

    function updateStars() {
        stars.forEach(star => {
            star.alpha += star.speed;
            if (star.alpha >= 1 || star.alpha <= 0) {
                star.speed *= -1;
            }
        });
    }

    function animateStars() {
        drawStars();
        updateStars();
        requestAnimationFrame(animateStars);
    }

    createStars();
    animateStars();
});


/* Course section*/
function openTab(evt, tabName) {
    let i, tabContent, tabLinks;
    
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Show default active tab
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".tab-content").style.display = "block";
});
