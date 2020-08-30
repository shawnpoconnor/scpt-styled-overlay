
import React, { Component } from 'react';
import {VpAssignment} from './vp-assignment.component';

export default class VictoryPointControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      public1pt: ['-', '2 TECH 2 COLORS', '2 UNIT UPGRADES', '8 INFLUENCE', '8 RESOURCES', '5 TRADE GOODS', '3 COMMAND TOKENS', '2 SYS ADJ TO MR', '4 PLANET SAME TRAIT', '3 TECH SPECIALTY', '6 NON-HOME PLANET'],
      public2pt: ['-','2 TECH 4 COLORS', '3 UNIT UPGRADES', '16 INFLUENCE', '16 RESOURCES', '10 TRADE GOODS', '6 COMMAND TOKENS', '1 OPPONENT HOME', '6 PLANET SAME TRAIT', '5 TECH SPECIALTY', '11 NON-HOME PLANET'],
      secret: ['-', 'ALPHA AND BETA', '4 HAZARDOUS', '4 CULTURAL', '4 INDUSTRIAL', 'BLOCKADE SD', 'MR W/ 3 SHIPS', '3 ADJ TO ANOMALY', '6 SYSTEMS', 'SYS ADJ TO HOME', '2 FACTION TECH', '4 TECH 1 COLOR', '5 DREADNOUGHTS', '5 ACTION CARDS','3 SPACE DOCKS','4 PDS','BOMBARD LAST GF','SPC LAST SHIP', 'DESTORY WS/FLAG', 'WIN W/ FLAGSHIP', 'WIN VS LEADER'],
      other: ['-', 'SHARD of the THRONE', 'CROWN of EMPHIDIA', 'HOLY PLANET of IXTH', 'SEED of an EMPIRE', 'MUTINY +1/-1']
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
            <VpAssignment options={this.state.public1pt}/>
            <VpAssignment options={this.state.public1pt}/>
            <VpAssignment options={this.state.public1pt}/>
            <VpAssignment options={this.state.public1pt}/>
            <VpAssignment options={this.state.public1pt}/>
          </div>
          <div style={{
            backgroundColor: 'lightBlue'
          }}>
            <VpAssignment options={this.state.public2pt}/>
            <VpAssignment options={this.state.public2pt}/>
            <VpAssignment options={this.state.public2pt}/>
            <VpAssignment options={this.state.public2pt}/>
            <VpAssignment options={this.state.public2pt}/>
          </div>
          <h2>Secret Objectives</h2>
          <div style={{
            backgroundColor: 'pink'
          }}>
            <VpAssignment options={this.state.secret}/>
            <VpAssignment options={this.state.secret}/>
            <VpAssignment options={this.state.secret}/>
            <VpAssignment options={this.state.secret}/>
            <VpAssignment options={this.state.secret}/>
            <VpAssignment options={this.state.secret}/>
            <VpAssignment options={this.state.secret}/>
            <VpAssignment options={this.state.secret}/>
            <VpAssignment options={this.state.secret}/>
            <VpAssignment options={this.state.secret}/>
          </div>
          <h2>Other Objectives</h2>
          <div style={{
            backgroundColor: 'grey'
          }}>
          <VpAssignment options={this.state.other}/>
          <VpAssignment options={this.state.other}/>
          <VpAssignment options={this.state.other}/>
          <VpAssignment options={this.state.other}/>
          <VpAssignment options={this.state.other}/>
          </div>
        </div>
      </div>

    );
  }
}