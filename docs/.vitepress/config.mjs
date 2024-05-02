import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "雨云群乐子收集处",
  description: "收集一些雨云群里面的乐子",
  head: [['link', { rel: 'icon', href: 'https://video.ick.moe/rainyun-logo.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🏠主页', link: '/' },
      { text: '😄看乐子', link: '/lezi' }
    ],

    sidebar: [
      {
        text: '乐子大全',
        link: '/lezi',
        items: [
          { text: 'CF没有CNAME哥', link: '/lezi/cf-without-cname' },
          { text: '半夜破防哥', link: '/lezi/i-lost-my-eye' },
          {text: 'PVP大蛇', link: '/lezi/pvp-da-she' },
        ]
      },
      {
        text: '建站原因',
        link: '/reason',
      },
      {
        text: '添加乐子',
        link: '/add',
      }
    ],
    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
