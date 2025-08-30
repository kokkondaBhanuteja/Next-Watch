import { Component } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import Cookies from "js-cookie";
import NotFound from "../NotFound";
import "./index.css";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "INPROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};
class TrendingVideos extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videos: [],
  };
  componentDidMount() {
    this.getTrendingVideos();
  }

  getTrendingVideos = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });
    const jwtToken = Cookies.get("jwt_token");
    const trendingVideosApiUrl = "https://apis.ccbp.in/videos/trending";
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };

    const rawResponse = await fetch(trendingVideosApiUrl, options);
    if (rawResponse.ok) {
      const data = await rawResponse.json();
      const trendingVideos = data.videos.map((eachVideo) => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }));
      this.setState({
        videos: trendingVideos,
        apiStatus: apiStatusConstants.success,
      });
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
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
    }
    return (
      <ul className="trending-videos-list">
        {videos.map((video) => (
          <li key={video.id} className="trending-video">
            <Link to={`/videos/${video.id}`}>
              <div className="trending-video-card">
                <div className="trending-video-thumbnail">
                  <img src={video.thumbnailUrl} alt="thumbnail-image" />
                </div>
                <div className="trending-video-footer">
                  <img
                    src={video.channel.profileImageUrl}
                    alt="channel-profile-image"
                  />
                  <div className="trending-video-details">
                    <p className="trending-video-name">{video.title}</p>
                    <p className="trending-video-channel-name">
                      {video.channel.name}
                    </p>
                    <div className="trending-video-stats">
                      <p className="trending-video-views">
                        {video.viewCount} Views
                      </p>
                      <p className="trending-video-date">{video.publishedAt}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    );
  };
  
  renderFailureView = () => <NotFound />;

  renderLoadingView = () => (
    // If you need to make any changes or optimize anything, do it in the loading view
    <div className="loader" data-testid="loader">
      <Loader type="ThreeDots" color="#00306e" height={60} width={60} />
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
    return <div className="trending-content">{this.getApiStatus()}</div>;
  }
}
export default TrendingVideos;
