import react from 'react'
import Header from './Header'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { getAllNew, product_types } from './data/Data';


class Body extends react.Component{
    constructor(props){
        super(props)
        this.state={
            allProducts: [],
            products: [],
            totalPrice: 0,
            address: [],
            deliveryPrice: 3,
            allTypes: [],
            contactInfo: [],
            allPackages: [],
            allCombos: [],
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

        this.getAllProducts()
        this.getAllTypes()
        this.getContactInfo()
        this.getPackagesProducts()
        this.getCombosProducts()

    }

    getAllProducts = async() => {
        
        try {
            fetch('http://localhost:8080/products')
            .then( resp => resp.json())
            .then((data)=> {
                this.setState({
                    allProducts: data
                })
            })
          } catch (error) {
            console.log(error);
          }
         /*  this.setState({allProducts: getAllNew}) */
    }

    getPackagesProducts = async() => {
        
        try {
            fetch('http://localhost:8080/packages?type=PACKAGE')
            .then( resp => resp.json())
            .then((data)=> {
                this.setState({
                    allPackages: data
                })
            })
          } catch (error) {
            console.log(error);
          }
         /*  this.setState({allProducts: getAllNew}) */
    }

    getCombosProducts = async() => {
        
        try {
            fetch('http://localhost:8080/packages?type=COMBO')
            .then( resp => resp.json())
            .then((data)=> {
                this.setState({
                    allCombos: data
                })
            })
          } catch (error) {
            console.log(error);
          }
         /*  this.setState({allProducts: getAllNew}) */
    }

    getContactInfo = async() => {
        
        try {
            fetch('http://localhost:8080/info/contact')
            .then( resp => resp.json())
            .then((data)=> {
                this.setState({
                    contactInfo: data,
                })


            })
          } catch (error) {
            console.log(error);
          }
    }

    getAllTypes = async() => {
         try {
            fetch('http://localhost:8080/dictionaries/product-types')
            .then( resp => resp.json())
            .then((data)=> {
                this.setState({
                    allTypes: data
                })
            })
          } catch (error) {
            console.log(error);
          } 
          /* this.setState({allTypes: product_types}) */
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
    }

    getOrderPrice = async(discountCode) => {
        const products = this.state.products.filter(item => item.type==='Product')
        const packages = this.state.products.filter(item => item.type==='Package')
        const json_data= {
            "discountCode": discountCode.toString(),
            "orderProducts": products.map(item => {return(
                {"productId": item.id, "sizeId": item.sizeId, "extraAddonsIds": item.extraAddonsIds})}),
            "OrderPackages": packages.map(item => {return(
                {"packageId": item.id, "packageSelectedOptions": item.packageSelectedOptions})})
        }

        const requestOptions = {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin':'*'
            },
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(json_data)
        };
        const response = await fetch('http://localhost:8080/order/order-price/get', requestOptions);
        const data = await response.json();
        localStorage.setItem("RESPONSE_SERVER", JSON.stringify({data}));
    
        
    }

    render(){
        return(
            <>
            <NotificationContainer/>
            <Header getOrderPrice={this.getOrderPrice} allCombos={this.state.allCombos} allPackages={this.state.allPackages} contactInfo={this.state.contactInfo} allTypes={this.state.allTypes} allProducts={this.state.allProducts} deliveryPrice={this.state.deliveryPrice} address={this.state.address} changeAddress={this.changeAddress} totalPrice={this.state.totalPrice} products={this.state.products} addProduct={this.addProduct} changeNote={this.changeNote} deleteProduct={this.deleteProduct}/>
            </>
            )
    }
}

export default Body;