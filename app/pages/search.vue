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
  image: productData.img,
  link: `/product/${productData.article}`,
  rating: {
    value: productData.product_rating,
    count: productData.feedbacks_count,
  },
  seller: {
    name: productData.seller_name,
    rating: {
      value: productData.seller_rating,
      count: productData.feedbacks_count,
    },
  },
  brand: productData.brand_name,
  quantity: productData.product_count,
})))
</script>

<template>
  <Main class="search">
    <Text as="h3" class="search__heading">
      Поиск по запросу «{{ query }}»
    </Text>
    <ProductsGrid :loading="!products" :products="products" />
  </Main>
</template>

<style scoped lang="scss">
.search {
  &__heading {
    margin-bottom: 48px;
  }
}
</style>
