<script setup lang="ts">
import type { ProductCardProps } from '@app/types'
import { PhHash, PhHeart, PhPackage, PhStorefront } from '@phosphor-icons/vue'
import { formatPrice, calculateDiscount } from '@app/utils'
import { useProduct, useFavorites } from '@app/composables'

const route = useRoute()

onMounted(() => {
  const product = useProduct(route.params.id as string)
  product?.loadProduct()
  useFavorites().loadFavorites()
})

const productData = computed<ProductCardProps | null>(() => {
  const product = useProduct(route.params.id as string)
  const rawProduct = product?.product.value
  if (!rawProduct) return null
  const parsedData = rawProduct
  return {
    id: Number(parsedData.article),
    name: parsedData.title,
    price: {
      current: parsedData.price,
      base: parsedData.bad_price,
    },
    image: parsedData.img,
    link: parsedData.link,
    rating: {
      value: parsedData.product_rating,
      count: parsedData.feedbacks_count,
    },
    seller: {
      name: parsedData.seller_name,
      rating: {
        value: parsedData.seller_rating,
        count: parsedData.feedbacks_count,
      },
    },
    brand: parsedData.brand_name,
    quantity: parsedData.product_count,
  }
})

const favorites = computed<ProductCardProps[]>(() => {
  const rawFavorites = useFavorites().favorites.value
  if (!rawFavorites) return []
  return rawFavorites.map((favoriteData: string) => {
    const parsedData = JSON.parse(favoriteData)
    return {
      id: Number(parsedData.article),
      name: parsedData.title,
      price: {
        current: parsedData.price,
        base: parsedData.bad_price,
      },
      image: parsedData.img,
      link: `/product/${parsedData.article}`,
      rating: {
        value: parsedData.product_rating,
        count: parsedData.feedbacks_count,
      },
      seller: {
        name: parsedData.seller_name,
        rating: {
          value: parsedData.seller_rating,
          count: parsedData.product_count,
        },
      },
      brand: parsedData.brand_name,
    }
  })
})

const toggleFavorite = () => {
  if (productData.value?.id !== undefined) {
    if (favorites.value.find(favorite => favorite.id === productData.value?.id)) {
      useFavorites().removeFromFavorites(productData.value.id)
      console.log('Removed from favorites')
    } else {
      useFavorites().addToFavorites(productData.value.id)
      console.log('Added to favorites')
    }
  }
}

const computedFavorite = computed<boolean>(() => {
  return productData.value?.id !== undefined && !!favorites.value.find(favorite => favorite.id === productData.value?.id)
})

const isAuth = computed(() => window.localStorage.getItem('userId'))
</script>

<template>
  <Main class="product">
    <div class="product__header">
      <div class="product__header-top">
        <div class="product__header-wrapper">
          <Text as="h3" class="product__header-name">
            {{ productData?.name }}
          </Text>
        </div>
        <button v-if="isAuth" type="button" class="product__header-action" :class="{ 'product__header-action--favorite': computedFavorite }" @click="toggleFavorite">
          <PhHeart :size="24" :weight="computedFavorite ? 'fill' : 'regular'" />
          <Text as="p" weight="medium">
            {{ computedFavorite ? 'В избранном' : 'В избранное' }}
          </Text>
        </button>
      </div>
      <div class="product__header-bottom">
        <Rating :rating="{ value: productData?.rating.value as number, count: productData?.rating.count }" />
      </div>
    </div>
    <ProductLayout>
      <div class="product__picture">
        <NuxtImg :src="productData?.image" alt="Товар" class="product__picture-img" />
      </div>
      <div class="product__base">
        <div class="product__base-price">
          <div class="product__base-wrapper">
            <Text as="p" variant="headingLg" class="product__base-current">
              {{ formatPrice(Number(productData?.price.current), '₽') }}
            </Text>
            <Badge variant="accent">
              −{{ calculateDiscount(Number(productData?.price.current), Number(productData?.price.base)) }}%
            </Badge>
          </div>
          <Text
            as="p"
            variant="headingSm"
            weight="regular"
            text-decoration="line-through"
            tone="muted"
            class="product__base-current"
          >
            {{ formatPrice(Number(productData?.price.base), '₽') }}
          </Text>
        </div>
        <div class="product__base-items">
          <div class="product__base-item">
            <PhStorefront :size="20" style="min-width: 20px" />
            <Text as="p" variant="bodySm" weight="regular" class="product__base-item-name">
              {{ productData?.seller.name }} на
              <Text as="span" weight="medium" tone="content">
                Wildberries
              </Text>
            </Text>
            <Rating :rating="{ value: Number(productData?.seller.rating.value) }" class="product__base-rating" />
          </div>
          <div class="product__base-item">
            <PhPackage :size="20" />
            <Text as="p" variant="bodySm" weight="regular">
              Осталось
              <Text as="span" weight="medium" tone="content">
                {{ pluralize(Number(productData?.quantity), 'штука', 'штуки', 'штук') }}
              </Text>
            </Text>
          </div>
          <div class="product__base-item">
            <PhHash :size="20" />
            <Text as="p" variant="bodySm" weight="regular">
              Артикул WB:
              <Text as="span" weight="medium" tone="content">
                {{ productData?.id }}
              </Text>
            </Text>
          </div>
        </div>
        <NuxtLink :to="productData?.link" target="_blank" class="product__base-action">
          Перейти на сайт
        </NuxtLink>
      </div>
    </ProductLayout>
  </Main>
</template>

<style scoped lang="scss">
@use '@app/assets/styles/components/button' as *;
@use '@app/assets/styles/utils/line-clamp' as *;
@use '@app/assets/styles/utils/mask-image' as *;

.product {
  &__header {
    margin-bottom: 48px;

    &-top {
      display: flex;
      gap: 16px;
      align-items: center;
      margin-bottom: 16px;
    }

    &-wrapper {
      @include mask-image(270deg, 0%, 15%);

      flex-grow: 1;
      width: 100%;
    }

    &-name {
      @include line-clamp(1);
    }

    &-action {
      @include button(ghost);

      &--favorite {
        color: rgb(var(--color-critical));
      }
    }
  }

  &__picture {
    overflow: hidden;
    border-radius: 16px;

    &-img {
      width: 100%;
      height: 100%;
    }
  }

  &__info {
    &-heading {
      margin-bottom: 16px;
    }
  }

  &__base {
    height: fit-content;
    padding: 24px;
    border-radius: 16px;
    background: rgb(var(--color-layer-1));

    &-price {
      display: flex;
      gap: 16px;
      align-items: center;
      margin-bottom: 16px;
    }

    &-wrapper {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    &-items {
      margin-bottom: 24px;
    }

    &-item {
      display: flex;
      gap: 12px;
      align-items: center;
      margin-bottom: 8px;
      color: rgb(var(--color-muted));

      &-name {
        @include line-clamp(1);
      }
    }

    &-rating {
      color: rgb(var(--color-content));
    }

    &-action {
      @include button(primary);
    }
  }
}
</style>
