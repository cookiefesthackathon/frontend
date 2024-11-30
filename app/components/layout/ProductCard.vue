<script setup lang="ts">
import type { ProductCardProps } from '@app/types'
import { formatPrice, calculateDiscount } from '@app/utils'

const props = defineProps<ProductCardProps>()

const discountTone = computed(() => {
  if (!props.price.base) return undefined
  return calculateDiscount(props.price.current, props.price.base) > 60 ? 'critical' : 'accent'
})
</script>

<template>
  <NuxtLink
    :to="props.link"
    class="product-card"
    :class="{ 'product-card--small': props.small }"
    :aria-label="props.name"
  >
    <div class="product-card__container">
      <div class="product-card__picture">
        <NuxtImg
          :src="props.image"
          :alt="props.name"
          width="76"
          height="76"
          fit="cover"
          class="product-card__picture-img"
        />
      </div>
      <div v-if="props.price.base" class="product-card__discount">
        <Badge variant="critical">
          −{{ calculateDiscount(props.price.current, props.price.base) }}%
        </Badge>
      </div>
    </div>
    <div class="product-card__info">
      <div class="product-card__price">
        <Text as="p" variant="headingSm" :tone="discountTone" class="product-card__price-current">
          {{ formatPrice(props.price.current, '₽') }}
        </Text>
        <Text
          v-if="props.price.base"
          as="p"
          variant="bodySm"
          tone="muted"
          text-decoration="line-through"
          class="product-card__price-base"
        >
          {{ formatPrice(props.price.base, '₽') }}
        </Text>
      </div>
      <div class="product-card__wrapper">
        <Text as="p" variant="bodySm" weight="bold" class="product-card__name">
          <Text v-if="props.brand && !props.small" as="span" tone="muted" weight="regular">
            {{ props.brand }} <Text as="span" tone="content">/</Text>
          </Text>
          {{ props.name }}
        </Text>
        <div v-if="!props.small" class="product-card__rating">
          <Rating :rating="{ value: props.rating.value, count: props.rating.count }" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
@use '@app/assets/styles/utils/line-clamp' as *;

.product-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  border-radius: 16px;
  background: rgb(var(--color-layer-1));

  &:hover {
    background: rgb(var(--color-layer-2) / 0.6);
  }

  &:active {
    background: rgb(var(--color-layer-3) / 0.5);
  }

  &__picture {
    overflow: hidden;
    aspect-ratio: 1 / 1;
    border-radius: 12px;
    background: rgb(var(--color-white));

    &-img {
      width: 100%;
      height: 100%;
    }
  }

  &__container {
    position: relative;
  }

  &__discount {
    position: absolute;
    bottom: 8px;
    left: 8px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__name {
    @include line-clamp(1);
  }

  &__price {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &--small {
    flex-direction: row;
    gap: 16px;
    padding: 16px;

    .product-card__picture {
      width: 76px;
      height: 76px;
      border-radius: 12px;
    }

    .product-card__info {
      flex-direction: column-reverse;
      gap: 12px;
    }

    .product-card__name {
      @include line-clamp(2);
    }
  }
}
</style>
