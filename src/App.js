import React from "react";
import "./App.css";
//Audio files imported
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
    /*State holds a 2 dimensional array with all the key bindings and the instrument associated to that key.
    The source state will hold a variable associated with the string path to the audio file imported.
    Finally, audiotext holds a string noting which instrument has been played.*/
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
    /*When playSound is activated, audiotext is set to the id of the button that triggered the event handler.
    Source is set to the value of the button clicked.*/
    varName = event.target.getAttribute("id");
    this.setState({
      source: event.target.value,
      audiotext: varName
    });
  }

  handleKeyPress(event) {
    /*handleKeyPress event handler checks which key was pressed to trigger the event based on the keyCode associated to that key
    and sets the source and audiotext appropriate to the instrument we binded to that key.
    For example, if I press press the "a" key, the keyCode associated to that key is 65 and so source will be set to the flute variable and audiotext to "Flute".*/
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
    /*focusElement makes sure that the buttons are always focused so that whenever we press an instrument key,
    the handleKeyPress event is activated*/
    this.button.current.focus();
  }

  componentDidMount() {
    /*We make sure that button is focused the first time the DOM is rendered so that whenever we press an instrument key,
    the handleKeyPress event is activated*/
    this.button.current.focus();
  }

  componentDidUpdate() {
    /*When we click on a button or press a key, we update the component's state.
    Once updated, we play the audio element.*/
    /*The audioIdFinder() function returns a string corresponding to the audio element's id
    based on the instrument string found in varName.*/
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
    /*We then target the audio element thanks to the string returned in audioIdFinder() and finally play the sound.*/
    let x = document.getElementById(audioIdFinder());
    x.play();
    x.currentTime = 0;
  }

  render() {
    /*I'm rendering 9 buttons and associating an id, value and key string to each of them by mapping the array in the state binding.
    Audio's id is set to the key string for that instrument's button (Example:"Q","W",...) and it's src attribute is equal to the state source.*/
    const button = this.state.binding.map(i => <button onKeyDown={this.handleKeyPress} tabIndex="0" onClick={this.playSound} className="drum-pad" id={i[2]} value={i[1]} ref={this.button} onBlur={this.focusElement}>
                                               {i[0]}
                                               <audio src={this.state.source} className="clip" id={i[0]} />
                                               </button>)
    return (
      <div id="display">
      {button}
      <p>{this.state.audiotext}</p>
      </div>
    );
  }
}

export default Drums;
