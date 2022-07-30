import React from "react";
import NotesButton from "./NotesButton";

function NotesItem({ id, title, note, createdAt, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <h3>{title}</h3>
      <small>{createdAt}</small>
      <p>{note}</p>
      <NotesButton id={id} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}

export default NotesItem;
