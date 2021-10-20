import react from "react";

class Section1Item extends react.Component{
    constructor(props){
        super(props)
        this.state={
            id: 0,
            product: null,
            note: ''
        }
    }

    componentDidMount = () => {

    }

    typeNote = (e) => {
        this.setState({note: e.target.value})
    }

    render(){
    return(
        <div className="section1-item">
            <div className="section1-item-inner">
                {this.props.item && 
                <>
                <div className="page-links">
                    <ul>
                        <li><a href="home.html">Home</a></li>
                        <li><a href="menu.html"><img src="images/right-vector.svg"/>Menu </a></li>
                        <li><a><img src="images/right-vector.svg"/>{this.props.item.type} </a></li>
                        <li><a className="actual"><img src="images/right-vector.svg"/>{this.props.item.name}</a></li>
                    </ul>
                </div>
                <div className="item-details">
                    <div className="item-detail-image">
                        <div className="item-detail-fullimage"><img src={this.props.item.imgPath}/></div>
                       {/*  <div className="item-detail-thumbnails">
                            {this.state.product.more_images && 
                            this.state.product.more_images.map(item => {
                                return <div className="item-detail-thumbnails-image"><a href={item}><img src={item}/></a></div>
                            })}
                        </div> */}
                    </div>
                    <div className="item-detail-description">
                        <div className="item-detail-name">{this.props.item.name}</div>
                        <div className="item-detail-info">
                            <div className="item-detail-info-small"><img src="images/star.svg"/>{this.props.item.rating}</div>
                            <div className="item-detail-info-small"><img src="images/clock.svg"/>20min</div>
                            <div className="item-detail-info-small"><img src="images/kcal.svg"/>200 kCal</div>
                        </div>
                        <div className="item-detail-text">
                            <div className="item-detail-text-bigger">Details</div>
                            <div className="item-detail-text-smaller">{this.props.item.description}</div>
                        </div>
                    </div>
                    <div className="item-details-price">
                        <div className="item-details-price-head">
                            <div className="item-details-price-head-left">
                                <div className="item-details-price-head-left-small">Price</div>
                                <div className="item-details-price-head-left-bigger">€ {this.props.item.sizes[0].price}</div>
                            </div>
                            <div className="item-details-price-head-right">
                            </div>
                        </div>
                        <div className="item-detail-add-note">Add Note</div>
                        <input placeholder="ex. add more chilli" value={this.state.note} onChange={(e) => this.typeNote(e)}/>
                        <button className="item-detail-button" 
                            onClick={() => this.props.addProduct({
                                id: this.props.item.id,
                                name: this.props.item.name,
                                image: this.props.item.imgPath,
                                price: this.props.item.sizes[0].price,
                                note: this.state.note,
                                quantity: 1,
                                sizeId: this.props.item.sizes.filter(item => item.size === this.props.size)[0].sizeId,
                                type: 'Product'})} id="addToCart">
                                <img src="images/cart-white.svg"/>Add to cart</button>
                    </div>
                </div></>}
            </div>
        </div>
    );
}}

export default Section1Item;