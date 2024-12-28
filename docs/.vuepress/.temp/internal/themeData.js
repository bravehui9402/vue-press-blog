export const themeData = JSON.parse("{\"home\":\"/\",\"logo\":\"https://vuejs.press/images/hero.png\",\"lastUpdated\":false,\"contributors\":false,\"prev\":\"上一篇\",\"next\":\"下一篇\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"Spring\",\"link\":\"/spring/index.md\"},{\"text\":\"关于\",\"link\":\"/about\"}],\"sidebar\":[{\"text\":\"Springs事务\",\"collapsible\":true,\"link\":\"/spring/Spring事务.md\"},{\"text\":\"Spring常用注解\",\"collapsible\":true,\"link\":\"/spring/Spring常用注解.md\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdatedText\":\"Last Updated\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
