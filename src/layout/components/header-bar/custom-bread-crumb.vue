<template>
  <div class="custom-bread-crumb">
    <Breadcrumb>
      <BreadcrumbItem to="/">首页</BreadcrumbItem>
      <template v-if="list.length">
        <BreadcrumbItem v-for="(item,index) in list" :key="index">{{item.title}}</BreadcrumbItem>
      </template>
    </Breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'CustomBreadCrumb',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {},
  methods: {},
  mounted () { }
}
</script>
<style scoped>
.custom-bread-crumb {
  display: inline-block;
  vertical-align: top;
  margin-left: 20px;
}
</style>
