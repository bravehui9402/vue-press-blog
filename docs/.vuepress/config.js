import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
    base: '/',
    head: [['link', {rel: 'icon', href: '/images/logo.png'}]],
    lang: 'zh-CN',
    title: 'Boris',
    description: '允许一切发生！',
    theme: defaultTheme({
        home: '/',
        logo: 'https://vuejs.press/images/hero.png',
        lastUpdated: false,
        contributors: false,
        prev: '上一篇',
        next: '下一篇',
        // 顶部导航栏
        navbar: [
            {text: "首页", link: "/"},
            {text: "Spring", link: "/spring/index.md"},
            {text: '关于', link: '/about'}
        ],
        sidebar: [
            {
                text: 'Springs事务',
                collapsible: true,
                link: '/spring/Spring事务.md'
            },
            {
                text: 'Spring常用注解',
                collapsible: true,
                link: '/spring/Spring常用注解.md'
            }
        ]


    }),
    bundler: viteBundler(),
})
