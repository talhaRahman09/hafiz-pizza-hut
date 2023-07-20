import React from 'react'
// import product from '../../assets/Images/product.png'
// import product2 from '../../assets/Images/product2.png'
// import product3 from '../../assets/Images/product3.png'
import product4 from '../../assets/Images/product4.jpg'
import './Cards.css'
const Cards = () => {
  return (
    <div className='cardsWrapper'>
      <div class="card">
        <div className="imgWrapper">
          <img src={product4} class="card-img-top" alt="product Example" />
        </div>
        <div class="card-body p-2">
          <div className='d-flex justify-content-between align-items-center'>
            <h5 class="cardTitle">Crunch Burger</h5>
            <h5 className='cardPrice text-uppercase fw-bold'>pkr 200</h5>
          </div>
          <p class="cardText">Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun</p>
          <button type='buttn' class="btn btnAddToBucket fw-bold">Add To Bucket</button>
        </div>
      </div>
    </div>
  )
}

export default Cards