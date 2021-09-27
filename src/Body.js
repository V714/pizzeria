import react from 'react'
import Header from './Header'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


class Body extends react.Component{
    constructor(props){
        super(props)
        this.state={
            products: [],
            totalPrice: 0,
            address: [],
            deliveryPrice: 3,
        }
    }
    countTotalPrice = (price) => {
        this.setState({
            totalPrice: Math.round( (this.state.totalPrice+price) * 100)/100
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
        
        if (JSON.parse(localStorage.getItem('Address'))){
            this.setState({
                address: JSON.parse(localStorage.getItem('Address'))});}
              
        this.countTotalPrice(sum)

    }
    addProduct = (product) => {
        localStorage.setItem("Cart", JSON.stringify([...this.state.products, product]));
        this.setState({
            products: [...this.state.products, product]
        })
        this.countTotalPrice(product.price*product.quantity)
        NotificationManager.success(product.name +' (€'+product.price+') x'+product.quantity, 'Product added')
      }


    changeNote = (number,note) => {
        for(var i = 0; i < this.state.products.length; i++){
            this.state.products[i].number = i;
        }
        this.setState({
            products: this.state.products.map(item => item.number == number? {...item, note: note} : item)
        })
        localStorage.setItem("Cart", JSON.stringify(this.state.products.map(item => item.number == number? {...item, note: note} : item)));
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
        NotificationManager.info('Product has been removed from Cart')
    
    }
    changeAddress = (nam,tel,cit,adr,nt,dlv) => {
        localStorage.setItem("Address", JSON.stringify({name: nam, telephone: tel, city: cit, address: adr, note: nt,delivery:dlv}));
        this.setState({
            address: {name: nam, telephone: tel, city: cit, address: adr, note: nt, delivery: dlv}
        })
        console.log(this.state.address)
    }


    render(){
        return(
            <>
            <NotificationContainer/>
            <Header deliveryPrice={this.state.deliveryPrice} address={this.state.address} changeAddress={this.changeAddress} totalPrice={this.state.totalPrice} products={this.state.products} addProduct={this.addProduct} changeNote={this.changeNote} deleteProduct={this.deleteProduct}/>
            </>
            )
    }
}

export default Body;