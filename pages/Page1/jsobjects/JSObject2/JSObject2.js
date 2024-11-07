export default {
    // Fade-in effect
    fadeInForm: async () => {
        const form = document.querySelector("[data-widgetname='Form1']");
        form.style.transition = "opacity 1s ease-in-out";
        form.style.opacity = 1;
    },
    
    // Fade-out effect
    fadeOutForm: async () => {
        const form = document.querySelector("[data-widgetname='Form1']");
        form.style.transition = "opacity 1s ease-in-out";
        form.style.opacity = 0;
    },

    // Slide-in from the left effect
    slideInForm: async () => {
        const form = document.querySelector("[data-widgetname='Form1']");
        form.style.transition = "transform 1s ease";
        form.style.transform = "translateX(0)"; // Adjust starting point if needed
    },

    // Slide-out to the left effect
    slideOutForm: async () => {
        const form = document.querySelector("[data-widgetname='Form1']");
        form.style.transition = "transform 1s ease";
        form.style.transform = "translateX(-100vw)";
    },

    // Pop-in effect (scale from small to normal size)
    popInForm: async () => {
        const form = document.querySelector("[data-widgetname='Form1']");
        form.style.transition = "transform 0.5s ease";
        form.style.transform = "scale(1)"; // Set starting scale to a smaller size
    },

    // Pop-out effect (scale from normal to small)
    popOutForm: async () => {
        const form = document.querySelector("[data-widgetname='Form1']");
        form.style.transition = "transform 0.5s ease";
        form.style.transform = "scale(0)";
    }
};
