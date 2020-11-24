import React, { Component } from "react";
import music from "./music.png";
import "./Player.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      deviceId: "",
      loggedIn: false,
      error: "",
      trackName: "Track Name",
      artistName: "Artist Name",
      albumName: "Album Name",
      playing: false,
      position: 0,
      duration: 1,
    };
    this.playerCheckInterval = null;
  }
  // when we click the "go" button
  handleLogin() {
    if (this.state.token !== "") {
      // change the loggedIn variable, then start checking for the window.Spotify variable
      this.setState({ loggedIn: true });
      this.playerCheckInterval = setInterval(() => this.checkForPlayer(), 1000);
    }
  }

  // when we receive a new update from the player
  onStateChanged(state) {
    // only update if we got a real state
    if (state !== null) {
      const {
        current_track: currentTrack,
        position,
        duration,
      } = state.track_window;
      const trackName = currentTrack.name;
      const albumName = currentTrack.album.name;
      const artistName = currentTrack.artists
        .map((artist) => artist.name)
        .join(", ");
      const playing = !state.paused;
      this.setState({
        position,
        duration,
        trackName,
        albumName,
        artistName,
        playing,
      });
    } else {
      // state was null, user might have swapped to another device
      this.setState({
        error: "Looks like you might have swapped to another device?",
      });
    }
  }
  createEventHandlers() {
    // problem setting up the player
    this.player.on("initialization_error", (e) => {
      console.error(e);
    });
    // problem authenticating the user.
    // either the token was invalid in the first place,
    // or it expired (it lasts one hour)
    this.player.on("authentication_error", (e) => {
      console.error(e);
      this.setState({ loggedIn: false });
    });
    // currently only premium accounts can use the API
    this.player.on("account_error", (e) => {
      console.error(e);
    });
    // loading/playing the track failed for some reason
    this.player.on("playback_error", (e) => {
      console.error(e);
    });

    // Playback status updates
    this.player.on("player_state_changed", (state) =>
      this.onStateChanged(state)
    );

    // Ready
    this.player.on("ready", async (data) => {
      let { device_id } = data;
      // set the deviceId variable, then let's try
      // to swap music playback to *our* player!
      await this.setState({ deviceId: device_id });
      this.transferPlaybackHere();
    });
  }

  checkForPlayer() {
    const { token } = this.state;

    // if the Spotify SDK has loaded
    if (window.Spotify !== null) {
      // cancel the interval
      clearInterval(this.playerCheckInterval);
      // create a new player
      this.player = new window.Spotify.Player({
        name: "Notify's Spotify Player",
        getOAuthToken: (cb) => {
          cb(token);
        },
      });
      // set up the player's event handlers
      this.createEventHandlers();

      // finally, connect!
      this.player.connect();
    }
  }

  onPrevClick() {
    this.player.previousTrack();
  }

  onPlayClick() {
    this.player.togglePlay();
  }

  onNextClick() {
    this.player.nextTrack();
  }

  transferPlaybackHere() {
    const { deviceId, token } = this.state;
    // https://beta.developer.spotify.com/documentation/web-api/reference/player/transfer-a-users-playback/
    fetch("https://api.spotify.com/v1/me/player", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        device_ids: [deviceId],
        // true: start playing music if it was paused on the other device
        // false: paused if paused on other device, start playing music otherwise
        play: true,
      }),
    });
  }

  render() {
    const {
      token,
      loggedIn,
      trackName,
      artistName,
      albumName,
      error,
      playing,
    } = this.state;
    return (
      <div className="Player">
        <header className="Player_header">
          <img src={music} className="Player_logo" alt="logo" />
          {error && <p>Error: {error}</p>}
          {loggedIn ? (
            <div className="Player_songArtist">
              <p>Artist: {artistName}</p>
              <p>Track: {trackName}</p>
              <p>Album: {albumName}</p>
              <p>
                <button
                  Style={
                    "color: transparent; background-color: transparent; border-color: transparent; cursor: default;"
                  }
                  onClick={() => this.onPrevClick()}
                >
                  <SkipPreviousIcon
                    className="svg_icons"
                    style={{ color: "white" }}
                  />
                </button>
                <button
                  Style={
                    "color: transparent; background-color: transparent; border-color: transparent; cursor: default;"
                  }
                  onClick={() => this.onPlayClick()}
                >
                  {playing ? (
                    <PauseCircleOutlineIcon className="svg_icons" />
                  ) : (
                    <PlayCircleOutlineIcon className="svg_icons" />
                  )}
                </button>
                <button
                  Style={
                    "color: transparent; background-color: transparent; border-color: transparent; cursor: default;"
                  }
                  onClick={() => this.onNextClick()}
                >
                  <SkipNextIcon className="svg_icons" />
                </button>
              </p>
            </div>
          ) : (
            <div>
              <p className="Player_intro">
                Enter your Spotify access token. Get it from{" "}
                <a
                  href="https://beta.developer.spotify.com/documentation/web-playback-sdk/quick-start/#authenticating-with-spotify"
                  target="blank"
                >
                  here
                </a>
                .
              </p>
              <p>
                <input
                  className="input"
                  type="text"
                  value={token}
                  onChange={(e) => this.setState({ token: e.target.value })}
                />
              </p>
              <p>
                <button
                  Style={
                    " background-color: transparent; border-color: transparent; cursor: default;"
                  }
                  onClick={() => this.handleLogin()}
                >
                  <VpnKeyIcon className="svg_icons" />
                </button>
              </p>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default Player;
