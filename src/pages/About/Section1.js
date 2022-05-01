import { useSelector } from "react-redux";

function Section1 (){
    const lang = useSelector(state=>state.language)
    return(
        <div className="section1">
            <div className="uber-section1-inner">
                <div className="uber-s1-idk">{lang.about.section1title}</div>
                <div className="uber-s1-title">{lang.about.section1bold}</div>
                <div className="uber-s1-description">{lang.about.section1thin}</div>
                <button className="button-to-order">{lang.about.section1button}</button>
                <div className="gallery-top">
                    <img alt="inside the restaurant - beautiful" src="images/gallery1.webp"/>
                    <img alt="inside the restaurant - beautiful" src="images/gallery2.webp"/>
                    <img alt="inside the restaurant - beautiful" src="images/gallery3.webp"/>
                </div>
            </div>
        </div>
    );
}

export default Section1;