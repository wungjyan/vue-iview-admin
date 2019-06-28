import {getMenuByRouter} from '@/libs/util'
import routers from '@/router/routers'
export default {
	getters:{
		menuList(state,getters){
			return getMenuByRouter(routers,['admin'])
		}
	}
}