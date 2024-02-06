import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router';
import store from './store'; // Vuex ストアをインポート
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; // axios をインポート

// フォントの読み込み
loadFonts();

// アプリケーションの作成
const app = createApp(App);

// axios を Vue インスタンスに統合
app.config.globalProperties.$axios = axios;

// Vuex ストアの使用
app.use(store);

// ルーターの使用
app.use(router);

// Vuetifyの使用
app.use(vuetify);

// アプリケーションのマウント
app.mount('#app');
