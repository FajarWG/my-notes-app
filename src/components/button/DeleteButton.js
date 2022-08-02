import React from "react";

const DeleteButton = ({ onDelete }) => {
  return (
    <button className="btn-delete" onClick={onDelete}>
      Delete
    </button>
  );
};

export default DeleteButton;
