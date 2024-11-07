export default {
    rotateIn3D: () => {
        const form = document.querySelector("[data-widgetname='Form1']");
        form.style.transition = "transform 1s ease, opacity 1s ease"; // Smooth transition for rotation and opacity
        form.style.transform = "rotateY(0deg)"; // Rotate to 0 degrees (front-facing)
        form.style.opacity = 1; // Set opacity to fully visible
    },

    reset3D: () => {
        const form = document.querySelector("[data-widgetname='Form1']");
        form.style.transition = "transform 1s ease, opacity 1s ease";
        form.style.transform = "rotateY(90deg)"; // Rotate out of view
        form.style.opacity = 0; // Set opacity to invisible
    }
};
