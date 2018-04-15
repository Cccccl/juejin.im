<template>
  <ul class="entry-list" ref="entry">
    <list-item v-for="(item, index) in entries" :key="index" :item="item">
      <meta-row :item="item"></meta-row>
      <title-row :title="item.title"></title-row>
      <action-row :item="item"></action-row>
    </list-item>
  </ul>
</template>

<script>
import ListItem from '~/components/home/list-item'
import TitleRow from '~/components/home/title-row'
import MetaRow from '~/components/home/meta-row'
import ActionRow from '~/components/home/action-row'

import {getData, getParams} from '~/utils/tool.js'

export default {
  scrollToTop: true,
  components: {
    ListItem,
    TitleRow,
    MetaRow,
    ActionRow
  },
  data () {
    return {
      scrollStatus: true,
      entries: []
    }
  },
  async asyncData ({ store, params }) {
    let res = await getData('entries', store, null, getParams(params))
    return {
      entries: res.d.entrylist
    }
  },
  mounted () {
    this.getFullPageData()
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    getFullPageData () {
      if (document.body.offsetHeight < window.innerHeight) {
        this.loadMoreData().then(res => {
          if (res.s === 1) {
            this.getFullPageData()
          }
        })
      }
    },
    handleScroll () {
      this.timer && clearTimeout(this.timer)
      this.timer = setTimeout(this.loadMoreData, 300)
    },
    loadMoreData () {
      return new Promise((resolve) => {
        let $el = document.documentElement
        let $entry = this.$refs.entry
        let clienHeight = $el.clientHeight
        let style = window.getComputedStyle ? window.getComputedStyle($entry, null) : null || $entry.currentStyle
        let containerHeight = ~~style.height.split('px')[0] + 140
        // 设置【返回顶部】显示隐藏
        document.querySelector('.to-top-btn').classList[$el.scrollTop > 120 ? 'add' : 'remove']('show')
        // 滚动到一定高度，重新加载数据
        console.log(this.$route.params)
        if ($el.scrollTop + clienHeight > containerHeight - 10 && this.scrollStatus) {
          getData('entries', this.$store, this, getParams(this.$route.params)).then(res => {
            resolve(res)
          })
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.entry-list {
  width 100%
  background #fff
}
</style>
