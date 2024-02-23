import './Movie.css'
import Header from './Header'
import Movie1 from './Movie1'

function Movie() {
  return (
    <div className="app">
      <div className='header'>
        <Header />
      </div>
      <div className="main">
        <Movie1 />
      </div>
    </div>
  )
}

export default Movie