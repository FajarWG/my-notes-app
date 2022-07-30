import React from "react";

class NotesSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
    this.onSearchChangeEventHandler =
      this.onSearchChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    this.setState({
      title: event.target.value,
    });
    this.props.onSearch(event.target.value);
  }

  render() {
    return (
      <div className="search">
        <input
          type="text"
          onChange={this.onSearchChangeEventHandler}
          placeholder="Search Note"
          className="search-input"
          value={this.state.title}
        />
      </div>
    );
  }
}

export default NotesSearch;
