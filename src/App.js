import React from 'react';

import StreamWindow from './components/stream-window.component';
import { ScoreBoard } from './components/scoreboard.component';
import { RoundCount } from './components/round-count.component';
import PlayerOverview from './components/player-overview.component';
import { Player } from './components/player.component';
import LoadingBar from './components/loading-bar.component';
import VictoryPointControl from './components/victory-points-control.component';
import { Card } from './components/card.component';
import CheckBox from './components/check-box.component';
import PlayerAssignment from './components/player-assignment.component'

function App() {
  return (
    <Card style={{height:'100%'}}>
      <ScoreBoard>
        <Card>
          <StreamWindow/>
        </Card>
        <Card>
          <RoundCount/>
          <PlayerOverview/>
          <VictoryPointControl/>
        </Card>
      </ScoreBoard>
    </Card>
  );
}

export default App;
