import { useEffect, useState } from "react";
export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data.slip.advice);
      setCount((c) => c + 1);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div>
      <h1>Aslam U Alikum</h1>
      <p>{advice}</p>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      you have read advice <span>{props.count}</span> time
    </p>
  );
}
