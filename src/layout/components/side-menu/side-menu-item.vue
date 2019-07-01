<template>
  <Submenu :name="parentItem.name">
    <template slot="title">
      {{showTitle(parentItem)}}
    </template>
    <template v-for="item in children">
      <template v-if="item.children && item.children.length === 1">
        <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
        <menu-item v-else :name="getNameOrHref(item, true)" :key="`menu-${item.children[0].name}`">
          <span>{{ showTitle(item.children[0]) }}</span>
        </menu-item>
      </template>
      <template v-else>
        <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
        <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`">
          <span>{{ showTitle(item) }}</span>
        </menu-item>
      </template>
    </template>
  </Submenu>
</template>

<script>
import mixin from './mixin.js'
export default {
  mixins: [mixin],
  props: {
    parentItem: {
      type: Object,
      default: () => { }
    }
  },
  components: {},
  data () {
    return {
    }
  },
  computed: {
    children () {
      return this.parentItem.children
    }
  },
  methods: {},
  mounted () { }
}
</script>
<style scoped>
</style>
