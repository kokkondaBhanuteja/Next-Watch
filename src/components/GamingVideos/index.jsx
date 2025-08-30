import { Component } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import NotFound from "../NotFound";
import Loader from "react-loader-spinner";
import "./index.css"

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "INPROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};
class GamingVideos extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videos: [],
  };
  componentDidMount() {
    this.getGames();
  }
  getGames = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });
    const jwtToken = Cookies.get("jwt_token");
    if (!jwtToken) {
      this.setState({ apiStatus: apiStatusConstants.failure });
      return;
    }
    const gameApiUrl = "https://apis.ccbp.in/videos/gaming";
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };

    const rawResponse = await fetch(gameApiUrl, options);
    if (!rawResponse.ok) {
      this.setState({ apiStatus: apiStatusConstants.failure });
      return;
    } else {
      const data = await rawResponse.json();
      const gameVideos = data.videos.map((game) => ({
        id: game.id,
        title: game.title,
        thumbnailUrl: game.thumbnail_url,
        viewCount: game.view_count,
      }));
      this.setState({
        videos: gameVideos,
        apiStatus: apiStatusConstants.success,
      });
    }
  };
  renderSuccessView = () => {
    const { videos } = this.state;
    if (videos.length === 0) {
      return (
        <div className="failure-view">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no-videos"
          />
          <h1 className="failure-view-title">No search results found</h1>
          <p className="failure-view-text">
            Try different keywords or remove search filter
          </p>
          <button type="button" className="failure-view-retry-btn">
            Retry
          </button>
        </div>
      );
    } else {
      return (
        <ul className="game-videos-list">
          {videos.map((video) => (
            <li key={video.id} className="game-video">
              <Link to={`/videos/${video.id}`}>
                <div className="game-video-card">
                  <div className="game-video-thumbnail">
                    <img src={video.thumbnailUrl} alt="thumbnail-image" />
                  </div>
                  <div className="game-video-details">
                    <p className="game-video-name">{video.title}</p>
                    <p className="game-video-views">
                      {video.viewCount} Watching WorldWide
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      );
    }
  };

  renderFailureView = () => <NotFound />;
  renderLoadingView = () => (
    <div className="loader" data-testid="loader">
      <Loader type="ThreeDots" color="#00306e" height={65} width={65} />
    </div>
  );
  getApiStatus = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView();
      case apiStatusConstants.failure:
        return this.renderFailureView();
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      default:
        return null;
    }
  };
  render() {
    return <div className="game-content">{this.getApiStatus()}</div>;
  }
}
export default GamingVideos;
