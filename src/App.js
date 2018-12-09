import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
