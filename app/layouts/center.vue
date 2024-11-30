<template>
  <div class="layout">
    <div class="layout__background">
      <Background />
    </div>
    <div class="layout__header">
      <Header />
    </div>
    <div class="layout__slot">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  &__slot {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
  }
}
</style>
