export const checkCart = (dispatch,action,action2) => {
    if (JSON.parse(localStorage.getItem('Cart'))){
        dispatch(action(JSON.parse(localStorage.getItem('Cart'))))}
    
    if (JSON.parse(localStorage.getItem('Address'))){
        dispatch(action2(JSON.parse(localStorage.getItem('Address'))))}

}

export const cartPrice = (allProducts, products) => {
    let price = 0
    if(products)products.map(item => {
        const product = allProducts.find(item2 => item2.id === item.id)
        if(product)
        {
            if(product.sizes)price +=parseFloat(product.sizes.find(item2 => item2.id === item.option).price)
            else price += parseFloat(product.price)
            if(item.extra&&product.extraAddons){
                item.extra.map(item2 => {
                    price += parseFloat(product.extraAddons.find(aitem => aitem.id === item2).price)
                    return 0;
                })
            }
        }
        return 0;
    })
    return price.toFixed(2)
}

export const addProductToCart = (dispatch,action,action2,item,size,price,NotificationManager,extrasIds,note,crust) => {
    const cart = JSON.parse(localStorage.getItem('Cart'))
    const newItem = extrasIds ? {
        id:item.id,
        option:item.sizes.find(item2 => item2.size === size).id,
        extra: extrasIds,
        note: note,
        crust: crust? crust:undefined
    }
    :
    {
        id:item.id,
        option:item.sizes? item.sizes.find(item2 => item2.size === size).id:item.id,
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
    return newItem
}

export const removeProductFromCart = (dispatch,action,products,item) => {
    const newCart = products.filter(item2 => item2 !== item)
    dispatch(action(newCart))
    localStorage.setItem("Cart", JSON.stringify(newCart));
}

export const changeOneNote = (dispatch,action,item,note) => {
    let cart = JSON.parse(localStorage.getItem('Cart'))
    let newCart = [...new Set(cart)];
    newCart.find(item2=>JSON.stringify(item2) === JSON.stringify(item)).note = note
    localStorage.setItem("Cart", JSON.stringify(newCart));
    dispatch(action(newCart))
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