import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        // console.log(props); // Component의 constructor가 있는 것을 확인할 수 있음
        //term이라는 정보를 가져오는데 참고로 term은 search term을 의미하는 프로퍼티
        // 유저가 검색 인풋에 업데이트를 할 때마다 프로퍼티 term이 업데이트 되거나, 변경사항을 받아옴
        // 유저가 입력창 안에 타이핑하기 시작하면 this.state term 부분이 빈 문자열이 아닌 입력값을 가지게 됨

        this.state = {term: ''}; // 새로운 오브젝트를 생성하면서 초기화를 하게 됨 그리고 this.state에 할당함
    }

    render(){
        return(
            <div>
                <input 
                value = {this.state.term} // 제어 컴포넌트는 스테이트에 의해 값이 세팅됨, 스테이트가 변하면 값도 변함
                onChange={event => this.setState({ term: event.target.value})} /> {/*요소가 하나일 때 (event)를 event로 변경 가능  함수 부분이 한줄이면 {}도 제거 가능*/}
            </div>
        ); 
    }
}

export default SearchBar;