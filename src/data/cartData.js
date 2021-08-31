export const cartData = [
    {
        id:23,
        name:"Italian Risotto",
        price:"30.00",
        image:"images/risotto.webp",
        note:"",
        quantity: 5
    },
    {
        id:8323,
        name:"Pizza + Pepsi (Company Offer 1)",
        price:"40.00",
        image:"images/combo1.webp",
        note:"Please add a little chilli powder in there and add some mayonese too",
        quantity: 2,
        size: 2
    },
    {
        id:123,
        name:"Johny Walker + 2x1,5L + 1 Pizza (33 cm)",
        price:"30.00",
        image:"images/combo2.webp",
        note:"",
        quantity: 2,
        size: 22
    },
    {
        id:2,
        name:"Vodka 1L",
        price:"20.00",
        image:"images/vodka.webp",
        note:"Please add more vodka",
        quantity: 8
    },
]


export const addToCart = (id,name,image,price,note,quantity,size=1) => {
    let exist = false
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
            size: size
                    });
    }
    console.log(cartData)
}
export const changeNote = (id,note) => {
    for(var i = 0; i < cartData.length; i++){if(cartData[i].id == id){
        cartData[i].note = note;
    }}
}

export const deleteCartItem = (id) => {
    
    cartData.filter((item) => item.id != id);
}