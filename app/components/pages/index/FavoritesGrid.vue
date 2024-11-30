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
      <div class="favorites-grid__items">
        <div v-for="product in props.products.slice(0, 3)" :key="product.id" class="favorites-grid__item">
          <ProductCard v-bind="product" small />
        </div>
      </div>
      <NuxtLink v-if="props.products.length > 3" to="/favorites" class="favorites-grid__link">
        Посмотреть все
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@app/assets/styles/components/button' as *;

.favorites-grid {
  &__header {
    margin-bottom: 24px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  &__link {
    @include button(secondary);
    width: fit-content;
  }
}
</style>
