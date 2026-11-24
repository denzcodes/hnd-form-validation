document.getElementById("hndForm").addEventListener("submit", function(event) {
    // Get field values and remove extra spaces
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const email = document.getElementById("email").value.trim();

    // 1. Validate Name (Required)
    if (name === "") {
        alert("Name is required. Please fill in your name.");
        event.preventDefault();
        return;
    }

    // 2. Validate Surname (Required)
    if (surname === "") {
        alert("Surname is required. Please fill in your surname.");
        event.preventDefault();
        return;
    }

    // 3. Validate Email (Required and must contain '@')
    if (email === "") {
        alert("Email is required. Please fill in your email address.");
        event.preventDefault();
        return;
    }

    if (!email.includes("@")) {
        alert("Invalid Email. Email must contain '@'.");
        event.preventDefault();
        return;
    }

    // If all conditions are met
    alert("Form submitted successfully!");
});