import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url; // video의 snippet의 thumbnails의 default의 url
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item"> {/*이 프로퍼티는 클릭할 때마다 전달한 함수를 호출*/ }
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}></img>
                </div>
                
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>

        </li>
    );
};

export default VideoListItem;



// 비디오당 vodeo_list_item을 렌더링 하는 것
// 각 비디오는 하나의 리스트 아이템의 인스턴스를 생성