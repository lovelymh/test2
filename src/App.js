import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
//이렇게 메인인 App.js 에 모든 데이터 정보를 담아놓는다


//아래는 서로 같은 코드이다
// {movies.map(movie => {
//   return <Movie title={movie.title} poster={movie.poster} />
// })}
// {movies.map(function(movie){
//   return <Movie title={movie.title} poster={movie.poster} />
// })}

class App extends Component {
  //Component 생명주기, 컴포넌트가 존재할때 수행됨
  // Render : componentWillMount() -> render() -> componentDidMount()
  //컴포넌트 업데이트시 수행됨
  // update : componentWillReceiveProps() -> shouldComponentUdpate() -> componentWillUpdate() -> render() -> componentDidUpdate()
state = {}
//컴포넌트가 mount 할때마다 hello 를 헬로 어케인으로 바꾼다는 것.
  componentDidMount(){
    console.log('didmount');
    this._getMovies();
  }

//나의 자체함수는 _로 시작하게 한다. react 함수와 구분하기 위함
_renderMovies = () => {
    console.log('_renderMovies');
  const movies = this.state.movies.map((movie, index) => {
    console.log(movie)
    return <Movie
      title={movie.title_english}
      poster={movie.medium_cover_image}
      key={movie.id}
      genres={movie.genres}
      synopsis={movie.synopsis}
      />
  })
  return movies
}

//비동기 모드로 함수를 작성.
//await 모드란 _callApi 함수가 끝나길 기다리는 것임. RETURN VALUE와 관계 없이!
//(await은 비동기 모드로 안하면 작동하지 않는다)
//그러므로 setState는 callApi가 끝날때까진 수행되지 않음
//setState에서 movies를 받았으므로 state가 변하게됨.. render()에서는 이를 인지하고 뿌리겠지?
 _getMovies = async () => {
   console.log('_getMovies');
  const movies = await this._callApi()
  this.setState({
    movies
  })
}

_callApi = () => {
   console.log('_callApi');
  //promise는 비동기적이며, 성공과 실패의 시나리오에 따른 상황을 잘 설정할 수 있다.
  //리엑트에서 ajax 사용법
  return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
  .then(response => response.json()) //url을 fetch한 결과를 가져온 2비트 정보를 json으로 변환함
  .then((json) => {
    console.log(json.data.movies);
   return json.data.movies}) //화살표 표시(=>)는 return 작성 필요 x, 이 기능 자체에 return이 내재되어 있다.
  //.catch(err => console.log(err))
}
//state가 변할때마다 render가 다시 수행될거임. 새로운 state와 함께!
// {this.state.movies.map((movie, index) => {
//   return <Movie title={movie.title} poster={movie.poster} key={index} />
// })}
  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
