import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state= { 
    videos: [],
    selectedVideo: null
  }

  onFormSubmit = async (term) => {
    this.setState({ selectedVideo: null })
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    this.setState({ videos: response.data.items })
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  renderVideoDetail = () => {
    return this.state.selectedVideo ? <VideoDetail video={this.state.selectedVideo} /> : null;
  }

  render() {
    return(
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit}/>
        {this.renderVideoDetail()}
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
      </div>
    )
  }
}

export default App;