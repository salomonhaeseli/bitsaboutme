import React from 'react';
import FilterIcon from '../images/icons/Filter.svg'

const FilterButton = ({handleFilterClick}) => {
    return (
        <div className="floatingButton" onClick={() => handleFilterClick()}>
            <img src={FilterIcon} alt="filter to filter the deals" />
        </div>
    )
}
export default FilterButton