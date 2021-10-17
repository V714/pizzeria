
import Section1 from './Details/Section1';
import Section2 from './Details/Section2';
import Section3 from './Details/Section3';
import React from 'react';
import Section1Item from './Details/Section1Item';

class Details extends React.Component{
    constructor(props){
        super(props)
        this.state={
            item: null,
            size: 0,
            crust: 'Cryspy Crust, ',
            crustPrice: 0,
            price:0,
            showItem: false,
            extraAddons: [],
            extraAddonsPrice: 0,
        }
    }

    componentDidMount = async() => {
        const urlParams = new URLSearchParams(window.location.search);
        const queryID = urlParams.get('id');
        const querySIZE = urlParams.get('size');
        
        try {
            await fetch(`http://localhost:8080/products/${queryID}`)
            .then( resp => resp.json())
            .then((data)=> {
                this.setState({
                    item: data,
                    size: querySIZE,
                });
                if(data.sizes.find(item => item.size == querySIZE)){
                    this.setState({
                        
                      showItem: true,
                      price: data.sizes.find(item => item.size == querySIZE).price,
                    })
                  };
            })
          } catch (error) {
            console.log(error);
          }
          /* this.setState({
              item: Marinata,
              size: querySIZE,
          })
 */
          
          
          
    }

    pizzaSize = (size) => {
        
        this.setState({size: size, price: this.state.item.sizes.find(item => item.size === size).price+this.state.extraAddonsPrice})
        this.state.item.sizes.map((item, index) => {if(item.size==size){

            let a=((150/this.state.item.sizes.length) * index )+1050
            document.getElementById("pizza_size").style.width = a+"px";
            document.getElementById("pizza_size").style.height = a+"px";


        }})
    }

    changeCrust=(crust,price) => {
        this.setState({crust: crust+' crust.', crustPrice: price})
    }
    
    deleteTopping = (id) => {
        const priceToSubstract = this.state.extraAddonsPrice-this.state.extraAddons.find(item => item.id==id).price*this.state.extraAddons.find(item => item.id==id).quantity
        this.setState({
            extraAddons: this.state.extraAddons.filter(item => item.id != id),
            extraAddonsPrice: priceToSubstract,
            price: this.state.item.sizes.find(item => item.size === this.state.size).price+priceToSubstract
        })
    }
    addTopping = (top) => {
        const priceToAdd= this.state.extraAddonsPrice+top.price
        if(this.state.extraAddons.some(item => item.id == top.id)){
            this.setState({
                extraAddons: this.state.extraAddons.map(item => item.id == top.id? {...item, quantity: item.quantity+1} : item),
                extraAddonsPrice: priceToAdd,
                price: this.state.item.sizes.find(item => item.size === this.state.size).price+priceToAdd
            })
        }
        else{
        this.setState({
            extraAddons: [...this.state.extraAddons, top],
            extraAddonsPrice: priceToAdd,
            price: this.state.item.sizes.find(item => item.size === this.state.size).price+priceToAdd
        })}
    }

    render(){
    return(
        <div>
            {this.state.showItem && this.state.item.type=='PIZZA' &&
                <>
                    <Section1 pizzaSize={this.pizzaSize} price={this.state.price} extraAddons={this.state.extraAddons} extraAddonsPrice={this.state.extraAddonsPrice} size={this.state.size} item={this.state.item} allProducts={this.props.allProducts} addProduct={this.props.addProduct}/>
                    <Section2 extraAddons={this.state.extraAddons} item={this.state.item} allProducts={this.props.allProducts} changeCrust={this.changeCrust} toppings={this.state.toppings} addTopping={this.addTopping} deleteTopping={this.deleteTopping}/>
                </>
            }
            {this.state.showItem && this.state.item.type !='PIZZA' &&
                <>  
                    <Section1Item price={this.state.price} extraAddons={this.state.extraAddons} extraAddonsPrice={this.state.extraAddonsPrice} size={this.state.size} item={this.state.item} allProducts={this.props.allProducts} addProduct={this.props.addProduct}/>
                 </>
            }
           
           
            <Section3 allProducts={this.props.allProducts} products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote}/>

        </div>
    );}
}

export default Details;