import type { Rating } from '@app/types'

export interface Product {
  id: number
  name: string
  price: ProductPrice
  image: string
  link: string
  rating: Rating
  seller: ProductSeller
  brand?: string
  favorite?: boolean
  options?: ProductOption
}

export interface ProductSeller {
  name: string
  rating: Rating
}

export interface ProductOption {
  name: string
  value: string
}

export interface ProductPrice {
  current: number
  base?: number
}

export type ProductWithoutOptions = Omit<Product, 'options'>

export interface ProductCardProps extends ProductWithoutOptions {
  small?: boolean
}
