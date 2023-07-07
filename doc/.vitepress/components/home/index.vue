<script lang="ts" setup>
//@ts-ignore
</script>

<template>
  <div class="content">
    <div class="title">Native, Pure, Modern</div>
    <div class="subtitle">JavaScript Framework</div>

    <div class="tagline">@wangyewei</div>

    <div class="btns">
      <a href="/intro/" class="VPButton medium brand"> Introduction </a>

      <a href="/intro/" class="VPButton medium alt"> Use Now </a>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  max-width: calc(1440px - 64px);
  margin: 0 auto;
  padding: 96px 0;
  text-align: center;
}

.title,
.subtitle {
  height: auto;
  font-weight: bold;
  text-align: center;
  width: auto;
  position: relative;
}

.title {
  font-size: 63px;
  line-height: 63px;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 72px;
  line-height: 72px;

  background: url('./assets/wave2.svg') 50% 100% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: bold;
}

.tagline {
  /* margin: 20px 0; */
  margin-top: 20px;
  margin-bottom: 40px;
  text-align: center;

  font-size: 28px;
  font-weight: 500;
  white-space: pre-wrap;
  color: var(--vp-c-text-2);
}

.brand {
  color: aliceblue;
  transition: 0.65s all ease-in-out;
  background-image: linear-gradient(163deg, #08aeea 0%, #2af598 100%);
}

.btns {
  display: flex;
  gap: 13px;
  align-items: center;
  width: 100%;
  justify-content: center;
}

.alt {
  border-color: var(--vp-button-alt-hover-border);
  color: var(--vp-button-alt-hover-text);
  background-color: var(--vp-button-alt-hover-bg);
}

.VPButton.medium {
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
}

.VPButton {
  display: inline-block;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
}
</style>
