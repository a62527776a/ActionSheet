<template lang="pug">
  .action-panel-wrapper
    transition(name="fade")
      .oMask(@click="closePannel" v-if="open")
    .action-panel-bar(
      ref="action-panel-bar" 
      :style="{'transform' : 'translateY(' + computedPannelHeight + 'px)'}"
      @transitionend="transitionEnd")
      .action-panel
        .action-item(v-for="(item, idx) in actions" @click="clickHandle(item, idx)")
          .action-icon.iconfont(:class="item.icon")
          .action-text {{item.text}}
      .action-button(@click="closePannel") 取消
</template>

<script>
export default {
  name: 'action-pannel',
  props: {
    actions: {
      type: Array,
      default: () => {
        return [{
          icon: 'icon-article',
          text: '分享'
        }]
      }
    }
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    closePannel: function () {
      this.open = false
      document.removeEventListener('touchmove', this.disableScroll)
    },
    transitionEnd: function () {
      if (!this.open) this.remove()
    },
    clickHandle: function (item, idx) {
      this.$emit('select', {
        item,
        idx
      })
    },
    disableScroll: function (e) {
      e.preventDefault()
    }
  },
  computed: {
    computedPannelHeight: function () {
      if (!this.open) {
        if (this.$refs['action-panel-bar']) {
          return this.$refs['action-panel-bar'].offsetHeight
        }
      } else {
        return 0
      }
    }
  },
  mounted () {
    this.open = true
    document.addEventListener('touchmove', this.disableScroll, { passive: false })
  }
}
</script>

<style lang="sass" scoped>
@mixin flex($flex: 1, $justifyContent: center, $alignItems: center, $flexDirection: row)
  display: flex;
  justify-content: $justifyContent;
  align-items: $alignItems;
  flex: $flex;
  flex-direction: $flexDirection
.fade-enter-active, .fade-leave-active
  transition: opacity .2s;
.fade-enter, .fade-leave-to
  opacity: 0
$supperColor: #eee;
.action-panel-wrapper
  .oMask
    position: fixed
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 98
    background: rgba(0,0,0,0.70);
  .action-panel-bar
    position: fixed
    bottom: 0
    transition: all .3s;
    z-index: 99
  .action-panel
    border-radius: 3px 3px 0 0
    width: 100vw;
    background: white;
    z-index: 99
    padding: 30px 15px 15px
    @include flex($justifyContent: flex-start)
    flex-wrap: wrap;
    .action-item
      @include flex($flex: none, $flexDirection: column)
      color: #555;
      width: calc((100vw - 30px) / 6)
      margin-bottom: 12px;
      .action-icon
        font-size: 30px
        margin-bottom: 6px
      .action-text
        font-size: 12px;
        letter-spacing: 0;
        text-align: center;
        line-height: 12px;
    .action-item:nth-last-child(1)
      margin-right: 0
  .action-button:active
    background: $supperColor
  .action-button
    height: 53px
    width: 100vw
    background: white;
    @include flex()
    font-size: 15px;
    border-top: 1px solid #E6E7E8
    color: #919699;
    letter-spacing: 0;
    text-align: center;
    line-height: 15px;
</style>
