// import React from 'react'
import BasicLayout from '@/layouts/BasicLayout'
import Dashboard from '@/pages/Dashboard'
import Login from '@/pages/Login'
import Question from '@/pages/Question'

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
    redirect: '/cream-play-h5/question',
  },
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '/cream-play-h5/question',
    component: Question,
    exact: true
  },
  {
    path: '/question',
    component: Question,
    exact: true
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
