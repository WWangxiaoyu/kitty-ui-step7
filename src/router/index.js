import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import NotFound from '@/views/404'
import Home from '@/views/Home'
import Intro from '@/views/Intro'
import User from '@/views/SysMng/User'
import Dept from '@/views/SysMng/Dept'
import Role from '@/views/SysMng/Role'
import Menu from '@/views/SysMng/Menu'
import Log from '@/views/SysMng/Log'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home,
      children: [
        { path: '', component: Intro, name: '系统介绍' },
        { path: '/user', component: User, name: '用户管理' },
        { path: '/dept', component: Dept, name: '机构管理' },
        { path: '/role', component: Role, name: '角色管理' },
        { path: '/menu', component: Menu, name: '菜单管理' },
        { path: '/log', component: Log, name: '日志管理' }
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/404',
      name: 'notFound',
      component: NotFound
    }
  ]
})

//导航守卫
router.beforeEach((to, from, next) => {
  //在登录界面成功登录后，会把用户信息保存在session中
  //存在时间为会话生命周期，页面关闭即失效
  let user = sessionStorage.getItem('user');
  if (to.path == '/login') {
    //如果访问的是登录界面，且用户会话信息存在，代表已登录过，则跳转到主页
    if(user) {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if(!user) {
      next({ path: '/login' })
    } else {
      next()
    }
  }
})

export default router