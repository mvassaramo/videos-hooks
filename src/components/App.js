import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Loader from './Loader';

class App extends React.Component {
  state= { 
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.onFormSubmit('jazz')
  }

  onFormSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  renderVideoDetail = () => {
    return this.state.selectedVideo ? <VideoDetail video={this.state.selectedVideo} /> : <Loader />;
  }

  render() {
    return(
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="nine wide column">
              {this.renderVideoDetail()}
            </div>
            <div className="seven wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;