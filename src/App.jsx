import { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));

  // increment the property 2 value by one
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const [selected, setSelected] = useState(0);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(selected);
  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <div>Votes {votes[selected]}</div>
      <button
        onClick={() => {
          const random = getRandomInt(0, anecdotes.length - 1);
          setSelected(random);
        }}
      >
        Next Anecdote
      </button>
      <button
        onClick={() => {
          let copy = [...votes];
          copy[selected] += 1;
          setVotes(copy);
        }}
      >
        Vote
      </button>
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
