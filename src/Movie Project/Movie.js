import './Movie.css'
import Header from './Header'
import Movie1 from './Movie1'
import movies from './Movie.json'


function Movie() {
  return (
    <div className="app">
      <div className='header'>
        <Header />
      </div>
      <div className="main">
        {
          movies.map((e) => {
            return(
            <Movie1  title = {e.Title} Year = {e.Year}  img = {e.Poster} />
          )
          })
        }



      </div>
    </div>
  )
}

export default Movie