<script setup lang="ts">
import type { FavoritesGridProps } from '@app/types'

const props = defineProps<FavoritesGridProps>()
</script>

<template>
  <div class="favorites-grid">
    <div v-if="props.heading" class="favorites-grid__header">
      <Text as="h3">
        {{ props.heading }}
      </Text>
    </div>
    <div class="favorites-grid__content">
      <div v-for="product in props.products" :key="product.id" class="favorites-grid__item">
        <ProductCard v-bind="product" small />
      </div>
    </div>
    {{ props.products }}
  </div>
</template>

<style scoped lang="scss">
.favorites-grid {
  &__header {
    margin-bottom: 24px;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
}
</style>
