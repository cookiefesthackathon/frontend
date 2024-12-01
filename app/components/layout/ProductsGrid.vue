<script setup lang="ts">
import type { ProductsGridProps } from '@app/types'

const props = defineProps<ProductsGridProps>()
</script>

<template>
  <div class="products-grid">
    <div class="products-grid__items">
      <template v-if="loading">
        <div v-for="index in 10" :key="index" class="products-grid__skeleton" />
      </template>
      <template v-else>
        <div v-for="product in props.products" :key="product.id" class="products-grid__item">
          <ProductCard v-bind="product" />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@app/assets/styles/utils/skeleton' as *;

.products-grid {
  &__items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 16px;
  }

  &__skeleton {
    @include skeleton(100%, 420px, 16px);
  }
}
</style>
