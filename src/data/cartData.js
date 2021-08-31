export let cartData=[]

if (JSON.parse(localStorage.getItem('cartData'))){
 cartData = JSON.parse(localStorage.getItem('cartData'));}

export const addToCart = (id,name,image,price,note,quantity,size=1,extras='') => {
    /*let exist = false
     for(var i = 0; i < cartData.length; i++){if(cartData[i].id == id){
        exist = true;
        cartData[i].quantity = cartData[i].quantity + quantity;
    }}
    if (exist) {
        
  
    } else {
        cartData.push({
            id: id,
            name: name,
            image: image,
            price: price,
            note: note,
            quantity: quantity,
            size: size,
            extras: extras
                    });
    } */
    cartData.push({
        number: cartData.length,
        id: id,
        name: name,
        image: image,
        price: price,
        note: note,
        quantity: quantity,
        size: size,
        extras: extras
                });

    localStorage.setItem("cartData", JSON.stringify(cartData));
    window.location.reload(false);

}
export const changeNote = (id,note) => {
    for(var i = 0; i < cartData.length; i++){
        if(cartData[i].id == id){
        cartData[i].note = note;
    }}
    
    localStorage.setItem("cartData", JSON.stringify(cartData));
}

export const deleteCartItem = (number) => {
    
    if(cartData.length==1){cartData=[]}
    else{
        for(var i = 0; i < cartData.length; i++){
            cartData[i].number = i;
        }
    
        cartData = cartData.filter(item => item.number != number)
    }
    
    
    localStorage.setItem("cartData", JSON.stringify(cartData));
    window.location.reload(false);

}