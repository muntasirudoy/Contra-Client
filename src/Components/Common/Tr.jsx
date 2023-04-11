import React from "react";

const Tr = (props) => {
  return (
    <tr>
      <td>
        <strong>{props.left}</strong>
      </td>
      <td><b>{props.right}</b></td>
    </tr>
  );
};

export default Tr;
