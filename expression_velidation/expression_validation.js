document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phoneNo");
    const postCodeInput = document.getElementById("postCode");
    const resultContainer = document.querySelector(".result");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x7f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        const phoneRegex = /^(?:\+88|88)?01[89]\d{8}$/;
        const postCodeRegex = /^\d{4}$/;

        const emailValid = emailRegex.test(emailInput.value);
        const phoneValid = phoneRegex.test(phoneInput.value);
        const postCodeValid = postCodeRegex.test(postCodeInput.value);

        resultContainer.innerHTML = "";

        if (emailValid) {
            appendResult("Email is valid");
        } else {
            appendResult("Email is not valid");
        }

        if (phoneValid) {
            appendResult("Phone number is valid");
        } else {
            appendResult("Phone number is not valid");
        }

        if (postCodeValid) {
            appendResult("Postal code is valid");
        } else {
            appendResult("Postal code is not valid");
        }
    });

    function appendResult(message) {
        const li = document.createElement("li");
        li.textContent = message;
        resultContainer.appendChild(li);
    }
});
