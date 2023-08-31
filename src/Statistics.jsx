import StatisticLine from "./StatisticLine";
function Statistics(props) {
  const { good, neutral, bad, total, average, positive } = props;

  return (
    <div>
      <h1>Stats</h1>
      {total === 0 ? (
        <div>No Feedback Given</div>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />

            <StatisticLine text="Total" value={total} />
            <StatisticLine text="Average" value={average} />
            <StatisticLine text="Positive" value={positive} />
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Statistics;
