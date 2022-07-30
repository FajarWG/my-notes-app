import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 50,
      title: "",
      note: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onNoteChangeEventHandler = this.onNoteChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        count: 50 - event.target.value.length,
        title: event.target.value,
      };
    });
  }

  onNoteChangeEventHandler(event) {
    this.setState(() => {
      return {
        note: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }
  render() {
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
            <form onSubmit={this.onSubmitEventHandler}>
              <p>
                Title{" "}
                <small style={{ float: "right" }}>
                  Remaining Characters : {this.state.count}
                </small>
              </p>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  onChange={this.onTitleChangeEventHandler}
                  maxLength={50}
                />
              </div>
              <p>Note</p>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="note"
                  rows="3"
                  onChange={this.onNoteChangeEventHandler}
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
  }
}

export default NotesInput;
