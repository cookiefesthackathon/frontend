<script setup lang="ts">
import type { BadgeProps } from '@app/types'

const props = defineProps<BadgeProps>()
</script>

<template>
  <div class="badge" :class="`badge--variant-${props.variant}`">
    <Text as="p" variant="caption" weight="bold">
      <slot />
    </Text>
  </div>
</template>

<style scoped lang="scss">
.badge {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 20px;
  padding: 0 6px;
  border-radius: 8px;

  &--variant {
    &-accent {
      background: rgb(var(--color-accent));
      color: rgb(var(--color-white));
    }

    &-critical {
      background: rgb(var(--color-critical));
      color: rgb(var(--color-white));
    }

    &-caution {
      background: rgb(var(--color-caution));
      color: rgb(var(--color-white));
    }
  }
}
</style>
