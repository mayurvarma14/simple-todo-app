import React, { Component } from 'react';
import './App.css';

const List = ({ todos }) => {
  const todoList = todos.map(({ text }, index) => {
    return <Item key={index} text={text} />;
  });
  return <div className="content">{todoList}</div>;
};

const Item = ({ text }) => {
  return (
    <div className="item">
      <span className="text">
        <span>{text}</span>
        <i className="far fa-clock"></i>
      </span>
      <span className="date">Due Fri Aug 6</span>
    </div>
  );
};

class App extends Component {
  state = { todos: [{ text: 'Complete ten push-ups' }] };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="container">
            <div className="app">
              <div className="header">
                <div className="header-name">
                  <div className="greet">Hello Floyd Mullins</div>
                  <div className="tasks-count">You have 3 tasks</div>
                </div>
                <div className="header-profile">
                  <img src="/profile.jpg" alt="" />
                </div>
              </div>
              <List todos={this.state.todos} />
              <div className="footer">
                <div className="button"></div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
