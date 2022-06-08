import { NotificationManager } from "react-notifications"
import { addProductToCart, cartPrice, checkCart } from "../functions/cart"
import allProducts from "../../public/json/example-products.json"
global.fetch = jest.fn(() => Promise.resolve())


const item = {
    id:"ba-225",
    name:"HUGE Burger",
    imgPath:"/images/burger2.webp",
    sizes:[
        {
            size:"550",
            sizeType:"mg",
            price:"12.99",
            id:"ba-225-01"
        },
        {
            size:"650",
            sizeType:"mg",
            price:"14.99",
            id:"ba-225-02"
        }
    ],
    time:"25",
    kcal:"1250",
    rating:"4.7",
    description:"The best burger you ever seen!.",
    type:"BURGER"
}
const cart = [
    {
        id:"ba-225",option:"ba-225-02"
    },
    {
        id:"ba-225",option:"ba-225-01"
    },
]
const size = "650"
const price = "14.99"
const note = "Test purposes"


test('Product should be added to LocalStorage', () => {
    function print (i) { return i };
    
    expect(addProductToCart(print,print,print,item,size,price,NotificationManager,undefined,note,undefined).note).toBe(note)
})

test('Function should get price of the items in cart', ()=>{
    expect(cartPrice(allProducts,cart)).toBe("27.98")
})