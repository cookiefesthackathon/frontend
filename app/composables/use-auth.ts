const appConfig = useAppConfig()

const router = useRouter()

const authEmail = ref(localStorage.getItem('authEmail') ?? null)

function logIn(email: string, password: string) {
  $fetch(`/auth?mail=${email}&password=${password}`, {
    baseURL: appConfig.apiUrl,
  }).then((data) => {
    authEmail.value = email
    localStorage.setItem('authEmail', email)
    router.push('/')
  })
}

interface RegisterData {
  email: string
  password: string
  name: string
  surname: string
  patronymic: string
}

function register({
  email, password, name, surname, patronymic,
}: RegisterData) {
  $fetch(`/users`, {
    method: 'POST',
    baseURL: appConfig.apiUrl,
    body: {
      mail: email,
      password,
      name,
      surname,
      patname: patronymic,
    },
  }).then((data) => {
    authEmail.value = email
    localStorage.setItem('authEmail', email)
    router.push('/')
  })
}

function logOut() {
  authEmail.value = null
  localStorage.removeItem('authEmail')
}

export const useAuth = () => {
  return {
    logIn,
    register,
    logOut,
    authEmail,
  }
}
