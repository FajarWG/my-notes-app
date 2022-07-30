import React from "react";
import ArchiveButton from "./button/ArchiveButton";
import DeleteButton from "./button/DeleteButton";

const NotesButton = ({ id, onDelete, onArchive }) => {
  return (
    <div>
      <ArchiveButton id={id} onArchive={onArchive} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
};

export default NotesButton;
