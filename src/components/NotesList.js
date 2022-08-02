import React from "react";
import NotesItem from "./NotesItem";

const NotesList = ({ setNotes, notes }) => {
  return (
    <div>
      {notes.length === 0 ? (
        <p style={{ textAlign: "center" }}>Tidak ada catatan.</p>
      ) : (
        <div className="note-list">
          {notes.map((note) => (
            <NotesItem key={note.id} id={note.id} action={setNotes} {...note} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesList;
