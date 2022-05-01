import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../../items/ProductItem';

function Section3(props){

    const lang = useSelector(state=>state.language)
    const allProducts = useSelector(state=>state.products)

    return(
        <div className="section4">
            <div className="section4-inner">
                <div className="s2-head">
                    <div className="s2-head-left">
                        <div className="s2-head-left-small">{lang.similar.title}</div>
                        <div className="s2-head-left-big">{lang.similar.bold}</div>
                        <div className="s2-head-left-description">{lang.similar.thin}</div>
                    </div>
                    <div className="uber-s2-head-right">
                    </div>
                </div>
                <div className="s2-items">
                    
                {
                allProducts &&

                allProducts.filter(item=>item.type==='BURGER').map((item,index) => {return(
                <li key={item.id}>
                <ProductItem key={index} item={item}/>
            </li>)
            })
            
                        
                    }
                </div>
            </div>
        </div>
    );
}

export default Section3;