import { useState } from 'react';

export default function NewTask({ onAdd }) {
  const [inputTask, setInputTask] = useState('');

  function handleChange(event) {
    setInputTask(event.target.value);
  }

  function handleClick() {
    if (inputTask.trim() === '') return;
    onAdd(inputTask.trim());
    setInputTask('');
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={inputTask}
      />
      <button className="text-stone-600 hover:text-stone-900" onClick={handleClick}>
        Add Task
      </button>
    </div>
  );
}
