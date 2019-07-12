<template>
  <div class="header-bar">
    <sider-trigger :collapsed="collapsed" icon="md-menu" @on-change="handleCollpasedChange"></sider-trigger>
    <custom-bread-crumb :list="breadCrumbList" />
  </div>
</template>

<script>
import SiderTrigger from './sider-trigger.vue'
import CustomBreadCrumb from './custom-bread-crumb'
export default {
  name: 'HeaderBar',
  components: { SiderTrigger, CustomBreadCrumb },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  computed: {
    breadCrumbList () {
      return this.$store.state.app.breadCrumbList
    }
  },
  methods: {
    handleCollpasedChange (state) {
      this.$emit('on-coll-change', state)
    }
  },
  mounted () { }
}
</script>
<style scoped>
.header-bar {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
