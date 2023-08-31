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
    // {text === "Positive" ? (
    //   <tr>
    //     <td>{text}</td>
    //     <td>{value}%</td>
    //   </tr>
    // ) : (
    //   <tr>
    //     <td>{text}</td>
    //     <td>{value}</td>
    //   </tr>
    // )}
  );
}

export default StatisticLine;
