<template>
  <div class="background">
    <svg class="background__svg">
      <defs>
        <linearGradient id="background-gradient" gradientTransform="rotate(75)">
          <stop stop-color="rgb(var(--color-accent))"></stop>
          <stop offset="1" stop-color="transparent" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
      <rect fill="url('#background-gradient')" fill-opacity="0.1" width="100%" height="100%" class="background__rect"></rect>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.background {
  position: absolute;
  inset: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  pointer-events: none;

  &__svg {
    width: 100%;
    height: 100%;
  }

  &__rect {
    width: 100%;
    height: 32vh;
  }
}
</style>
