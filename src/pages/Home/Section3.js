
import react from 'react'
import Modal from 'react-modal';
import ModalIngredients from '../Modals/Ingredients';
Modal.setAppElement('#root')

class Section3 extends react.Component{
    constructor(props){
        super(props)
        this.state={
            modalIsOpenIngr: false
        }
    }
    closer = () => {
        this.setState({modalIsOpenIngr: false})
    }

    render(){
    return(
        <div className="section3">
        <div className="section3-inner">
            <div className="section3-inner-again">
                <div className="s3-menu">
                    <div className="s3-menu-texts">
                        <div className="s3-menu-texts-small">UNSER MENÜ</div>
                        <div className="s3-menu-texts-big">Am meisten bestellt</div>
                        <div className="s3-menu-texts-description">There are over +230 Menüs with different categories</div>
                    </div>
                    <div className="s3-menu-scroll">
                        <ul>
                            <li id="gat1" className="s3-list-element"><button onclick="showTab(1)">Burgers</button></li>
                            <li id="gat2" className="s3-list-element active"><button onclick="showTab(2)">Pizza</button></li>
                            <li id="gat3" className="s3-list-element"><button onclick="showTab(3)">Risotto</button></li>
                            <li id="gat4" className="s3-list-element"><button onclick="showTab(4)">Veggie</button></li>
                            <li id="gat5" className="s3-list-element"><button onclick="showTab(5)">Drinks</button></li>
                        </ul>
                    </div>
                </div>
                <div id="pizza_tab2"className="s3-items">
                    <div className="s3-item">
                        <div className="s3-item-image"><img src="images/item1.webp"/></div>
                        <div className="s3-item-name">Marinara Pizza</div>
                        <div className="s3-item-price">
                            <div className="s3-item-price-cost">€ 120,00</div>
                            <div className="s3-item-price-rating"><img src="images/star.svg"/>4,2</div>
                        </div>
                        <div className="s3-item-details">Marinara Pizza ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht.</div>
                        <div className="s3-item-size">
                            <button onclick="selectSize(this)" className="size-button">33cm</button>
                            <button onclick="selectSize(this)" className="size-button active">40cm</button>
                            <button onclick="selectSize(this)" className="size-button">55cm</button>
                        </div>
                        <div className="magic-buttons"><div className="s3-item-cart">4
                        </div>
                    <button className="s3-add-to-cart" onClick={() => this.setState({modaIsOpenIngr: true})
} > <img src="images/cart-white.svg"/>Add to Cart </button>
               </div></div>
                    <div className="s3-item">
                        <div className="s3-item-image"><img src="images/item1.webp"/></div>
                        <div className="s3-item-name">Super Supreme</div>
                        <div className="s3-item-price">
                            <div className="s3-item-price-cost">€ 190,00</div>
                            <div className="s3-item-price-rating"><img src="images/star.svg"/>4,7</div>
                        </div>
                        <div className="s3-item-details">Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten</div>
                        <div className="s3-item-size">
                            <button onclick="selectSize(this)" className="size-button active">33cm</button>
                            <button onclick="selectSize(this)" className="size-button ">40cm</button>
                            <button onclick="selectSize(this)" className="size-button">55cm</button>
                        </div>
                        <div className="magic-buttons"><div className="s3-item-cart">4
                        </div>
                    <button className="s3-add-to-cart" onClick={() => this.setState({modaIsOpenIngr: true})
} > <img src="images/cart-white.svg"/>Add to Cart </button>
               </div></div>
                    <div className="s3-item">
                        <div className="s3-item-image"><img src="images/item1.webp"/></div>
                        <div className="s3-item-name">Marinara Pizza</div>
                        <div className="s3-item-price">
                            <div className="s3-item-price-cost">€ 120,00</div>
                            <div className="s3-item-price-rating"><img src="images/star.svg"/>4,2</div>
                        </div>
                        <div className="s3-item-details">Marinara Pizza ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht.</div>
                        <div className="s3-item-size">
                            <button onclick="selectSize(this)" className="size-button">33cm</button>
                            <button onclick="selectSize(this)" className="size-button active">40cm</button>
                            <button onclick="selectSize(this)" className="size-button">55cm</button>
                        </div>
                        <div className="magic-buttons"><div className="s3-item-cart">4
                        </div>
                    <button className="s3-add-to-cart" onClick={() => this.setState({modaIsOpenIngr: true})
} > <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                    </div>
                    <div className="s3-item">
                        <div className="s3-item-image"><img src="images/item1.webp"/></div>
                        <div className="s3-item-name">Super Supreme</div>
                        <div className="s3-item-price">
                            <div className="s3-item-price-cost">€ 190,00</div>
                            <div className="s3-item-price-rating"><img src="images/star.svg"/>4,7</div>
                        </div>
                        <div className="s3-item-details">Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten</div>
                        <div className="s3-item-size">
                            <button onclick="selectSize(this)" className="size-button active">33cm</button>
                            <button onclick="selectSize(this)" className="size-button ">40cm</button>
                            <button onclick="selectSize(this)" className="size-button">55cm</button>
                        </div>
                        <div className="magic-buttons"><div className="s3-item-cart">4
                        </div>
                    <button className="s3-add-to-cart" onClick={() => this.setState({modaIsOpenIngr: true})
} > <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                    </div>
                    <div className="s3-item">
                        <div className="s3-item-image"><img src="images/item1.webp"/></div>
                        <div className="s3-item-name">Marinara Pizza</div>
                        <div className="s3-item-price">
                            <div className="s3-item-price-cost">€ 120,00</div>
                            <div className="s3-item-price-rating"><img src="images/star.svg"/>4,2</div>
                        </div>
                        <div className="s3-item-details">Marinara Pizza ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht.</div>
                        <div className="s3-item-size">
                            <button onclick="selectSize(this)" className="size-button">33cm</button>
                            <button onclick="selectSize(this)" className="size-button active">40cm</button>
                            <button onclick="selectSize(this)" className="size-button">55cm</button>
                        </div>
                        <div className="magic-buttons"><div className="s3-item-cart">4
                        </div>
                    <button className="s3-add-to-cart" onClick={() => this.setState({modaIsOpenIngr: true})
} > <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                    </div>
                    <div className="s3-item">
                        <div className="s3-item-image"><img src="images/item1.webp"/></div>
                        <div className="s3-item-name">Super Supreme</div>
                        <div className="s3-item-price">
                            <div className="s3-item-price-cost">€ 190,00</div>
                            <div className="s3-item-price-rating"><img src="images/star.svg"/>4,7</div>
                        </div>
                        <div className="s3-item-details">Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten</div>
                        <div className="s3-item-size">
                            <button onclick="selectSize(this)" className="size-button active">33cm</button>
                            <button onclick="selectSize(this)" className="size-button ">40cm</button>
                            <button onclick="selectSize(this)" className="size-button">55cm</button>
                        </div>
                        <div className="magic-buttons"><div className="s3-item-cart">4
                        </div>
                    <button className="s3-add-to-cart" onClick={() => this.setState({modaIsOpenIngr: true})
} > <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                    </div>
                </div>
                
            </div>
            <div className="s3-pagination">
                <div className="paginate-items">
                    <button id="left_scroll" className="circle1"><img id="paginate_left" src="images/scroll-left-dis.svg"/></button>
                    <button id="right_scroll" className="circle2"><img id="paginate_right" src="images/scroll-right.svg"/></button>
                </div>
            </div>
        </div>








        <Modal 
        isOpen={this.state.modaIsOpenIngr} 
        shouldCloseOnOverlayClick={true} 
        onRequestClose={() => this.setState({modaIsOpenIngr: false})}
        closeTimeoutMS={350}
        className={"ingredients_dialog"}
        style={{
          overlay: {
            position: 'fixed',
            transition: 'all 0.4s ease-in-out',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 9999
          }
        }}>
            <ModalIngredients closer = {this.closer}/>
      </Modal>












    </div>






    );}
}

export default Section3;