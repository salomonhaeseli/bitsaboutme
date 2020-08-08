import React from 'react';
import BamScore from '../images/icons/bamScore.svg'
import ThumbsUp from '../images/icons/thumbsUp.png'

const Cards = ({cards, openDetails}) => {
    return (
        <div className="cards collection">
            {cards.map(card => (
                <div className="cardNormal" key={card.id} onClick={() => {openDetails(card.id)}}>
                    <span className="cardPill">{card.category}</span>
                    <div className="cardImage">
                        <img src={card.image} alt="company of the deal" />
                    </div>
                    <section className="cardHeader">
                        <div className="cardReward">
                            {card.praemie}
                        </div>
                        <div className="thumbsUp">
                        </div>
                        <div className="likes">
                            <img src={ThumbsUp} alt="thumbsUp" />
                            {card.likes}
                        </div>
                        <div className="bamRating">
                        <img src={BamScore} alt="bamScore" />
                            {card.bamRating}
                        </div>
                    </section>
                    <p className="cardDescription">{card.description} </p>
                </div>
            ))}
        </div>
    )
}

export default Cards