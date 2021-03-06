import React, { Component } from 'react';
import '../css/StatusBars.scss';

import ProgressBar from "@ramonak/react-progress-bar";

class SuperegoBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };

    
  }

  render() {
    return (
      <div className="superego-bar">

        <ProgressBar
          className="status-bar"

          completed={this.props.superego_level}
          customLabel={"Superego"}

          bgColor="#cc517a"
          labelColor="#ffffff"
          width="50%"
        />

      </div>
    )
  };


}

export default SuperegoBar;
