// import React from 'react'
// import BasicLayout from '@/layouts/BasicLayout'
import Dashboard from '@/pages/Dashboard'
// import Login from '@/pages/Login'
import Question from '@/pages/Question'
import Custom from '@/pages/Custom'

export const ROUTE = {
  LOGIN: '/login',
  QUESTION: '/question',
  DASHBOARD: '/dashboard',
  // USER: '/user/:userId',
}

const routerConfig = [
  {
    path: '/',
    exact: true,
    redirect: '/question',
  },
  {
    path: '/cream-play-h5',
    exact: true,
    redirect: '/dashboard',
  },
  // {
  //   path: '/login',
  //   component: Login,
  //   exact: true
  // },
  {
    path: '/question',
    component: Question,
    exact: true
  },
  {
    path: '/custom',
    component: Custom,
    exact: true
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    exact: true, 
    authority: [], 
    component: Dashboard
  },
  // {
  //   path: '/',
  //   component: BasicLayout,
  //   authority: [], // 'admin', 'user'
  //   routes: [
  //     { path: '/dashboard', name: 'dashboard', exact: true, authority: ['admin', 'user'], component: Dashboard },
  //   ]
  // },
]

export default routerConfig
