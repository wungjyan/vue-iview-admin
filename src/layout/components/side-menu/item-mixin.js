export default {
  props: {
    parentItem: {
      type: Object,
      default: () => {}
    },
    theme: {
      type: String,
      default: 'dark'
    },
    iconSize: {
      type: Number,
      default: 16
    }
  },
  computed: {
    children () {
      return this.parentItem.children
    },
    textColor () {
      return this.theme === 'dark' ? '#fff' : '#495060'
    }
  }
}
