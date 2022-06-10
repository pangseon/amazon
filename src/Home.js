import React from 'react';
import './Home.css'
import Product from './Product';
function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_img' src='https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg'
                    alt=''/>

                    <div className='home_row'>
                        <Product id='2323' title='제품1'
                        price={3000}  img='https://image.shutterstock.com/z/stock-vector-chinese-calligraphy-of-fu-the-chinese-handwriting-character-that-means-fortune-or-good-luck-1506168917.jpg'
                        rating={2}/>

                    </div>
                    
                    <div className='home_row'>
                        <Product/>
                        <Product/>
                        <Product/>
         
                    </div>

                    <div className='home_row'>
                        <Product/>

                    </div>


                
            </div>
        </div>
    );
}

export default Home;