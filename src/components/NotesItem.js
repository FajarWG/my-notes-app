import React from "react";
import NotesButton from "./NotesButton";

const NotesItem = ({ id, title, note, createdAt, action }) => {
  const deleteNote = (item) =>
    action((notes) => notes.filter((note) => note.id !== item));
  const toggleArchive = (item) => {
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) {
          return { ...note, archived: !note.archived };
        }
        return note;
      })
    );
  };

  return (
    <div className="note-item">
      <h3>{title}</h3>
      <small>{createdAt}</small>
      <p>{note}</p>
      <NotesButton
        onDelete={() => deleteNote(id)}
        onArchive={() => toggleArchive(id)}
      />
    </div>
  );
};

export default NotesItem;
