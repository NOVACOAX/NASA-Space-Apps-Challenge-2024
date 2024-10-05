import { createRouter, createWebHistory } from 'vue-router'
import { MetaTag, Metadata } from '@/classes/Metadata'
import HomeView from '@/views/Home/HomeView.vue'
import homeMetadata from '@/views/Home/homeMetadata'
import notFoundMetadata from '@/views/NotFound/notFoundMetadata'

/** @type {import("vue-router").RouteRecordRaw[]} */
const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound/NotFoundView.vue'),
    meta: {
      ...notFoundMetadata,
      headerFontColor: 'black', // Should be either white or black,
    },
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: homeMetadata,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About/About.vue'),
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: () => import('@/views/ContactUs/ContactUsView.vue'),
    meta: import('@/views/ContactUs/contactUsMetadata'),
  },
  {
    path: '/unsubscribe',
    name: 'Unsubscribe',
    component: () => import('@/views/Unsubscribe.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {
  const routeMeta = Metadata.validateMetadata(to.meta)
    ? to.meta
    : to.matched
        .slice()
        .reverse()
        .find((route) => Metadata.validateMetadata(route.meta).isValid).meta

  if (!routeMeta) return

  const { title, charset, metaTags } = routeMeta
  const metadata = new Metadata(title, charset, metaTags ?? [])

  // Change page title
  if (metadata.title) metadata.addTitleToHead()
  else Metadata.addTitleToHead('This Is Me Community')

  // Add meta tags to head
  if (metadata.metaTags.length > 0) MetaTag.addMetaTagsToHead(metadata.metaTags)
})

export default router
