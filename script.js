document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect data
    const name = document.getElementById("fullname").value;
    const roll = document.getElementById("roll").value;
    const program = document.getElementById("program").value;
    const email = document.getElementById("email").value;
    const photoInput = document.getElementById("photo");

    // Insert text into ID card
    document.getElementById("outName").textContent = name;
    document.getElementById("outRoll").textContent = roll;
    document.getElementById("outProgram").textContent = program;
    document.getElementById("outEmail").textContent = email;

    // Set uploaded image
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.querySelector("#idCard .photo img").src = e.target.result;
        };
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        // default image if no photo uploaded
        document.querySelector("#idCard .photo img").src = "profile.png";
    }

    // Hide the form, show the ID card
    document.getElementById("userForm").classList.add("hidden");
    document.getElementById("idCard").classList.remove("hidden");
});
