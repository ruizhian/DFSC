<template>
  <div class="head">
    <!-- <img src="@/img/bg4.jpg" alt=""> -->
     <div class="title">DFSC</div>
    <ul>
      <li v-for="item in navList" :key="item.id" :class="{ active: isActive(item.path) }" @click="tabNav(item)">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const navList = reactive([
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'News', path: '/news' },
  { id: 3, name: 'Conference', path: '/conference' },
  { id: 4, name: 'Research', path: '/research' },
  { id: 5, name: 'About', path: '/about' }
])
const router = useRouter()
const route = useRoute()
const isActive = (path) => {
  return route.path === path
}
const tabNav = (item) => {
  router.push(item.path)
}
</script>

<style scoped>
.head {
  width: 100%;
  margin: auto;
  position: fixed;
  display: flex;
    justify-content: space-around;
    align-items: center;
  height: 60px;
  top: 0;
  z-index: 999;
box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.3);
  /* height:700px; */
  /* background: url('@/img/bg4.jpg') no-repeat center center;
  box-sizing: border-box;
  background-size:100% ; */
  .title {
      font-size: 45px;
      font-weight: bold;
      color: #4a90e2;
      /* 文字颜色 */
      text-shadow:
        3px 3px 0 #2c3e50,
        /* 第一层阴影 */
        6px 6px 0 #34495e,
        /* 第二层阴影 */
        9px 9px 0 #2c3e50;
      /* 第三层阴影 */
      text-transform: uppercase;
      /* 大写字母 */
      font-family: 'Arial', sans-serif;
      /* 字体 */
    }
  ul {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 2px;
    /* padding:25px 0; */
    /* background-color: rgb(75, 99, 142); */
    /* background-color: #fff; */
    

    li {
      height: 100%;
      width: 120px;
      font-size: 20px;
      text-align: center;
      color: rgb(255, 255, 255, 0.8);
      line-height: 60px;
      cursor: pointer;
    }
  }
}

.head ul li.active {
  font-weight: bold;
  background-color: rgb(15, 56, 105);
  color: rgb(15, 56, 105);
}
</style>