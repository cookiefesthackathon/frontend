<script setup lang="ts">
import { dataTester } from '@app/utils/data-tester'

definePageMeta({
  layout: 'center',
})
</script>

<template>
  <Main class="index">
    <Constraint>
      <Search large placeholder="Найти на Маркетплейсе..." class="index__search" />
      <FavoritesGrid :products="dataTester" heading="Избранные товары" class="index__grid" />
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
