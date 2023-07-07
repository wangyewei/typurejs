<template>
  <section>
    <div class="wrap">
      <h1>Effortlessly tackle large-scale projects</h1>

      <img src="./assets/macbook-pro.png" alt="" />

      <figure>
        <img src="./assets/xcode.jpg" alt="Image" />
        <!-- <figcaption>This is an image.</figcaption> -->
      </figure>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  background-color: #000;
  padding: 144px 0;
}

.wrap {
  max-width: calc(1440px - 62px);
  margin: 0 auto;
  position: relative;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
}

h1 {
  font-size: 44px;
  line-height: 44px;
  padding: 24px;
  text-align: center;
  font-weight: bold;
}

img {
  margin: 0 auto;
}

figure {
  position: absolute;
  top: calc(55px + 62px);
  left: 14.3%;
  /* transform: translateX(-50%); */
}
</style>
