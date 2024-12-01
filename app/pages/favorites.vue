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
      link: `/product/${parsedData.article}`,
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
</script>

<template>
  <Main class="favorites">
    <Text as="h3" class="favorites__heading">
      Избранное
    </Text>
    <ProductsGrid :products="favorites" />
  </Main>
</template>

<style scoped lang="scss">
.favorites {
  &__heading {
    margin-bottom: 32px;
  }
}
</style>
