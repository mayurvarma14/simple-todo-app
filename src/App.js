import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
            <div className="content">
              <div className="item">
                <span className="text">Complete ten push-ups</span>
                <span className="date">Due Fri Aug 6</span>
              </div>
              <div className="item">
                <span className="text">Complete ten push-ups</span>
                <span className="date">Due Fri Aug 6</span>
              </div>
              <div className="item">
                <span className="text">Complete ten push-ups</span>
                <span className="date">Due Fri Aug 6</span>
              </div>
            </div>
            <div className="footer">
              <div className="button"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
