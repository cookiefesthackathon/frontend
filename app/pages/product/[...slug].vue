<script setup lang="ts">
  import {PhHeart} from '@phosphor-icons/vue'

  const route = useRoute()
  console.log(route.params)
</script>

<template>
  <Main class="product">
    <div class="product__header">
      <Text as="h3" class="product__header-name">
        Смартфон Apple iPhone 16 Pro Max 1 ТБ, Black Titanium, 2 SIM
      </Text>
      <button type="button" class="product__header-action">
        <PhHeart :size="24" />
        <Text as="p" weight="medium">
          В избранное
        </Text>
      </button>
    </div>
  </Main>
</template>

<style scoped lang="scss">
@use '@app/assets/styles/components/button' as *;

.product {
  &__header {
    &-action {
      @include button(secondary)
    }
  }
}
</style>
