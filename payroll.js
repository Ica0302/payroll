function compute() {
  // Get input values
  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let position = document.getElementById("position").value;
  let rate = Number(document.getElementById("rate").value);
  let days = Number(document.getElementById("days").value);

  if (!id || !name || !position || rate <= 0 || days <= 0) {
    alert("Please fill out all fields correctly!");
    return;
  }

  let gross = rate * days;
  let sss = gross * 0.05;
  let pagibig = gross * 0.03;
  let philhealth = gross * 0.02;
  let tax = gross * 0.05; // consistent lowercase naming
  let totalDeduction = sss + pagibig + philhealth + tax;
  let net = gross - totalDeduction;


  localStorage.setItem("id", id);
  localStorage.setItem("name", name);
  localStorage.setItem("position", position);
  localStorage.setItem("rate", rate);
  localStorage.setItem("days", days);
  localStorage.setItem("gross", gross);
  localStorage.setItem("sss", sss);
  localStorage.setItem("pagibig", pagibig);
  localStorage.setItem("philhealth", philhealth);
  localStorage.setItem("tax", tax);
  localStorage.setItem("totalDeduction", totalDeduction);
  localStorage.setItem("net", net);

  window.location.href = "payroll-display.html";
}


document.getElementById("rId").textContent = localStorage.getItem("id");
document.getElementById("rName").textContent = localStorage.getItem("name");
document.getElementById("rPosition").textContent = localStorage.getItem("position");
document.getElementById("rRate").textContent = "₱" + Number(localStorage.getItem("rate")).toFixed(2);
document.getElementById("rDays").textContent = localStorage.getItem("days");
document.getElementById("rGross").textContent = "₱" + Number(localStorage.getItem("gross")).toFixed(2);
document.getElementById("rSSS").textContent = "₱" + Number(localStorage.getItem("sss")).toFixed(2);
document.getElementById("rPagibig").textContent = "₱" + Number(localStorage.getItem("pagibig")).toFixed(2);
document.getElementById("rPhilhealth").textContent = "₱" + Number(localStorage.getItem("philhealth")).toFixed(2);
document.getElementById("rTax").textContent = "₱" + Number(localStorage.getItem("tax")).toFixed(2); // ✅ added
document.getElementById("rTotal").textContent = "₱" + Number(localStorage.getItem("totalDeduction")).toFixed(2);
document.getElementById("rNet").textContent = "₱" + Number(localStorage.getItem("net")).toFixed(2);


function back() {
  window.location.href = "payroll-form.html";
}


