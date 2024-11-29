<template>
  <Root>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Root>
</template>

<style lang="scss">
.transition-page {
  &-enter-active, &-leave-active {
    transition: var(--duration-default);
  }

  &-enter-from, &-leave-to {
    opacity: 0;
  }
}
</style>
