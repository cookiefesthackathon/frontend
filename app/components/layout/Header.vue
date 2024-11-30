<script setup lang="ts">
import type { HeaderProps } from '@app/types'

const props = defineProps<HeaderProps>()
const isAuth = ref(false)
</script>

<template>
  <header class="header">
    <div class="header__start">
      <div class="header__logo">
        <NuxtLink to="/">
          <Logo />
        </NuxtLink>
      </div>
      <div v-if="props.search" class="header__search">
        <Search placeholder="Найти на Маркетплейсе..." />
      </div>
    </div>
    <div class="header__auth">
      <button v-if="!isAuth" type="button" class="header__auth-button">
        Войти
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '@app/assets/styles/components/button' as *;

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__start {
    display: flex;
    gap: 32px;
    align-items: center;
  }

  &__auth {
    &-button {
      @include button();
    }
  }
}
</style>
