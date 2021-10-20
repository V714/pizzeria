import React from 'react';
import ProductItem from '../Items/ProductItem';

class Section4 extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
    return(
        <div className="section4">
            <div className="section4-inner">
                <div className="s2-head">
                    <div className="s2-head-left">
                        <div className="s2-head-left-small">ÄNHLICHE PRODUKTE</div>
                        <div className="s2-head-left-big">Änhliche Speisen</div>
                        <div className="s2-head-left-description">Here are our recommendations with a similar menu and must be tried</div>
                    </div>
                    <div className="uber-s2-head-right">
                        <div className="paginate-items">
                            <button id="left_scroll1" className="circle1"><img id="paginate_left1" src="images/scroll-left-dis.svg"/></button>
                            <button id="right_scroll1" className="circle2"><img id="paginate_right1" src="images/scroll-right.svg"/></button>
                        </div>
                    </div>
                </div>
                <div className="s2-items">
                    
                {
                this.props.mostOrdered &&

            this.props.mostOrdered.map(item => {return(
                <li key={item.id}>
                <ProductItem
                products={this.props.products}
                    addProduct={this.props.addProduct}                        
                    changeNote={this.props.changeNote}                       
                    id={item.id}                        
                    name={item.name}                         
                    image={item.imgPath}                         
                    sizes={item.sizes}                    
                    rating={item.rating}                 
                    description={item.description}
                />
            </li>)
            })
            
                        
                    }
                </div>
            </div>
        </div>
    );
}}

export default Section4;