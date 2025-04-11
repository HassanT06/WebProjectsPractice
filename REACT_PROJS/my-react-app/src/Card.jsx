function Card(props){
    return (
        <div className="card">
            <img className="card-image"src={`./public/${props.image}.jpg`}/>
            <h2 className="card-title">H- Heated Heart</h2>
            <p className="card-text">This is a Spell Card.</p>
        </div>
    );
}
export default Card;
//````