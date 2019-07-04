<template>
  <div class="header-bar">
    <sider-trigger :collapsed="collapsed" icon="md-menu" @on-change="handleCollpasedChange"></sider-trigger>
  </div>
</template>

<script>
import SiderTrigger from './sider-trigger.vue'
export default {
  name: 'HeaderBar',
  components: { SiderTrigger },
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
  computed: {},
  methods: {
    handleCollpasedChange (state) {
      this.$emit('on-coll-change', state)
    }
  },
  mounted () { }
}
</script>
<style scoped>
</style>
