export default {
    fadeInForm: async () => {
        const form = document.querySelector("[data-widgetname='Form1']");
        form.style.opacity = 0;
        form.style.transition = "opacity 1s ease-in-out";
        form.style.opacity = 1;
    },
    fadeOutForm: async () => {
        const form = document.querySelector("[data-widgetname='Form1']");
        form.style.transition = "opacity 1s ease-in-out";
        form.style.opacity = 0;
    }
};
