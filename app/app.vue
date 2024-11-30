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

.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  margin-inline: auto;
  padding: 36px 48px;

  &__header {
    margin-bottom: 48px;
  }
}
</style>
