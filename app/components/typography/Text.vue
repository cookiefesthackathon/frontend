<template>
  <Component :is="props.as" :class="computedClasses">
    <slot />
  </Component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TextProps, TextPropsElement } from '@app/types'

const props = defineProps<TextProps>()

const determineVariant = (as: TextPropsElement): string | null => {
  const variantMap: Record<string, string> = {
    h1: 'heading2xl',
    h2: 'headingXl',
    h3: 'headingLg',
    h4: 'headingMd',
    h5: 'headingSm',
  }

  const variant = props.variant ?? variantMap[as]
  return variant ? 'text--variant-' + variant : null
}

const computedClasses = computed(() => {
  const textVariant = determineVariant(props.as)

  return {
    'text': true,
    [`text--alignment-${props.alignment}`]: props.alignment,
    [`text--tone-${props.tone}`]: props.tone,
    [`text--weight-${props.weight}`]: props.weight,
    [`text--decoration-${props.textDecoration}`]: props.textDecoration,
    'text--uppercase': props.uppercase,
    'text--truncate': props.truncate,
    'text--break': props.breakWord,
    [textVariant as string]: !!textVariant,
  }
})
</script>

<style scoped lang="scss">
.text {
  text-align: inherit;

  &--alignment {
    &-start {
      text-align: start;
    }

    &-center {
      text-align: center;
    }

    &-end {
      text-align: end;
    }

    &-justify {
      text-align: justify;
    }
  }

  &--tone {
    &-accent {
      color: rgb(var(--color-accent));
    }

    &-critical {
      color: rgb(var(--color-critical));
    }

    &-caution {
      color: rgb(var(--color-caution));
    }

    &-success {
      color: rgb(var(--color-success));
    }

    &-muted {
      color: rgb(var(--color-muted));
    }

    &-subtle {
      color: rgb(var(--color-subtle));
    }

    &-content {
      color: rgb(var(--color-content));
    }
  }

  &--variant {
    &-display {
      font: var(--font-xl-display);

      @media (max-width: 768px) {
        font: var(--font-md-display);
      }

      @media (max-width: 640px) {
        font: var(--font-sm-display);
      }
    }

    &-heading2xl {
      font: var(--font-xl-heading-2xl);

      @media (max-width: 768px) {
        font: var(--font-md-heading-2xl);
      }

      @media (max-width: 640px) {
        font: var(--font-sm-heading-2xl);
      }
    }

    &-headingXl {
      font: var(--font-xl-heading-xl);

      @media (max-width: 768px) {
        font: var(--font-md-heading-xl);
      }

      @media (max-width: 640px) {
        font: var(--font-sm-heading-xl);
      }
    }

    &-headingLg {
      font: var(--font-xl-heading-lg);

      @media (max-width: 768px) {
        font: var(--font-md-heading-lg);
      }

      @media (max-width: 640px) {
        font: var(--font-sm-heading-lg);
      }
    }

    &-headingMd {
      font: var(--font-xl-heading-md);

      @media (max-width: 768px) {
        font: var(--font-md-heading-md);
      }
    }

    &-headingSm {
      font: var(--font-heading-sm);
    }

    &-bodyLg {
      font: var(--font-body-lg);
    }

    &-bodyMd {
      font: var(--font-body-md);
    }

    &-bodySm {
      font: var(--font-body-sm);
    }

    &-caption {
      font: var(--font-caption);
    }
  }

  &--weight {
    &-regular {
      font-weight: 400;
    }

    &-medium {
      font-weight: 500;
    }

    &-bold {
      font-weight: 700;
    }
  }

  &--decoration {
    &-line-through {
      text-decoration: line-through;
    }

    &-underline {
      text-decoration: underline;
    }
  }

  &--uppercase {
    text-transform: uppercase;
  }

  &--truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &--break {
    word-break: normal;
    overflow-wrap: anywhere;
  }
}
</style>
