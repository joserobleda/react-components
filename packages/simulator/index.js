import React, { Component } from 'react';
import SimulatorSimple from 'simulator-simple';
import SimulatorAdvanced from 'simulator-advanced';

export default class Simulator extends Component {
  render() {
    if (this.props.type == 'simple') {
      return (
        <SimulatorSimple />
      );
    }

    return (
      <SimulatorAdvanced />
    );
  }
};
