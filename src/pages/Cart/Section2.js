import { useSelector } from "react-redux";
import ProductItem from "../../items/ProductItem";

 function Section2 (){

    const allProducts = useSelector(state=>state.products)

    return(
        <div className="section2">
        <div className="section2-inner">
            <div className="s2-head">
                <div className="s2-head-left">
                    <div className="s2-head-left-small">OUR RECOMMENDATION</div>
                    <div className="s2-head-left-big">Our Recommendation Menu</div>
                    <div className="s2-head-left-description">There are some menus that are recommended and mandatory for you to try</div>
                </div>
                <div className="uber-s2-head-right">
                    {/* <div className="paginate-items">
                        <button id="left_scroll1" className="circle1"><img id="paginate_left1" src="images/scroll-left-dis.svg"/></button>
                        <button id="right_scroll1" className="circle2"><img id="paginate_right1" src="images/scroll-right.svg"/></button>
                    </div> */}
                </div>
            </div>
            <div className="s22-items">
            {allProducts.filter(item => item.type=="PIZZA").map((item,index) => (
                            <ProductItem key={index} item={item}/>
                        ))}
                    
                

            </div>
        </div>
    </div>
    );
}

export default Section2;