<template>
  <div class="product-layout">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .product-layout {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
  }
</style>
