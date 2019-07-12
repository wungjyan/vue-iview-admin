import config from '@/config'
const { homeName } = config

const hasChild = item => {
  return item.children && item.children.length !== 0
}

const hasOneOf = (targetarr, arr) => {
  return targetarr.some(_ => arr.indexOf(_) > -1)
}

const showThisMenuEle = (item, access) => {
  if (item.meta && item.meta.access && item.meta.access.length) {
    if (hasOneOf(item.meta.access, access)) {
      return true
    } else {
      return false
    }
  } else {
    return true
  }
}

// 通过路由列表得到菜单列表
export const getMenuByRouter = (list, access) => {
  let res = []
  list.forEach(item => {
    if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
      let obj = {
        icon: (item.meta && item.meta.icon) || '',
        name: item.name,
        meta: item.meta
      }
      if (
        (hasChild(item) || (item.meta && item.meta.showAlways)) &&
        showThisMenuEle(item, access)
      ) {
        obj.children = getMenuByRouter(item.children, access)
      }
      if (item.meta && item.meta.href) {
        obj.href = item.meta.href
      }
      if (showThisMenuEle(item, access)) {
        res.push(obj)
      }
    }
  })
  return res
}

export const findNodeUpperByClasses = (ele, classes) => {
  let parentNode = ele.parentNode
  if (parentNode) {
    let classList = parentNode.classList
    if (
      classList &&
      classes.every(className => classList.contains(className))
    ) {
      return parentNode
    } else {
      return findNodeUpperByClasses(parentNode, classes)
    }
  }
}

// 获取面包屑列表
export const getBreadCrumbList = route => {
  if (route.name === homeName) {
    return []
  }
  let matched = route.matched
  let arr = []
  matched.forEach(item => {
    let title = (item.meta && item.meta.title) || item.name
    arr.push({
      title
    })
  })
  return arr
}
