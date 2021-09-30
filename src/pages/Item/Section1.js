import react from "react";

class Section1 extends react.Component{
    constructor(props){
        super(props)
        this.state={
            id: 0,
            product: null,
            note: ''
        }
    }

    componentDidMount = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const queryID = urlParams.get('id')
        this.setState({id: queryID})
        
        if(queryID!=0){
            this.setState({product: this.props.allProducts.find(item => item.id==queryID)})
        }
    }

    typeNote = (e) => {
        this.setState({note: e.target.value})
    }

    render(){
    return(
        <div className="section1-item">
            <div className="section1-item-inner">
                {this.state.product && 
                <>
                <div className="page-links">
                    <ul>
                        <li><a href="home.html">Home</a></li>
                        <li><a href="menu.html"><img src="images/right-vector.svg"/>Menu </a></li>
                        <li><a><img src="images/right-vector.svg"/>{this.state.product.section} </a></li>
                        <li><a className="actual"><img src="images/right-vector.svg"/>{this.state.product.name}</a></li>
                    </ul>
                </div>
                <div className="item-details">
                    <div className="item-detail-image">
                        <div className="item-detail-fullimage"><img src={this.state.product.image}/></div>
                        <div className="item-detail-thumbnails">
                            {this.state.product.more_images && 
                            this.state.product.more_images.map(item => {
                                return <div className="item-detail-thumbnails-image"><a href={item}><img src={item}/></a></div>
                            })}
                        </div>
                    </div>
                    <div className="item-detail-description">
                        <div className="item-detail-name">{this.state.product.name}</div>
                        <div className="item-detail-info">
                            <div className="item-detail-info-small"><img src="images/star.svg"/>{this.state.product.rating}</div>
                            <div className="item-detail-info-small"><img src="images/clock.svg"/>{this.state.product.time}</div>
                            <div className="item-detail-info-small"><img src="images/kcal.svg"/>{this.state.product.kcal} kCal</div>
                        </div>
                        <div className="item-detail-text">
                            <div className="item-detail-text-bigger">Details</div>
                            <div className="item-detail-text-smaller">{this.state.product.details}</div>
                        </div>
                    </div>
                    <div className="item-details-price">
                        <div className="item-details-price-head">
                            <div className="item-details-price-head-left">
                                <div className="item-details-price-head-left-small">Price</div>
                                <div className="item-details-price-head-left-bigger">€ {this.state.product.price}</div>
                            </div>
                            <div className="item-details-price-head-right">
                            </div>
                        </div>
                        <div className="item-detail-add-note">Add Note</div>
                        <input placeholder="ex. add more chilli" value={this.props.note} onChange={(e) => this.typeNote(e)}/>
                        <button className="item-detail-button" 
                            onClick={() => this.props.addProduct({
                                id: this.state.product.id,
                                name: this.state.product.name,
                                image: this.state.product.image,
                                price: this.state.product.price,
                                note: this.state.note,
                                quantity: 1})} id="addToCart">
                                <img src="images/cart-white.svg"/>Add to cart</button>
                    </div>
                </div></>}
            </div>
        </div>
    );
}}

export default Section1;