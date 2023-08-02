<template>
  <footer class="footer">
    <div>
      Powerd by
      <a href="https://vercel.com/" target="_blank">vercal</a>
      .
    </div>
    <div>
      Released under the
      <a href="https://opensource.org/license/mit" target="_blank">
        MIT License</a
      >
      .
    </div>
    <div>
      Copyright(&copy;)2023-present,<a
        href="https://github.com/wangyewei"
        target="_blank"
        >Yewei Wang</a
      >,

      <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank"
        >蜀ICP备2021030366号-1</a
      >
    </div>
  </footer>
</template>

<script lang="ts" setup>
// @ts-ignore
import Sponsor from '../sponsor/index.vue'
</script>
<style scoped>
footer {
  text-align: center;
  padding: 16px 0;
  font-size: 12px;
}

footer a {
  color: var(--vp-c-brand);
}
</style>
