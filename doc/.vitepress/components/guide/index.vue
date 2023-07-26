<template>
  <div class="wrap">
    <div class="desc">
      <p>
        Typure.js is a lightweight TypeScript framework that is built on native
        web components for building user interfaces.
      </p>

      <div class="title">DownLoad</div>
      <div class="btns">
        <div class="btn">Full Size</div>
        <div class="btn">Mini Size</div>
      </div>

      <div class="title">Typure Cli</div>

      <div class="code">$ typure-cli create-app demo --template-ts</div>

      <div class="title">Progressive</div>

      <div class="code">$ pnpm install typure</div>
    </div>
    <img src="https://he3.app/images/home.png" alt="" />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped="css">
.wrap {
  /* margin-top: 72px; */
  padding-top: 72px;
  max-width: calc(1440px - 62px);
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 14px;
}

.desc {
  display: grid;
  grid-template-rows: repeat(1fr, auto-fit);
  font-weight: 600;
  gap: 32px;
}

.desc p {
  font-size: 26px;
  line-height: 26px;
  letter-spacing: 1px;
}

.title {
  font-size: 26px;
  line-height: 26px;
}

.btns {
  display: flex;
  gap: 12px;
}

.btns .btn {
  color: aliceblue;
  transition: 0.65s all ease-in-out;
  background-image: linear-gradient(163deg, #08aeea 0%, #08aeea 100%);
  border-radius: 20px;

  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;

  height: 40px;
  cursor: pointer;

  display: inline-block;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
}

.code {
  border: 1px solid var(--vp-badge-info-border);
  height: 52px;
  line-height: 52px;
  /* color: var(--vp-custom-block-info-code-bg); */
  background: var(--vp-custom-block-info-code-bg);
  border-radius: 4px;
  padding: 0 12px;
  /* box-sizing: border-box; */
}

img {
  margin-left: 44px;
}

@media (max-width: 768px) {
  .wrap {
    grid-template-columns: 1fr;
    width: 100%;

    display: grid;
    grid-template-rows: auto auto;
    align-items: center;
    justify-content: center;

    gap: 35px;
  }

  .desc {
    text-align: center;
  }

  .desc p {
    line-height: 31px;
  }

  .desc .title {
    color: var(--vp-c-gray);
  }

  .btns {
    justify-content: center;
  }

  img {
    order: -1;
    transform: translateX(-44px);
  }
}
</style>
