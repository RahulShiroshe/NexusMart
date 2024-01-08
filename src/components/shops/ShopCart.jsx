import React, { useState, useEffect } from "react"

const ShopCart = ({ addToLike, addToCart }) => {
  const [records, setRecords]= useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setRecords(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      {records.map((shopItems, index) => {
        return (
          <div className='box' key={index}>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>30% Off</span>
                <img src={shopItems.image} alt=''className="shop-img" />
                <div className='product-like'>
                  <i className='fa-regular fa-heart'  onClick={() => addToLike(shopItems)}></i>
                </div>
              </div>
              <div className='product-details'>
                <h3>{shopItems.title}</h3>
                <div className='rate'>
                  <span>{shopItems.rating.rate}  </span>
                  <i className='fa fa-star'></i>
                </div>
                <div>{shopItems.rating.count} items</div>
                <div>{shopItems.category} </div>
                <div className='price'>
                  <h4>${shopItems.price} </h4>
                  <button onClick={() => addToCart(shopItems)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart
