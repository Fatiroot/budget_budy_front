import ConstumAxios from "../api/ConstumAxios";

const ExpenseDeleteButton = ({ expenseId }) => {
  const deleteExpense = async () => {
    try {
      const response = await ConstumAxios.delete(`/expenses/${expenseId}`);
      window.location.reload();
      console.log("Expense deleted successfully:", response.data);
    } catch (error) {
      console.error("Error deleting expense:", error.response.data);
    }
  };

  return (
    <button
      className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
      onClick={deleteExpense}>Delete</button>
  );
};

export default ExpenseDeleteButton;
