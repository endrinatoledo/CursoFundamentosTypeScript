import { faker } from '@faker-js/faker';
import {addProduct, products} from './products/product.service'

for (let index = 0; index < 50; index++) {

  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['S','M','L','XL']),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElement(),
    updateAt: faker.date.recent(),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid()
  })

}


console.log(products)
