import { useState } from "react";
import { useSelector } from "react-redux";

const Section1 = () => {
    const lang = useSelector(state=>state.language)

    const [value,setValue] = useState('')
    
    const changeSearchValue = (v) => {
        setValue(v)
    }
    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            window.location.href=`/search?searchValue=${e.target.value}`
        }
      }
    const websiteForward = (v) => {
        window.location.href=`/search?searchValue=${v}`
    }

    return(
        <div className="section1">
        <div className="section1-inner">
            <div className="s1-title">{lang.home.section1bold}</div>
            <div className="s1-description">{lang.home.section1thin}</div>
            <div className="search-box">
                <div className="search-box-field">
                    <img src="images/search.svg"/>
                    <input className="search-input" type="search" value={value} onKeyDown={(e) => {_handleKeyDown(e)}} onChange={(e) => changeSearchValue(e.target.value)}  placeholder={lang.home.section1input}/>
                </div>
            <button className="search-button" onClick={(e) => {websiteForward(value)}} >{lang.home.section1button}</button>
            </div>
            <div id="bitcoin">
                <img src="images/btc.svg"/>
              </div>
        </div>
        <img className="pizza" src="images/pizza.webp"/>
    </div>
    );
}

export default Section1;