import Vue from 'vue';
import App from './components/App';
import axiosPlugin from './plugins/axios';

Vue.config.productionTip = false;
Vue.use(axiosPlugin);

new Vue({
	el: '#app',
	components: { App },
	template: '<app />'
});
