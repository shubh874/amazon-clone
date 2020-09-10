import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <img 
                className='home__image'
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                alt='bgImage'
            />  
            <div className='home__row'>
            <Product 
            id='45786'
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L,Silver"
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SX679_.jpg'
            price={314}
            />
            <Product 
            id='45787'
            title="Wyze Cam 1080p HD Indoor Wireless Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa & the Google Assistant, One Pack"
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/61B04f0ALWL._AC_SY355_.jpg'
            price={25}
            />
            </div>  
            <div className='home__row'>
            <Product 
            id='45788'
            title='Sony WH-1000XM4 Wireless Noise Canceling Overhead Black Headphones (2020)'
            rating={3}
            image='https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._AC_SY450_.jpg'
            price={349.50}
            />
            <Product 
            id='45789'
            title="Wrangler Authentics Men's Classic five-Pocket Regular Fit Flex Jean"
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/8110CWXpN5L._AC_UX522_.jpg'
            price={23.99}
            />
            <Product 
            id='45790'
            title="Hamilton Beach Professional Juicer Mixer Grinder, Commercial-Grade 1400 Watt Rated Motor, 3 Leakproof Jars, Advanced Electronics, 120V (58770)"
            rating={2}
            image='https://images-na.ssl-images-amazon.com/images/I/71wwOX3MrSL._AC_SX466_.jpg'
            price={19.99}
            />
            </div>
            <div className='home__row'>
            <Product 
            id='45791'
            title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Black, One Size (S &L Bands Included)"
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/71smqRr0pmL._AC_SY355_.jpg'
            price={146.63}
            />
            </div>

        </div>
    )
}

export default Home
