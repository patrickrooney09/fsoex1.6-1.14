import React from "react";

function Statistics(props) {
  const { good, neutral, bad, total, average, positive } = props;

  return (
    <div>
      <h1>Stats</h1>
      {total === 0 ? (
        <div>No Feedback Given</div>
      ) : (
        <div>
          <div>Good: {good}</div>
          <div>Neutral: {neutral}</div>
          <div>Bad: {bad}</div>

          <div>Total:{total}</div>
          <div>Average:{average}</div>
          <div>Positive: {positive}%</div>
        </div>
      )}
    </div>
  );
}

export default Statistics;
