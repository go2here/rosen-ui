<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Demo />
    <m-card imgSrc="java.png" summary="剑指Java面试-Offer直通车 百度资深面试官授课" />
    <br />
    <m-card imgSrc="c.png" summary="C/C++气象数据中心实战，手把手教你做工业级项目">
      <template #footer>
        <div class="footer">
          <div class="level">中级 · 336人报名</div>
          <div class="price">￥568.00</div>
        </div>
      </template>
    </m-card>
    <br />
    <m-card imgSrc="spring.png" :width="370" :imgHeight="90"
      >从SpringCloud项目搭建到微服务持续集成交付，快速斩获分布式微服务企业级综合高阶技能
      <template #footer>
        <div class="footer-spring">
          <div class="level">4步骤 · 4门课</div>
          <div class="level">6342收藏</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer {
  font-size: 12px;
  padding: 0 8px;
  text-align: left;
}
.level {
  color: #9199a1;
  margin-bottom: 8px;
}
.price {
  color: #f01414;
}
.footer-spring {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
