import React from 'react';
import CloseButton from '../images/icons/closeButton.svg'

const CardDetail = ({cardDetails, detailStatus, handleCloseClick, handleDealAcceptClick, handleDealDeclineClick}) => {
    const detail = cardDetails[0]

    return ( 
        <div className={`cardDetail cardDetailContainer ${detailStatus[0].isVisible ? "cardDetailVisible" : "cardDetailInvisible"}`}>
            <img classe="closeDealDetail" src={CloseButton} alt="close the deal" onClick={() => {handleCloseClick()}}/>
            <div className="detailHeader">
                <img src={detail.image} alt="company of the deal" />
                <div className="detailLikesAndReward">

                </div>
            </div>
            <div className="detailDescription">
                <p>{detail.companyName}</p>
                <p>{detail.shortDescription}</p>
            </div>
            <div className="Trustscore">

            </div>
            <div className="detailSharedData detailBox">
                <h4>Diese Daten werden geteilt</h4>
                {detail.sharedData.map(entry =>
                    <p className="detailEntry">
                        <img class="detailImage" src={entry[0]} alt="company of the deal" />
                        {entry[1]}
                    </p>
                )}
            </div>
            <div className="detailPurpose detailBox">
                <h4>Dafür werden die Daten geteilt</h4>
                {detail.purpose.map(entry =>
                    <p className="detailEntry">{entry}</p>
                )}
            </div>
            <div className="detailProcessing detailBox">
                <h4>So werden die Daten bearbeitet</h4>
                {detail.processing.map(entry =>
                    <p className="detailEntry">
                        <img class="detailImage" src={entry[0]} alt="company of the deal" />
                        {entry[1]}
                    </p>
                )}
            </div>
            <div className="detailDauer">
                <h4>Dauer</h4>
                <p>{detail.time}</p>
            </div>
            <div className="detailBedingungen">
                <h4>Bedingungen</h4>
                <p>{detail.bedingungen}</p>
            </div>
            <button className="doNotShowAgain dealDetailButton"  onClick={() => {handleDealDeclineClick()}}>Diesen Deal nicht mehr anzeigen</button>
            <button className="acceptDeal dealDetailButton"  onClick={() => {handleDealAcceptClick()}}>Meine Daten teilen</button>
        </div>
    )
}

export default CardDetail