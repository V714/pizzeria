
function Section2 (){
    return(
        <div className="section2">
            <div className="section2-inner">
                <div className="s2-head-left">
                    <div className="s2-head-left-small">GALLERY</div>
                    <div className="s2-head-left-big">Gallery</div>
                    <div className="s2-head-left-description">Let's look at the places we provide, there are several different places to eat, interesting isn't it?</div>
                </div>
                <div className="uber-s2-head">
                    <div className="uber-s2-head-left">
                        <div className="uber-s2-head-left-small">Indoor Seating</div>
                        <div className="uber-s2-head-left-description">We provide an indoor dining area, you will be accompanied by music for 24/7, while eating your food</div>
                    </div>
                    <div className="uber-s2-head-right">
                        <div className="paginate-items">
                            <button id="left_scroll1" className="circle1"><img id="paginate_left1" src="images/scroll-left-dis.svg"/></button>
                            <button id="right_scroll1" className="circle2"><img id="paginate_right1" src="images/scroll-right.svg"/></button>
                        </div>
                    </div>
                </div>
                <div className="gallery1">
                    <img src="images/gallery3.webp"/>
                    <img src="images/gallery2.webp"/>
                    <img src="images/gallery4.webp"/>
                </div>
                <div className="uber-s2-head">
                    <div className="uber-s2-head-left">
                        <div className="uber-s2-head-left-small">Outdoor Seating</div>
                        <div className="uber-s2-head-left-description">We provide an outdoor dining area, perfect for those of you who want to smoke after eating</div>
                    </div>
                    <div className="uber-s2-head-right">
                        <div className="paginate-items">
                            <button id="left_scroll2" className="circle1"><img id="paginate_left2" src="images/scroll-left-dis.svg"/></button>
                            <button id="right_scroll2" className="circle2"><img id="paginate_right2" src="images/scroll-right.svg"/></button>
                        </div>
                    </div>
                </div>
                <div className="gallery2">
                    <img src="images/gallery5.webp"/>
                    <img src="images/gallery6.webp"/>
                    <img src="images/gallery7.webp"/>
                </div>
            </div>
        </div>
    );
}

export default Section2;