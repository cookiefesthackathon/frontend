<script setup lang="ts">
import type { ProductCardProps } from '@app/types'
import { useFavorites } from '@app/composables'

onMounted(() => {
  useFavorites().loadFavorites()
})

const favorites = computed<ProductCardProps[]>(() => {
  const rawFavorites = useFavorites().favorites.value
  if (!rawFavorites) return []
  return rawFavorites.map((favoriteData: string) => {
    const parsedData = JSON.parse(favoriteData)
    return {
      id: Number(parsedData.article),
      name: parsedData.title,
      price: {
        current: parsedData.price,
        base: parsedData.bad_price,
      },
      image: parsedData.img,
      link: parsedData.link,
      rating: {
        value: parsedData.product_rating,
        count: parsedData.feedbacks_count,
      },
      seller: {
        name: parsedData.seller_name,
        rating: {
          value: parsedData.seller_rating,
          count: parsedData.product_count,
        },
      },
      brand: parsedData.brand_name,
    }
  })
})

definePageMeta({
  layout: 'center',
})
</script>

<template>
  <Main class="index">
    <Constraint>
      <Search large placeholder="Найти на Маркетплейсе..." class="index__search" />
      <FavoritesGrid v-if="favorites.length" :products="favorites" heading="Избранные товары" class="index__grid" />
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
