(()=>{

  type Sizes ='S' | 'M' | 'L' | 'XL'
  type Product ={
    title: string,
    createAtt: Date,
    stock : number,
    size?: Sizes
  }

  const product: Product[] = []

  const addProduct = (data:Product)=> {
    product.push(data)
  }

  addProduct({
    title: 'product',
    createAtt: new Date(1993,1,1) ,
    stock : 12
  })
  addProduct({
    title: 'product2',
    createAtt: new Date(1993,1,1) ,
    stock : 12,
    size : 'L'
  })
  addProduct({
    title: 'product3',
    createAtt: new Date(1993,1,1) ,
    stock : 12,
    size : 'L'
  })

  console.log(product)
})();
