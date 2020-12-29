import React from "react";
import "./App.css";
import piano from "./audio/piano.mp3";
import cymbal from "./audio/cymbals.mp3";
import tambourine from "./audio/tambourine.wav";
import flute from "./audio/flute.wav";
import trombone from "./audio/trombone.mp3";
import saxophone from "./audio/saxophone.mp3";
import violin from "./audio/violin.mp3";
import guitar from "./audio/guitar.mp3";
import bass from "./audio/bass.mp3";

let varName = '';

class Drums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: null,
      binding:[["Q",piano,"Piano"],["W",cymbal,"Cymbal"],["E",tambourine,"Tambourine"],["A",flute,"Flute"],["S",trombone,"Trombone"],["D",saxophone,"Saxophone"],["Z",violin,"Violin"],["X",guitar,"Guitar"],["C",bass,"Bass"]],
      audiotext: "",
    };
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.focusElement = this.focusElement.bind(this);
    this.button = React.createRef();
  }

  playSound(event) {
    varName = event.target.getAttribute("id");
    this.setState({
      source: event.target.value,
      audiotext: varName
    });
  }

  handleKeyPress(event) {
    switch (event.keyCode) {
      case 81:
        varName = "Piano";
        this.setState({
          source: piano,
          audiotext: varName
        });
        break;
      case 87:
        varName = "Cymbal";
        this.setState({
          source: cymbal,
          audiotext: varName
        });
        break;
      case 69:
        varName = "Tambourine";
        this.setState({
          source: tambourine,
          audiotext: varName
        });
        break;
      case 65:
        varName = "Flute";
        this.setState({
          source: flute,
          audiotext: varName
        });
        break;
      case 83:
        varName = "Trombone";
        this.setState({
          source: trombone,
          audiotext: varName
        });
        break;
      case 68:
        varName = "Saxophone";
        this.setState({
          source: saxophone,
          audiotext: varName
        });
        break;
      case 90:
        varName = "Violin";
        this.setState({
          source: violin,
          audiotext: varName
        });
        break;
      case 88:
        varName = "Guitar";
        this.setState({
          source: guitar,
          audiotext: varName
        });
        break;
      case 67:
        varName = "Bass";
        this.setState({
          source: bass,
          audiotext: varName
        });
        break;
    }
  }

  focusElement() {
    this.button.current.focus();
  }

  componentDidMount() {
    this.button.current.focus();
  }

  componentDidUpdate() {
    function audioIdFinder() {
      switch(varName) {
        case "Piano" :
          return "Q";
        case "Cymbal" :
          return "W";
        case "Tambourine" :
          return "E";
        case "Flute" :
          return "A";
        case "Trombone" :
          return "S";
        case "Saxophone" :
          return "D";
        case "Violin" :
          return "Z";
        case "Guitar" :
          return "X";
        case "Bass" :
          return "C";
      }
    }
    let x = document.getElementById(audioIdFinder());
    x.play();
    x.currentTime = 0;
  }

  render() {
    const button = this.state.binding.map(i => <button onKeyDown={this.handleKeyPress} tabIndex="0" onClick={this.playSound} className="drum-pad" id={i[2]} value={i[1]} ref={this.button} onBlur={this.focusElement}>{i[0]}
    <audio src={this.state.source} className="clip" id={i[0]} /></button>)
    return (
      <div id="display">
      {button}
      <p>{this.state.audiotext}</p>
      </div>
    );
  }
}

export default Drums;
