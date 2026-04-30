import { useState } from "react";
import PropTypes from "prop-types";

function AddTodo({ onNewItem }) {

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {

    if (!todoName.trim() || !dueDate) {
      alert("Please enter todo and date");
      return;
    }

    onNewItem(todoName, dueDate);

    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">

        {/* Todo Input */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Date Input */}
        <div className="sm:w-1/3">
          <input
            type="date"
            value={dueDate}
            onChange={handleDateChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Add Button */}
        <div>
          <button
            type="button"
            onClick={handleAddButtonClicked}
            className="w-full sm:w-auto px-5 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
          >
            Add
          </button>
        </div>

      </div>
    </div>
  );
}

AddTodo.propTypes = {
  onNewItem: PropTypes.func.isRequired,
};

export default AddTodo;