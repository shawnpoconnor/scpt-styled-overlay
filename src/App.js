import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import StreamWindow from "./components/stream-window.component"
import ScoreBoard from "./components/scoreboard.component"


function App() {
  return (
    <Router>
      <div className="container">
      <StreamWindow/>
      <ScoreBoard/>
      </div>
    </Router>
  );
}

export default App;
