import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends React.Component {
  state= { videos: [] }

  onFormSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    this.setState({ videos: response.data.items })
  }

  render() {
    return(
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit}/>
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

export default App;