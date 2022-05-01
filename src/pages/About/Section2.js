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
                    </div>
                </div>
                <div className="gallery1">
                    <img alt="inside the restaurant - beautiful" src="images/gallery3.webp"/>
                    <img alt="inside the restaurant - beautiful" src="images/gallery2.webp"/>
                    <img alt="inside the restaurant - beautiful" src="images/gallery4.webp"/>
                </div>
                <div className="uber-s2-head">
                    <div className="uber-s2-head-left">
                        <div className="uber-s2-head-left-small">{lang.about.section2outdoor_title}</div>
                        <div className="uber-s2-head-left-description">{lang.about.section2outdoor_desc}</div>
                    </div>
                    <div className="uber-s2-head-right">
                    </div>
                </div>
                <div className="gallery2">
                    <img alt="outside the restaurant - beautiful" src="images/gallery5.webp"/>
                    <img alt="outside the restaurant - beautiful" src="images/gallery6.webp"/>
                    <img alt="outside the restaurant - beautiful" src="images/gallery7.webp"/>
                </div>
            </div>
        </div>
    );
}

export default Section2;