import React, { Component } from "react";

class TitleInput extends Component {
  state = { title: "" };
  handleChange = (e) => {
    this.props.changeTitle(e.target.value);
    this.setState({ title: e.target.value });
  };
  render() {
    return (
      <div>
        <label>Video Tilte:</label>
        <input
          type="text"
          name="title"
          id="title"
          className="form-control"
          onChange={this.handleChange}
          value={this.state.title}
        />
      </div>
    );
  }
}

export default TitleInput;
