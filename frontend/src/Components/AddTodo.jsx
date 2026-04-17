import React, { useState, useRef } from 'react';

function AddTodo({ addTodo }) {
  const [title, setTitle] = useState('');
  const [task, setTask] = useState('');
  const [errors, setErrors] = useState({});
  const [shake, setShake] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const taskRef = useRef(null);

  async function onSubmit(e) {
    e.preventDefault();

    let newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!task.trim()) newErrors.task = "Task is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }

    try {
      setLoading(true);

      await addTodo({ title, task });

      setTitle('');
      setTask('');
      setErrors({});

      // show toast
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">

      {/* ✅ Toast */}
      {showToast && (
  <div className="fixed top-5 right-5 bg-white border border-green-200 
  shadow-lg rounded-xl px-5 py-4 flex items-center gap-3 
  animate-slideIn">

    {/* Icon */}
    <div className="bg-green-100 text-green-600 p-2 rounded-full">
      ✓
    </div>

    {/* Text */}
    <div>
      <p className="text-gray-800 font-semibold">Success</p>
      <p className="text-sm text-gray-500">Todo added successfully</p>
    </div>

  </div>
)}

      <form
        onSubmit={onSubmit}
        className={`w-full max-w-md bg-white p-6 rounded-2xl shadow-md space-y-5 transition 
        ${shake ? "animate-shake" : ""}`}
      >

        <h2 className="text-2xl font-bold text-gray-800 text-center">
          ✨ Add New Todo
        </h2>

        {/* Title */}
        <div>
          <label className="text-sm text-gray-600">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                taskRef.current.focus(); // 👉 auto-focus next
              }
            }}
            className={`w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 
            ${errors.title ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"}`}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Task */}
        <div>
          <label className="text-sm text-gray-600">Task</label>
          <textarea
            ref={taskRef}
            value={task}
            onChange={(e) => setTask(e.target.value)}
            rows="4"
            className={`w-full mt-1 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 
            ${errors.task ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"}`}
          />
          {errors.task && <p className="text-red-500 text-sm mt-1">{errors.task}</p>}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-3 rounded-lg 
          hover:bg-blue-600 active:scale-95 transition flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Adding...
            </>
          ) : (
            "Add Todo 🚀"
          )}
        </button>

      </form>
    </div>
  );
}

export default AddTodo;