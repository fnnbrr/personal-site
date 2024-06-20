import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
        <div className={"App-header"}>
            <p>Finnbarr O'Callahan</p>
        </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
