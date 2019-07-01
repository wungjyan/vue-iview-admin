<template>
  <component :is="iconType" :type="iconName" :color="iconColor" :size="iconSize"></component>
</template>

<script>
import Icons from '../icons'
export default {
  components: { Icons },
  props: {
    type: {
      type: String,
      required: true
    },
    color: String,
    size: Number
  },
  computed: {
    // icon组件类型，以下划线开头的是自定义的图标，否则是iview图标
    iconType () {
      return this.type.indexOf('_') === 0 ? 'Icons' : 'Icon'
    },
    // 图标名称，自定义图标需去掉下划线
    iconName () {
      return this.iconType === 'Icons' ? this.getCustomIconName(this.type) : this.type
    },
    iconColor () {
      return this.color || ''
    },
    iconSize () {
      return this.size || undefined
    }
  },
  methods: {
    getCustomIconName (iconName) {
      return iconName.slice(1)
    }
  }
}
</script>
