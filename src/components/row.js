import React from "react";

const Row = React.memo(({ comment }) => {
  console.log("row");
  return (
    <tr>
      <td>{comment.id}</td>
      <td>{comment.name}</td>
      <td>{comment.email}</td>
      <td>{comment.body}</td>
    </tr>
  );
});

export default Row;
