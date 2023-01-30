import { useEffect, useState } from "react";

const 
export function App() {
  const [fact, setFact] = useState("lorem ipsun cat fact whatever");

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => setFact(data.fact));
  }, []);

  return (
    <main>
      <h1>App de gatitos</h1>
      <p>{fact}</p>
    </main>
  );
}
