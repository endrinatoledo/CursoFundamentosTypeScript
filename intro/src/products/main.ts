import { addProduct, calcStock, product } from "./product.service";

addProduct({
  title: 'product',
  createAtt: new Date(1993,1,1) ,
  stock : 5
})
addProduct({
  title: 'product2',
  createAtt: new Date(1993,1,1) ,
  stock : 6,
  size : 'L'
})

console.log(product)
const total = calcStock()
console.log(total)
