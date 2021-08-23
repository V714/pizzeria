
function Section3 (){
    return(
        <div className="section3">
        <div className="section3-inner">
            <div className="s2-head-left">
                <div className="s2-head-left-small">OUR MENÜ</div>
                <div className="s2-head-left-big">Our Offer</div>
                <div className="s2-head-left-description">Wir bieten verschiedene Gericht-Kategorien für unsere Kunden</div>
            </div>
            <div className="s3-menu-tabbing">
                <a id="tagtab1" onclick="showTab('tab1')" className="active"><img src="images/pizza.svg"/><div className="s3-menu-tabbing-text">Pizza</div></a>
                <a id="tagtab2" onclick="showTab('tab2')" ><img src="images/risotto.svg"/><div className="s3-menu-tabbing-text">Risotto</div></a>
                <a id="tagtab3" onclick="showTab('tab3')"><img src="images/spareribs.svg"/><div className="s3-menu-tabbing-text">Spare Ribs</div></a>
                <a id="tagtab4" onclick="showTab('tab4')"><img src="images/indische.svg"/><div className="s3-menu-tabbing-text">Indische Gerichte</div></a>
                <a id="tagtab5" onclick="showTab('tab5')"><img src="images/burgers.svg"/><div className="s3-menu-tabbing-text">Burgers</div></a>
                <a id="tagtab6" onclick="showTab('tab6')"><img src="images/dessert.svg"/><div className="s3-menu-tabbing-text">Dessert</div></a>
                <a><img src="images/bitcoin.webp"/><div className="s3-menu-tabbing-text">PAYMOREFORIT</div></a>
                <a><img src="images/bitcoin.webp"/><div className="s3-menu-tabbing-text">PAYMOREFORIT</div></a>
                <a><img src="images/bitcoin.webp"/><div className="s3-menu-tabbing-text">PAYMOREFORIT</div></a>
                <a><img src="images/bitcoin.webp"/><div className="s3-menu-tabbing-text">PAYMOREFORIT</div></a>
            </div>
            <div id="tab1" className="s3-menu-tab-pizza tabContent">
                <div className="s3-menu-item">
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
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div></div>
                <div className="s3-menu-item">
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
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
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
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
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
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
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
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
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
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
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
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
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
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
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
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
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
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
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
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
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
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
            </div>
            <div id="tab2" className="s3-menu-tab-pizza tabContent">
                <div className="s3-menu-item">
                    <div className="s3-item-image"><img src="images/risotto.webp"/></div>
                    <div className="s3-item-name">Italian Risotto</div>
                    <div className="s3-item-price">
                        <div className="s3-item-price-cost">€ 30,00</div>
                        <div className="s3-item-price-rating"><img src="images/star.svg"/>4,5</div>
                    </div>
                    <div className="s3-item-details">Marinara Pizza is our populer best popular pizza. it was made with tomato, chicken, cheese, and also a spinach</div>
                    <div className="magic-buttons"><div className="s3-item-cart">4
                        </div>
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
                    <div className="s3-item-image"><img src="images/risotto.webp"/></div>
                    <div className="s3-item-name">Italian Risotto</div>
                    <div className="s3-item-price">
                        <div className="s3-item-price-cost">€ 30,00</div>
                        <div className="s3-item-price-rating"><img src="images/star.svg"/>4,5</div>
                    </div>
                    <div className="s3-item-details">Marinara Pizza is our populer best popular pizza. it was made with tomato, chicken, cheese, and also a spinach</div>
                    <div className="magic-buttons"><div className="s3-item-cart">4
                        </div>
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
                    <div className="s3-item-image"><img src="images/risotto.webp"/></div>
                    <div className="s3-item-name">Italian Risotto</div>
                    <div className="s3-item-price">
                        <div className="s3-item-price-cost">€ 30,00</div>
                        <div className="s3-item-price-rating"><img src="images/star.svg"/>4,5</div>
                    </div>
                    <div className="s3-item-details">Marinara Pizza is our populer best popular pizza. it was made with tomato, chicken, cheese, and also a spinach</div>
                    <div className="magic-buttons"><div className="s3-item-cart">4
                        </div>
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
                    <div className="s3-item-image"><img src="images/risotto.webp"/></div>
                    <div className="s3-item-name">Italian Risotto</div>
                    <div className="s3-item-price">
                        <div className="s3-item-price-cost">€ 30,00</div>
                        <div className="s3-item-price-rating"><img src="images/star.svg"/>4,5</div>
                    </div>
                    <div className="s3-item-details">Marinara Pizza is our populer best popular pizza. it was made with tomato, chicken, cheese, and also a spinach</div>
                    <div className="magic-buttons"><div className="s3-item-cart">4
                        </div>
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
                    <div className="s3-item-image"><img src="images/risotto.webp"/></div>
                    <div className="s3-item-name">Italian Risotto</div>
                    <div className="s3-item-price">
                        <div className="s3-item-price-cost">€ 30,00</div>
                        <div className="s3-item-price-rating"><img src="images/star.svg"/>4,5</div>
                    </div>
                    <div className="s3-item-details">Marinara Pizza is our populer best popular pizza. it was made with tomato, chicken, cheese, and also a spinach</div>
                    <div className="magic-buttons"><div className="s3-item-cart">4
                        </div>
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
                    <div className="s3-item-image"><img src="images/risotto.webp"/></div>
                    <div className="s3-item-name">Italian Risotto</div>
                    <div className="s3-item-price">
                        <div className="s3-item-price-cost">€ 30,00</div>
                        <div className="s3-item-price-rating"><img src="images/star.svg"/>4,5</div>
                    </div>
                    <div className="s3-item-details">Marinara Pizza is our populer best popular pizza. it was made with tomato, chicken, cheese, and also a spinach</div>
                    <div className="magic-buttons"><div className="s3-item-cart">4
                        </div>
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
                    <div className="s3-item-image"><img src="images/risotto.webp"/></div>
                    <div className="s3-item-name">Italian Risotto</div>
                    <div className="s3-item-price">
                        <div className="s3-item-price-cost">€ 30,00</div>
                        <div className="s3-item-price-rating"><img src="images/star.svg"/>4,5</div>
                    </div>
                    <div className="s3-item-details">Marinara Pizza is our populer best popular pizza. it was made with tomato, chicken, cheese, and also a spinach</div>
                    <div className="magic-buttons"><div className="s3-item-cart">4
                        </div>
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
                    <div className="s3-item-image"><img src="images/risotto.webp"/></div>
                    <div className="s3-item-name">Italian Risotto</div>
                    <div className="s3-item-price">
                        <div className="s3-item-price-cost">€ 30,00</div>
                        <div className="s3-item-price-rating"><img src="images/star.svg"/>4,5</div>
                    </div>
                    <div className="s3-item-details">Marinara Pizza is our populer best popular pizza. it was made with tomato, chicken, cheese, and also a spinach</div>
                    <div className="magic-buttons"><div className="s3-item-cart">4
                        </div>
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
                    <div className="s3-item-image"><img src="images/risotto.webp"/></div>
                    <div className="s3-item-name">Italian Risotto</div>
                    <div className="s3-item-price">
                        <div className="s3-item-price-cost">€ 30,00</div>
                        <div className="s3-item-price-rating"><img src="images/star.svg"/>4,5</div>
                    </div>
                    <div className="s3-item-details">Marinara Pizza is our populer best popular pizza. it was made with tomato, chicken, cheese, and also a spinach</div>
                    <div className="magic-buttons"><div className="s3-item-cart">4
                        </div>
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
                    <div className="s3-item-image"><img src="images/risotto.webp"/></div>
                    <div className="s3-item-name">Italian Risotto</div>
                    <div className="s3-item-price">
                        <div className="s3-item-price-cost">€ 30,00</div>
                        <div className="s3-item-price-rating"><img src="images/star.svg"/>4,5</div>
                    </div>
                    <div className="s3-item-details">Marinara Pizza is our populer best popular pizza. it was made with tomato, chicken, cheese, and also a spinach</div>
                    <div className="magic-buttons"><div className="s3-item-cart">4
                        </div>
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
                    <div className="s3-item-image"><img src="images/risotto.webp"/></div>
                    <div className="s3-item-name">Italian Risotto</div>
                    <div className="s3-item-price">
                        <div className="s3-item-price-cost">€ 30,00</div>
                        <div className="s3-item-price-rating"><img src="images/star.svg"/>4,5</div>
                    </div>
                    <div className="s3-item-details">Marinara Pizza is our populer best popular pizza. it was made with tomato, chicken, cheese, and also a spinach</div>
                    <div className="magic-buttons"><div className="s3-item-cart">4
                        </div>
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
                    <div className="s3-item-image"><img src="images/risotto.webp"/></div>
                    <div className="s3-item-name">Italian Risotto</div>
                    <div className="s3-item-price">
                        <div className="s3-item-price-cost">€ 30,00</div>
                        <div className="s3-item-price-rating"><img src="images/star.svg"/>4,5</div>
                    </div>
                    <div className="s3-item-details">Marinara Pizza is our populer best popular pizza. it was made with tomato, chicken, cheese, and also a spinach</div>
                    <div className="magic-buttons"><div className="s3-item-cart">4
                        </div>
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
                    <div className="s3-item-image"><img src="images/risotto.webp"/></div>
                    <div className="s3-item-name">Italian Risotto</div>
                    <div className="s3-item-price">
                        <div className="s3-item-price-cost">€ 30,00</div>
                        <div className="s3-item-price-rating"><img src="images/star.svg"/>4,5</div>
                    </div>
                    <div className="s3-item-details">Marinara Pizza is our populer best popular pizza. it was made with tomato, chicken, cheese, and also a spinach</div>
                    <div className="magic-buttons"><div className="s3-item-cart">4
                        </div>
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
                    <div className="s3-item-image"><img src="images/risotto.webp"/></div>
                    <div className="s3-item-name">Italian Risotto</div>
                    <div className="s3-item-price">
                        <div className="s3-item-price-cost">€ 30,00</div>
                        <div className="s3-item-price-rating"><img src="images/star.svg"/>4,5</div>
                    </div>
                    <div className="s3-item-details">Marinara Pizza is our populer best popular pizza. it was made with tomato, chicken, cheese, and also a spinach</div>
                    <div className="magic-buttons"><div className="s3-item-cart">4
                        </div>
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
                <div className="s3-menu-item">
                    <div className="s3-item-image"><img src="images/risotto.webp"/></div>
                    <div className="s3-item-name">Italian Risotto</div>
                    <div className="s3-item-price">
                        <div className="s3-item-price-cost">€ 30,00</div>
                        <div className="s3-item-price-rating"><img src="images/star.svg"/>4,5</div>
                    </div>
                    <div className="s3-item-details">Marinara Pizza is our populer best popular pizza. it was made with tomato, chicken, cheese, and also a spinach</div>
                    <div className="magic-buttons"><div className="s3-item-cart">4
                        </div>
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Section3;