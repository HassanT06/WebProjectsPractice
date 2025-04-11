function Card(props){
    let cardName = props.image;
    let splitNum = cardName.indexOf("_");
    return (
        <div className="card">
            <img className="card-image"src={`/${props.image}.jpg`}/>
            <h2 className="card-title">
                {cardName.substring(0,1)}- {" "}
                {splitNum !== -1 ? `${cardName.substring(0,splitNum)} ${cardName.substring(splitNum+1)}`
                : cardName}
            </h2>
            <p className="card-text">This is a {props.type} Card.</p>
        </div>
    );
}
export default Card;
//````