# Vue ActionPannel

##### ❤❤❤❤ a beautiful Action Pannel ❤❤❤❤

<p align="center">
  <a href="https://www.npmjs.com/package/vue-action-pannel">
		<img src="https://img.shields.io/npm/v/vue-action-pannel.svg" alt="Version">
	</a>
	<!-- <img src="https://img.shields.io/badge/min+gzip-5.8_kB-blue.svg" alt="5.8 kB min+gzip"> -->
  <a href="https://github.com/a62527776a/vue-action-pannel/blob/master/LICENSE"><img
            src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="License"></a>
  <br>
</p>



![预览](https://upload-images.jianshu.io/upload_images/5738345-81fb96441c718133.gif?imageMogr2/auto-orient/strip)

**[live demo](https://dscsdoj.top/public/vue-action-pannel/index.html)**

#### What's this
###### 基于 vue-create-api 的活动面板 用于展示不同的操作接口

## Installation and use

```
$ yarn add vue-action-pannel
or
$ npm install vue-action-pannel --save
```

```
import App from './App.vue'
import ActionPannel from 'vue-action-pannel'
import Vue from 'vue'

Vue.use(ActionPannel)

new Vue({
  render: h => h(App)
}).$mount('#app')

```

```
data () {
  return {
    // 初始化以下格式的list
    actions: [{
      icon: 'icon-article', // 引入iconfont的类名作为展示的icon
      text: '分享' // 引入文字作为标题
    }, {
      icon: 'icon-xiazai46',
      text: '客服'
    }, {
      icon: 'icon-yidong',
      text: '移动'
    }]
  }
}

methods: {
  // 得益于vue-create-api
  // 我们可以以函数的形式创建一个action-pannel
  openPannel: function () {
    let actionPannel = this.$createActionPannel({ // 函数式调用 将返回一个Vue实例
      $props: {
        actions: this.actions // 传入列表项
      }
    }).$on('select', (e) => { // 暴露select事件
      window.alert(`click: ${e.idx}, params: ${JSON.stringify(e.item)}`) // 参数包含下标以及传入的菜单项
      actionPannel.closePannel() // 完成操作后一定要使用closePannel函数来关闭这个面板哦
    })
  },
}
```