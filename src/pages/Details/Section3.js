import React from 'react';
import ProductItem from '../Items/ProductItem';
import OffersItem from '../Items/OffersItem';
import { recommendedProducts } from '../../data/Data';

class Section4 extends React.Component{
    constructor(props){
        super(props)
    }

    getProductItemDOM = (item, addProduct, changeNote) => {
        return (
            <li key={item.id}>
                <ProductItem
                    addProduct={addProduct}                        
                    changeNote={changeNote}                       
                    id={item.id}                        
                    name={item.name}                         
                    image={item.imgPath}                         
                    price={item.price}                      
                    rating={item.rating}                 
                    description={item.description}
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
                    image={item.imgPath}
                    price={item.price}
                    rating={item.rating}
                    description={item.description}
                />
            </li>
        )    
    }

    getProductItemDOM = (item, addProduct) => {
        return (
            <li key={item.id}>
                <ProductItem
                    addProduct={addProduct} 
                    id={item.id}
                    name={item.name} 
                    image={item.imgPath}
                    price={item.price}
                    rating={item.rating}
                    description={item.description}
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


this.props.allProducts.filter(item => recommendedProducts.includes(item.id)).map(product => {
    switch (product.section) {
        case 'pizza':
            return this.getProductItemDOM(product, this.props.addProduct, this.props.changeNote)
        case 'combo':
            return this.getComboItemDOM(product, this.props.addProduct)
        case 'offer':
            return this.getOffersItemDOM(product, this.props.addProduct)
        default:
            return this.getProductItemDOM(product, this.props.addProduct)
    }
})
    
}
                </div>
            </div>
        </div>
    );
}}

export default Section4;