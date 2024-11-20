import React, { useState } from "react";
import "./App.css";

const App = () => {
  // Separate state for budget and expense amount
  const [budget, setBudget] = useState(0);  // For budget
  const [expenses, setExpenses] = useState([]);  // Expense list
  const [title, setTitle] = useState("");  // Expense title
  const [expenseAmount, setExpenseAmount] = useState("");  // Expense amount
  const [budgetAmount, setBudgetAmount] = useState("");  // Budget amount (separate from expenseAmount)
  
  // State to track if we are editing an expense
  const [editingExpense, setEditingExpense] = useState(null);  // The expense currently being edited
  const [editTitle, setEditTitle] = useState("");  // Editing title
  const [editAmount, setEditAmount] = useState("");  // Editing amount

  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const balance = budget - totalExpenses;

  // Set the budget
  const handleSetBudget = (e) => {
    e.preventDefault();
    setBudget(Number(budgetAmount));  // Set budget using the budgetAmount state
    setBudgetAmount("");  // Clear the budget input after setting the budget
  };

  // Add an expense
  const handleAddExpense = (e) => {
    e.preventDefault();
    if (title && expenseAmount > 0) {
      setExpenses([
        ...expenses,
        { id: Date.now(), title, amount: Number(expenseAmount) },  // Add new expense
      ]);
      setTitle("");  // Clear the title input
      setExpenseAmount("");  // Clear the expense amount input
    }
  };

  // Handle expense editing
  const handleEditExpense = (id) => {
    const expenseToEdit = expenses.find((expense) => expense.id === id);
    setEditingExpense(expenseToEdit.id);  // Set the editing expense
    setEditTitle(expenseToEdit.title);  // Set the title to edit
    setEditAmount(expenseToEdit.amount);  // Set the amount to edit
  };

  // Update the edited expense
  const handleUpdateExpense = (e) => {
    e.preventDefault();
    if (editTitle && editAmount > 0) {
      setExpenses(expenses.map((expense) =>
        expense.id === editingExpense
          ? { ...expense, title: editTitle, amount: Number(editAmount) }
          : expense
      ));
      setEditingExpense(null);  // Clear the editing state
      setEditTitle("");  // Clear the title input
      setEditAmount("");  // Clear the amount input
    }
  };

  // Delete an expense
  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));  // Remove the expense
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Budget Tracker</h1>

      {/* Budget Section */}
      <div className="section budget-section">
        <h2 className="section-title">Set Your Budget</h2>
        <form onSubmit={handleSetBudget} className="budget-form">
          <input
            type="number"
            placeholder="Enter Total Amount"
            value={budgetAmount}
            onChange={(e) => setBudgetAmount(e.target.value)}  // Use budgetAmount for setting the budget
            className="input-field"
          />
          <button type="submit" className="btn btn-primary">Set Budget</button>
        </form>
      </div>

      {/* Expense Section */}
      <div className="section expense-section">
        <h2 className="section-title">Add Expense</h2>
        <form onSubmit={handleAddExpense} className="expense-form">
          <input
            type="text"
            placeholder="Expense Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}  // Title for the expense
            className="input-field"
          />
          <input
            type="number"
            placeholder="Amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}  // Use expenseAmount for expense amounts
            className="input-field"
          />
          <button type="submit" className="btn btn-secondary">Add Expense</button>
        </form>
      </div>

      {/* Updated Summary Section */}
      <div className="summary-section">
        <div className="summary-card total-budget-card">
          <h3>Total Budget</h3>
          <p className="summary-amount">${budget}</p>
        </div>
        <div className="summary-card total-expenses-card">
          <h3>Total Expenses</h3>
          <p className="summary-amount">${totalExpenses}</p>
        </div>
        <div className="summary-card balance-card">
          <h3>Balance</h3>
          <p className="summary-amount">${balance}</p>
        </div>
      </div>

      {/* Expense List */}
      <div className="expense-list">
        <h2 className="section-title">Expense List</h2>
        <table className="expense-table">
          <thead>
            <tr>
              <th>Expense Title</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.title}</td>
                <td>${expense.amount}</td>
                <td>
                  <button
                    onClick={() => handleEditExpense(expense.id)} 
                    className="btn btn-edit"
                  >
                    ✏️
                  </button>
                  <button 
                    onClick={() => handleDeleteExpense(expense.id)} 
                    className="btn btn-delete"
                  >
                    🗑
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Expense Form */}
      {editingExpense && (
        <div className="edit-expense-form">
          <h2>Edit Expense</h2>
          <form onSubmit={handleUpdateExpense}>
            <input
              type="text"
              placeholder="Edit Title"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="input-field"
            />
            <input
              type="number"
              placeholder="Edit Amount"
              value={editAmount}
              onChange={(e) => setEditAmount(e.target.value)}
              className="input-field"
            />
            <button type="submit" className="btn btn-update">Update Expense</button>
            <button
              type="button"
              onClick={() => setEditingExpense(null)}
              className="btn btn-cancel"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
