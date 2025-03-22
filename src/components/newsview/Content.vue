<template>
  <div class="news-list">
    <div class="list-main">
      <h2 style="font-weight: bold;font-size:18px;">News List</h2>
      <div class="main-content">
        <ul style="width:45%;">
          <li>
            <img src="@/img/会议.png" alt="">
            <span>CSAC Conference-2021-Call for paper!</span>
          </li>
          <li>
            <img src="@/img/会议.png" alt="">
            <span>QPQC Conference-2021-Call for paper!</span>
          </li>
          <li>
            <img src="@/img/会议.png" alt="">
            <span>DSPP Conference-2021!</span>
          </li>
          <li>
            <img src="@/img/会议.png" alt="">
            <span>CCC Conference-2021!</span>
          </li>
          <li>
            <img src="@/img/会议.png" alt="">
            <span>DFSC Center Joins EAPIAC Alliance!</span>
          </li>
          <li>
            <img src="@/img/会议.png" alt="">
            <span>DFSC Center Cooperates with Qirange Company!</span>
          </li>
          <li>
            <img src="@/img/会议.png" alt="">
            <span>Summer Training Camp Start!</span>
          </li>
          <li>
            <img src="@/img/会议.png" alt="">
            <span> DFSC Center Cooperates with FTG Research Group!</span>
          </li>
          <li>
            <img src="@/img/会议.png" alt="">
            <span>FTG Research Group Joins EAPIAC Alliance!</span>
          </li>
          <li><img src="@/img/会议.png" alt="">
            <span>News!</span>
          </li>
        </ul>
        <div style="width:55%;padding:0 20px;">
          <el-carousel height="300px">
            <el-carousel-item v-for="item in imgs" :key="item.id">
              <img :src="item.url" alt="" style="width:100%; height:100%;">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <div class="list-part">
      <div class="part-one">
        <h2 style="background-color: rgb(105, 170, 136);">Industrial News</h2>
        <ul>
          <li>
            <img src="@/img/写会议纪要.png" alt="">
            <span>DFSC Center Joins EAPIAC Alliance!</span>
          </li>
          <li>
            <img src="@/img/写会议纪要.png" alt="">
            <span>DFSC Center Cooperates with Qirange Company!</span>
          </li>
          <li>
            <img src="@/img/写会议纪要.png" alt="">
            <span>Summer Training Camp Starts!</span>
          </li>
          <li>
            <img src="@/img/写会议纪要.png" alt="">
            <span>DFSC Center Cooperates with FTG Research Group!</span>
          </li>
          <li>
            <img src="@/img/写会议纪要.png" alt="">
            <span>FTG Research Group Joins EAPIAC Alliance!</span>
          </li>
          <li>
            <img src="@/img/写会议纪要.png" alt="">
            <span>News!</span>
          </li>
        </ul>
      </div>
      <div class="part-two">
        <h2 style="background-color: rgb(105, 170, 136);">Research News</h2>
        <ul>
          <li>
            <img src=" @/img/写会议纪要.png" alt="">
          <span>QCPQC Conference-2021-Call for paper!</span>
          <!-- <a href="QPQC-2021.html"></a> -->
          </li>
          <li>
            <img src="@/img/写会议纪要.png" alt="">
            <span>CSAC Conference-2021-Call for paper!</span>
            <!-- <a href="CSAC-2021.html"></a> -->
          </li>
          <li>
            <img src="@/img/写会议纪要.png" alt="">
            <span>DSPP Conference-2021!</span>
          </li>
          <li>
            <img src="@/img/写会议纪要.png" alt="">
            <span>CCC Conference-2021!</span>
          </li>
          <li>
            <img src="@/img/写会议纪要.png" alt="">
            <span>QPQC Conference-2021!</span>
          </li>
          <li>
            <img src="@/img/写会议纪要.png" alt="">
            <span>News!</span>
          </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import img1 from '@/img/DFSC图片1.png'
import img2 from '@/img/DFSC图片2.png'
import img3 from '@/img/DFSC图片3.png'
import img4 from '@/img/DFSC图片4.png'
import img5 from '@/img/DFSC图片5.png'
import img6 from '@/img/DFSC图片6.png'
const imgs = reactive([
  { id: 1, url: img1 },
  { id: 2, url: img2 },
  { id: 3, url: img3 },
  { id: 4, url: img4 },
  { id: 5, url: img5 },
  { id: 6, url: img6 },
])
</script>

<style scoped>
.news-list {
  margin-top: 100px;
  margin-bottom: 50px;
  padding: 0 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

h2 {
  /* text-align: center; */
  padding-left: 16px;
  font-weight: bold;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  background-color: rgb(97, 168, 209);
  height: 50px;
  line-height: 50px;
  border-radius: 8px 8px 0 0;
}

ul {
  padding: 6px 16px;

  li {
    padding: 12px 0;
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      width: 22px;
    }

    span {
      padding-left: 5px;
    }
  }

  :hover {
    color: rgb(113, 195, 242);
    /* background-color: #f3f1f1; */
    border-radius: 5px;
    /* (50,97,72) */
  }
}

span {
  font-size: 14px;
  color: rgb(0, 0, 0, 0.75);
}

.list-main {
  width: 100%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  .main-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.list-part {
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .part-one {
    width: 45%;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .part-two {
    width: 45%;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
}

.list-part ul li span:hover {
  color: rgb(105, 170, 136);
}
</style>