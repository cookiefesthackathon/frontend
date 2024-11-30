import type { Rating } from '@app/types'

export interface Product {
  id: number
  name: string
  price: ProductPrice
  image: string
  description: string
  link: string
  rating: Rating
  seller: ProductSeller
  brand?: string
}

export interface ProductSeller {
  name: string
  rating: Rating
}

export interface ProductPrice {
  current: number
  base?: number
}

export type ProductWithoutDescription = Omit<Product, 'description'>

export interface ProductCardProps extends ProductWithoutDescription {
  small?: boolean
  favorite?: boolean
}
