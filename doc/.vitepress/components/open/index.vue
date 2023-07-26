<template>
  <div class="relative h420 wrap">
    <div
      class="absolute inset-0 top-60 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30"
    >
      <div
        class="h-60 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"
      ></div>
      <div
        class="h-40 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"
      ></div>
    </div>

    <div class="relative content">
      <div class="center">Open, Supportive Community</div>

      <div class="social">
        <img src="./assets/avator.jpg" alt="" />

        <div class="desc">
          <P
            >Join a thriving community where we come together to support,
            inspire, and lift each other up.</P
          >
          <div class="btn">join now</div>
        </div>
      </div>
      <!-- <div class="join"></div>

      <div class="github"></div> -->
    </div>
  </div>
</template>

<style scoped>
.h420 {
  /* margin-top: 28vh; */
  height: 82vh;
  width: 100%;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
  width: 100%;
  height: 100%;
  /* top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  /* transform: translate(-50%, -50%); */
}

.inset-0 {
  padding: 0;
  margin: 0;
}

.top-60 {
  top: 60px;
}

.grid {
  display: grid;
}

.grid-cols-2 {
  grid-template-columns: 1fr 1fr;
}

.-space-x-52 > * + * {
  margin-left: -52px;
}

.opacity-50 {
  opacity: 0.5;
}

.dark\:opacity-30 {
  opacity: 0.3;
}

.h-60 {
  height: 600px;
}

.bg-gradient-to-br {
  background: linear-gradient(to bottom right, #00f, #800080);
}

.from-primary {
  background-color: #00f;
}

.to-purple-400 {
  background-color: #800080;
}

.blur-\[106px\] {
  filter: blur(106px);
}

.dark\:from-blue-700 {
  background-color: #0000cd;
}

.h-40 {
  height: 400px;
}

.bg-gradient-to-r {
  background: linear-gradient(to right, #0ff, #87ceeb);
}

.from-cyan-400 {
  background-color: #0ff;
}

.to-sky-300 {
  background-color: #87ceeb;
}

.dark\:to-indigo-600 {
  background-color: #4b0082;
}

.content {
  width: 100%;
  max-width: calc(1440px - 62px);
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  height: 100%;
  align-items: center;
  justify-content: center;
}

.center {
  font-size: 32px;
  font-weight: bold;
  display: grid;
  width: 100%;
  align-items: center;
  justify-items: center;
}

img {
  height: 140px;
  border-radius: 24px;
}

.social {
  overflow: hidden;
  display: grid;
  grid-template-columns: auto 1fr;

  max-width: 1120px;
  grid-column-gap: 80px;
  grid-row-gap: 16px;
  background-color: #6dd0fe;
  border-radius: 24px;
  grid-template-rows: auto;
  grid-template-columns: 280px 1fr;
  grid-auto-columns: 1fr;
  align-items: start;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 80px 40px 40px;
  display: grid;

  margin-top: -220px;
}

.desc {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  /* align-items: center; */
  gap: 24px;
}

.desc .btn {
  text-transform: uppercase;
  background-color: #1e0825;
  border-radius: 100px;
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 0 24px;
  text-align: center;
  justify-content: center;
  color: #fff;
}

.social p {
  /* margin-top: 3rem; */
  /* margin-bottom: 2rem; */
  color: #000;
  font-size: 22px;
  line-height: 22px;
  font-family: Sharpgrotesk, sans-serif;
  /* font-size: 3rem; */
  font-weight: 500;
}

@media (max-width: 768px) {
  .wrap {
    width: 100%;
    overflow: hidden;

    display: none;

    margin-bottom: 40px;
  }
  img {
    display: none;
  }
}
</style>
