<template>
  <Header></Header>
  <div class="content">
    <!-- <img src="@/img/图片14.jpg" alt=""> -->
    <div 
    style="background-color: #fff;width: 80%;padding:40px;margin: auto;margin-top: 40%;
    display:flex;align-items: center;">
      <div style="flex:3;display: flex;flex-direction: column;padding:10px 0;gap:20px;">
        <div class="title"> Introduction of DFSC</div>
        <div class="txt">
          Digital Future Research Center (DFSC) is an innovative research institute, which is engaged in research of
          information science, and dedicates to information storage, processing and security in the future.

          DFSC have invited a group of professors and researchers in information science to join DFSC, and has been
          built
          a
          series of cooperation with Universities and Enterprises.

          In order to promoting mutual discussion in academic research and industrial applications, DFSC organizes and
          participates in the organization of a series of conferences in information science. At the same time, DFSC
          also
          provides online training camp to cultivate talents in information science.
        </div>
      </div>
      <div class="person">
        <img src="@/img/Linzhi Jiang.png" alt="">
        <div class="info" @click="getInfo">Dr. Linzhi Jiang, University of Surrey</div>
      </div>
    </div>

  </div>
  <Footer></Footer>
</template>

<script setup>
import Footer from '@/components/footer/Footer.vue'
import Header from '@/components/header/Header.vue'
import { useRouter } from 'vue-router'
const router=useRouter()
const getInfo=()=>{
  router.push('/about/person')
}
</script>

<style scoped>
.content{
  width:100%;
  margin-top: 70px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap:30px;
  /* background: url('@/img/图片14.jpg'); */
  img{
    width: 100%;
  }
  .title{
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    color:rgb(0,0,0,0.9);
  }
  .txt{
    padding:20px 20px;
    font-size: 16px;
    line-height: 2;
    text-indent: 2rem;
    color:rgb(0,0,0,0.85);
  }
  .person{
    flex:1;
    width:50%;
    /* align-items: center; */
    text-align: center;
    padding:20px;
    background-color: #fff;
    box-shadow: 0 10px 10px rgb(0,0,0,0.1);
    img{
      width: 80%;
    }
    .info{
      padding-top: 10px;
      cursor: pointer;
    }
    :hover{
      color:rgb(80, 136, 240);
      border-bottom: 1px solid rgb(80,136,240);
    }
  }
}
.content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  background: url('@/img/training.png') no-repeat ;
  background-size: cover;
  opacity: 0.9;
  z-index: -1;
}
</style>