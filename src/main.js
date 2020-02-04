// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
let Base64 = require('js-base64').Base64;
Vue.prototype.key = [
  {key:'A',value:'坤'},{key:'B',value:'剥'},{key:'C',value:'比'},{key:'D',value:'观'},
  {key:'E',value:'豫'},{key:'F',value:'晋'},{key:'G',value:'萃'},{key:'H',value:'否'},
  {key:'I',value:'謙'},{key:'J',value:'山'},{key:'K',value:'蹇'},{key:'L',value:'漸'},
  {key:'M',value:'过'},{key:'N',value:'旅'},{key:'O',value:'咸'},{key:'P',value:'遯'},
  {key:'Q',value:'師'},{key:'R',value:'蒙'},{key:'S',value:'坎'},{key:'T',value:'渙'},
  {key:'U',value:'解'},{key:'V',value:'济'},{key:'W',value:'困'},{key:'X',value:'訟'},
  {key:'Y',value:'升'},{key:'Z',value:'蠱'},{key:'a',value:'井'},{key:'b',value:'巽'},
  {key:'c',value:'恒'},{key:'d',value:'鼎'},{key:'e',value:'過'},{key:'f',value:'姤'},
  {key:'g',value:'復'},{key:'h',value:'頤'},{key:'i',value:'屯'},{key:'j',value:'益'},
  {key:'k',value:'震'},{key:'l',value:'噬'},{key:'m',value:'随'},{key:'n',value:'妄'},
  {key:'o',value:'夷'},{key:'p',value:'賁'},{key:'q',value:'濟'},{key:'r',value:'家'},
  {key:'s',value:'豊'},{key:'t',value:'離'},{key:'u',value:'革'},{key:'v',value:'同'},
  {key:'w',value:'臨'},{key:'x',value:'損'},{key:'y',value:'節'},{key:'z',value:'孚'},
  {key:'1',value:'归'},{key:'2',value:'睽'},{key:'3',value:'兌'},{key:'4',value:'履'},
  {key:'5',value:'泰'},{key:'6',value:'需'},{key:'7',value:'壮'},{key:'8',value:'有'},
  {key:'9',value:'夬'},{key:'0',value:'乾'}
];

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
