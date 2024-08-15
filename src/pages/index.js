import { Input } from "@/components/Input";
import { List } from "@/components/List";
import { useState } from "react";

const Home = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTask = () => {
    if (value.trim() === "") return;
    setTodos([...todos, value]);
    setValue("");
  };
  const handleDeleteTask = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="card">
      <h3>ToDo List</h3>
      <header className="header">
        <Input value={value} handler={setValue} text={"to do"} />
        <button onClick={handleAddTask}>Add</button>
      </header>
      <List todos={todos} onDelete={handleDeleteTask} />{" "}
    </div>
  );
};

export default Home;
