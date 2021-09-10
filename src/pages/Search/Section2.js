import react from "react";
import {allProducts} from "../../data/Data"
import MenuItem from "../Items/MenuItem"
import PizzaItem from "../Items/PizzaItem";
import OffersItem from "../Items/OffersItem";
import ComboItem from "../Items/ComboItem";

class Section2 extends react.Component{
    constructor(props){
        super(props)
    }
    render(){
    return(
        <ul>
             {allProducts && 
                    allProducts.filter((item) => item.name.toLocaleLowerCase().includes(this.props.search.toLocaleLowerCase())).map((item) => {
               
          
                        {item.section=='pizza' &&
                        <li><PizzaItem  products={this.props.products} addProduct={this.props.addProduct} 
                        changeNote={this.props.changeNote}
                        id={item.id}
                        name={item.name} 
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        details={item.details}/></li>
                        }

                        {item.section=='combo' &&
                        <li>
                                    <ComboItem  products={this.props.products} addProduct={this.props.addProduct} id={item.id}
                                            name={item.name} 
                                            image={item.image}
                                            price={item.price}
                                            rating={item.rating}
                                            details={item.details}/>
            </li>
                        }

                        {item.section=='offer' &&
                                <li>
                                    <OffersItem  products={this.props.products} addProduct={this.props.addProduct} id={item.id}
                                            name={item.name} 
                                            image={item.image}
                                            price={item.price}
                                            rating={item.rating}
                                            details={item.details}/>
                                            </li>
                                }
                        {item.section!='combo' && item.section!='pizza' && item.section!='offer' &&
                            <li>  <MenuItem  products={this.props.products} addProduct={this.props.addProduct} id={item.id}
                                            name={item.name} 
                                            image={item.image}
                                            price={item.price}
                                            rating={item.rating}
                                            details={item.details}/></li>
                        
                        }
                    })
                }
        </ul>
    );}
}

export default Section2;