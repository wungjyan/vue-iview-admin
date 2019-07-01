<template>
  <Layout style="height: 100%" class="app-wrapper">
    <Sider>
      <side-menu :menu-list="menuList" theme="dark" :active-name="$route.name" @on-select="turnToPage"></side-menu>
    </Sider>
    <Layout>
      <Header>头部</Header>
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
    }
  },
  computed: {
    menuList () {
      return this.$store.getters.menuList
    }
  },
  methods: {
    turnToPage (name) {
      this.$router.push({ name })
    }
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>
<style scoped>
</style>
