import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

//准备action---用于相应组件中的动作
const actions = {}

//准备mutations---用于操作数据（state）
const mutations = {
    setUser(state, user) {
        state.user = user
        localStorage.setItem('user', JSON.stringify(user))
    },
    setToken(state, token) {
        localStorage.setItem('token', token)
        state.token = token
    },
    logout(state) {
        localStorage.removeItem('token')
        state.token = null
        localStorage.removeItem('user')
        state.user = null
    },
    setPageNum(state,pageNum){
        state.pageNum=pageNum
    },
    setSearchBoxContent(state,searchBoxContent){
        state.searchBoxContent=searchBoxContent
    }
}

//准备state---用于存储数据
const state = {
    user: localStorage.getItem('user') ? localStorage.getItem('user') : null,
    //若localSorage存在token，将值赋给Vuex.state.token
    token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
    //jobList中决定展示哪一页
    pageNum:1,
    searchBoxContent:"",
    IP:"localhost"
}

const getters = {

}

export default new vuex.Store({
    actions,
    mutations,
    state,
    getters
})