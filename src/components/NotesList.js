import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete, onArchive }) {
  const noteList = notes.filter((note) => note.archived === false);

  return (
    <div className="note-list">
      {noteList.map((note) => (
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

export default NotesList;
