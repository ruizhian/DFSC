<template>
  <div class="main">
    <div class="main-info">
      <img src="@/img/conference-img3.jpg" alt="">
      <span>
        DFSC organizes and participates in the organization of a series of conferences in information science.
        Conferences
        would like to invite well-known experts in theoretical research, implementation and application to give invited
        topics including: Mathematical theory and its application, Cryptographic theory and its application, Cyberspace
        security, Artificial intelligence, Digital economics and society, Cloud computing, Secure and privacy-preserving
        computation, Hardware design and implementation, Software design and implementation, Quantum computation and its
        application, 5G/6G communication and application, Internet of Things, Autopilot and implementation, Satellite
        communication and its application, etc..
      </span>
    </div>
    <div class="main-list">
      <h2 style="font-size: 18px;text-align: center;font-weight: bold;padding-left: 16px;">Conference List</h2>
      <ul>
        <li v-for="item in conferences" :key="item.id" @click="getConferenceDetail(item.id)">
          <div class="card">
            <img :src="item.logo" alt="Logo" class="logo">
            <h3>{{ item.title }}</h3>
            <span>{{ item.name }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="main-bottom">
      <h2 class="bottom-title">
        Conference Sponsorship and Cooperation
      </h2>
      <div class="txt">Universities, research institutes and enterprises in related fields can contact us to sponsor the
        conferences, which will provide you with a platform to showcase your research work and products. For more
        information, contact us.
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import logo1 from '@/img/QPQCC.png'
import logo2 from '@/img/logo.png'
import logo3 from '@/img/CC.png'
import logo4 from '@/img/circle-cropped-csac.png'
import logo5 from '@/img/circle-cropped.png'


const conferences = reactive([
  {
    id: 'QCPQC',
    title: 'QCPQC',
    name: 'International Quantum Computation and Post-quantum Cryptography Conference',
    logo: logo1
  },
  {
    id: 'DSPP',
    title: 'DSPP',
    name: 'International Data Secure and Privacy-preserving Computation Conference',
    logo: logo2
  },
  {
    id: 'CCC',
    title: 'CCC',
    name: 'International Code and Cryptography and Application Conference',
    logo: logo3
  },
  {
    id: 'CSAC',
    title: 'CSAC',
    name: 'International Cybersecurity and Applied Cryptography Conference',
    logo: logo4
  },
  {
    id: 'SHDI',
    title: 'SHDI',
    name: 'International Software and Hardware Design and Implementation Conference',
    logo: logo5
  },
  {
    id: 'AIIIS',
    title: 'AIIIS',
    name: 'International Artificial Intelligence, Implementation and Security Conference',
    logo: logo5
  }
])
const router=useRouter()
const getConferenceDetail = (id) => {
  router.push({ path: `/conference/detail/${id}` });
}
</script>

<style scoped>
.main {
  margin-top: 100px;
  /* padding: 0 200px; */
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 100px;
}

.main-icon {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px;

  img {
    width: 80px;
  }
}

.main-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 100px;
  /* padding: 20px 200px; */
  /* background-color: #f3f3f3; */

  /* padding: 16px; */

  /* border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */
  span {
    width: 45%;
    font-size: 16px;
    text-indent: 2em;
    line-height: 2;
    color: rgb(0, 0, 0, 0.8);
  }

  img {
    width: 50%;
  }
}

.main-list {
  position: relative;
  /* 确保伪元素相对于此容器定位 */
  padding: 30px 200px;
  color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  /* 确保内容在伪元素之上 */
}

.main-list::before {
  content: '';
  /* 必须设置 content */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/img/图片13.jpg') no-repeat center center;
  background-size: cover;
  opacity: 0.3;
  /* 调整背景图片的透明度 */
  z-index: -1;
  /* 将伪元素置于内容下方 */
}

.main-list ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
}

.main-list ul li {
  width: calc(33% - 40px);
  margin-top: 40px;
  text-align: center;
}

.main-list ul .card {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.main-list ul .card:hover {
  transform: translate(5px, -5px);
  background-color: #f3f3f3;
}

.main-list ul .logo {
  width: 50%;
  height: auto;
}

.main-list ul h3 {
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.9);
}

.main-list ul span {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.75);
  text-indent: 2em;
  line-height: 2;
}
.main-bottom {
  width: 85%;
  margin: auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  /* padding: 16px; */
  .bottom-title {
    height: 40px;
    padding-left: 16px;
    font-size: 18px;
    text-align: left;
    font-weight: bold;
    line-height: 40px;
    background-color: #dadada;
    border-radius: 8px 8px 0 0;
  }

  .txt {
    padding: 10px 16px;
    margin-top: 10px;
    font-size: 16px;
    text-indent: 2em;
    line-height: 2;
    color: rgb(0, 0, 0, 0.8);
  }
}
</style>