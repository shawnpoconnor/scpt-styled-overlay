import React, {Component} from 'react';
import { RoundCount } from './round-count.component';
import PlayerOverview from './player-overview.component';
import { Player } from './player.component';
import LoadingBar from './loading-bar.component';
import VictoryPointControl from './victory-points-control.component';
import { Card } from './card.component';
import CheckBox from './check-box.component';
import PlayerAssignment from './player-assignment.component'

export default class ScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerToAdd: '',
      uColors: [
        "red",
        "blue",
        "green",
        "purple",
        "gray",
        "yellow"
      ],
      aColors: []
    }

    this.handleAddVp = this.handleAddVp.bind(this);

  }

  handleAddVp(event) {
    event.preventDefault();

    this.setState({
      victoryPoints: this.state.victoryPoints + 1
    })
  }

  handleRemoveVp(event) {
    event.preventDefault();

    this.setState({
      victoryPoints: this.state.victoryPoints - 1
    })
  }
    render() {
      return(
        <Card>
          <RoundCount/>
          <PlayerOverview/>
          <VictoryPointControl colors={this.state.uColors}/>
        </Card>
      )
    }
}
