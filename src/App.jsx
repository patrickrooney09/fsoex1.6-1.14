import { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button
        text="Good"
        handleClick={() => {
          const updatedGood = good + 1;
          const updatedTotal = total + 1;
          setGood(updatedGood);
          setTotal(updatedTotal);
          setAverage((updatedGood - bad) / updatedTotal);
          setPositive((updatedGood / updatedTotal) * 100);
        }}
      />

      <Button
        text="Neutral"
        handleClick={() => {
          const updatedNeutral = neutral + 1;
          const updatedTotal = total + 1;
          setNeutral(updatedNeutral);
          setTotal(updatedTotal);
          setAverage((good - bad) / updatedTotal);
          setPositive((good / updatedTotal) * 100);
        }}
      />
      <Button
        text="Bad"
        handleClick={() => {
          const updatedBad = bad + 1;
          const updatedTotal = total + 1;
          setBad(updatedBad);
          setTotal(updatedTotal);
          setAverage((good - updatedBad) / updatedTotal);
          setPositive((good / updatedTotal) * 100);
        }}
      />
      <Statistics
        good={good}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
        neutral={neutral}
      />
    </div>
  );
};

export default App;
