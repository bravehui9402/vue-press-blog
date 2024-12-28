import comp from "E:/刘晖工作目录/vue-press-blog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroText\":\"Passion\",\"tagline\":\"繁星似海 熠熠生辉\",\"actions\":[{\"text\":\"Go!\",\"link\":\"https://blog.csdn.net/passwordgloo\",\"type\":\"primary\"}]},\"headers\":[],\"git\":{\"updatedTime\":1733821867000,\"contributors\":[{\"name\":\"landz\",\"username\":\"landz\",\"email\":\"liuhui_9402@163.com\",\"commits\":1,\"url\":\"https://github.com/landz\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
