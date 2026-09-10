function validateForm() {
    let isValid = true;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("mobileError").textContent = "";
    document.getElementById("regionError").textContent = "";

    let name = document.getElementById("fullname").value.trim();
    let nameRegex = /^[A-Za-z\s]+$/;
    if (name === "" || !nameRegex.test(name)) {
        document.getElementById("nameError").textContent = "Please enter a valid name (letters only).";
        isValid = false;
    }

    let email = document.getElementById("email").value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    let mobile = document.getElementById("mobile").value.trim();
    let mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
        document.getElementById("mobileError").textContent = "Please enter a valid 10-digit mobile number.";
        isValid = false;
    }

    let region = document.getElementById("region").value;
    if (region === "") {
        document.getElementById("regionError").textContent = "Please select a monitoring region.";
        isValid = false;
    }

    if (isValid) {
        alert("Subscription successful! Advisory alerts will be routed to your contact details.");
        return false;
    }

    return isValid;
}