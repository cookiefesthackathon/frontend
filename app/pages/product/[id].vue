<script setup lang="ts">
import { PhHash, PhHeart, PhPackage, PhStorefront } from '@phosphor-icons/vue'
import { formatPrice } from '@app/utils'

const route = useRoute()
const appConfig = useAppConfig()

const { data: productData } = await useFetch(`/api/products/${route.params.id}`, {
  baseURL: appConfig.apiUrl,
})
console.log(route.params)
</script>

<template>
  <Main class="product">
    {{ productData }}
    <div class="product__header">
      <div class="product__header-top">
        <div class="product__header-wrapper">
          <Text as="h3" class="product__header-name">
            Смартфон Apple iPhone 16 Pro Max 1 ТБ, Black Titanium, 2 SIM
          </Text>
        </div>
        <button type="button" class="product__header-action">
          <PhHeart :size="24" />
          <Text as="p" weight="medium">
            В избранное
          </Text>
        </button>
      </div>
      <div class="product__header-bottom">
        <Rating :rating="{ value: 5.0, count: 3413 }" />
      </div>
    </div>
    <ProductLayout>
      <div class="product__picture">
        <NuxtImg src="https://cdn.egor.zip/images/patrick.jpg" alt="Товар" class="product__picture-img" />
      </div>
      <div class="product__info">
        <Text as="h4" class="product__info-heading">
          Описание
        </Text>
        <Text as="p" class="product__info-text">
          Набор из 2-х зубных паст: 1) Натуральная гелевая зубная паста от воспаления и кровотечения десен Лечебные травы, 100 мл. Зубная паста сплат «Лечебные травы» содержит в своем составе натуральные компоненты: кальцис, полученный из яичной скорлупы, укрепляет эмаль и защищает от кариеса. Профессиональная натуральная паста содержит эфирное масло герани, которое обладает обезболивающим свойством и благоприятно влияет на эмоциональное состояние.
        </Text>
      </div>
      <div class="product__base">
        <div class="product__base-price">
          <div class="product__base-wrapper">
            <Text as="p" variant="headingLg" class="product__base-current">
              {{ formatPrice(120653, '₽') }}
            </Text>
            <Badge variant="accent">
              -20%
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
            {{ formatPrice(200000, '₽') }}
          </Text>
        </div>
        <div class="product__base-items">
          <div class="product__base-item">
            <PhStorefront :size="20" />
            <Text as="p" variant="bodySm" weight="regular">
              Da161 на
              <Text as="span" weight="medium" tone="content">
                Wildberries
              </Text>
            </Text>
            <Rating :rating="{ value: 4.5, count: 123123 }" class="product__base-rating" />
          </div>
          <div class="product__base-item">
            <PhPackage :size="20" />
            <Text as="p" variant="bodySm" weight="regular">
              Осталось
              <Text as="span" weight="medium" tone="content">
                {{ pluralize(3, 'штука', 'штуки', 'штук') }}
              </Text>
            </Text>
          </div>
          <div class="product__base-item">
            <PhHash :size="20" />
            <Text as="p" variant="bodySm" weight="regular">
              Артикул WB:
              <Text as="span" weight="medium" tone="content">
                123123
              </Text>
            </Text>
          </div>
        </div>
        <NuxtLink to="/" target="_blank" class="product__base-action">
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
      @include button(ghost)
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
    }

    &-rating {
      color: rgb(var(--color-content));
    }

    &-action {
      @include button(primary)
    }
  }
}
</style>
