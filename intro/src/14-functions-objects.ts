(()=>{

  const login= (data: {email:string, password:number})=>{
    console.log(data.email, data.password)
  }

  login({email:'endrxina@got.com', password:1234})

  type Sizes ='S' | 'M' | 'L' | 'XL'

  const product: any[] = []

  const addProduct = ( data: {
    title: string,
    createAtt: Date,
    stock : number,
    size?: Sizes
  })=> {
    product.push(data)
  }

  addProduct({
    title: 'product',
    createAtt: new Date(1993,1,1) ,
    stock : 12
  })
  addProduct({
    title: 'product',
    createAtt: new Date(1993,1,1) ,
    stock : 12,
    size : 'L'
  })

  console.log(product)
})();
