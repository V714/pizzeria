import react from "react";

class Section1 extends react.Component{
    constructor(props){
        super(props)
    }
    render(){
    return(
        <div className="section1-item">
            <div className="section1-item-inner">
                <div className="page-links">
                    <ul>
                        <li><a href="home.html">Home</a></li>
                        <li><a href="menu.html"><img src="images/right-vector.svg"/>Menu </a></li>
                        <li><a><img src="images/right-vector.svg"/>Risotto </a></li>
                        <li><a className="actual"><img src="images/right-vector.svg"/>Italian Risotto</a></li>
                    </ul>
                </div>
                <div className="item-details">
                    <div className="item-detail-image">
                        <div className="item-detail-fullimage"><img src="images/risotto.webp"/></div>
                        <div className="item-detail-thumbnails">
                            <div className="item-detail-thumbnails-image"><a href="images/risotto.webp"><img src="images/risotto.webp"/></a></div>
                            <div className="item-detail-thumbnails-image"><a href="images/risotto.webp"><img src="images/risotto.webp"/></a></div>
                            <div className="item-detail-thumbnails-image"><a href="images/risotto.webp"><img src="images/risotto.webp"/></a></div>
                            <div className="item-detail-thumbnails-image"><a href="images/risotto.webp"><img src="images/risotto.webp"/></a></div>
                        </div>
                    </div>
                    <div className="item-detail-description">
                        <div className="item-detail-name">Italian Risotto</div>
                        <div className="item-detail-info">
                            <div className="item-detail-info-small"><img src="images/star.svg"/>4.5</div>
                            <div className="item-detail-info-small"><img src="images/clock.svg"/>40-45 min</div>
                            <div className="item-detail-info-small"><img src="images/kcal.svg"/>380 kCal</div>
                        </div>
                        <div className="item-detail-text">
                            <div className="item-detail-text-bigger">Details</div>
                            <div className="item-detail-text-smaller">Marinara Pizza is our populer best popular pizza. it was made with tomato, chicken, cheese, and also a spinach.</div>
                        </div>
                    </div>
                    <div className="item-details-price">
                        <div className="item-details-price-head">
                            <div className="item-details-price-head-left">
                                <div className="item-details-price-head-left-small">Price</div>
                                <div className="item-details-price-head-left-bigger">€ 30.00</div>
                            </div>
                            <div className="item-details-price-head-right">
                                <div className="s3-item-cart">4
                                </div>
                            </div>
                        </div>
                        <div className="item-detail-add-note">Add Note</div>
                        <input placeholder="ex. add more chilli"/>
                        <button className="item-detail-button" id="addToCart"><img src="images/cart-white.svg"/>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}}

export default Section1;