import React from 'react';

const VideoDetail = ({ video }) => {
  console.log('videodetail', video)
  return(
    <div>
      <img src={video.snippet.thumbnails.high.url} alt=""/>
      <div>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail;