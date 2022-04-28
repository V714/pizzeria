import { useSelector } from "react-redux";

function Section2 (){
    
    const lang = useSelector(state=>state.language)

    return(
        <div id="section2" className="section2">
    <div className="section2-inner">
        <div className="s2-head-left-small">{lang.home.section2title}</div>
        <div className="s2-head">
            <div className="s2-head-left">
                <div className="s2-head-left-big">{lang.home.section2bold}</div>
            </div>
            <div className="s2-head-right">
            {lang.home.section2right}
            </div>
        </div>
        <div >
            <div className="mobile-paginate" >
                <button id="left_scroll1" className="circle1"><img id="paginate_left1" src="images/scroll-left-dis.svg"/></button>       
            </div>
            <div className="s2-items">
                
                <ul>
                    <li className="service-element">
                        <div className="service-element-inner">
                            <div className="service-icon"><img src="images/service1.svg"/></div>
                            <div className="service-title">{lang.home.section2service1title}</div>
                            <div className="service-description">{lang.home.section2service1desc}</div>
                            <div className="service-button"> <a>{lang.home.section2service_button}</a><img src="images/arrow-right.svg"/></div>
                        </div>
                    </li>
                    <li className="service-element">
                        <div className="service-element-inner">
                            <div className="service-icon"><img src="images/service2.svg"/></div>
                            <div className="service-title">{lang.home.section2service2title}</div>
                            <div className="service-description">{lang.home.section2service2desc}</div>
                            <div className="service-button"> <a>{lang.home.section2service_button}</a><img src="images/arrow-right.svg"/></div>
                        </div>
                    </li>
                    <li className="service-element">
                        <div className="service-element-inner">
                            <div className="service-icon"><img src="images/service3.svg"/></div>
                            <div className="service-title">{lang.home.section2service3title}</div>
                            <div className="service-description">{lang.home.section2service3desc}</div>
                            <div className="service-button"> <a>{lang.home.section2service_button}</a><img src="images/arrow-right.svg"/></div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="mobile-paginate" >
                <button id="right_scroll1" className="circle2"><img id="paginate_right1" src="images/scroll-right.svg"/></button>
            </div>
         </div>
 </div>
</div>
    );
}

export default Section2;