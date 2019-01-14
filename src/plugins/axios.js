import axios from 'axios';

class AxiosPlugin {

	install(Vue) {
		Vue.prototype.$http = axios.create();
	}

}

export default new AxiosPlugin();
