<template>
  <div class="constraint">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.constraint {
  max-width: 1000px;
  height: 100%;
  margin-inline: auto;
}
</style>
