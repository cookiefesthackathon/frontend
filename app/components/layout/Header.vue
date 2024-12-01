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
      <div v-else class="header__wrapper">
        <Text as="p" weight="medium" class="header__email">
          {{ authEmail }}
        </Text>
        <button type="button" @click="logOut" class="header__auth-logout">
          Выйти
        </button>
      </div>
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

  &__wrapper {
    display: flex;
    gap: 24px;
    align-items: center;
  }

  &__auth {
    &-button {
      @include button();
    }

    &-logout {
      @include button(secondary);
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
