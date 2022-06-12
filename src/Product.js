import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
function Product  ({title,price,id,rating,img})  {
    const [{basket},dispatch]=useStateValue();

const addToBasket= ()=> {
    dispatch({
        type:'Add_TO_BASKET',
        item:{
            id:id,
            title:title,
            img:img,
            price:price,
            rating:rating
        },
    });
};

    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='produuct_price'>
                    <small>가격</small>
                    <string>{price}</string>
                    <small>원</small>
                </p>    
                <div className='product_rating'>
                  {
                    Array(rating)  
                        .fill()
                        .map((_)=> (
                            <p>★</p>
                        ))

                  }

                </div>



            </div>

            <img src={img} alt=''/>
            <button onClick={addToBasket}>장바구니에담기</button>

        </div>
    );
};

export default Product;