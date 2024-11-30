<template>
  <div class="product-layout">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .product-layout {
    display: grid;
    grid-template-columns: 408px minmax(280px, 10fr) 408px;
    gap: 48px;
  }
</style>
