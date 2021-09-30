
import Section1 from './Details/Section1';
import Section2 from './Details/Section2';
import Section3 from './Details/Section3';
import React from 'react';

class Details extends React.Component{
    constructor(props){
        super(props)
        this.state={
            crust: 'Cryspy Crust, ',
            crustPrice: 0,
            toppingsPrice: 10,
            toppings: [{
                id: 2004,
                name: "Pizza Sauce",
                price: 2,
                image: "images/pizza-sauce.svg",
                quantity: 1
            },
            {
                id: 2001,
                name: "Chilli Sauce",
                price: 3,
                image: "images/chilli.svg",
                quantity: 1
            },
            {
                id: 2002,
                name: "Mayonnaise Sauce",
                price: 1,
                image: "images/mayonnaise.svg",
                quantity: 1
            },
            {
                id: 2003,
                name: "Blackpepper Sauce",
                price: 2,
                image: "images/blackpepper.svg",
                quantity: 2
            },
            {
                id: 2011,
                name: "Bacon",
                price: 2,
                image: "images/bacon.svg",
                quantity: 2
            }
        ]
        }
    }

    changeCrust=(crust,price) => {
        this.setState({crust: crust+' crust.', crustPrice: price})
    }
    
    deleteTopping = (id) => {
        this.setState({
            toppings: this.state.toppings.filter(item => item.id != id),
            toppingsPrice: this.state.toppingsPrice-this.state.toppings.find(item => item.id==id).price*this.state.toppings.find(item => item.id==id).quantity
        })
    }
    addTopping = (top) => {
        if(this.state.toppings.some(item => item.id == top.id)){
            this.setState({
                toppings: this.state.toppings.map(item => item.id == top.id? {...item, quantity: item.quantity+1} : item),
                toppingsPrice: this.state.toppingsPrice+top.price
            })
        }
        else{
        this.setState({
            toppings: [...this.state.toppings, top],
            toppingsPrice: this.state.toppingsPrice+top.price
        })}
    }

    render(){
    return(
        <div>

            <Section1 allProducts={this.props.allProducts} crustPrice={this.state.crustPrice} toppingsPrice={this.state.toppingsPrice} addProduct={this.props.addProduct} crust={this.state.crust} toppings={this.state.toppings}/>
            <Section2 allProducts={this.props.allProducts} crust={this.state.crust} changeCrust={this.changeCrust} toppings={this.state.toppings} addTopping={this.addTopping} deleteTopping={this.deleteTopping}/>
            <Section3 allProducts={this.props.allProducts} products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote}/>

        </div>
    );}
}

export default Details;