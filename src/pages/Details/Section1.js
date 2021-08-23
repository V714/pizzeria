

function Section1 (){
    return(
        <div className="menu-section1-inner">
            <div className="detail-section1-inner">
                <div className="triple-head">
                    <div className="triple-head-details">
                        <div className="triple-head-details-title">Details</div>
                        <div className="triple-head-details-line"></div>
                        <div className="triple-head-details-info">
                            <div className="triple-head-details-info-star"><img src="images/star.svg"/>4.5</div>
                            <div className="triple-head-details-info-element"><img src="images/clock.svg"/>40-45 min</div>
                            <div className="triple-head-details-info-element"><img src="images/kcal.svg"/>380 kCal</div>
                        </div>
                        <div className="item-detail-text-smaller">Marinara Pizza is our populer best popular pizza. it was made with tomato, chicken, cheese, and also a spinach.</div>
                        
                    </div>
                    <div className="triple-head-title">
                        <div className="triple-head-title-title">Meat Lovers</div>
                        <div className="triple-head-title-size">
                            <div className="s3-item-size">
                                <button onclick="selectSize(this);pizzaSize(1);" className="size-button ">33cm</button>
                                <button onclick="selectSize(this);pizzaSize(2);" className="size-button active">40cm</button>
                                <button onclick="selectSize(this);pizzaSize(3);" className="size-button">55cm</button>
                            </div>
                        </div>
                        <div className="triple-head-title-under">Make your own pizza? <a href="#section2"><b><u><i>Custom Ingredients</i></u></b></a></div>

                    </div>
                    <div className="triple-head-price">
                        <div className="triple-head-price-head">
                            <div className="triple-head-price-head-left">
                                <div className="triple-head-price-head-left-title">Price</div>
                                <div className="triple-head-price-head-left-price">€ 30.00</div>
                            </div>
                            <div className="s3-item-cart">
                                4
                            </div>
                        </div>
                        <div className="add-note">
                            Add Note
                            <input type="text" placeholder="ex. add more chilli"/>
                        </div>
                        <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
                    </div>
                </div>
                <div className="pizza-rotate">
                    <img id="pizza_size" src="images/pizza.webp"/>
                    <div className="pizza-element pe1">
                        <div className="pizza-element-box">Crispy Crust</div>
                        <div className="pizza-element-dots"></div>
                    </div>
                    <div className="pizza-element pe2">
                        <div className="pizza-element-box">Sausage</div>
                        <div className="pizza-element-dots"></div>
                    </div>
                    <div className="pizza-element pe3">
                        <div className="pizza-element-box">Paprika</div>
                        <div className="pizza-element-dots"></div>
                    </div>
                    <div className="pizza-element pe4">
                        <div className="pizza-element-box">Pepperoni</div>
                        <div className="pizza-element-dots"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section1;