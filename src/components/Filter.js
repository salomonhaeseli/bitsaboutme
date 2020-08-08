import React, {useState} from 'react';
import { clone, filterCards } from "../lib";
import { cards } from '../fixtures'


const Filter = ({data, purpose, processing, filterStatus, handleFilterClick, categories}) => {
    const initialState = {
        data: clone(data),
        purpose: clone(purpose),
        processing: clone(processing)
    }
    const [internalState, setInternalState] = useState(initialState)

    const dealCount = filterCards(internalState.data, internalState.purpose, internalState.processing, categories, cards)
    console.log(dealCount.length)

    function isSelected(id) {
        const data = internalState.data.map(dataPill => {
        if(dataPill.id === id ){
            dataPill.isSelected ? (dataPill.isSelected =false) : (dataPill.isSelected =true)
        }
        return dataPill
        })

        const purpose = internalState.purpose.map(purposePill => {
        if(purposePill.id === id ){
            purposePill.isSelected ? (purposePill.isSelected =false) : (purposePill.isSelected =true)
        }
        return purposePill
        })

        const processing = internalState.processing.map(processingPill => {
        if(processingPill.id === id ){
            processingPill.isSelected ? (processingPill.isSelected =false) : (processingPill.isSelected =true)
        }
        return processingPill
        })

        setInternalState({
            data,
            purpose,
            processing
        })
    }

    const dataList = internalState.data.map(dataPill => {
        return (
            <span className={`pill ${dataPill.isSelected ? "active" : ""}`}  key={dataPill.id} onClick={() => {isSelected(dataPill.id)}}>
                {dataPill.name}
            </span>
        )
    })

    const purposeList = internalState.purpose.map(purposePill => {
        return (
            <span className={`pill ${purposePill.isSelected ? "active" : ""}`}  key={purposePill.id} onClick={() => {isSelected(purposePill.id)}}>
                {purposePill.name}
            </span>
        )

    })

    const processingList = internalState.processing.map(processingPill => {
        return (
            <span className={`pill ${processingPill.isSelected ? "active" : ""}`}  key={processingPill.id} onClick={() => {isSelected(processingPill.id)}}>
                {processingPill.name}
            </span>
        )

    })

    return (
        <div className={`filterContainer ${filterStatus[0].isVisible ? "modal filterVisible" : "modal filterInvisible"}`}>
            <h4>Angebote filtern</h4>
            <p>Sortieren nach</p>
            <section className="pillContainer">
                <span className="pill">Relevanz</span>
                <span className="pill">Höchster Betrag</span>
                <span className="pill">Beliebteste</span>
            </section>
            <section className="data">
                <p>Daten</p>
                <div className="pillContainer">
                    {dataList}
                </div>
            </section>
            <section className="purpose">
                <p>Zweck</p>
                <div className="pillContainer">
                    {purposeList}
                </div>
            </section>
            <section className="processing">
                <p>Bearbeitung</p>
                <div className="pillContainer">
                    {processingList}
                </div>
            </section>
            <section className="bottom">
                <button className="cancel" onClick={() => {setInternalState(initialState); handleFilterClick()}}>Abbrechen</button>
                <button className="apply" onClick={() => {handleFilterClick(internalState)}}>Anwenden</button>
            </section>
        </div>
    )
}
export default Filter