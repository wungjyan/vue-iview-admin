<template>
  <div @click="handleChange" :class="['sider-trigger-div',collapsed?'collapsed':'']">
    <Icon :type="icon" :size="size" />
  </div>
</template>

<script>
export default {
  name: 'SiderTrigger',
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'md-menu'
    },
    size: {
      type: Number,
      default: 26
    }
  },
  data () {
    return {
    }
  },
  computed: {},
  methods: {
    handleChange () {
      this.$emit('on-change', !this.collapsed)
    }
  },
  mounted () { }
}
</script>
<style lang="less" scoped>
.trans {
  transition: transform 0.2s ease;
}
.sider-trigger-div {
  padding: 6px;
  width: 40px;
  height: 40px;
  text-align: center;
  color: #5c6b77;
  margin-top: 12px;
  i {
    .trans;
    vertical-align: top;
  }
  &.collapsed i {
    transform: rotateZ(90deg);
    .trans;
  }
}
</style>
