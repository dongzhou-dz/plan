import Vue from 'vue'
import modelBg from './bg.vue'
import modelFrame from './popWin.vue'

const popBox = Vue.extend(modelFrame);


const plat = {
	alert(opt){

	},
	model(opt){
		let models = new popBox({
			el: document.createElement('div')
		});
		
		Vue.component('my-models',models)
		
	}
};



export default {
	/**
	 * 
	 * @param {*} Vue 
	 * @param {Object} options [必填]
	 */
	install(Vue){
		Vue.prototype.$model = function(options){
			var optType =  Object.prototype.toString.call(options);
			if(optType !== '[object Object]'){
				console.error('options数据类型错误')
			}
			var defaultObj = {
				type: 'alert',
				msg: '',
			};
			var opt = Object.assign(defaultObj,options);

			switch(opt.type){
				case 'alert':

					break;
				case 'model':
					console.log('model')
					plat.model(options)
					break;
				default:
					console.error('弹窗类型错误，请传入‘alert’or‘model’');
					break;
			}
		}
	}
}