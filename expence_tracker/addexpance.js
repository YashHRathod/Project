const form = document.getElementById("expenseForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const amount = document.getElementById("amount").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const reimbursible = document.getElementById("reimbursible").checked;

  if (!title || !amount || !date || !category) {
    alert("Please fill all fields");
    return;
  }

  const expense = {
    title,
    amount: Number(amount),
    date,
    category,
    reimbursible,
  };

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));

  //   alert("Expense saved successfully ✅");

  form.reset();
  window.location.href = "./Home.html";
});
