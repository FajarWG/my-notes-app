import React from "react";
import ArchiveButton from "./button/ArchiveButton";
import DeleteButton from "./button/DeleteButton";

const NotesButton = ({ onDelete, onArchive }) => {
  return (
    <div>
      <ArchiveButton onArchive={onArchive} />
      <DeleteButton onDelete={onDelete} />
    </div>
  );
};

export default NotesButton;
