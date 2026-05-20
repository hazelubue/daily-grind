// Fixes HTML/CSS Checker links
document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = window.location.href;
    document.getElementById("html-checker").href = "https://validator.w3.org/nu/?doc=" + encodeURIComponent(currentUrl);
    document.getElementById("css-checker").href = "https://jigsaw.w3.org/css-validator/validator?uri=" + encodeURIComponent(currentUrl);
});
