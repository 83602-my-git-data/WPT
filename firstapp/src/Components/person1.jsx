const per = ({ props }) => {
  const deleteFrom = (e) => {
    console.log(e.target);
    console.log(e.target);
    console.log(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.remove();
  };
  return (
    <tr className="table-secondary">
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.mobileno}</td>
      <td>{props.age}</td>
      <td>{<button onClick={deleteFrom}>delete</button>}</td>
    </tr>
  );
};

export default per;
