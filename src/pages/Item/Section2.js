import react from "react";
import ProductItem from "../Items/ProductItem";

class Section2 extends react.Component{
    constructor(props){
        super(props)
    }
    render(){
    return(
        <div className="section2">
        <div className="section2-inner">
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
            <div className="s22-items">
                
                <ProductItem products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote}       id={401}
                                name="Italian Risotto" 
                                image="images/risotto.webp"
                                price={120.00} 
                                rating="4,2" 
                                details="Italian Risotto ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>

                    <ProductItem products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote} id={401}
                                name="Italian Risotto" 
                                image="images/risotto.webp"
                                price={120.00} 
                                rating="4,2" 
                                details="Italian Risotto ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>

                    <ProductItem products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote} id={401}
                                name="Italian Risotto" 
                                image="images/risotto.webp"
                                price={120.00} 
                                rating="4,2" 
                                details="Italian Risotto ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>

                    <ProductItem products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote} id={401}
                                name="Italian Risotto" 
                                image="images/risotto.webp"
                                price={120.00} 
                                rating="4,2" 
                                details="Italian Risotto ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>

                    <ProductItem products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote} id={401}
                                name="Italian Risotto" 
                                image="images/risotto.webp"
                                price={120.00} 
                                rating="4,2" 
                                details="Italian Risotto ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>

                    <ProductItem products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote} id={401}
                                name="Italian Risotto" 
                                image="images/risotto.webp"
                                price={120.00} 
                                rating="4,2" 
                                details="Italian Risotto ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>

                    <ProductItem products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote} id={401}
                                name="Italian Risotto" 
                                image="images/risotto.webp"
                                price={120.00} 
                                rating="4,2" 
                                details="Italian Risotto ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>

                    <ProductItem products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote} id={401}
                                name="Italian Risotto" 
                                image="images/risotto.webp"
                                price={120.00} 
                                rating="4,2" 
                                details="Italian Risotto ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>

            </div>
        </div>
    </div>


    );}
}

export default Section2;