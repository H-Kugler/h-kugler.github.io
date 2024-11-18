document.addEventListener("DOMContentLoaded", function() {
    var base64Email = "aGFyYWxkLmt1Z2xlckBzdHVkZW50LnVuaS10dWViaW5nZW4uZGU=";

    var email = atob(base64Email);

    // Update the mailto link
    var emailButton = document.getElementById("emailButton");
    if (emailButton) {
        emailButton.href = "mailto:" + email;
    }
    var emailLink = document.getElementById("emailLink");
    if (emailLink) {
        emailLink.innerHTML = email;
        emailLink.href = "mailto:" + email;
    }
});
