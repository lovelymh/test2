//import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
//부모컴포넌트가 자식컴포넌트에게 정보를 준다. app.js에보면 Movie컴포넌트에 title이란 요소가 있으므로..
//jsx : JavaScript에서 사용하는 html은 괄호를 쳐주어야 실행됨
//static propTypes은 부모 컴포넌트에서 받는 정보를 체크할 수 있도록 함
// class Movie extends Component{
//
//     static propTypes = {
//       title: PropTypes.string.isReguired,
//       poster: PropTypes.string.isReguired
//     }
//
//   render(){
//     return(
//       <div>
//         <MoviePoster poster={this.props.poster}/>
//         <h1>{this.props.title}</h1>
//       </div>
//     );
//   }
// }
//className은 정상적인 css에서 class를 의미
function Movie({title, poster, genres, synopsis}){
  return (
          <div className="Movie">
            <div className="Movie__Colunms">
              <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Colunms">
              <h1>{title}</h1>
              <div className="Movie__Genres">
                {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
              </div>
              <p classNmae="Movie__Synopsis">
                {synopsis}
              </p>
            </div>
          </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isReguired,
  poster: PropTypes.string.isReguired,
  genres: PropTypes.array.isReguired,
  synopsis: PropTypes.string.isReguired
}
// class MoviePoster extends Component{
//
//   static propTypes = {
//     poster: PropTypes.string.isReguired
//   }
//
//   render(){
//     return(
//       <img src={this.props.poster}/>
//     );
//   }
// }
//state가 없는 것!!은 아래와 같이 작성. 단지 리턴만 함.
//dumb 컴포넌트라고 함.. 이와반대로 state가 있는 클래스는 smart 컴포넌트
//클래스가 아니므로 앞에 this.props은 삭제
//functional 컴포넌트는 this가 필요없. 이미 props를 사용하니까
function MoviePoster({poster, alt}){
  return (
      <img src={poster} alt={alt} title={alt} clasName="Movie__Poster" />
  );
}

function MovieGenre({genre}){
  return (
    <span className="Movie__Genre">{genre}</span>
  )
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isReguired,
  alt: PropTypes.string.isReguired
}

export default Movie
