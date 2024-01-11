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
        state.pageNum = null
        state.searchBoxContent=null
        localStorage.removeItem('resume')
        state.resume = null
        localStorage.removeItem('resumeAnalyse')
        state.resumeAnalyse = null
        localStorage.removeItem('careerGuidance')
        state.careerGuidance = null
        localStorage.removeItem('learningGuidance')
        state.learningGuidance = null
    },
    setPageNum(state, pageNum) {
        state.pageNum = pageNum
    },
    setSearchBoxContent(state, searchBoxContent) {
        state.searchBoxContent = searchBoxContent
    },
    setResume(state, resume) {
        state.resume = resume
        localStorage.setItem('resume', JSON.stringify(resume))
    },
    setResumeAnalyse(state,value){
        state.resumeAnalyse=value
        localStorage.setItem('resumeAnalyse',value)
    },
    setCareerGuidance(state,value){
        state.careerGuidance=value
        localStorage.setItem('careerGuidance',value)
    },
    setLearningGuidance(state,value){
        state.learningGuidance=value
        localStorage.setItem('learningGuidance',value)
    }
}

//准备state---用于存储数据
const state = {
    user: localStorage.getItem('user') ? localStorage.getItem('user') : null,
    //若localSorage存在token，将值赋给Vuex.state.token
    token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
    //jobList中决定展示哪一页
    pageNum: 1,
    searchBoxContent: "",
    IP: "localhost",
    resume: localStorage.getItem('resume') ? localStorage.getItem('resume') : null,
    //简历分析
    resumeAnalyse: localStorage.getItem('resumeAnalyse') ? localStorage.getItem('resumeAnalyse') : null,
    careerGuidance: localStorage.getItem('careerGuidance') ? localStorage.getItem('careerGuidance') : null,
    learningGuidance: localStorage.getItem('learningGuidance') ? localStorage.getItem('learningGuidance') : null,
}

const getters = {

}

export default new vuex.Store({
    actions,
    mutations,
    state,
    getters
})