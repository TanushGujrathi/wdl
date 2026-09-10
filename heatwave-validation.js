document.getElementById("heatwaveForm").addEventListener("submit", function(event) {
    
    event.preventDefault(); 
    
    let isValid = true;

    const errorSpans = document.querySelectorAll(".error-msg");
    errorSpans.forEach(span => span.textContent = "");

    let name = document.getElementById("observerName").value.trim();
    let nameRegex = /^[A-Za-z\s]{3,}$/;
    if (!nameRegex.test(name)) {
        document.getElementById("nameError").textContent = "Name must contain at least 3 characters (letters and spaces only).";
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
        document.getElementById("mobileError").textContent = "Please enter a valid 10-digit Indian mobile number.";
        isValid = false;
    }


    let awsId = document.getElementById("awsId").value.trim();
    let awsRegex = /^AWS\d{3}$/;
    if (!awsRegex.test(awsId)) {
        document.getElementById("awsError").textContent = "Station ID must be in the format 'AWS' followed by 3 digits (e.g., AWS001).";
        isValid = false;
    }

    let location = document.getElementById("location").value.trim();
    if (location === "") {
        document.getElementById("locationError").textContent = "Location is required.";
        isValid = false;
    }

    let obsDate = document.getElementById("obsDate").value;
    if (obsDate === "") {
        document.getElementById("dateError").textContent = "Please select an observation date.";
        isValid = false;
    }

    let maxTemp = document.getElementById("maxTemp").value;
    if (maxTemp === "" || isNaN(maxTemp)) {
        document.getElementById("tempError").textContent = "Please enter a valid numeric temperature.";
        isValid = false;
    }

    let humidity = document.getElementById("humidity").value;
    if (humidity === "" || humidity < 0 || humidity > 100) {
        document.getElementById("humidityError").textContent = "Humidity must be a percentage between 0 and 100.";
        isValid = false;
    }

    let alertLevel = document.getElementById("alertLevel").value;
    if (alertLevel === "") {
        document.getElementById("alertError").textContent = "Please select a heatwave alert level.";
        isValid = false;
    }

    if (isValid) {
        
        alert("Success! The heatwave monitoring data has been validated and submitted.");
        
    }
});