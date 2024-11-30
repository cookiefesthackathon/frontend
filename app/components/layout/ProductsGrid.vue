<script setup lang="ts">
import type { ProductsGridProps } from '@app/types'

const props = defineProps<ProductsGridProps>()
</script>

<template>
  <div class="products-grid">
    <div class="products-grid__items">
      <div v-for="product in props.products" :key="product.id" class="products-grid__item">
        <ProductCard v-bind="product" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.products-grid {
  &__items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 16px;
  }
}
</style>
