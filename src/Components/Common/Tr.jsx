import React from "react";

const Tr = (props) => {
  return (
    <tr>
      <td>
        <strong>{props.left}</strong>
      </td>
      <td>{props.right}</td>
    </tr>
  );
};

export default Tr;
