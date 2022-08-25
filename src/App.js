import React, { useState, useEffect } from "react";
import NotesInput from "./components/NotesInput";
import NotesList from "./components/NotesList";
import NotesSearch from "./components/NotesSearch";
import Navbar from "./components/layout/Navbar";
import Heading from "./components/text/Heading";
import { getInitialData } from "./utils/Data";

const App = () => {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState(getInitialData());
  const [searchNotes, setSearchNotes] = useState([]);

  const activeNotes = (searchNotes || notes).filter((note) => !note.archived);
  const archivedNotes = (searchNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, notes]);

  return (
    <>
      <Navbar />
      <NotesInput addNote={setNotes} />
      <NotesSearch search={search} onSearch={setSearch} />
      <Heading name="Notes" />
      <NotesList notes={activeNotes} setNotes={setNotes} />
      <Heading name="Archive" />
      <NotesList notes={archivedNotes} setNotes={setNotes} />
    </>
  );
};

export default App;
