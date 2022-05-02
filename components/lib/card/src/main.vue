<template>
  <div class="m-card">
    <div class="m-card-img">
      <img src="" alt="img">
    </div>
    <div class="m-card-summary">
      summary
    </div>
    <div class="footer">
      footer
    </div>
  </div>
</template>
<script>

export default {
  name: 'm-card',
  props: {
    width: { // 卡片宽度
      type: Number,
      default: 0
    },
    imgSrc: { // 卡片图片资源地址
      type: String,
      default: ''
    },
    imgHeight: { // 卡片图片高度
      type: Number,
      default: 0
    },
    summary: { // 卡片概要
      type: String,
      default: ''
    }
  }
}
</script>
