<template lang="pug">
  .main
    .btn.btn-lg.btn-block.btn-info(@click="openPannel") 打开ActionPannel
    br
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
        }]
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
