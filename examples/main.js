import { createApp } from 'vue'
import App from './App.vue'
import JsonSchemaEditor from '../packages/index'
import { Modal} from 'ant-design-vue'
createApp(App).use(JsonSchemaEditor).use(Modal).mount('#app')
