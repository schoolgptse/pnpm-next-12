"use client";
import styles from "./page.module.css";
import { useState } from "react";

export default function Project_101() {
  console.clear();
  console.log("episode 4 = state, useState Hook");
  const [age, setAge] = useState(0);
  const increaseAge = () => {
    setAge(age + 1);
  };
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const [textColor, setTextColor] = useState("black");
  return (
    <main className={styles.main}>
      {age}
      <button onClick={increaseAge}>Increase Age</button>
      <br />
      <input type="text" onChange={handleInputChange} />
      <br />
      {inputValue}
      <br />
      <button
        onClick={() => {
          setTextColor(textColor === "black" ? "red" : "black");
        }}
      >
        Color
      </button>
      <h1 style={{ color: textColor }}>Hi my name is Nisse</h1>
    </main>
  );
}
