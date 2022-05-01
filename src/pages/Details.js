
import Section1 from './Details/Section1';
import Section2 from './Details/Section2';
import Section3 from './Details/Section3';
import Section1Item from './Details/Section1Item';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Details(){
    const [item,setItem] = useState(null)
    const [price,setPrice] = useState(0)
    const [size,setSize] = useState(0)
    const [crustPrice,setCrustPrice] = useState(0)
    const [extraAddons,setExtraAddons] = useState([])
    const [extraAddonsPrice,setExtraAddonsPrice] = useState(0)
    const [showItem,setShowItem] = useState(false)
    const [crust,setCrust] = useState(undefined)
    const [itemFound,setItemFound] = useState(false)
    const [itemToPrint,setItemToPrint] = useState(<></>)

    const allProducts = useSelector(state=>state.products)

    useEffect(()=>{
         init();
    },[allProducts])

    useEffect(()=>{
        setItemToPrint(printItem())
    },[item,size,crust,extraAddons,price])


    const init = async() => {
        const urlParams = new URLSearchParams(window.location.search);
        const queryID = urlParams.get('id');
        const querySIZE = urlParams.get('size');
        const product = allProducts.find(_item=>_item.id===queryID)
        if(querySIZE && product.sizes){
            if(product && product.sizes.find(item=>item.size===querySIZE)){
                setItem(product)
                setSize(querySIZE)
                setShowItem(true)
                setItemFound(true)
                if(product.sizes){
                    setPrice(product.sizes.find(_item=>_item.size===querySIZE).price)
                } else {
                    setPrice(product.price)
                }
                if(product.crust)setCrust(product.crust[0])
            }}
        else{
            if(product)
            {
                setItem(product)
                setPrice(product.price)
                setShowItem(true)
                setItemFound(true)
            }
        }
        setShowItem(true)
    }

    const pizzaSize = (s) => {
        setSize(s)
        if(item.type=='PIZZA'){
            
            item.sizes.map((i, index) => {if(i.size===s){

            let a=((150/item.sizes.length) * index )+1050
            document.getElementById("pizza_size").style.width = a+"px";
            document.getElementById("pizza_size").style.height = a+"px";


        }})}
    }

    useEffect(()=>{
        if(extraAddons[0]){
            let extraPrice = 0
            extraAddons.map(_item => {
                extraPrice += _item.price * _item.quantity
            })
            setExtraAddonsPrice(extraPrice)
        }
    },[extraAddons])

    useEffect(()=>{
        
        if(crust===undefined)return 0;
        setCrustPrice(parseFloat(crust.price))
    },[crust])

    useEffect(()=>{
        if(item&&item.sizes)setPrice((parseFloat(item.sizes.find(_item => _item.size === size).price)+parseFloat(extraAddonsPrice)+parseFloat(crustPrice)).toFixed(2))
    },[extraAddonsPrice,size,crustPrice])
    
    const deleteTopping = (id) => {
        setExtraAddons(extraAddons.filter(item => item.id !== id))
    }

    const addTopping = (top) => {
        if(extraAddons.some(_item => _item.id === top.id)){ /* If Top already exists */
            setExtraAddons(extraAddons.map(_item => _item.id === top.id? {..._item, quantity:_item.quantity+1} : _item))
        }
        else{
            setExtraAddons([...extraAddons, top])
        }
    }
    const printItem = () => {
        return(<>{showItem && item.type==='PIZZA' &&
                <>
                    <Section1 pizzaSize={pizzaSize} price={price} extraAddons={extraAddons} crust={crust} extraAddonsPrice={extraAddonsPrice} size={size} item={item}/>
                    <Section2 extraAddons={extraAddons} item={item} addTopping={addTopping} crust={crust} setCrust={setCrust} deleteTopping={deleteTopping}/>
                </>
            }
            {showItem && item.type !=='PIZZA' &&
                <>  
                    <Section1Item pizzaSize={pizzaSize} size={size} price={price} item={item}/>
                 </>
            }</>)
    }

    return(
        <div>
            {itemToPrint}
            {
                showItem? <>{itemFound?(showItem?<></>:<div id="search_box_div" style={{width:'100%',textAlign:"center", fontSize:"52px",fontFamily:"Playfair Display",color:"#523429",margin:"80px 0"}}>please wait...</div>)
                :<div id="search_box_div" style={{width:'100%',textAlign:"center", fontSize:"52px",fontFamily:"Playfair Display",color:"#523429",margin:"80px 0"}}>Product not found :(</div>
                      }</>:<>
                    
                </>
            }
           
           
            <Section3/>

        </div>
    );
}

export default Details;