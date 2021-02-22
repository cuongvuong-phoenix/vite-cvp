import { createApp } from 'vue';

import App from './App.vue';
import { router } from './routes';
import { store, key } from './store';
import './assets/styles/styles.css';

const app = createApp(App);

app.use(router).use(store, key).mount('#app');
