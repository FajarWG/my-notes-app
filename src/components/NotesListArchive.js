import React from "react";
import NotesItem from "./NotesItem";

function NotesListArchive({ notes, onDelete, onArchive }) {
  const archiveList = notes.filter((note) => note.archived);

  return (
    <div className="note-list">
      {archiveList.map((note) => (
        <NotesItem
          key={note.id}
          id={note.id}
          onArchive={onArchive}
          onDelete={onDelete}
          {...note}
        />
      ))}
    </div>
  );
}

export default NotesListArchive;
