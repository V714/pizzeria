import react from "react";
import ProductItem from "../Items/ProductItem";
import OffersItem from "../Items/OffersItem";
import ComboItem from "../Items/ComboItem";

class SearchResults extends react.Component{
    constructor(props) {
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

    getComboItemDOM = (item, addProduct) => {
        return (
            <li key={item.id}>
                <ComboItem
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

    render() {
        return(
            <ul className="search-results">
                {
                    this.props.products.map(product => {
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
            </ul>
        )
    }
}

export default SearchResults;