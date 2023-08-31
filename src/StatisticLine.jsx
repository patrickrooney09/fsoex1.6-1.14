function StatisticLine(props) {
  const { text, value } = props;
  return (
    <div>
      {text === "Positive" ? (
        <div>
          {text}: {value}%
        </div>
      ) : (
        <div>
          {text}: {value}
        </div>
      )}
    </div>
  );
}

export default StatisticLine;
