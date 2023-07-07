---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
# hero:
#   name: 'Native, Pure, Modern'
#   text: 'JavaScript Framework.'
#   tagline: '@wangyewei'
#   actions:
#     - theme: brand
#       text: Get Start
#       link: /markdown-examples
#     - theme: alt
#       text: Install
#       link: /api-examples

# features:
#   - title: No virtual DOM
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: No compile-time
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Native web components
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<Home />
<GuideComp />
<TagsComp />
<BannerComp />
<OpenComp />
<FooterComp />
<script setup>
import Home from './.vitepress/components/home/index.vue'
import GuideComp from './.vitepress/components/guide/index.vue'
import TagsComp from './.vitepress/components/tags/index.vue'
import BannerComp from './.vitepress/components/banner/index.vue'
import OpenComp from './.vitepress/components/open/index.vue'
import Sponsor from './.vitepress/components/sponsor/index.vue'
import FooterComp from './.vitepress/components/footer/index.vue'
</script>

<style>
.VPHome {
  padding-bottom: 0 !important;
}

.VPHero .container .main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

</style>
