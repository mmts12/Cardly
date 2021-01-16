import React, { Component } from 'react';

export class EditStack extends Component {
  state = {
    stack: {
      title: '',
    },
  };
  componentDidMount() {
    const { stack } = this.props;
    this.setState({ stack });
  }

  handleInput = (ev) => {
    const { stack } = this.state;
    stack.title = ev.target.value;
    this.setState({ stack });
  };

  onSaveStack = () => {
    const { stack } = this.state;
    this.props.saveStack(stack);
  };

  render() {
    return (
      <div className="edit-stack">
        <form action="" onSubmit={this.onSaveStack}>
          <input
            type="text"
            autoFocus
            onChange={this.handleInput}
            value={this.state.stack.title}
            name=""
            id=""
          />
          {/* <button onClick={this.onSaveStack}>Save</button> */}
        </form>
      </div>
    );
  }
}
