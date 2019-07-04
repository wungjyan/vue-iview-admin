<template>
  <Layout style="height: 100%" class="layout-wrapper">
    <Sider :width="180" hide-trigger collapsible v-model="collapsed">
      <side-menu :menu-list="menuList" theme="dark" :active-name="$route.name" @on-select="turnToPage"></side-menu>
    </Sider>
    <Layout>
      <Header class="header-con">头部</Header>
      <Content>
        <router-view />
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import SideMenu from './components/side-menu'
export default {
  name: 'layout',
  components: { SideMenu },
  data () {
    return {
      collapsed: false
    }
  },
  computed: {
    menuList () {
      return this.$store.getters.menuList
    }
  },
  methods: {
    turnToPage (name) {
      // 路由名带有href时直接跳转外部链接
      if (name.indexOf('isTurnByHref_') > -1) {
        window.open(name.split('_')[1])
        return
      }
      this.$router.push({ name })
    }
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
