import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) =>{
    const videoItem = props.videos.map((video) => {
        return (
            <VideoListItem 
            onVideoSelect={props.onVideoSelect}
            key={video.etag} 
            video={video} 
            />
        )
        
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItem}
        </ul>
    );
};

export default VideoList;

// 함수형 비디오 리스트 컴포넌트가 있고, 이는 비디오 배열을 렌더링함
