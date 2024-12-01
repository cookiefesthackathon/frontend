const appConfig = useAppConfig()

export const favorites = ref<any>(null)

export const useFavorites = () => {
  function loadFavorites() {
    $fetch(`/favorites?user_id=${localStorage.getItem('userId')}`, {
      baseURL: appConfig.apiUrl,
    }).then((data) => {
      favorites.value = JSON.parse(data as any)
      console.log(favorites.value)
    })
  }

  function addToFavorites(productId: number) {
    $fetch(`/favorites?user_id=${localStorage.getItem('userId')}&artic=${productId}`, {
      baseURL: appConfig.apiUrl,
      method: 'POST',
      body: JSON.stringify({ user_id: localStorage.getItem('userId'), product_id: productId }),
    }).then(() => {
      loadFavorites()
    })
  }

  function removeFromFavorites(productId: number) {
    $fetch(`/favorites?user_id=${localStorage.getItem('userId')}&artic=${productId}`, {
      baseURL: appConfig.apiUrl,
      method: 'DELETE',
      body: JSON.stringify({ user_id: localStorage.getItem('userId'), product_id: productId }),
    }).then(() => {
      loadFavorites()
    })
  }

  return {
    favorites,
    loadFavorites,
    addToFavorites,
    removeFromFavorites,
  }
}
