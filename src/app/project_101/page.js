"use client";
import styles from "./page.module.css";

export default function Project_101() {
  console.clear();
  console.log("episode 2 = props");
  console.log("episode 3 = css, ternary operator, array, map");
  const banana = 19;
  const isGreen = true;
  const names = ["Kurt", "Bella", "Laban"];
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];
  return (
    <main className={styles.main}>
      <User name="pedro" age={21} email="pedro@pedro.com" />

      {banana >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}

      <h1 style={{ backgroundColor: isGreen ? "green" : "red" }}>
        This has color
      </h1>

      {isGreen && <button>Show if isGreen is true</button>}

      {names.map((name, key) => {
        return <h1 key={key}>{name}</h1>;
      })}

      {planets.map(
        (planet, key) => !planet.isGasPlanet && <h1>{planet.name}</h1>
      )}
    </main>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.email}</h2>
    </div>
  );
};
