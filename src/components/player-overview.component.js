import React, { Component } from 'react';
import {Player} from './player.component';

export default class PlayerOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: {
        red: null,
        blue: null,
        green: null,
        purple: null,
        gray: null,
        yellow: null,
      }
    }
  
  }


  render() {
   return (
      <div>
      <Player color='purple' float='right'/>
      <Player color='yellow' float='right'/>
      <Player color='green' float='right'/>
      <Player color='red' float='left'/>
      <Player color='gray' float='left'/>
      <Player color='blue' float='left'/>
      </div>
    );
  }
}
