<script setup lang="ts">
import type { ErrorProps } from '@app/types'

const props = defineProps<ErrorProps>()
</script>

<template>
  <Root>
    <NuxtLayout>
      <Main>
        {{ props.error?.statusCode }}
      </Main>
    </NuxtLayout>
  </Root>
</template>
