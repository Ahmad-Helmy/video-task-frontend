import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import PlayerArea from "./components/player-area.";

function App() {
  return (
    <React.Fragment>
      <PlayerArea />
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
