import React from 'react';
import './Product.css';
function Product  ({title,price,id,rating,img})  {



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
                            <p>ㅁ</p>
                        ))

                  }

                </div>



            </div>

            <img src={img} alt=''/>
            <button>장바구니에담기</button>

        </div>
    );
};

export default Product;