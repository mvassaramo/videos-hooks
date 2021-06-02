import React, { useState, useEffect } from 'react';
import useVideos from '../hooks/useVideos';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Loader from './Loader';


const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const { videos, searchVideo } = useVideos('jazz')

  useEffect(() => {
    setSelectedVideo(videos[0])

  }, [videos])


  const renderVideoDetail = () => {
    return selectedVideo ? <VideoDetail video={selectedVideo} /> : <Loader />;
  }

  return(
    <div className="ui container">
      <SearchBar onFormSubmit={searchVideo}/>
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