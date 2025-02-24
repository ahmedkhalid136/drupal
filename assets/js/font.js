document.addEventListener("DOMContentLoaded", function () {
    if (document.fonts) {
        Promise.all([
            document.fonts.load("1em 'CAS-Magakoro'"),
            document.fonts.load("1em 'BrutalMilkNo1-Regular'"),
            document.fonts.load("1em 'JetBrains Mono'")
        ]).then(() => {
            document.body.style.visibility = "visible";
        }).catch(() => {
            console.warn("Custom fonts failed to load. Falling back.");
            document.body.style.visibility = "visible";
        });

        // Set a max delay (e.g., 3 seconds) to avoid infinite loading
        setTimeout(() => {
            document.body.style.visibility = "visible";
        }, 3000);
    } else {
        // If Font Loading API is not supported, show content immediately
        document.body.style.visibility = "visible";
    }
});
