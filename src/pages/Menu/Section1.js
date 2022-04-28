import react, { useState } from "react";
import { useSelector } from "react-redux";

function Section1(){
    const lang = useSelector(state => state.language)
    const [value, setValue] = useState('')

    const changeSearchValue = (v) => {
        setValue(v)
    }
    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            window.location.href=`/search?searchValue=${e.target.value}`
        }
      }

    return(
        <div className="section1">
        <div className="menu-section1-inner">
            <div className="menu-s1-title">{lang.menu.search_title}</div>
            <div className="menu-s1-description">{lang.menu.search_desc}</div>
            <div className="menu-search-box">
                <div className="menu-search-box-field">
                    <img src="images/search.svg"/>
                    <input className="menu-search-input" value={value} onKeyDown={(e) => {_handleKeyDown(e)}} onChange={(e) => changeSearchValue(e.target.value)}  type="search" placeholder={lang.menu.search_input}/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Section1;