import React from 'react';

const VideoDetail = ({video}) => {
const videoId = video.id.videoId;
const url = `https://www.youtube.com/embed/${videoId}`
// 두 개의 따옴표를 지우고 백틱 문자열로 둘러 쌓은 다음 $ 달러 구문을 넣고 괄호 안에 비디오 ID를 넣음

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;