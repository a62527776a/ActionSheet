import ActionPannel from './action-pannel.vue'
import CreateAPI from 'vue-create-api'

export default (Vue) => {
  Vue.use(CreateAPI)
  Vue.createAPI(ActionPannel, true)
}
