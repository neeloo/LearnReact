
function Movie1(props) {
    return (
        <div className='movie'>
            <img src={props.img} alt="" />
            <p>Name:{props.title}</p>
            <p>Year: {props.Year}</p>


        </div>
    )
}

export default Movie1