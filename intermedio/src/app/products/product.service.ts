import { faker } from '@faker-js/faker';
import {Product} from './product.model'
import { CreateProductDto, UpdateProduct, FindProduct } from './product.dto'

export const products : Product[] =[]
export const addProduct = (data: CreateProductDto):Product =>{
  const newProduct ={
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updateAt: faker.date.recent(),
    category:{
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updateAt: faker.date.recent(),
    }
  }
  products.push(newProduct)
  return newProduct
}

export const updateProduct = (id: string | number, change: UpdateProduct): Product => {

  const index = products.findIndex(item => item.id === id)
  const prevData = products[index]
  products[index] = {
    ...prevData,
    ...change
  }
  return products[index]
}

export const findProducts = (dto: FindProduct): Product[] => {


  return products
 }
