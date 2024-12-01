<script setup lang="ts">
import type { ProductCardProps } from '@app/types'
import { useFavorites } from '@app/composables'

onMounted(() => {
  useFavorites().loadFavorites()
})
/*
const favorites = computed<ProductCardProps[]>(() => useFavorites().favorites.value?.map((favoriteData: any) => ({
  id: favoriteData.article,
  name: favoriteData.title,
  price: {
    current: favoriteData.price,
    base: favoriteData.bad_price,
  },
  image: favoriteData.img,
  link: favoriteData.link,
  rating: {
    value: favoriteData.product_rating,
    count: favoriteData.feedbacks_count,
  },
  seller: {
    name: favoriteData.seller_name,
    rating: {
      value: favoriteData.seller_rating,
      count: favoriteData.product_count,
    },
  },
  brand: favoriteData.brand_name,
})))*/

definePageMeta({
  layout: 'center',
})
</script>

<template>
  <Main class="index">
    <Constraint>
      {{ favorites }}
      <Search large placeholder="Найти на Маркетплейсе..." class="index__search" />
      <FavoritesGrid :products="{
id: favoriteData.article,
  name: favoriteData.title,
  price: {
    current: favoriteData.price,
    base: favoriteData.bad_price,
  },
  image: favoriteData.img,
  link: favoriteData.link,
  rating: {
    value: favoriteData.product_rating,
    count: favoriteData.feedbacks_count,
  },
  seller: {
    name: favoriteData.seller_name,
    rating: {
      value: favoriteData.seller_rating,
      count: favoriteData.product_count,
    },
  },
  brand: favoriteData.brand_name,
      }" heading="Избранные товары" class="index__grid" />
    </Constraint>
  </Main>
</template>

<style scoped lang="scss">
.index {
  &__search {
    margin-bottom: 48px;
  }
}
</style>
