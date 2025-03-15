import Button from '@x-ui/components/button'
import Radio from '@x-ui/components/radio'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(Button)
app.use(Radio)
app.mount('#app')
