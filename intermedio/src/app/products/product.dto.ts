import { Product } from './product.model'

// el omit omite campos
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string
}

//el pick escoge campos para crear un tipo nuevo
type example = Pick<Product, 'color' | 'description'>

export interface UpdateProduct extends Partial<CreateProductDto>{ }

type example2 = Required<Product>

export interface FindProduct extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string> // no permite mutar ni reasignar el array
 }
type example3 = Readonly<Product>
