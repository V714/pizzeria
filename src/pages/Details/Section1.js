import react from "react";
import { allProducts } from "../../data/Data";

const size = "size-button";
const sizePicked = "size-button picked-size";

class Section1 extends react.Component{
    constructor(props){
        super(props)
        this.state={
            id: 0,
            product: null,
            note: '',
            size1: false,
            size2: true,
            size3: false,
            size: 0,
            toppingLength: this.props.toppings.length,
        }
    }

    componentDidMount = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const queryID = parseInt(urlParams.get('id'));
        const querySIZE = parseInt(urlParams.get('size'));
        
        if(queryID!=0){
            this.setState({product: allProducts.find(item => item.id==queryID)})
        }

        window.addEventListener('load', (event) => {
        if(querySIZE!=0){
            this.pizzaSize(querySIZE);
        }
    })
        
    }

    typeNote = (e) => {
        this.setState({note: e.target.value})
    }

    pizzaSize = (sizeNumber) => {

        this.setState({size1 : false,size2 : false,size3 : false})
        console.log(sizeNumber)
        switch(sizeNumber){
            case 1:
                this.setState({size1 : true})
                this.setState({size : 1})
                document.getElementById("pizza_size").style.width = '1050px';
                document.getElementById("pizza_size").style.height = '1050px';
                break;
            case 2:
                this.setState({size2 : true})
                this.setState({size : 2})
                document.getElementById("pizza_size").style.width = '1100px';
                document.getElementById("pizza_size").style.height = '1100px';
                break;
            case 3:
                
                this.setState({size3 : true})
                this.setState({size : 3})
                document.getElementById("pizza_size").style.width = '1150px';
                document.getElementById("pizza_size").style.height = '1150px';
                break;
        
    }}
    
    addToCart = () => {
        let extras = this.props.toppings.map(item => item.name+", ")
        let size;
        switch(this.state.size){
            case 1: size='33cm, ';break;
            case 2: size='40cm, ';break;
            case 3: size='50cm, ';break;
        }


        this.props.addProduct({
            id: this.state.product.id,
            name: this.state.product.name,
            image: this.state.product.image,
            price: this.state.product.price[this.state.size-1]+this.props.crustPrice+this.props.toppingsPrice,
            note: this.state.note,
            quantity: 1,
            extras: size+this.props.crust+extras,
            size: this.state.size})
    }


    render(){
    return(
        <>
        {this.state.product && 
            <>
            <div className="menu-section1-inner">
            <div className="detail-section1-inner">
            
                <div className="triple-head">
                    <div className="triple-head-details">
                        <div className="triple-head-details-title">Details</div>
                        <div className="triple-head-details-line"></div>
                        <div className="triple-head-details-info">
                            <div className="triple-head-details-info-star"><img src="images/star.svg"/>{this.state.product.rating}</div>
                            <div className="triple-head-details-info-element"><img src="images/clock.svg"/>{this.state.product.time}</div>
                            <div className="triple-head-details-info-element"><img src="images/kcal.svg"/>{this.state.product.kcal} kCal</div>
                        </div>
                        <div className="item-detail-text-smaller">{this.state.product.details}</div>
                        
                    </div>
                    <div className="triple-head-title">
                        <div className="triple-head-title-title">Meat Lovers</div>
                        <div className="triple-head-title-size">
                            <div className="s3-item-size">
                                <button onClick={() => this.pizzaSize(1)} className={this.state.size1 ? sizePicked : size}>33cm</button>
                                <button onClick={() => this.pizzaSize(2)} className={this.state.size2 ? sizePicked : size}>40cm</button>
                                <button onClick={() => this.pizzaSize(3)} className={this.state.size3 ? sizePicked : size}>55cm</button>
                            </div>
                        </div>
                        <div className="triple-head-title-under">Make your own pizza? <a href="#section2"><b><u><i>Custom Ingredients</i></u></b></a></div>

                    </div>
                    <div className="triple-head-price">
                        <div className="triple-head-price-head">
                            <div className="triple-head-price-head-left">
                                <div className="triple-head-price-head-left-title">Price</div>
                                <div className="triple-head-price-head-left-price">€ {this.state.product.price[this.state.size-1]+this.props.toppingsPrice+this.props.crustPrice}</div>
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
                    <img id="pizza_size" src="images/pizza.webp"/>
                    <div className="pizza-element pe1">
                        <div className="pizza-element-box">Crispy Crust</div>
                        <div className="pizza-element-dots"></div>
                    </div>
                    {this.props.toppings &&
                    this.props.toppings.map((item,index) => 

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