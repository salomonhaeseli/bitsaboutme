import React from 'react';

const ConfirmationModal = ({cardDetails, confirmationStatus}) => {
    const detail = cardDetails[0]
    return ( 
       <div className={`confirmationModalContainer ${confirmationStatus[0].isVisible ? "confirmationModalVisible":"confirmationModalInvisible"}`}>
            <div className="confirmationModalContent">
                <h4>Diese Daten werden geteilt</h4>
                {detail.sharedData.map(entry =>
                    <p className="detailEntry">
                        <img class="detailImage" src={entry[0]} alt="company of the deal" />
                        {entry[1]}
                    </p>
                )}
                <h4>Dauer</h4>
                <p>{detail.time}</p>
                <button className="shareMyDataButton">Bestätigen</button>
            </div>
       </div>
    )
}

export default ConfirmationModal