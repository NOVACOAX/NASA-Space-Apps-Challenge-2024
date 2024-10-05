import './styles/index.scss'
import { updateGlobalOptions, toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(
  updateGlobalOptions({
    autoClose: 2500,
    position: toast.POSITION.TOP_CENTER,
    transition: toast.TRANSITIONS.SLIDE,
    hideProgressBar: true,
  })
)

app.mount('#app')
