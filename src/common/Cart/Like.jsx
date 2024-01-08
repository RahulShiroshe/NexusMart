import React from "react"

const Like = ({ LikeItem, removeLike }) => {
    return (
        <section className='cart-items'>
            <div className='container d_flex'>
                <div className='cart-details'>
                    {LikeItem.length === 0 && <h1 className='no-items product'>No Liked Items Here</h1>}
                    {LikeItem.map((item) => {
                        const productQty = item.price
                        return (
                            <div className='css-1' key={item.id}>
                                    <img src={item.image} alt='' className='css-img' />
                                    <button className='removeCart css-remove' onClick={() => removeLike(item)}>
                                        <i className='fa-solid fa-xmark'></i>
                                    </button>
                                <div className='css-info'>
                                        <span className='css-h-a'>{item.title}</span>
                                    <div className='css-info-price'>
                                       
                                        <span className='css-price'>${productQty}</span>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Like
