import React from "react";
import "./styles.css";
import { UseStickyState } from "./UseStickyState";

export default function App() {
  const [count, setCount] = UseStickyState(0, "count");
  return (
    <select value={count} onChange={(e) => setCount(e.target.value)}>
      <option>10</option>
      <option>50</option>
      <option>100</option>
    </select>
  );
}
