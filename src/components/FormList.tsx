import { FormEvent, useState } from "react";

type FormListProps = {
  addList: (newName: string, newDesc: string) => void;
};

function FormList({ addList }: FormListProps) {
  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!newName || !newDesc) {
      return alert("Please Add a name and description of your friend");
    }
    // e.currentTarget.reset();
    addList(newName, newDesc);
    setNewName("");
    setNewDesc("");
  }
  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <div className="flex justify-between">
        <label className="text-sm" htmlFor="name">
          Enter Name
        </label>
        <input
          value={newName}
          className="border-2 w-1/2"
          onChange={(e) => setNewName(e.target.value)}
          type="text"
          id="name"
        />
      </div>
      <div className="flex justify-between">
        <label className="text-sm" htmlFor="description">
          Enter description
        </label>
        <input
          value={newDesc}
          className="border-2 w-1/2"
          onChange={(e) => setNewDesc(e.target.value)}
          type="text"
          id="description"
        />
      </div>
      <button className="text-sm border-2 bg-cyan-500 text-white p-1 rounded-lg">
        Add Friend
      </button>
    </form>
  );
}

export default FormList;
