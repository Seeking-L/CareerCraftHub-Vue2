import VueRouter from 'vue-router'

import JobList from '../pages/JobList.vue';
import StudyList from '../pages/StudyList.vue';
import LogIn from '../pages/Login.vue'
import MainPage from '../pages/MainPage.vue'
import JobDetail from '../components/JobDetail.vue';
import Home from '../pages/Home.vue';

const routes = [
    {
        path: '/mainpage',
        components: {
            default: MainPage,
            Display: JobList
        },
        children: [
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
                path:'home',
                components:{
                    Display: Home
                }
            }
        ],
        redirect: '/mainpage/jobs'
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
    routes
})
// 挂载路由导航守卫-登录
router.beforeEach((to, from, next) => {
    // to将要访问的路径
    // from从哪个路径跳转来
    // next函数，表示下一步放行
    // 如果路径是登录页，下一步
    if (to.path === '/login') return next()
    if(to.path === '/mainpage/home') return next()//主页不用登录
    // 获取token
    const tokenStr = localStorage.getItem('token')
    // 如果没有获取到token，返回登录页
    if (!tokenStr) return next('/login')
    // 如果存在则直接放行
    next()
})

export default router