import Menu from '@/components/Menu.vue'
import Informacion from '@/components/Informacion.vue'
import Config from '@/components/Config.vue'
import Cuenta from '@/components/Cuenta.vue'

const routes = [
  { path: '/', component: Menu, name: 'menu'},
  { path: '/informacion', component: Informacion, name: 'informacion'},
  { path: '/config', component: Config, name: 'config'},
  { path: '/Cuenta', component: Cuenta, name: 'cuenta'}
]

export default routes