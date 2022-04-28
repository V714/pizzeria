import { useSelector } from "react-redux";

function Section6 (){

    const lang = useSelector(state => state.language)

    return(
        <div className="section6">
    <div className="section6-inner">
        <div className="s6-title">{lang.home.section6title}</div>
        <div className="s6-text">{lang.home.section6bold}</div>
        <div className="s6-description">{lang.home.section6thin}</div>
        <div className="s6-email"><input type="text" placeholder={lang.home.section6input}/><button>{lang.home.section6button}</button></div>
    </div>
</div>
    );
}

export default Section6;