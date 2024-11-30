<script setup lang="ts">
import FavoritesGrid from '@app/components/pages/index/FavoritesGrid.vue'

definePageMeta({
  layout: 'home',
})

const testData = ref([
  {
    id: 123,
    link: '/',
    name: 'Смартфон Apple iPhone 16 Pro Max 1 ТБ, Black Titanium, 2 SIM',
    image: 'https://cdn.egor.zip/images/patrick.jpg',
    rating: { value: 5.0, count: 423 },
    price: { current: 99999, base: 109999 },
    seller: { name: 'Apple', rating: { value: 5.0, count: 423 } },
    brand: 'Apple',
  },
  {
    id: 124,
    link: '/',
    name: 'Смартфон Apple iPhone 16 Pro Max 1 ТБ, Black Titanium, 2 SIM',
    image: 'https://cdn.egor.zip/images/patrick.jpg',
    rating: { value: 5.0, count: 423 },
    price: { current: 99999, base: 109999 },
    seller: { name: 'Apple', rating: { value: 5.0, count: 423 } },
    brand: 'Apple',
  },
  {
    id: 125,
    link: '/',
    name: 'Смартфон Apple iPhone 16 Pro Max 1 ТБ, Black Titanium, 2 SIM',
    image: 'https://cdn.egor.zip/images/patrick.jpg',
    rating: { value: 5.0, count: 423 },
    price: { current: 99999, base: 109999 },
    seller: { name: 'Apple', rating: { value: 5.0, count: 423 } },
    brand: 'Apple',
  },
])
</script>

<template>
  <Main>
    <Constraint>
      <Search large placeholder="Найти на Маркетплейсе..." class="index__search" />
      <FavoritesGrid :products="testData" heading="Избранные товары" class="index__grid" />
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
