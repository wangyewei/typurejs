import {
  defineComponent,
  defineScopedCss,
  defineMethod
} from "@typure/core"

export default defineComponent((context) => {

  defineScopedCss(context, import('./index.css'))
  //@ts-ignore
  defineMethod(context, 'handleScroll', () => {
    console.log(context.shadowRoot.getElementById('nav-full-target'))
  })
  return `
    <div class="hero" id="hero">
      <div class="item">
        <h2>Hello There, I'm Yewei Wang</h2>
        <h5>Based in Chengdu, China</h5>
      </div>

      <div class="item">
        <h2>A Front-end Developer</h2>
        <h5>open source framework developer</h5>
      </div>


      <div class="item" id="nav-full-target" @scroll="handleScroll">
        <h2>This Page Is Built Based On Typure.js</h2>
        <h5>https://github.com/wangyewei/typurejs/ 🌟</h5>
      </div>

    </div>
  `
})