import React from "react";

function Cards(props){
    return(
        <div className = "container">
            <div className="row row-cols-4">
                { props.cardData.map( card =>
                <div  key={card.id} className="card" onClick = {props.handleClick} style={{ width: '10rem'}}>
                    <img id = {card.id} src={card.image} className="card-img-top" style= {{backgroundPosition: "cover"}} alt={card.name}/>
                </div>)}
            </div>
            <br></br>
            <br></br>
        </div>
    );
}




export default Cards;