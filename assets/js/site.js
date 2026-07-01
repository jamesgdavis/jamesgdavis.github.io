document.addEventListener("DOMContentLoaded", function () {
    const alert = document.getElementById("site-alert");
    const closeButton = document.querySelector(".site-alert-close");

    if (!alert || !closeButton) {
        return;
    }

    closeButton.addEventListener("click", function () {
        alert.style.display = "none";
    });
});