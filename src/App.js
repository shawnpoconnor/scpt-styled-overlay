import React from 'react';

import StreamWindow from './components/stream-window.component';
import ScoreBoard from './components/scoreboard.component';
import { Card } from './components/card.component';

function App() {
  return (
    <Card style={{height:'100%'}}>
      <StreamWindow/>
      <ScoreBoard/>
    </Card>
  );
}

export default App;
