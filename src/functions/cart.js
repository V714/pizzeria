export const checkCart = (dispatch,action,action2) => {
    if (JSON.parse(localStorage.getItem('Cart'))){
        dispatch(action(JSON.parse(localStorage.getItem('Cart'))))}
    
    if (JSON.parse(localStorage.getItem('Address'))){
        dispatch(action2(JSON.parse(localStorage.getItem('Address'))))}

}

export const cartPrice = (allProducts, products) => {
    let price = 0
    products.map(item => {
        const product = allProducts.find(_item => _item.id === item.id)
        if(product.sizes)price += parseFloat(product.sizes.find(_item => _item.id === item.option).price)
        else price += parseFloat(product.price)
        if(item.extra){
            item.extra.map(_item => {
                price += parseFloat(product.extraAddons.find(aitem => aitem.id === _item).price)
            })
        }
        
    })
    return price.toFixed(2)
}

export const addProductToCart = (dispatch,action,action2,item,size,price,NotificationManager,extrasIds,note,crust) => {
    const cart = JSON.parse(localStorage.getItem('Cart'))
    const newItem = extrasIds ? {
        id:item.id,
        option:item.sizes.find(_item => _item.size === size).id,
        extra: extrasIds,
        note: note,
        crust: crust? crust:undefined
    }
    :
    {
        id:item.id,
        option:item.sizes? item.sizes.find(_item => _item.size === size).id:item.id,
        note: note,
        crust: crust? crust:undefined
    }
    if(cart!=null){
        localStorage.setItem("Cart", JSON.stringify([...cart,newItem]));
        dispatch(action(newItem))
    } else {
        localStorage.setItem("Cart", JSON.stringify([newItem]));
        dispatch(action2([newItem]))
    }
    NotificationManager.success(item.name +' (€'+price+') Product added')

}

export const removeProductFromCart = (dispatch,action,products,item) => {
    const newCart = products.filter(_item => _item !== item)
    dispatch(action(newCart))
    localStorage.setItem("Cart", JSON.stringify(newCart));
}

export const getOrderPrice = async(products,user,setWaitCheckoutResponse,deliveryType,status,setError) => {
    
    setWaitCheckoutResponse(true)
    setTimeout(()=>{},2000)
    if(status === 200){
        window.location.href = '/checkout';
    }
    else if(status === 404){
        setError("")
        setWaitCheckoutResponse(false)
    }
    else if(status === 400){
        setError("Invalid Address - sorry, we can not deliver here")
        setWaitCheckoutResponse(false)
    }
    else{
        setWaitCheckoutResponse(false)
    }
}
/* 




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

*/