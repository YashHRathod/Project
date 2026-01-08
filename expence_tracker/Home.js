function getCategoryIcon(category) {
  const icons = {
    Food: "☕",
    Utilities: "⚡",
    Shopping: "🛒",
    Health: "💪",
    Transport: "🚗",
  };

  return icons[category] || "💸";
}

const tbody = document.getElementById("expenseBody");

// Get data from localStorage
const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Clear table before rendering
tbody.innerHTML = "";

// Loop through expenses
expenses.forEach((exp) => {
  const tr = document.createElement("tr");

  const formattedDate = new Date(exp.date).toLocaleDateString("en-IN");

  tr.innerHTML = `
    <td>
      <span class="icon ${exp.category.toLowerCase()}">
        ${getCategoryIcon(exp.category)}
      </span>
    </td>

    <td>
      <strong>${exp.title}</strong><br />
      <small>${exp.category}${exp.reimbursible ? " • Reimbursible" : ""}</small>
    </td>

    <td>${formattedDate}</td>

    <td class="right amount-negative">
      - ₹${exp.amount}
    </td>
  `;

  tbody.appendChild(tr);
});
