import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons"
import { IoAdd, CoMinus, RiMenuUnfoldLine } from "oh-vue-icons/icons"

addIcons(IoAdd, CoMinus, RiMenuUnfoldLine)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.mount('#app')
