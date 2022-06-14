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
                        <Product id='2324' title='쿠팡'
                        price={3001} img='https://image.newdaily.co.kr/site/data/img/2022/05/12/2022051200013_0.png'
                        rating={4}/>

                        <Product id='2324' title='제품2'
                        price={3001} img='https://blog.kakaocdn.net/dn/ulsAm/btqB9w2kuwz/o2cNKALorND83K2rrZ9YF1/img.jpg'
                        rating={5}/>
                        <Product id='2324' title='제품2'
                        price={3001} img='https://image.newdaily.co.kr/site/data/img/2022/05/12/2022051200013_0.png'
                        rating={8}/>
         
                    </div>

                    <div className='home_row'>
                        <Product id='2324' title='제품2'
                        price={3001} img='https://image.newdaily.co.kr/site/data/img/2022/05/12/2022051200013_0.png'
                        rating={3}/>

                    </div>


                
            </div>
        </div>
    );
}

export default Home;