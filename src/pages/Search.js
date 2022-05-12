
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SearchResults from './Search/SearchResults';

function Search(){
    const [value,setValue] = useState('')
    const [products,setProducts] = useState([])

    const allProducts = useSelector(state=>state.products)

  useEffect(() => {
    setValue(getSearchValueByQueryString())
  },[])

  useEffect(() => {
    if (value) {
        const newProducts = allProducts.filter(item2 => item2.name.toLowerCase().includes(value.toLowerCase()))
        setProducts(newProducts)
      }
      else
        setProducts(allProducts)
  },[value,allProducts])

  const getSearchValueByQueryString = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('searchValue')
  }


return (
      <div>
          <div className="section1">
              <div className="menu-section1-inner">
                  <div className="menu-s1-title">Find a Food That You Like</div>
                  <div className="menu-s1-description">there are around +230 fast food menus available</div>
                  <div className="menu-search-box">
                      <div className="menu-search-box-field">
                          <img width="24" height="24" alt="search icon" src="images/search.svg"/>
                          <input 
                            className="menu-search-input" 
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)} 
                            placeholder="Search for cheese pizza"
                          />
                      </div>
                  </div>
              </div>
          </div>

          <SearchResults products={products}/>

      </div>
    );
  
}

export default Search;