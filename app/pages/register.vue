<script setup lang="ts">
import { useAuth } from '@app/composables'

definePageMeta({
  layout: 'center',
})

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const { register } = useAuth()

const email = ref('')
const password = ref('')
const repeatedPassword = ref('')
const name = ref('')
const surname = ref('')
const patronymic = ref('')

function handleRegister() {
  register({
    email: email.value,
    password: password.value,
    name: name.value,
    surname: surname.value,
    patronymic: patronymic.value,
  })
}

const canRegister = computed(
  () => emailRegex.test(email.value)
    && password.value
    && password.value === repeatedPassword.value
    && name.value
    && surname.value
    && patronymic.value,
)

const repeatedPasswordError = computed(
  () => password.value
    && repeatedPassword.value
    && password.value !== repeatedPassword.value,
)
</script>

<template>
  <Main class="register">
    <Constraint smaller>
      <Container>
        <Text as="h3" class="register__heading">
          Зарегистрироваться
        </Text>
        <div class="register__form">
          <div class="register__form-items">
            <div class="register__form-item">
              <Text as="p" variant="bodySm" class="register__form-label">
                Электронная почта
              </Text>
              <input v-model="email" type="email" placeholder="Введите электронную почту" class="register__form-input">
            </div>
            <div class="register__form-item">
              <Text as="p" variant="bodySm" class="register__form-label">
                Пароль
              </Text>
              <input v-model="password" type="password" placeholder="Придумайте пароль" class="register__form-input">
            </div>
            <div class="register__form-item">
              <Text as="p" variant="bodySm" class="register__form-label">
                Повтор пароля
              </Text>
              <input v-model="repeatedPassword" type="password" placeholder="Повторите пароль" class="register__form-input">
              <Text v-if="repeatedPasswordError" as="p" variant="caption" tone="critical" class="register__form-error">
                Пароли не совпадают
              </Text>
            </div>
            <div class="register__form-item">
              <Text as="p" variant="bodySm" class="register__form-label">
                Имя
              </Text>
              <input v-model="name" type="text" placeholder="Введите имя" class="register__form-input">
            </div>
            <div class="register__form-item">
              <Text as="p" variant="bodySm" class="register__form-label">
                Фамилия
              </Text>
              <input v-model="surname" type="text" placeholder="Введите фамилию" class="register__form-input">
            </div>
            <div class="register__form-item">
              <Text as="p" variant="bodySm" class="register__form-label">
                Отчество
              </Text>
              <input v-model="patronymic" type="text" placeholder="Введите отчество" class="register__form-input" @keydown.enter="handleRegister">
            </div>
          </div>
          <div class="register__form-row">
            <button :disabled="!canRegister" type="button" class="register__form-action" @click="handleRegister">
              Зарегистрироваться
            </button>
            <NuxtLink to="/login" class="register__form-back">
              Назад
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

.register {
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
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &-action {
      @include button($full-width: true);
    }

    &-back {
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
