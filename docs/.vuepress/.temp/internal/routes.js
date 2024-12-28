export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/刘晖工作目录/vue-press-blog2/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/spring/", { loader: () => import(/* webpackChunkName: "spring_index.html" */"E:/刘晖工作目录/vue-press-blog2/docs/.vuepress/.temp/pages/spring/index.html.js"), meta: {"title":""} }],
  ["/spring/Spring%E4%BA%8B%E5%8A%A1.html", { loader: () => import(/* webpackChunkName: "spring_Spring事务.html" */"E:/刘晖工作目录/vue-press-blog2/docs/.vuepress/.temp/pages/spring/Spring事务.html.js"), meta: {"title":""} }],
  ["/spring/Spring%E5%B8%B8%E7%94%A8%E6%B3%A8%E8%A7%A3.html", { loader: () => import(/* webpackChunkName: "spring_Spring常用注解.html" */"E:/刘晖工作目录/vue-press-blog2/docs/.vuepress/.temp/pages/spring/Spring常用注解.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/刘晖工作目录/vue-press-blog2/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
