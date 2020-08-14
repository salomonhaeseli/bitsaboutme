import React from 'react';
import CloseButton from '../images/icons/closeButton.svg'

const CardDetail = ({card, detailStatus, handleCloseClick, handleDealAcceptClick, handleDealDeclineClick}) => {
    const cardDetails = card.details
    return ( 
        <div className={`cardDetail cardDetailContainer ${detailStatus[0].isVisible ? "cardDetailVisible" : "cardDetailInvisible"}`}>
            <img className="closeDealDetail" src={CloseButton} alt="close the deal" onClick={() => {handleCloseClick()}}/>
            <div className="detailHeader">
                <img className="CompanyLogo" src={cardDetails.image} alt="company of the deal" />
                <div className="detailLikesAndReward">
                    <p>{card.praemie}</p>
                    <p>{card.likes}</p>
                </div>
            </div>
            <div className="detailDescription">
                <p>{cardDetails.companyName}</p>
                <p>{cardDetails.shortDescription}</p>
            </div>
            <div className="Trustscore">

            </div>
            <div className="detailSharedData detailBox">
                <h4>Diese Daten werden geteilt</h4>
                {cardDetails.sharedData.map(entry =>
                    <p className="detailEntry">
                        <img class="detailImage" src={entry[0]} alt="company of the deal" />
                        {entry[1]}
                    </p>
                )}
            </div>
            <div className="detailPurpose detailBox">
                <h4>Dafür werden die Daten geteilt</h4>
                {cardDetails.purpose.map(entry =>
                    <p className="detailEntry">{entry}</p>
                )}
            </div>
            <div className="detailProcessing detailBox">
                <h4>So werden die Daten bearbeitet</h4>
                {cardDetails.processing.map(entry =>
                    <p className="detailEntry">
                        <img class="detailImage" src={entry[0]} alt="company of the deal" />
                        {entry[1]}
                    </p>
                )}
            </div>
            <div className="detailDauer">
                <h4>Dauer</h4>
                <p>{cardDetails.time}</p>
            </div>
            <div className="detailBedingungen">
                <h4>Bedingungen</h4>
                <p>{cardDetails.bedingungen}</p>
            </div>
            <button className="doNotShowAgain dealDetailButton"  onClick={() => {handleDealDeclineClick(card.id)}}>Diesen Deal nicht mehr anzeigen</button>
            <button className="acceptDeal dealDetailButton"  onClick={() => {handleDealAcceptClick(card.id)}}>Meine Daten teilen</button>
        </div>
    )
}

export default CardDetail