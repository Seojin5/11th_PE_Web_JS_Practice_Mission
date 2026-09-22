import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>카운터</h1>
      <p>현재 값: {count}</p>

      <button
        onClick={() => setCount((current) => current + 1)}
        disabled={count === 5}
      >
        +1
      </button>

      <button
        onClick={() => setCount((current) => current - 1)}
        disabled={count === 0}
      >
        -1
      </button>

      <button onClick={() => setCount(0)}>
        초기화
      </button>
    </main>
  );
}