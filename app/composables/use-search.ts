const appConfig = useAppConfig()

const searchResult = ref<any>(null)
const searchQuery = ref<any>('')

function search(query: string) {
  searchQuery.value = query
  searchResult.value = null // Убрать
  $fetch(`/search`, {
    baseURL: appConfig.apiUrl,
    query: { query },
  }).then((data) => {
    searchResult.value = JSON.parse(data as any)
    console.log(searchResult.value)
  })
}

export const useSearch = (initialQuery?: string) => {
  if (initialQuery) search(initialQuery)

  return {
    result: searchResult,
    query: searchQuery,
    search,
  }
}
