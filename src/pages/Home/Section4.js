import { useSelector } from "react-redux";
import OffersItem from "../../items/OffersItem";

function Section4(){
    const allProducts = useSelector(state => state.products)
    const lang = useSelector(state => state.language)
    const allPackages = allProducts.filter(item=>item.type==='PACKAGE')

    return(
        <div className="section4">
        <div className="section4-inner">
            <div className="s4-head">
                <div className="s4-head-left">
                    <div className="s4-head-left-small">{lang.home.section4title}</div>
                    <div className="s4-head-left-big">{lang.home.section4bold}</div>
                </div>
                <div className="s4-head-right">
                {lang.home.section4right} 
                </div>
            </div>
            <div className="s4-items">
                <ul>

                    {allPackages && 
                    allPackages.map((item,index) => (
                        <OffersItem index={index+1} item={item}/>
                    ))
                }
   

                </ul>
            </div>
      </div>
    </div>
    );
}

export default Section4;