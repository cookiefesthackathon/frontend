<script setup lang="ts">
import type { ProductCardProps } from '@app/types'
import { useSearch } from '@app/composables'

const route = useRoute()
const searchQuery = route.query.query as string ?? ''
const { result, query } = useSearch(searchQuery)

const products = computed<ProductCardProps[]>(() => result.value?.map((productData: any) => ({
  id: productData.article,
  name: productData.title,
  price: {
    current: productData.price,
    base: productData.bad_price,
  },
  image: 'https://svelte.dev/_app/immutable/assets/svelte-machine-desktop.BTbMsEvw.avif',
  link: productData.link,
  rating: {
    value: productData.product_rating,
    count: productData.feedbacks_count,
  },
  seller: {
    name: productData.seller_name,
    rating: {
      value: productData.seller_rating,
      count: productData.product_count,
    },
  },
  brand: productData.brand_name,
  favorite: false, // potom
})))
</script>

<template>
  <Main class="search">
    <Text as="h3" class="search__heading">
      Поиск по запросу {{ query }}
    </Text>
    <!-- <pre>{{ result }}</pre> -->
    <ProductsGrid :products="products" />
  </Main>
</template>

<style scoped lang="scss">
.search {
  &__heading {
    margin-bottom: 32px;
  }
}
</style>
