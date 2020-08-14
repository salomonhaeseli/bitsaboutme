import React from 'react';
import CloseButton from '../images/icons/closeButton.svg'


const ConfirmationModal = ({card, confirmationStatus, handleAcceptConfirmClick, handleCloseClickModal}) => {
    const detail = card.details
    return ( 
        <div className="confirmationModalContent">
        <img className="closeDealDetail" src={CloseButton} alt="close the deal" onClick={() => {handleCloseClickModal()}}/>
            <div className={`confirmationModalContainer ${confirmationStatus[0].isVisible ? "confirmationModalVisible":"confirmationModalInvisible"}`}>
                <h4>Diese Daten werden geteilt</h4>
                {detail.sharedData.map(entry =>
                    <p className="detailEntry">
                        <img class="detailImage" src={entry[0]} alt="company of the deal" />
                        {entry[1]}
                    </p>
                )}
                <h4>Dauer</h4>
                <p>{detail.time}</p>
                <button className="shareMyDataButton" onClick={() => handleAcceptConfirmClick(card.id)}>Bestätigen</button>
            </div>
        </div>
    )
}

export default ConfirmationModal