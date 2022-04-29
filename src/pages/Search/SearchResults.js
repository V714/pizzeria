import ProductItem from "../../items/ProductItem";

function SearchResults (props){
    
        return(props.products[0]?<>
            <ul className="search-results">
                 {
                    props.products.map(product => {
                        return(<li key={product.id}>
                            <ProductItem item={product}/>
                        </li>)
                    })
                }
            </ul></>:<>
            <div id="search_box_div" style={{width:'100%',textAlign:"center", fontSize:"52px",fontFamily:"Playfair Display",color:"#523429",margin:"80px 0"}}>Nothing found :(</div></>
        )
    
}

export default SearchResults;