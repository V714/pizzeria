import { useSelector } from "react-redux";

function Section2 (){
    const lang = useSelector(state=>state.language)

    return(
        <div className="section2">
            <div className="section2-inner">
                <div className="s2-head-left">
                    <div className="s2-head-left-small">{lang.about.section2title}</div>
                    <div className="s2-head-left-big">{lang.about.section2bold}</div>
                    <div className="s2-head-left-description">{lang.about.section2thin}</div>
                </div>
                <div className="uber-s2-head">
                    <div className="uber-s2-head-left">
                        <div className="uber-s2-head-left-small">{lang.about.section2indoor_title}</div>
                        <div className="uber-s2-head-left-description">{lang.about.section2indoor_desc}</div>
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
                        <div className="uber-s2-head-left-small">{lang.about.section2outdoor_title}</div>
                        <div className="uber-s2-head-left-description">{lang.about.section2outdoor_desc}</div>
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