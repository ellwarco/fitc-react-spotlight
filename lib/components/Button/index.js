'use strict';

var React = require('react');
var ReactF1 = require('react-f1');
var getStates = require('./getStates');
var getTransitions = require('./getTransitions');

class ExampleButton extends React.Component {
  render() {
    var style = Object.assign(
      {
        width: 120,
        height: 120
      },
      this.props.style
    );

    return <ReactF1
      // go will tell react-f1 to animate to a state eg. idle or over
      go={this.props.go}

      // onComplete will be called once we animate to a state
      onComplete={this.props.onComplete}

      // States define what the ui will look like in each state
      states={getStates()}

      // Transtions define how to animate between states
      transitions={getTransitions()}

      style={style}
    >
      <div 
        // data-f1 indicates this div is a target which should be animated
        // getStates() - will return what exampleButton looks like in each
        // state.
        {...this.props}
        data-f1="buttonBG"
        style={{
          backgroundColor: '#00CAFE',
          fontFamily: 'Georgia, serif',
          cursor: 'pointer'
        }}
      >
        <div
          data-f1="buttonText"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          react-f1
        </div>
      </div>
    </ReactF1>;
  }
}

module.exports = ExampleButton;