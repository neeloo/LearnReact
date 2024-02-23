

function Content(props) {
    return (
        <div className="movie">
           <img src={props.img} alt="" />
            <p>{props.tilte}</p>
            <p>{props.year}</p>

        </div>
    )
}

export default Content