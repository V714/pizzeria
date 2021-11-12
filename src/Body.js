import react from 'react'
import Header from './Header'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


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
            mostOrdered: [],
            news: [],
            orderItems: null,
            couponError: {}
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
        this.getMostOrdered()
        this.getNews()

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

    getNews = async() => {
        try {
            fetch('http://localhost:8080/info/news')
            .then( resp => resp.json())
            .then((data)=> {
                this.setState({
                    news: data
                })
            })
          } catch (error) {
            console.log(error);
          } 
    }
    

    getMostOrdered = async() => {
        try {
           fetch('http://localhost:8080/products/most-ordered')
           .then( resp => resp.json())
           .then((data)=> {
               this.setState({
                   mostOrdered: data
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
    
    changeAddress = (nam,tel,cit,adr,nt,dlv,dct) => {
        localStorage.setItem("Address", JSON.stringify({name: nam, telephone: tel, city: cit, address: adr, note: nt,delivery:dlv,district:dct,}));
        this.setState({
            address: {name: nam, telephone: tel, city: cit, address: adr, note: nt, delivery: dlv, district:dct,}
        })
    }

    getOrderPrice = async(discountCode,districtCode,deliveryType) => {
        const products = this.state.products.filter(item => item.type==='Product')
        const packages = this.state.products.filter(item => item.type==='Package')
        const address = this.state.address
        const json_data= JSON.stringify({
            "deliveryType": deliveryType ? "ADDRESS_DELIVERY":"PICKUP_DELIVERY",
            "address": {
                "recipientsName": address.name.toString(),
                "districtCode": districtCode.toString(),
                "phoneNumber": address.telephone.toString(),
                "address": address.city.toString()+" "+address.address.toString()
            },

            "cart":{
                "discountCode": discountCode.toString(),
                "orderProducts": products.map(item => {return(
                    {   "productId": item.id,
                        "sizeId": item.sizeId,
                        "extraAddonsIds": item.extraAddonsIds,
                        "notes": item.note
                    })}),
                "orderPackages": packages.map(item => {return(
                    {   "packageId": item.id, 
                        "packageSelectedOptions": item.packageSelectedOptions
                })})}
        })

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: json_data
        };
        this.setState({waitCheckoutResponse: true})

        const response = await fetch('http://localhost:8080/order/order-price/get', requestOptions);
        const data = await response.json();
        const status = await response.status;

        if(status === 200){
            this.setState({orderItems: data,waitCheckoutResponse: false,couponError: null});
            localStorage.setItem("orderItems", JSON.stringify(data));
            window.location.href = '/checkout';
        }
        else if(status === 404){
            this.setState({couponError: data,waitCheckoutResponse: false})
        }
        else if(status === 400){
            this.setState({couponError: data[0],waitCheckoutResponse: false})
        }
        else{
            this.setState({waitCheckoutResponse: false,couponError: null})
        }
    }



    render(){
        return(
            <>
            <NotificationContainer/>
            <Header orderItems={this.state.orderItems} couponError={this.state.couponError} waitCheckoutResponse={this.state.waitCheckoutResponse} news={this.state.news} mostOrdered={this.state.mostOrdered} getOrderPrice={this.getOrderPrice} allCombos={this.state.allCombos} allPackages={this.state.allPackages} contactInfo={this.state.contactInfo} allTypes={this.state.allTypes} allProducts={this.state.allProducts} deliveryPrice={this.state.deliveryPrice} address={this.state.address} changeAddress={this.changeAddress} totalPrice={this.state.totalPrice} products={this.state.products} addProduct={this.addProduct} changeNote={this.changeNote} deleteProduct={this.deleteProduct}/>
            </>
            )
    }
}

export default Body;