import react from "react";


class Section1 extends react.Component{
    constructor(props){
        super(props)
        this.state={
            note: '',
        }
    }

    componentDidMount = () => {
        this.props.pizzaSize(this.props.size)
    }

    typeNote = (e) => {
        this.setState({note: e.target.value})
    }

    
    selectButtonStyle = (size) => {
        if(this.props.size === size){return "size-button picked-size"}
        else{return "size-button"}
    }

    addToCart = () => {


        this.props.addProduct({
            id: this.props.item.id,
            name: this.props.item.name,
            image: this.props.item.imgPath,
            price: this.props.price,
            note: this.state.note,
            quantity: 1,
            extras: this.state.size,
            size: this.state.size,
            type: 'Product'})
    }


    render(){
    return(
        <>
        {this.props.item && 
            <>
            <div className="menu-section1-inner">
            <div className="detail-section1-inner">
            
                <div className="triple-head">
                    <div className="triple-head-details">
                        <div className="triple-head-details-title">Details</div>
                        <div className="triple-head-details-line"></div>
                        <div className="triple-head-details-info">
                            <div className="triple-head-details-info-star"><img src="images/star.svg"/>{this.props.item.rating}</div>
                            <div className="triple-head-details-info-element"><img src="images/clock.svg"/>30min</div>
                            <div className="triple-head-details-info-element"><img src="images/kcal.svg"/>700 kCal</div>
                        </div>
                        <div className="item-detail-text-smaller">{this.props.item.description}</div>
                        
                    </div>
                    <div className="triple-head-title">
                        <div className="triple-head-title-title">Meat Lovers</div>
                        <div className="triple-head-title-size">
                            <div className="s3-item-size">
                            {this.props.item.sizes && this.props.item.sizes.map(item => {
                                return( <button onClick={() => this.props.pizzaSize(item.size)} className={this.selectButtonStyle(item.size)} >{item.size}{item.sizeType}</button>)

                             })}
                     </div>
                        </div>
                        <div className="triple-head-title-under">Make your own pizza? <a href="#section2"><b><u><i>Custom Ingredients</i></u></b></a></div>

                    </div>
                    <div className="triple-head-price">
                        <div className="triple-head-price-head">
                            <div className="triple-head-price-head-left">
                                <div className="triple-head-price-head-left-title">Price</div>
                                <div className="triple-head-price-head-left-price">€ {this.props.price}</div>
                            </div>
                            <div className="s3-item-cart">
                            </div>
                        </div>
                        <div className="add-note">
                            Add Note
                            <input type="text" placeholder="ex. add more chilli"/>
                        </div>
                        <button onClick={() => this.addToCart()}
            
            className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
                    </div>
                </div>
                <div className="pizza-rotate">
                    {/* <img id="pizza_size" src={this.props.item.imgPath}/> */}
                    <img id="pizza_size" src="./images/pizza.webp"/> 
                    <div className="pizza-element pe1">
                        <div className="pizza-element-box">Crispy Crust</div>
                        <div className="pizza-element-dots"></div>
                    </div>
                    {this.props.toppings &&
                    this.props.addons.map((item,index) => 

                        <div className={'pizza-element pe'+(index+2).toString() }>
                            <div className="pizza-element-box">{item.name}</div>
                            <div className="pizza-element-dots"></div>
                        </div>
                    
                    )}
                    
                </div>
                
            </div>
        </div>
        </>}</>
    );
}}

export default Section1;