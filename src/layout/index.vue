<template>
  <Layout style="height: 100%" class="app-wrapper">
    <Sider>
      <side-menu></side-menu>
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
  computed: {},
  methods: {},
  mounted () {

  }
}
</script>
<style scoped>
</style>
