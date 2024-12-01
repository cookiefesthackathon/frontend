const appConfig = useAppConfig()

export const product= ref<any>(null)

export const useProduct = (productId: string) => {
  const { loadFavorites, addToFavorites, removeFromFavorites } = useFavorites()

  function loadProduct() {
    $fetch(`/product?artic=${productId}`, {
      baseURL: appConfig.apiUrl,
    }).then((data) => {
      product.value = JSON.parse(data as any)
      console.log(product.value)
    })
  }

  return {
    product,
    loadProduct,
    addToFavorites,
    removeFromFavorites,
  }
}
