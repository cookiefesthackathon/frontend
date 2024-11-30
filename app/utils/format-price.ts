export const formatPrice = (price: number, currency: string) => {
  return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ${currency}`
}
