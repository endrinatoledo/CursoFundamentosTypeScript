export type Sizes ='S' | 'M' | 'L' | 'XL'
export type Product ={
  title: string,
  createAtt: Date,
  stock : number,
  size?: Sizes
}
