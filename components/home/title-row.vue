<template>
  <div class="info-row title-row">
    <span class="title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'TitleRow',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="stylus" scoped>
.title-row {
  margin .5rem 0 .8rem
  .title {
    display inline-block
    width 100%
    font-size 1.4rem
    font-weight 600
    line-height 1.2
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    color #2e3135
    cursor pointer
    &:hover {
      color #007fff
    }
  }
}
@media (max-width 600px) {
  .title-row {
    .title {
      font-size 1.2rem
    } 
  }
}
</style>