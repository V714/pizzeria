import React from 'react';
import MenuItem from '../Items/MenuItem';
import OffersItem from '../Items/OffersItem';
import PizzaItem from '../Items/PizzaItem';
import { allProducts } from '../../data/Data';
import { recommendedProducts } from '../../data/Data';

class Section4 extends React.Component{
    constructor(props){
        super(props)
    }

    getPizzaItemDOM = (item, addProduct, changeNote) => {
        return (
            <li key={item.id}>
                <PizzaItem
                    addProduct={addProduct}                        
                    changeNote={changeNote}                       
                    id={item.id}                        
                    name={item.name}                         
                    image={item.image}                         
                    price={item.price}                      
                    rating={item.rating}                 
                    details={item.details}
                />
            </li>
        )    
    }

    getOffersItemDOM = (item, addProduct) => {
        return (
            <li key={item.id}>
                <OffersItem
                    addProduct={addProduct} 
                    id={item.id}
                    name={item.name} 
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    details={item.details}
                />
            </li>
        )    
    }

    getMenuItemDOM = (item, addProduct) => {
        return (
            <li key={item.id}>
                <MenuItem
                    addProduct={addProduct} 
                    id={item.id}
                    name={item.name} 
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    details={item.details}
                />
            </li>
        )    
    }

    render(){
    return(
        <div className="section4">
            <div className="section4-inner">
                <div className="s2-head">
                    <div className="s2-head-left">
                        <div className="s2-head-left-small">ÄNHLICHE PRODUKTE</div>
                        <div className="s2-head-left-big">Änhliche Speisen</div>
                        <div className="s2-head-left-description">Here are our recommendations with a similar menu and must be tried</div>
                    </div>
                    <div className="uber-s2-head-right">
                        <div className="paginate-items">
                            <button id="left_scroll1" className="circle1"><img id="paginate_left1" src="images/scroll-left-dis.svg"/></button>
                            <button id="right_scroll1" className="circle2"><img id="paginate_right1" src="images/scroll-right.svg"/></button>
                        </div>
                    </div>
                </div>
                <div className="s2-items">
                    
                {


allProducts.filter(item => recommendedProducts.includes(item.id)).map(product => {
    switch (product.section) {
        case 'pizza':
            return this.getPizzaItemDOM(product, this.props.addProduct, this.props.changeNote)
        case 'combo':
            return this.getComboItemDOM(product, this.props.addProduct)
        case 'offer':
            return this.getOffersItemDOM(product, this.props.addProduct)
        default:
            return this.getMenuItemDOM(product, this.props.addProduct)
    }
})
    
}
                </div>
            </div>
        </div>
    );
}}

export default Section4;