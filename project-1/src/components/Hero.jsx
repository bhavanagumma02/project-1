import React from 'react';

const Hero = () => {
    return ( 
        <main className= "hero container">
            <div className="hero-content">
                <h1>
                    YOUR FEET DESERVE THE BEST
                </h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OURSHOES.
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OURSHOES.
                </p>
                <div className='hero-button'>
                    <button>Shop now</button>
                    <button>Category</button>
                </div>
                <div className="available-on">
                    <p>Also Available On</p>
                    <div className="shoppingApps">
                        <img src="/image/amazon.png" alt="amazon logo" />
                        <img src="/image/flipkart.png" alt="flipkart logo" />
                    </div>

                </div>
            </div>
            <div className="hero-image">
                <img src="/image/hero-image.png" alt="hero-image logo" />
            </div>
        </main>
     );
}
 
export default Hero;