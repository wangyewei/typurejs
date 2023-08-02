import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Typurejs",
  description: "native webcomponents typescript framework",
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/intro/' }
    ],

    sidebar: [
      {
        text: 'Getting Start',
        items: [
          { text: 'Introduction', link: '/intro/' },
          { text: 'Quick Start', link: '/intro/start' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  }
})
