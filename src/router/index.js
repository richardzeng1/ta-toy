import Vue from 'vue'
import Router from 'vue-router'
import TAs from '@/components/component-tas'
import Courses from '@/components/component-courses'
import Sections from '@/components/component-sections'

Vue.use(Router)

export default new Router({
  routes: [
      { path: "/", component: Courses },
      { path: "/course/:course/ta/:ta", name: "section", component: Sections },
      { path: "/course/:course", name: "TAs", component: TAs },
      { path: "/*", component: Courses}
  ],
  mode:'history'
})
