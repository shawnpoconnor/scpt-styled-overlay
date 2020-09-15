
import React, { Component } from 'react';
import {VpAssignment} from './vp-assignment.component';
import Dropdown from './dropdown.component';
import { Card } from './card.component';

export default class VictoryPointControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objectiveType: {
          public1pt: {
            cards: {
              undrawn:
                [
                  '2 TECH 2 COLORS',
                  '2 UNIT UPGRADES',
                  '8 INFLUENCE', '8 RESOURCES',
                  '5 TRADE GOODS',
                  '3 COMMAND TOKENS'

                ],
              drawn:
              [
                '2 SYS ADJ TO MR',
                '4 PLANET SAME TRAIT',
                '3 TECH SPECIALTY',
                '6 NON-HOME PLANET'
              ]
            },
          },
          public2pt: {
            cards: {
              undrawn:
                [
                  '2 TECH 4 COLORS',
                  '3 UNIT UPGRADES',
                  '16 INFLUENCE',
                  '16 RESOURCES',
                  '10 TRADE GOODS',
                  '6 COMMAND TOKENS'
                ],
              drawn:
              [
                '1 OPPONENT HOME',
                '6 PLANET SAME TRAIT',
                '5 TECH SPECIALTY',
                '11 NON-HOME PLANET'
              ]
                }
          },
          secret: {
            cards: {
              undrawn:
                [
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
                  '4 TECH 1 COLOR'
                ],
              drawn:
              [
                '5 DREADNOUGHTS',
                '5 ACTION CARDS',
                '3 SPACE DOCKS',
                '4 PDS','BOMBARD LAST GF','SPC LAST SHIP',
                'DESTORY WS/FLAG',
                'WIN W/ FLAGSHIP',
                'WIN VS LEADER'
              ]
            }
          },
          other: {
            cards: {
              undrawn:
                [
                  'SHARD of the THRONE',
                  'CROWN of EMPHIDIA',
                  'HOLY PLANET of IXTH',
                  'SEED of an EMPIRE',
                  'MUTINY +1/-1'
                ],
              drawn: []
            }
          }
      }
    };
  }

  render() {
    return (
      <div>
        <Dropdown options={this.state.objectiveType.public1pt.cards.undrawn}/>
        <div>
          <h2>Public Objectives</h2>
          <div style={{
            backgroundColor: 'tan'
          }}>
            {this.state.objectiveType.public1pt.cards.drawn.map((card) => <VpAssignment options={this.state.objectiveType.public1pt.cards.undrawn}/>)}
          </div>
          <div style={{
            backgroundColor: 'lightBlue'
          }}>
            {this.state.objectiveType.public2pt.cards.drawn.map((card) => <VpAssignment options={this.state.objectiveType.public2pt.cards.undrawn}/>)}
          </div>
          <h2>Secret Objectives</h2>
          <div style={{
            backgroundColor: 'pink'
          }}>
          {this.state.objectiveType.secret.cards.drawn.map((card) => <VpAssignment options={this.state.objectiveType.secret.cards.undrawn}/>)}
          </div>
          <h2>Other Objectives</h2>
          <div style={{
            backgroundColor: 'grey'
          }}>
          {this.state.objectiveType.secret.cards.drawn.map((card) => <VpAssignment options={this.state.objectiveType.other.cards.undrawn}/>)}

          </div>
        </div>
      </div>

    );
  }
}
