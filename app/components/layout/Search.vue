<script setup lang="ts">
import type { SearchProps } from '@app/types'
import { PhMagnifyingGlass } from '@phosphor-icons/vue'

const props = defineProps<SearchProps>()
</script>

<template>
  <div class="search">
    <input type="text" :class="props.large ? 'search__field-large' : 'search__field'" :placeholder="props.placeholder" />
    <div class="search__wrapper">
      <button type="button" :class="props.large ? 'search__action-large' : 'search__action'">
        <PhMagnifyingGlass :size="props.large ? 24 : 20" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@app/assets/styles/components/text-field' as *;
@use '@app/assets/styles/components/button' as *;

.search {
  display: flex;
  gap: 12px;
  align-items: center;
  min-width: 390px;

  &__field {
    @include text-field();

    &-large {
      @include text-field(large);
    }
  }

  &__action {
    @include button($icon: true);

    &-large {
      @include button($icon: true, $size: large);
    }
  }
}
</style>
