import React from 'react';
import Sparschwein from '../images/icons/sparschwein.png'
import CloseButton from '../images/icons/closeButton.svg'

import Cards from './Cards'

const EndScreen = ({card, sameDataCards, endScreenStatus, handleCloseClickEndScreen}) => {
    return ( 
       <div className={`endScreenContainer ${endScreenStatus[0].isVisible ? "endScreenVisible":"endScreenInvisible"}`}>
            <img className="closeDealDetail" src={CloseButton} alt="close the deal" onClick={() => {handleCloseClickEndScreen()}}/>
            <div className="endScreenContent">
               <div className="successMessage">
                <div className="successMessageContent">
                    <img src={Sparschwein} alt="Sparschwein" />
                    <p>{card.praemie} auf deinem Bitsaboutme Konto gutgeschrieben.</p>
                </div>
               </div>
               <div className="nextSteps">
                <div className="successMessageContent">
                    <h4>Nächste Schritte</h4>
                    <p>Schritt 1</p>
                    <p>Schritt 2</p>
                </div>
               </div>
               <div className="sameDataAgain">
                <h4 className="SameDateTitle">Dieselben Daten nochmals teilen</h4>
                <Cards cards={sameDataCards} />
               </div>
           </div>
       </div>
    )
}

export default EndScreen