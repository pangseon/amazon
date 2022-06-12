import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';


function CheckoutProduct({id,img,title,price,rating}) {

    const[{basket},dispatch]=useStateValue();

    const removeFromBasket = () =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,

            
        })
    }
    return (
        
        <div className='checkoutProduct'>
            <img className='checkoutProduct_img' src={img} alt=''/>

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>
                    {title}
                </p>
                <p className='checkoutProduct_price'>
                    <small>\</small>
                    <strong>{price}</strong>
                    <snall>원</snall>
                </p>

                <div className='checkoutProduct_rating'>
                {
                    Array(rating)  
                        .fill()
                        .map((_)=> (
                            <p>★</p>
                        ))

                  }

                </div>
                <button onClick={removeFromBasket}>장바구니에서 제거하기</button>
            </div>
        </div>
    );
}


export default CheckoutProduct;