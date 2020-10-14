
import React, { Component } from 'react';
import Dropdown from './dropdown.component'

export default class VictoryPointControl extends Component {
  constructor(props) {
    super(props);
    this.cards = {
      public1pt: [
        '-',
        '2 TECH 2 COLORS',
        '2 UNIT UPGRADES',
        '8 INFLUENCE', '8 RESOURCES',
        '5 TRADE GOODS',
        '3 COMMAND TOKENS',
        '2 SYS ADJ TO MR',
        '4 PLANET SAME TRAIT',
        '3 TECH SPECIALTY',
        '6 NON-HOME PLANET'
      ],
      public2pt: [
        '-',
        '2 TECH 4 COLORS',
        '3 UNIT UPGRADES',
        '16 INFLUENCE',
        '16 RESOURCES',
        '10 TRADE GOODS',
        '6 COMMAND TOKENS',
        '1 OPPONENT HOME',
        '6 PLANET SAME TRAIT',
        '5 TECH SPECIALTY',
        '11 NON-HOME PLANET'
      ],
      secret: [
        '-',
        'ALPHA AND BETA',
        '4 HAZARDOUS',
        '4 CULTURAL',
        '4 INDUSTRIAL',
        'BLOCKADE SD',
        'MR W/ 3 SHIPS',
        '3 ADJ TO ANOMALY',
        '6 SYSTEMS',
        'SYS ADJ TO HOME',
        '2 FACTION TECH',
        '4 TECH 1 COLOR',
        '5 DREADNOUGHTS',
        '5 ACTION CARDS',
        '3 SPACE DOCKS',
        '4 PDS','BOMBARD LAST GF','SPC LAST SHIP',
        'DESTORY WS/FLAG',
        'WIN W/ FLAGSHIP',
        'WIN VS LEADER'
      ],
      other: [
        '-',
        'SHARD of the THRONE',
        'CROWN of EMPHIDIA',
        'HOLY PLANET of IXTH',
        'SEED of an EMPIRE',
        'MUTINY +1/-1'
      ]
    };
  }

  render() {
    return (
      <div>
        <div>
          <h2>Public Objectives</h2>
          <div style={{
            backgroundColor: 'tan'
          }}>
            <Dropdown undrawn={this.cards.public1pt} colors={this.props.colors}/>
          </div>
          <div style={{
            backgroundColor: 'lightBlue'
          }}>
            <Dropdown undrawn={this.cards.public2pt} colors={this.props.colors}/>
          </div>
          <h2>Secret Objectives</h2>
          <div style={{
            backgroundColor: 'pink'
          }}>
            <Dropdown undrawn={this.cards.secret} colors={this.props.colors}/>
          </div>
          <h2>Other Objectives</h2>
          <div style={{
            backgroundColor: 'grey'
          }}>
            <Dropdown undrawn={this.cards.other} colors={this.props.colors}/>
          </div>
        </div>
      </div>

    );
  }
}
