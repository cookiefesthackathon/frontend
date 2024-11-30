<script setup lang="ts">
import type { ConstraintProps } from '@app/types'

const props = defineProps<ConstraintProps>()
</script>

<template>
  <div class="constraint" :class="{ 'constraint--smaller': props.smaller }">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.constraint {
  max-width: 1000px;
  height: 100%;
  margin-inline: auto;

  &--smaller {
    max-width: 494px;
  }
}
</style>
