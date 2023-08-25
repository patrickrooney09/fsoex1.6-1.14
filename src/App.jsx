import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const findAll = (bad, neutral, good) => {
    return bad + neutral + good;
  };

  const findAverage = (bad, neutral, good) => {
    return (good - bad) / (bad + neutral + good);
  };

  return (
    <div>
      <button onClick={() => setGood(good + 1)}>Good {good}</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral {neutral}</button>
      <button onClick={() => setBad(bad + 1)}>Bad {bad}</button>
    </div>
  );
};

export default App;
