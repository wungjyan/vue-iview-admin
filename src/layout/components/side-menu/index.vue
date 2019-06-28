<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu width="200px" :theme="theme">
      <side-menu-item></side-menu-item>
    </Menu>
  </div>
</template>

<script>
import SideMenuItem from './side-menu-item'
export default {
  components: { SideMenuItem },
  props: {
    theme: {
      type: String,
      default: 'dark'
    }
  },
  data () {
    return {
    }
  },
  computed: {},
  methods: {},
  mounted () { }
}
</script>
<style scoped>
.side-menu-wrapper {
  user-select: none;
}
</style>
