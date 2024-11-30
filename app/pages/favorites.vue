<script setup lang="ts">
import { dataTester } from '@app/utils/data-tester'
</script>

<template>
  <Main class="favorites">
    <Text as="h3" class="favorites__heading">
      Избранное
    </Text>
    <ProductsGrid :products="dataTester" />
  </Main>
</template>

<style scoped lang="scss">
.favorites {
  &__heading {
    margin-bottom: 32px;
  }
}
</style>
