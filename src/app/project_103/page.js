"use client";
import styles from "./page.module.css";
import { useState } from "react";

export default function Project_103() {
  console.clear();
  console.log("episode 5 = CRUD");
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNeweTask] = useState("");

  const handleChange = (event) => {
    setNeweTask(event.target.value);
  };

  const addTask = () => {
    setTodoList([...todoList, newTask]);
  };

  const deleteTask = (taskName) => {
    setTodoList(todoList.filter((task) => task !== taskName));
  };

  return (
    <main className={styles.main}>
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div>
              <h1>{task}</h1>
              <button onClick={() => deleteTask(task)}>X</button>
            </div>
          );
        })}
      </div>
    </main>
  );
}
