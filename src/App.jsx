import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <button
        onClick={() => {
          const updatedGood = good + 1;
          const updatedTotal = total + 1;
          setGood(updatedGood);
          setTotal(updatedTotal);
          setAverage((updatedGood - bad) / updatedTotal);
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          const updatedNeutral = neutral + 1;
          const updatedTotal = total + 1;
          setNeutral(updatedNeutral);
          setTotal(updatedTotal);
          setAverage((good - bad) / updatedTotal);
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          const updatedBad = bad + 1;
          const updatedTotal = total + 1;
          setBad(updatedBad);
          setTotal(updatedTotal);
          setAverage((good - updatedBad) / updatedTotal);
        }}
      >
        Bad
      </button>
      <h1>Stats</h1>
      <div>
        <div>Good: {good}</div>
        <div>Neutral: {neutral}</div>
        <div>Bad: {bad}</div>

        <div>Total:{total}</div>
        <div>Average:{average}</div>
      </div>
    </div>
  );
};

export default App;
