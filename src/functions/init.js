
    
export const getAllProducts = async(axios,func,func2) => {
    axios.get('/json/example-products.json')
    .then((data)=> {
        func(func2(data.data))
    })
    .catch( err =>
      console.log(err)
    )
}

export const getAllTypes = async(axios,func,func2) => {
    axios.get('/json/example-product-types.json')
    .then((data)=> {
        func(func2(data.data))
    })
    .catch( err =>
      console.log(err)
    )
}

export const getContact = async(axios,func,func2) => {
    axios.get('/json/example-contact.json')
    .then((data)=> {
        func(func2(data.data))
    })
    .catch( err =>
      console.log(err)
    )
}

export const getLanguage = async(axios,func,func2) => {
    axios.get('/json/languages/english.json')
    .then((data)=> {
        func(func2(data.data))
    })
    .catch( err =>
      console.log(err)
    )
}

export const getUser = async(func,func2) => {
  func(func2(JSON.parse(localStorage.getItem('User'))))
}

export const getCart = async(func,func2) => {
  func(func2(JSON.parse(localStorage.getItem('Cart'))))
}