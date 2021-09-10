import react from "react";
import MenuItem from "../Items/MenuItem"
import PizzaItem from "../Items/PizzaItem";
import OffersItem from "../Items/OffersItem";
import ComboItem from "../Items/ComboItem";

class SearchResults extends react.Component{
    constructor(props) {
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

    getComboItemDOM = (item, addProduct) => {
        return (
            <li key={item.id}>
                <ComboItem
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

    render() {
        return(
            <ul className="search-results">
                {
                    this.props.products.map(product => {
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
            </ul>
        )
    }
}

export default SearchResults;