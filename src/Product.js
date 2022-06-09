import React from 'react';
import './Product.css';
const Product = () => {
    return (
        <div className='product'>
            <div className='product_info'>
                <p>제품1</p>
                <p className='produuct_price'>
                    <small>가격</small>
                    <string>10,000</string>
                    <small>원</small>
                </p>    
                <div className='product_rating'>
                    <p>ㅁ</p>
                    <p>ㅁ</p>
                    <p>ㅁ</p>
                    <p>ㅁ</p>


                </div>



            </div>

            <img src='https://image.shutterstock.com/z/stock-vector-chinese-calligraphy-of-fu-the-chinese-handwriting-character-that-means-fortune-or-good-luck-1506168917.jpg' alt=''/>
            <button>장바구니에 담기</button>

        </div>
    );
};

export default Product;