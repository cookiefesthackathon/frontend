const appConfig = useAppConfig()

const authEmail = ref(localStorage.getItem('authEmail') ?? null)

function logIn(email: string, password: string) {
  $fetch(`/auh?mail=${email}&password=${password}`, {
    baseURL: appConfig.apiUrl,
  }).then((data) => {
    const typedData = data as { ok: boolean, user_id: string }
    authEmail.value = email

    if (typedData.ok) {
      localStorage.setItem('authEmail', email)
      localStorage.setItem('userId', typedData.user_id)
      location.href = '/'
    }
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
    console.log(data)
    const typedData = data as { ok: boolean, id: string }
    authEmail.value = email

    if (typedData.ok) {
      localStorage.setItem('authEmail', email)
      localStorage.setItem('userId', typedData.id)
      location.href = '/'
    }

    return typedData
  })
}

function logOut() {
  authEmail.value = null
  localStorage.removeItem('authEmail')
  localStorage.removeItem('userId')
  location.reload()
}

export const useAuth = () => {
  return {
    logIn,
    register,
    logOut,
    authEmail,
  }
}
