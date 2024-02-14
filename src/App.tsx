import { useState } from "react";
import FormList from "./components/FormList";
import FriendList from "./components/FriendList";
import Header from "./components/Header";

export type arrayProps = {
  name: string;
  desc: string;
  id: number;
};
function App() {
  // const friendArray: arrayProps[] = [
  //   {
  //     name: "John",
  //     desc: "A funny friend",
  //     id: Math.random(),
  //   },
  //   {
  //     name: "Bob",
  //     desc: "A Nice friend",
  //     id: Math.random(),
  //   },
  //   {
  //     name: "Mark",
  //     desc: "A Weird friend",
  //     id: Math.random(),
  //   },
  // ];
  const [newArr, setNewArr] = useState<arrayProps[]>([]);
  function addList(newName: string, newDesc: string) {
    setNewArr((arr) => {
      const newFriend = {
        name: newName,
        desc: newDesc,
        id: Math.random(),
      };
      return [...arr, newFriend];
    });
  }
  function deleteList(id: number) {
    setNewArr((arr) => arr.filter((a) => a.id !== id));
  }
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <Header>Welcome to Friends List</Header>
      <FormList addList={addList} />
      <FriendList friendArray={newArr} deleteList={deleteList} />
    </div>
  );
}

export default App;
