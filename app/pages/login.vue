<script setup lang="ts">
import { useAuth } from '@app/composables'

definePageMeta({
  layout: 'center',
})

const { logIn } = useAuth()

const email = ref('')
const password = ref('')

function handleLogIn() {
  logIn(email.value, password.value)
}
</script>

<template>
  <Main class="login">
    <Constraint smaller>
      <Container>
        <Text as="h3" class="login__heading">
          Войти
        </Text>
        <div class="login__form">
          <div class="login__form-items">
            <div class="login__form-item">
              <Text as="p" variant="bodySm" class="login__form-label">
                Электронная почта
              </Text>
              <input v-model="email" type="email" placeholder="Введите электронную почту" class="login__form-input">
            </div>
            <div class="login__form-item">
              <Text as="p" variant="bodySm" class="login__form-label">
                Пароль
              </Text>
              <input v-model="password" type="password" placeholder="Введите пароль" class="login__form-input">
            </div>
          </div>
          <div class="login__form-row">
            <button @click="handleLogIn" type="button" class="login__form-action">
              Войти
            </button>
            <NuxtLink to="/register" type="button" class="login__form-register">
              Регистрация
            </NuxtLink>
          </div>
        </div>
      </Container>
    </Constraint>
  </Main>
</template>

<style scoped lang="scss">
@use '@app/assets/styles/components/text-field' as *;
@use '@app/assets/styles/components/button' as *;

.login {
  &__heading {
    margin-bottom: 24px;
  }

  &__form {
    &-item {
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &-label {
      margin-bottom: 8px;
    }

    &-input {
      @include text-field($variant: layer2);
    }

    &-action {
      @include button($full-width: true);
    }

    &-register {
      @include button($color: secondary, $full-width: true);
    }

    &-row {
      display: flex;
      gap: 12px;
      margin-top: 24px;
    }
  }
}
</style>
