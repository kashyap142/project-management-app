import { useRef } from 'react';

import Input from './Input';
import Modal from './Modal';

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value.trim();
    const enteredDescription = description.current.value.trim();
    const enteredDueDate = dueDate.current.value.trim();

    // vaidation
    if (enteredTitle === '' || enteredDescription === '' || enteredDueDate === '') {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-700 mb-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">Looks like you forgot to enter something...</p>
      </Modal>

      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md text-stone-50 bg-stone-800 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>

        <div>
          <Input ref={title} label="Title" type="text" />
          <Input ref={description} label="Description" textarea={true} />
          <Input ref={dueDate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}
