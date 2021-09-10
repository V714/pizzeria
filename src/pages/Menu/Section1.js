import react from "react";

class Section1 extends react.Component{
    constructor(props){
        super(props)
        this.state={
            value: ''
        }
    }
    changeSearchValue = (value) => {
        this.setState({
            value: value
        })
    }
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            window.location.href=`/search?searchValue=${e.target.value}`
        }
      }
    websiteForward = (value) => {
        window.location.href=`/search?searchValue=${value}`
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
                    <input className="menu-search-input" value={this.state.value} onKeyDown={(e) => {this._handleKeyDown(e)}} onChange={(e) => this.changeSearchValue(e.target.value)}  type="search" placeholder="Search for cheese pizza"/>
                </div>
            </div>
        </div>
    </div>
    );}
}

export default Section1;