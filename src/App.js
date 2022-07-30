import React from "react";
import Navbar from "./components/layout/Navbar";
import NotesInput from "./components/NotesInput";
import NotesList from "./components/NotesList";
import NotesListArchive from "./components/NotesListArchive";
import NotesSearch from "./components/NotesSearch";
import Heading from "./components/text/Heading";
import { getInitialData, todayDate } from "./utils/Data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onChangeSearchHandler = this.onChangeSearchHandler.bind(this);
  }

  onChangeSearchHandler(title) {
    this.setState({
      notes: getInitialData().filter((note) =>
        note.title.toLowerCase().includes(title.toLowerCase())
      ),
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        if (note.archived) {
          note.archived = false;
        } else {
          note.archived = true;
        }
      }
      return note;
    });
    this.setState({ notes });
  }

  onAddNoteHandler({ id, title, note, createdAt, archive }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            note,
            createdAt: todayDate(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <NotesInput addNote={this.onAddNoteHandler} />
        <NotesSearch onSearch={this.onChangeSearchHandler} />
        <Heading name="Notes" />
        <NotesList
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
        <Heading name="Archive" />
        <NotesListArchive
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </div>
    );
  }
}

export default App;
