import react from 'react'
import Header from './Header'

class Body extends react.Component{
    constructor(props){
        super(props)
        this.state={
            products: [],
            totalPrice: 0,
        }
    }
    countTotalPrice = (price) => {
        this.setState({
            totalPrice: this.state.totalPrice+price
        })
    }
    componentDidMount = () => {
        let sum = 0;
        if (JSON.parse(localStorage.getItem('Cart'))){
        this.setState({
            products: JSON.parse(localStorage.getItem('Cart'))});
        
             sum = JSON.parse(localStorage.getItem('Cart')).reduce(function(prev, cur) {
                return prev + cur.price*cur.quantity;
              }, 0);}
              
            this.countTotalPrice(sum)

    }
    addProduct = (product) => {
        localStorage.setItem("Cart", JSON.stringify([...this.state.products, product]));
        this.setState({
            products: [...this.state.products, product]
        })
        this.countTotalPrice(product.price*product.quantity)
      }


    changeNote = (number,note) => {
        for(var i = 0; i < this.state.products.length; i++){
            if(this.state.products[i].number == number){
                this.state.products[i].note = note;
        }}
        localStorage.setItem("Cart", JSON.stringify(this.state.products));
    }


    deleteProduct = (number) => {
        
        if(this.state.products.length==1)
        {   this.setState({products: [], totalPrice: 0});
            localStorage.setItem("Cart", JSON.stringify([]));}
        else{
            
            for(var i = 0; i < this.state.products.length; i++){
                this.state.products[i].number = i;
            }
            localStorage.setItem("Cart", JSON.stringify(this.state.products.filter(item => item.number != number)));
            this.setState({products: this.state.products.filter(item => item.number != number)})
            let iiitem=this.state.products.filter(item => {return item.number == number})
            this.countTotalPrice(-iiitem[0].price*iiitem[0].quantity)
        }
        
    
    }

    render(){
        return(
            
            <Header totalPrice={this.state.totalPrice} products={this.state.products} addProduct={this.addProduct} changeNote={this.changeNote} deleteProduct={this.deleteProduct}/>
        )
    }
}

export default Body;