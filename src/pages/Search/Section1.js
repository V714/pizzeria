import react from "react";

class Section1 extends react.Component{
    constructor(props){
        super(props)
    }
    render(){
    return(
        <div className="section1">
        <div className="menu-section1-inner">
            <div className="menu-s1-title">Find a Food That You Like</div>
            <div className="menu-s1-description">there are around +230 fast food menüs available</div>
            <div className="menu-search-box">
                <div className="menu-search-box-field">
                    <img src="images/search.svg"/>
                    <input className="menu-search-input" type="search" onChange={(e) => this.props.setSearch(e)} placeholder="Search for cheese pizza"/>
                </div>
            </div>
        </div>
    </div>
    );}
}

export default Section1;