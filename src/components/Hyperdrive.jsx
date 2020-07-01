// you must replace the path to the song you wish to play

import React, { Component } from "react";
import soundfile from "ADD YOUR OWN SONG HERE";
import Sound from "react-sound";

class Hyperdrive extends Component {
  state = {
    back: "blue",
    color: ["red", "yellow", "blue"],
  };

  setColor = () => {
    let x = Math.floor(Math.random(2) * 3);
    let back = this.state.color[x];
    this.setState({ back });
  };

  render() {
    return (
      <div
        className="background"
        style={{ backgroundColor: `${this.state.back}` }}
        onMouseMove={this.setColor}
      >
        <Sound
          url={soundfile}
          playStatus={Sound.status.PLAYING}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
        />
        {/* <h1>MOVE YOUR MOUSE</h1> */}
      </div>
    );
  }
}

export default Hyperdrive;
