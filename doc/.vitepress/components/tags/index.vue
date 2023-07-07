<template>
  <div class="wrap">
    <div class="div1">
      <div class="title">No Virtual DOM</div>
      <!-- <div class="desc"></div> -->
    </div>
    <div class="div2">
      <div class="title">No compile-time</div>
      <!-- <div class="desc"></div> -->
    </div>
    <div class="div3">
      <div class="title">Reactive</div>
      <!-- <div class="desc"></div> -->
    </div>
  </div>
</template>

<style scoped>
.wrap {
  max-width: calc(1440px - 62px);
  overflow: hidden;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 12px;
  grid-row-gap: 12px;
  height: 668px;
  padding: 120px 0;
  /* width: 100px; */
}

.wrap div {
  height: 100%;
  width: 100%;
  background: #000;

  display: flex;

  align-items: center;
  justify-content: center;
  font-size: 44px;
  font-weight: bold;

  border-radius: 20px;

  cursor: pointer;
}
.div1 {
  grid-area: 1 / 1 / 3 / 2;
}
.div2 {
  grid-area: 1 / 2 / 2 / 3;
}
.div3 {
  grid-area: 2 / 2 / 3 / 3;
}
</style>
