<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu width="200px" :theme="theme" :active-name="activeName" :accordion="accordion" @on-select="handleSelect">
      <template v-for="item in menuList">
        <!-- 有一个子路由的 -->
        <template v-if="item.children && item.children.length===1">
          <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
          <menu-item v-else :name="getNameOrHref(item, true)" :key="`menu-${item.children[0].name}`">
            <span>{{showTitle(item.children[0])}}</span>
          </menu-item>
        </template>
        <!-- 无子路由 或 不止一个子路由 -->
        <template v-else>
          <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
          <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`">
            <span>{{ showTitle(item) }}</span>
          </menu-item>
        </template>
      </template>
    </Menu>
  </div>
</template>

<script>
import SideMenuItem from './side-menu-item'
import mixin from './mixin.js'
export default {
  mixins: [mixin],
  components: { SideMenuItem },
  props: {
    menuList: {
      type: Array,
      default: () => []
    },
    theme: {
      type: String,
      default: 'dark'
    },
    activeName: {
      type: String,
      default: ''
    },
    openNames: {
      type: Array,
      default: () => []
    },
    accordion: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    handleSelect (name) {
      this.$emit('on-select', name)
    }
  },
  mounted () { }
}
</script>
<style scoped>
.side-menu-wrapper {
  user-select: none;
}
</style>
