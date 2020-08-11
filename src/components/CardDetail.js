import React from 'react';

const CardDetail = ({cardDetails}) => {
    const detail = cardDetails[0]
    console.log(detail)
    return ( 
        <div className="cardDetail">
            <div className="detailHeader">
                {detail.image}
                <div className="detailLikesAndReward">

                </div>
            </div>
            <div className="detailDescription">
                <p>{detail.companyName}</p>
                <p>{detail.shortDescription}</p>
            </div>
            <div className="Trustscore">

            </div>
            <div className="detailSharedData">
                <h4>Diese Daten werden geteilt</h4>
            </div>
            <div className="detailPurpose">
                <h4>Dafür werden die Daten geteilt</h4>
            </div>
            <div className="detailProcessing">
                <h4>So werden die Daten bearbeitet</h4>
            </div>
            <div className="detailDauer">
                <h4>Dauer</h4>
                <p>{detail.time}</p>
            </div>
            <div className="detailBedingungen">
                <h4>Bedingungen</h4>
                <p>{detail.bedingungen}</p>
            </div>
            <button className="doNotShowAgain dealDetailButton">Diesen Deal nicht mehr anzeigen</button>
            <button className="acceptDeal dealDetailButton">Meine Daten teilen</button>
        </div>
    )
}

export default CardDetail