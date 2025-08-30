import React, { Component } from 'react';

const SavedVideosContext = React.createContext({
  savedVideosList: [],
  addVideo: () => {},
});

export class SavedVideosProvider extends Component { // Capitalized
  state = {savedVideosList: [],};

  addVideo = videoDetails => {
    const { savedVideosList } = this.state;
    const videoExists = savedVideosList.some(
      video => video.id === videoDetails.id,
    );
    if (videoExists) {
      this.setState({
        savedVideosList: savedVideosList.filter(
          video => video.id !== videoDetails.id,
        ),
      });
    } else {
      this.setState({
        savedVideosList: [...savedVideosList, videoDetails],
      });
    }
  };

  render() {
    const { savedVideosList } = this.state;
    return (
      <SavedVideosContext.Provider
        value={{
          savedVideosList,
          addVideo: this.addVideo,
        }}
      >
        {this.props.children}
      </SavedVideosContext.Provider>
    );
  }
}

export default SavedVideosContext;