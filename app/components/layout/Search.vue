<script setup lang="ts">
import type { SearchProps } from '@app/types'
import { PhMagnifyingGlass } from '@phosphor-icons/vue'
import { useSearch } from '@app/composables'

const props = defineProps<SearchProps>()

const { search } = useSearch()

const searchQuery = ref('')
const router = useRouter()

const handleSearch = () => {
  const formattedQuery = searchQuery.value.trim()
  router.push(`/search?query=${formattedQuery}`)
  search(formattedQuery)
}
</script>

<template>
  <div class="search">
    <input
      v-model="searchQuery"
      type="text"
      :class="props.large ? 'search__field-large' : 'search__field'"
      :placeholder="props.placeholder"
      @keydown.enter="handleSearch"
    >
    <div class="search__wrapper">
      <Transition name="transition-search" mode="in-out">
        <button v-if="searchQuery" type="button" :class="props.large ? 'search__action-large' : 'search__action'" @click="handleSearch">
          <PhMagnifyingGlass :size="props.large ? 24 : 20" />
        </button>
      </Transition>
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

.transition-search {
  &-enter-active, &-leave-active {
    transition: var(--duration-default);
  }

  &-enter-from, &-leave-to {
    opacity: 0;
    transform: translateX(-6px);
  }
}
</style>
