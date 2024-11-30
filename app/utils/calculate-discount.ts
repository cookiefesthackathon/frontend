export const calculateDiscount = (currentPrice: number, basePrice: number) => {
  return Math.round(((basePrice - currentPrice) / basePrice) * 100)
}
