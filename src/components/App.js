import React, { useState, useEffect } from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Loader from './Loader';


const App = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)


  useEffect(() => {
    onFormSubmit('jazz')
  }, [])


  const onFormSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])
  }

  const renderVideoDetail = () => {
    return selectedVideo ? <VideoDetail video={selectedVideo} /> : <Loader />;
  }

  return(
    <div className="ui container">
      <SearchBar onFormSubmit={onFormSubmit}/>
      <div className="ui grid">
        <div className="ui row">
          <div className="nine wide column">
            {renderVideoDetail()}
          </div>
          <div className="seven wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;