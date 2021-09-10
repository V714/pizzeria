
import React from 'react';
import { allProducts } from '../data/Data';
import SearchResults from './Search/SearchResults';

class Menu extends React.Component {

  constructor(props){
    super(props)
    this.initialSearchValue = this.getSearchValueByQueryString()
    this.state = {
      value: this.initialSearchValue,
      products: this.getFilteredProducts(this.initialSearchValue),
    }
  }

  componentDidMount = () => {
    this.getSearchValueByQueryString()
  }

  getSearchValueByQueryString = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('searchValue')
  }

  getFilteredProducts = (value) => {
    if (value) {
      const regexp = new RegExp(value, 'i')
      return allProducts.filter(product => {
        return (regexp).test(product.name)
      })
    }
    else
      return allProducts
  }

  handleSearchValueChange = (value) => {
    this.setState({
      value: value,
      products: this.getFilteredProducts(value),
    })
  }

  render() {
    return (
      <div>
          <div className="section1">
              <div className="menu-section1-inner">
                  <div className="menu-s1-title">Find a Food That You Like</div>
                  <div className="menu-s1-description">there are around +230 fast food menüs available</div>
                  <div className="menu-search-box">
                      <div className="menu-search-box-field">
                          <img src="images/search.svg"/>
                          <input 
                            className="menu-search-input" 
                            type="search"
                            value={this.state.value}
                            onChange={(e) => this.handleSearchValueChange(e.target.value)} 
                            placeholder="Search for cheese pizza"
                          />
                      </div>
                  </div>
              </div>
          </div>

          <SearchResults 
            products={this.state.products} 
            addProduct={this.props.addProduct} 
            changeNote={this.props.changeNote}
          />

      </div>
    );
  }
}

export default Menu;