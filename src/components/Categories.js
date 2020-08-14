import React from 'react';

const Categories = ({categories, isSelected}) => {

    const categoryList = categories.length ? (
        categories.map(category => {
            return(
                <div className="category" key={category.id} >
                    <div className={`card ${category.active ? "active" : ""}`} onClick={() => {isSelected(category.id)}}>
                        <img src={category.image} alt="category of the deal" />
                    </div>
                    <div className="name">
                        {category.name}
                    </div>
                </div>
            )
        })
    ) : null
    return (
        <div className="categories collection">
            {categoryList}
        </div>
    )
}

export default Categories