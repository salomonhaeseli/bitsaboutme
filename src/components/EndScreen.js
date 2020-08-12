import React from 'react';
import Sparschwein from '../images/icons/sparschwein.png'
import Cards from './Cards'

const EndScreen = ({card, sameDataCards, endScreenStatus}) => {
    return ( 
       <div className={`endScreenContainer ${endScreenStatus[0].isVisible ? "endScreenVisible":"endScreenInvisible"}`}>
           <div className="endScreenContent">
               <div className="successMessage">
                <div className="successMessageContent">
                    <img src={Sparschwein} alt="Sparschwein" />
                    <p>PRÄMIE auf deinem Bitsaboutme Konto gutgeschrieben.</p>
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
                <h4>Dieselben Daten nochmals teilen</h4>
                <Cards cards={sameDataCards} />
               </div>
           </div>
       </div>
    )
}

export default EndScreen