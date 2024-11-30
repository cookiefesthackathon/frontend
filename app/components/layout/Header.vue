<script setup lang="ts">
import type { HeaderProps } from '@app/types'
import { useAuth } from '@app/composables'

const { authEmail, logOut } = useAuth()
const props = defineProps<HeaderProps>()
const isAuth = computed(() => Boolean(authEmail.value))
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
        <Transition name="transition-search" mode="out-in">
          <Search placeholder="Найти на Маркетплейсе..." />
        </Transition>
      </div>
    </div>
    <div class="header__auth">
      <NuxtLink v-if="!isAuth" to="/login" class="header__auth-button">
        Войти
      </NuxtLink>
      <span v-else @click="logOut" class="header__auth-button">{{ authEmail }}</span>
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

.transition-search {
  &-enter-active, &-leave-active {
    transition: var(--duration-default);
  }

  &-enter-from, &-leave-to {
    transform: translateY(-6px);
    opacity: 0;
  }
}
</style>
