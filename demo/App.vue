<template lang="pug">
  .main
    .btn.btn-lg.btn-block.btn-info(@click="openPannel") 打开单行ActionPannel
    br
    .btn.btn-lg.btn-block.btn-info(@click="openPannel2") 打开多行ActionPannel
    br
    pre 
      div data () {
      div   return {
      div     actions: [{
      div       icon: 'icon-article',
      div       text: '分享'
      div     }, {
      div       icon: 'icon-xiazai46',
      div       text: '客服'
      div     }, {
      div       icon: 'icon-yidong',
      div       text: '移动'
      div     }]
      div   }
      div }

      div let actionPannel = this.$createActionPannel({ // 函数式调用
      div   $props: {
      div     actions: this.actions // 传入列表项
      div   }
      div }).$on('select', e => { // 暴露select事件
      div   window.alert(`click: ${e.idx}, params: ${JSON.stringify(e.item)}`) // 参数包含下标以及传入的菜单项
      div   actionPannel.closePannel() // 选择后可选关闭
      div })
    br
    <a href="https://github.com/a62527776a/action-pannel" target="_blank" class="btn btn-lg btn-block btn-sm btn-info">View on GitHub</a>
</template>

<script>
  export default {
    data () {
      return {
        actions: [{
          icon: 'icon-article',
          text: '分享'
        }, {
          icon: 'icon-xiazai46',
          text: '客服'
        }, {
          icon: 'icon-yidong',
          text: '移动'
        }],
        actions2: [{
          icon: 'icon-article',
          text: '分享'
        }, {
          icon: 'icon-xiazai46',
          text: '客服'
        }, {
          icon: 'icon-yidong',
          text: '移动'
        }, {
          icon: 'icon-article',
          text: '分享'
        }, {
          icon: 'icon-xiazai46',
          text: '客服'
        }, {
          icon: 'icon-yidong',
          text: '移动'
        }, {
          icon: 'icon-article',
          text: '分享'
        }, {
          icon: 'icon-xiazai46',
          text: '客服'
        }, {
          icon: 'icon-yidong',
          text: '移动'
        }],
      }
    },
    methods: {
      openPannel: function () {
        let actionPannel = this.$createActionPannel({
          $props: {
            actions: this.actions
          }
        }).$on('select', (e) => {
          window.alert(`click: ${e.idx}, params: ${JSON.stringify(e.item)}`)
          actionPannel.closePannel()
        })
      },
      openPannel2: function () {
        let actionPannel = this.$createActionPannel({
          $props: {
            actions: this.actions2
          }
        }).$on('select', (e) => {
          window.alert(`click: ${e.idx}, params: ${JSON.stringify(e.item)}`)
          actionPannel.closePannel()
        })
      }
    },
    mounted () {
    }
  }
</script>

<style lang="sass" scoped>
.main
  padding: 21px;
</style>
