document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect data
    const name = document.getElementById("fullname").value;
    const roll = document.getElementById("roll").value;
    const program = document.getElementById("program").value;
    const email = document.getElementById("email").value;

    // Insert into ID card
    document.getElementById("outName").textContent = name;
    document.getElementById("outRoll").textContent = roll;
    document.getElementById("outProgram").textContent = program;
    document.getElementById("outEmail").textContent = email;

    // Hide the form, show the ID card
    document.getElementById("userForm").classList.add("hidden");
    document.getElementById("idCard").classList.remove("hidden");
});
