import { Component } from "react";
import Loader from "react-loader-spinner";
import { MdPlaylistAdd, MdPlaylistAddCheck } from "react-icons/md";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import Cookies from "js-cookie";
import NotFound from "../NotFound";
import  SavedVideosProvider  from "../../context/savedVideosContext";
import "./index.css";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "INPROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

class PlayVideo extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
  };

  componentDidMount() {
    this.getCurrentVideo();
  }

  getCurrentVideo = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const jwtToken = Cookies.get("jwt_token");
    const VideosApiUrl = `https://apis.ccbp.in/videos/${id}`;

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };

    const rawResponse = await fetch(VideosApiUrl, options);
    if (rawResponse.ok) {
      const data = await rawResponse.json();
      let videoUrl = data.video_details.video_url;
      videoUrl = videoUrl.replace("watch?v=", "embed/");
      const currentVideo = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: videoUrl,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      };
      this.setState({
        videoDetails: currentVideo,
        apiStatus: apiStatusConstants.success,
      });
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  renderSuccessView = () => {
    const { videoDetails } = this.state;

    return (
      <SavedVideosProvider.Consumer>
      {value => {
          const { addVideo, savedVideosList } = value;
          const isSaved = savedVideosList.some(
            video => video.id === videoDetails.id
          );

          const onSaveVideo = () => {
            addVideo(videoDetails);
          };
          return (
            <div className="video-item-container">
              <div className="video-item-header">
                <div className="video-play-container">
                  <iframe
                    src={videoDetails.videoUrl}
                    title={videoDetails.title}
                  ></iframe>
                </div>
                <p className="video-item-title">{videoDetails.title}</p>
                <div className="video-item-status">
                  <div className="video-item-stats">
                    <p>{videoDetails.viewCount} views </p>
                    <p>{videoDetails.publishedAt}</p>
                  </div>
                  <div className="video-item-fuction">
                    <div className="video-item-social">
                      <p>
                        <AiOutlineLike size={27} /> Like
                      </p>
                      <p>
                        <AiOutlineDislike size={27} /> Dislike
                      </p>
                      <button
                        type="button"
                        className="social-btn"
                        onClick={onSaveVideo}
                      >
                        {isSaved ? (
                          <MdPlaylistAddCheck size={27} />
                        ) : (
                          <MdPlaylistAdd size={27} />
                        )}
                        {isSaved ? "Saved" : "Save"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="video-item-footer">
                <div className="video-item-channel">
                  <img
                    className="video-item-channel-img"
                    src={videoDetails.channel.profileImageUrl}
                    alt="profile-image"
                  />
                </div>
                <div className="video-item-channel-details">
                  <p className="video-item-channel-name">
                    {videoDetails.channel.name}
                  </p>
                  <p className="video-item-channel-subscriber">
                    {videoDetails.channel.subscriberCount} Subscribers
                  </p>
                  <p className="vide-item-channel-description">
                    {videoDetails.description}
                  </p>
                </div>
              </div>
            </div>
          );
        }}
      </SavedVideosProvider.Consumer>
  );
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
    return <div className="video-content">{this.getApiStatus()}</div>;
  }
}
export default PlayVideo;