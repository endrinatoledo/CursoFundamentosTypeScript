import {addProduct} from './products/product.service'

addProduct({
  id : 1,
  title : 'p1',
  createdAt: new Date(),
  stock : 90,
  // size? : Size
  category: {
    id: '12',
    name: 'c1'
  }
})
