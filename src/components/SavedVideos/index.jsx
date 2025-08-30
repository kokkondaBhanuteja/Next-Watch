import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import MenuBar from '../MenuBar';
import savedVideosContext from '../../context/savedVideosContext'; // Import the context
import './index.css';
import { MdPlaylistAdd } from 'react-icons/md';

const SavedVideos = ({ isDarkTheme, toggleTheme }) => {
  const themeClass = isDarkTheme ? 'dark-theme' : 'light-theme';

  return (
    <savedVideosContext.Consumer>
      {value => {
        const { savedVideosList } = value;

        const renderNoSavedVideosView = () => (
          <div className={`not-found-view ${themeClass}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
              className="not-found-image"
            />
            <p className="no-saved-videos-title">No saved videos found</p>
            <p className="no-saved-videos-text">
              You can save your videos while watching them
            </p>
          </div>
        );

        const renderSavedVideosView = () => (
          <div className="saved-videos-container">
            <div className="saved-videos-banner">
              <MdPlaylistAdd size={37} color="red" />
              <span className="saved-videos-banner-title">Saved Videos</span>
            </div>
            <ul className="saved-videos-list">
              {savedVideosList.map((video) => (
                <li key={video.id} className="saved-video">
                  <Link to={`/videos/${video.id}`} className="video-link">
                    <div className="saved-video-card">
                      <div className="saved-video-thumbnail">
                        <img src={video.thumbnailUrl} alt="thumbnail" />
                      </div>
                      <div className="saved-video-details">
                        <p className="saved-video-name">{video.title}</p>
                        <p className="saved-video-channel-name">{video.channel.name}</p>
                        <div className="saved-video-stats">
                          <p className="saved-video-views">{video.viewCount} Views</p>
                          <p className="saved-video-date">{video.publishedAt}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );

        return (
          <div className={themeClass}>
            <NavBar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
            <MenuBar />
            <main className="main-content">
              {savedVideosList.length === 0
                ? renderNoSavedVideosView()
                : renderSavedVideosView()}
            </main>
          </div>
        );
      }}
    </savedVideosContext.Consumer>
  );
};

export default SavedVideos;