import {addProduct} from './products/product.service'

addProduct({
  id : 1,
  createdAt: new Date(),
  updateAt: new Date(),
  title : 'p1',
  stock : 90,
  // size? : Size
  category: {
    id: '12',
    createdAt: new Date(),
    updateAt: new Date(),
    name: 'c1'
  }
})
