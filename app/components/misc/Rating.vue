<script setup lang="ts">
import type { RatingProps } from '@app/types'
import { pluralize } from '@app/utils'
import { PhStar } from '@phosphor-icons/vue'

const props = defineProps<RatingProps>()
</script>

<template>
  <div class="rating">
    <PhStar :weight="props.rating.value ? 'fill' : 'regular'" :size="16" :class="{ 'rating__icon--empty': !props.rating.value }" class="rating__icon" />
    <Text as="p" variant="caption" weight="bold" class="rating__value">
      {{ props.rating.value ? props.rating.value : 'Нет оценок' }}
      <Text
        v-if="props.rating.count"
        as="span"
        variant="caption"
        weight="medium"
        tone="muted"
        class="rating__value-count"
      >
        {{ pluralize(props.rating.count, 'оценка', 'оценки', 'оценок') }}
      </Text>
    </Text>
  </div>
</template>

<style scoped lang="scss">
.rating {
  display: flex;
  gap: 4px;
  align-items: center;

  &__value {
    &-count {
      &::before {
        content: "";
        display: inline-block;
        vertical-align: middle;
        width: 4px;
        height: 4px;
        margin: 0 6px 2px;
        border-radius: 50%;
        background-color: rgb(var(--color-muted));
      }
    }
  }

  &__icon {
    color: rgb(var(--color-caution));

    &--empty {
      color: rgb(var(--color-subtle));
    }
  }
}
</style>
