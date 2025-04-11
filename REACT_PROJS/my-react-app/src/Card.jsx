import cardImg from './assets/HeatedHeart.jpg';

function Card(){
    return (
        <div className="card">
            <img className="card-image"src={cardImg}/>
            <h2 className="card-title">H- Heated Heart</h2>
            <p className="card-text">This is a Spell Card.</p>
        </div>
    );
}
export default Card;