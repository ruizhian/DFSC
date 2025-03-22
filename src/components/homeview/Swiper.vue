<template>
  <div class="main">
    <video controls loop autoplay muted>
      <source src="@/img/video.mp4" type="video/mp4">
    </video>
    <div class="swiper">
      <el-carousel height="400px">
        <el-carousel-item v-for="item in imgs" :key="item.id">
          <img :src="item.url" alt="" style="width:100%; height:100%;">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import img1 from '@/img/bg1.jpg'
import img2 from '@/img/bg2.jpg'
import img3 from '@/img/bg3.jpg'
const imgs = reactive([
  { id: 1, url: img1 },
  { id: 2, url: img2 },
  { id: 3, url: img3 }
])
</script>

<style scoped>
.main{
  width:100%;
  height:400px;
  padding:0;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  /* background: url('@/img/bg3.jpg') no-repeat center center;
  box-sizing: border-box; */
  /* background-size: 100% 100%; */
}
.swiper {
  width: 50%;
}
 video {
  width: 50%;
  /* height: 60%; */
   border: none;
   outline: none;
   /* margin-top: 10%;
   margin-left: 10%; */
 }
/* 隐藏所有视频控制元素 */
video::-webkit-media-controls {
  display: none;
}

/* 兼容 Firefox 浏览器 */
video::-moz-media-controls {
  display: none;
}

/* 兼容 IE 浏览器 */
video::-ms-media-controls {
  display: none;
}

/* 确保在不支持伪元素选择器的浏览器中也能隐藏控制条 */
video {
  object-fit: cover;
  -webkit-appearance: none;
  appearance: none;
}
</style>