import ActionPannel from './action-pannel.vue'
import CreateAPI from 'vue-create-api'

const install = (Vue) => {
  Vue.use(CreateAPI)
  Vue.createAPI(ActionPannel, true)
}

export default {
  install
}
