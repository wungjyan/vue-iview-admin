<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu v-show="!collapsed" width="auto" :theme="theme" :active-name="activeName" :accordion="accordion" @on-select="handleSelect">
      <template v-for="item in menuList">
        <!-- 有一个子路由的 -->
        <template v-if="item.children && item.children.length===1">
          <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
          <menu-item v-else :name="getNameOrHref(item, true)" :key="`menu-${item.children[0].name}`">
            <common-icon :type="item.children[0].icon || ''" />
            <span>{{showTitle(item.children[0])}}</span>
          </menu-item>
        </template>
        <!-- 无子路由 或 不止一个子路由 -->
        <template v-else>
          <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
          <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`">
            <common-icon :type="item.icon || ''" />
            <span>{{ showTitle(item) }}</span>
          </menu-item>
        </template>
      </template>
    </Menu>
    <!-- 当侧边栏收缩时，展示此菜单 -->
    <div class="menu-collapsed" v-show="collapsed">
      <template v-for="item in menuList">
        <collapsed-menu v-if="item.children && item.children.length > 1" @on-click="handleSelect" hide-title :root-icon-size="rootIconSize" :theme="theme" :parent-item="item" :key="`drop-menu-${item.name}`"></collapsed-menu>
        <Tooltip transfer v-else :content="showTitle(item.children && item.children[0]?item.children[0]:item)" placement="right" :key="`drop-menu-${item.name}`">
          <a @click="handleSelect(getNameOrHref(item, true))" class="drop-menu-a" :style="{textAlign: 'center'}">
            <common-icon :size="rootIconSize" :color="textColor" :type="item.icon || (item.children && item.children[0].icon)" /></a>
        </Tooltip>
      </template>
    </div>
  </div>
</template>

<script>
import SideMenuItem from './side-menu-item'
import CollapsedMenu from './collapsed-menu.vue'
import mixin from './mixin.js'
export default {
  mixins: [mixin],
  components: { SideMenuItem, CollapsedMenu },
  props: {
    menuList: {
      type: Array,
      default: () => []
    },
    theme: {
      type: String,
      default: 'dark'
    },
    rootIconSize: {
      type: Number,
      default: 20
    },
    iconSize: {
      type: Number,
      default: 16
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
    },
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
    textColor () {
      return this.theme === 'dark' ? '#fff' : '#495060'
    }
  },
  methods: {
    handleSelect (name) {
      this.$emit('on-select', name)
    }
  },
  mounted () { }
}
</script>
<style lang="less">
@import "./index.less";
</style>
