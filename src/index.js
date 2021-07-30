import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './componenets/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './componenets/video_list';
import VideoDetail from './componenets/video_detail';

const API_KEY = 'AIzaSyCpNmknKlReIaS2v8mVfsY6SS9gHS81nIQ';

//새로운 컴포넌트 생성. 
// 이 컴포넌트는 HTML을 생성하게 될 것
// const App = () => {} // Fat arrow => ES6 문법을 사용해 다른 방식으로 선언 

class App extends Component{
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ 
                videos: videos, // 비디오 리스트를 this.state.videos로 전달
                selectedVideo: videos[0] // 리스트의  첫 번째 비디오가 선택 비디오로 세팅
            });
            //this.setState({videos: videos});
        });
    }
    render(){
        return(
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/> {/*this.state.videos 부분은 빈배열임*/ }
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})} // selectVideo 변경 업데이트
                videos={this.state.videos} />
            </div>
        );
    }
}


// 이 컴포넌트가 만든 HTML을 가져가고
// 페이지에 반영한다 (DOM 안에)
ReactDOM.render(<App />, document.querySelector('.container'));
// App 클래스를 전달하고 있지만 인스턴스로 바꿔서 보내야 함
// JSX형태로 <App />으로 변경
// index.html의 div class="container"에 컴포넌트를 렌더링 하기 좋은 곳임
// 2 번째 요소에 타켓 렌더링을 하기 위해 설정
