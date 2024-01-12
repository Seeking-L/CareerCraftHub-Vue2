import VueRouter from 'vue-router'

import JobList from '../pages/JobList.vue';
import StudyList from '../pages/StudyList.vue';
import LogIn from '../pages/Login.vue'
import MainPage from '../pages/MainPage.vue'
import JobDetail from '../components/JobDetail.vue';
import StatsPage from '../pages/StatsPage.vue';
import PersonalPage from "../pages/PersonalPage.vue";
import TestPage from "../pages/TestPage.vue";
import VideoList from "../pages/VideoList.vue";
import AnalysePage from "../pages/AnalysePage.vue";
import PostList from '../pages/PostList.vue';
import PostDetail from '../pages/PostDetail.vue';
import Resume from "../components/Resume.vue";
import MyPostList from "../components/MyPostList.vue";
import HomePage from "../pages/HomePage.vue";

const routes = [
    {
        path: '/mainpage',
        components: {
            default: MainPage,
            Display: JobList
        },
        children: [
            {
                path:'home',
                components:{
                    Display:HomePage
                }
            },
            {
                path: 'jobs',
                components: {
                    Display: JobList
                }
            },
            {
                path: 'study',
                components: {
                    Display: StudyList
                }
            },
            {
                path: 'jobdetail',
                components: {
                    Display: JobDetail
                }
            },
            {
                path:'stats',
                components:{
                    Display: StatsPage
                }
            },
            {
                path:'personal',
                components:{
                    Display:PersonalPage
                },
                children: [
                    {
                        path:'resume',
                        name:'resume',
                        components:{
                            personalPageContent:Resume
                        }
                    },
                    {
                        path:'myposts',
                        name:'myposts',
                        components:{
                            personalPageContent:MyPostList
                        }
                    }
                ]
            },
            {
                path:'test',
                components:{
                    Display:TestPage
                }
            },
            {
                path:'analyse',
                components:{
                    Display:AnalysePage
                }
            },
            {
                path:'post',
                components:{
                    Display:PostList
                },
            },
            {
                path:'postDetail/:postId',
                name:'postDetail',
                components:{
                    Display:PostDetail,
                }
            },
            {
                path:'lessonVideos/:type',
                name:'lessonVideos',
                components:{
                    Display:VideoList
                }
            },
        ],
        redirect: '/mainpage/home'
    },
    {
        path: '/',
        redirect: '/mainpage'
    },
    {
        path: '/login',
        components: {
            default: LogIn
        }
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})
// 挂载路由导航守卫-登录
router.beforeEach((to, from, next) => {
    // to将要访问的路径
    // from从哪个路径跳转来
    // next函数，表示下一步放行
    // 如果路径是登录页，下一步
    console.log(to.path)
    if (to.path === '/login') return next()
    // 获取token
    const tokenStr = localStorage.getItem('token')
    // 如果没有获取到token，返回登录页
    if (!tokenStr) return next('/login')
    // 如果存在则直接放行
    next()
})

export default router