function StatisticLine(props) {
  const { text, value } = props;
  return (
    <tr>
      <td>{text}</td>
      <td>
        {value}
        {text === "Positive" ? "%" : ""}
      </td>
    </tr>
  );
}

export default StatisticLine;
