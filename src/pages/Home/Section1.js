import react from "react";

class Section1 extends react.Component{

    constructor(props){
        super(props)
        this.state = {
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
        <div className="section1-inner">
            <div className="s1-title">Bestelle jetzt, ein Stück Happiness</div>
            <div className="s1-description">Hab Sonne im Herzenund Pizza im Bauch.Dann bist du glücklichund satt bist du auch.</div>
            <div className="search-box">
                <div className="search-box-field">
                    <img src="images/search.svg"/>
                    <input className="search-input" type="search" value={this.state.value} onKeyDown={(e) => {this._handleKeyDown(e)}} onChange={(e) => this.changeSearchValue(e.target.value)}  placeholder="Suche deine Lieblingspizza..."/>
                </div>
            <button className="search-button" onClick={(e) => {this.websiteForward(this.state.value)}} >Search</button>
            </div>
            <div id="bitcoin">
                <img src="images/btc.svg"/>
              </div>
        </div>
        <img className="pizza" src="images/pizza.webp"/>
    </div>
    );}
}

export default Section1;