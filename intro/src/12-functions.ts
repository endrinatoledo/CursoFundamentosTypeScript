(()=>{

  type Sizes ='S' | 'M' | 'L' | 'XL'

  function createProducrToJson(
    title: string,
    createAtt: Date,
    stock : number,
    size: Sizes
  ){
    return {
      title,
      createAtt,
      stock,
      size
    }
  }

  function createProducrToJsonv2(
    title: string,
    createAtt: Date,
    stock : number,
    size?: Sizes | undefined
  ){
    return {
      title,
      createAtt,
      stock,
      size
    }
  }

  const product1 =   createProducrToJson('P1', new Date(), 12,'M')
  const product2 = createProducrToJsonv2('P1', new Date(), 12)


})();
