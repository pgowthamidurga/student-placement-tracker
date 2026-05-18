function addStudent() {

    // Get input values
    const name = document.getElementById("name").value;
    const company = document.getElementById("company").value;
    const status = document.getElementById("status").value;

    // Validation
    if (name === "" || company === "" || status === "") {
        alert("Please fill all fields");
        return;
    }

    // Create new table row
    const table = document.getElementById("studentList");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${company}</td>
        <td>${status}</td>
    `;

    table.appendChild(row);

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("company").value = "";
    document.getElementById("status").value = "";
}
