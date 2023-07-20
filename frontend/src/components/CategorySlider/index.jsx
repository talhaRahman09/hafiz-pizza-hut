import React from 'react'
import './CategorySlider.css'
const index = () => {
    const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7', 'Category 8'];
    return (
        <div className='category-buttons-wrapper'>
            <div className="category-buttons-container justify-content-md-center">
                {categories.map((category, index) => (
                    <button key={index} className="category-button btn btn-primary">
                        {category}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default index