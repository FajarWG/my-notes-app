import { useState } from "react";

const NotesInput = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const todayDate = () => {
    const today = new Date();
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return (
      weekday[today.getDay()] +
      ", " +
      month[today.getMonth()] +
      " " +
      today.getDate() +
      "," +
      today.getFullYear()
    );
  };

  const addNotes = (event) => {
    event.preventDefault();

    addNote((notes) => [
      ...notes,
      {
        id: notes.length + 1,
        title: title,
        note: note,
        createdAt: todayDate(),
        archived: false,
      },
    ]);
  };

  return (
    <div>
      <div className="add-button">
        <a className="btn" href="#open-modal">
          Add Notes
        </a>
      </div>
      <div id="open-modal" className="modal-window">
        <div>
          <a href="#close-modal" title="Close" className="modal-close">
            Close
          </a>
          <h1>Make Notes</h1>
          <form onSubmit={addNotes}>
            <p>
              Title{" "}
              <small style={{ float: "right" }}>
                Remaining Characters : {50 - title.length}
              </small>
            </p>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                maxLength={50}
                value={title}
              />
            </div>
            <p>Note</p>
            <div className="form-group">
              <textarea
                className="form-control"
                id="note"
                rows="3"
                onChange={(e) => setNote(e.target.value)}
                value={note}
                placeholder="Write your note"
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NotesInput;
