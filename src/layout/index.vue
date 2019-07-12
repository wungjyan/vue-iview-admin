<template>
  <Layout style="height: 100%" class="layout-wrapper">
    <Sider :width="180" hide-trigger collapsible v-model="collapsed">
      <side-menu :menu-list="menuList" theme="dark" :active-name="$route.name" :collapsed="collapsed" @on-select="turnToPage">
        <div class="logo-con" v-if="config.logo.show">
          <img v-show="!collapsed" :src="config.logo.maxLogo" key="max-logo" />
          <img v-show="collapsed" :src="config.logo.minLogo" key="min-logo" />
        </div>
      </side-menu>
    </Sider>
    <Layout>
      <Header class="header-con">
        <header-bar :collapsed="collapsed" @on-coll-change="handleCollapsedChange" />
      </Header>
      <Content>
        <transition name="fade-transform" mode="out-in">
          <router-view />
        </transition>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import SideMenu from './components/side-menu'
import HeaderBar from './components/header-bar'
import config from '@/config'
import { mapMutations } from 'vuex'
export default {
  name: 'layout',
  components: { SideMenu, HeaderBar },
  data () {
    return {
      collapsed: false,
      config
    }
  },
  computed: {
    menuList () {
      return this.$store.getters.menuList
    }
  },
  methods: {
    ...mapMutations([
      'setBreadCrumb'
    ]),
    turnToPage (name) {
      // 路由名带有href时直接跳转外部链接
      if (name.indexOf('isTurnByHref_') > -1) {
        window.open(name.split('_')[1])
        return
      }
      this.$router.push({ name })
    },
    handleCollapsedChange (state) {
      this.collapsed = state
    }
  },
  watch: {
    '$route' (newRoute) {
      this.setBreadCrumb(newRoute)
    }
  },
  mounted () {
    console.log(config)
  }
}
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
