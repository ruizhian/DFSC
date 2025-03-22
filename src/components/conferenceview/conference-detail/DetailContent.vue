<template>
  <Wheader></Wheader>
  <div class="detail-content" v-if="currentDetail">
    <img :src="currentDetail.logo" alt="">
    <div class="main">
      <div class="txt">
        <p>{{ currentDetail.content_one }}</p>
        <p
          style="background-color: #fff;border-radius: 5px; padding:20px;box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.1);">
          {{ currentDetail.content_two }}</p>
      </div>
      <div class="year">
        <h3 style="font-size: 18px;color:rgb(64,137,186);">Conference Years</h3>
        <ul>
          <li v-for="(year, index) in currentDetail.years" :key="index" @click="yearData(year)">{{ year }}
            <a style="border-bottom: 1px solid; color:rgb(60,101,150);font-size: 14px;">Learn More</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup>
import Wheader from '@/components/header/Wheader.vue'
import Footer from '@/components/footer/Footer.vue'
import { reactive, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import conferenceData from '@/components/conferenceview/conference-detail/detail-data.json'
import logo1 from '@/img/QPQCC.png'
import logo2 from '@/img/logo.png'
import logo3 from '@/img/CC.png'
import logo4 from '@/img/circle-cropped-csac.png'
import logo5 from '@/img/circle-cropped.png'
// import Wheader from '@/components/header/Wheader.vue'
const detailData = reactive([
  {
    id: 'QCPQC',
    logo: logo1,
    content_one: "Quantum computation and implementation show strong power. How to protect data secure and users' privacy is very important. Lattice-based cryptography (such as Fully Homomorphic Encryption-FHE) gives us the ways to protect data security and users privacy in the quantum world.",
    content_two: "QCPQC (Quantum Computation and Post Quantum Cryptography) Conference would like to invite well-known researchers all over the world to present their best works about state-of-art, research hotspots and applications on Post Quantum Cryptography and Quantum Computation. Everyone, who does the best works on above fields, will be invited to attend QCPQC conference, and present their research works. We would like to provide travel funding for the invited speakers.",
    years: [
      "QCPQC-2017",
      "QCPQC-2018",
      "QCPQC-2019",
      "QCPQC-2020",
      "QCPQC-2021"
    ]
  },
  {
    id: 'DSPP',
    logo: logo2,
    content_one: "Data Security and users privacy is the research hotspots. International Data Secure and Privacy-preserving Computation Conference would like to invite the well-known researchers all over the world to share their research works about data security and privacy-preserving theory, implementation and applications.",
    content_two: "Everyone, who does the best works on data security and users privacy, will be invited to attend DSPP conference, and present their works. We would like to provide travel funding for the invited speakers. Invited talks including the following topics: (1) Data security and privacy-preserving theory, implementation and application; (2) Data security and users privacy in the quantum world.",
    years: [
      "DSPP-2018",
      "DSPP-2019",
      "DSPP-2020",
      "DSPP-2021"
    ]
  },
  {
    id: 'CCC',
    logo: logo3,
    content_one: "Code and Cryptography are two foundations of communication and CyberSecurity. They protect data, storage, transmission and processing.",
    content_two: "International Code and Cryptography and Application Conference would like to invite well-known researchers all over the world to present their best works about state-of-art, research trends and applications on Code and Cryptography. Everyone, who does the best works on above fields, will be invited to attend CCC conference, and present their works. We would like to provide travel funding for the invited speakers.",
    years: [
      "CCC-2018",
      "CCC-2019",
      "CCC-2020",
      "CCC-2021"
    ]
  },
  {
    id: 'CSAC',
    logo: logo4,
    content_one: "The threat to CyberSpace is becoming more and more serious, and situation of CyberSecurity is becoming extremely serious. Cryptography is foundation of CyberSecurity, and is the very important method to protect security of users and industry.",
    content_two: "International Cybersecurity and Applied Cryptography Conference would like to invite well-known researchers all over the world to present their best works about Cybersecurity and Cryptography. Everyone, who does the best works on above fields, will be invited to attend CSAC Conference, and present their works. We would like to provide travel funding for the invited speakers.",
    years: [
      "CSAC-2018",
      "CSAC-2019",
      "CSAC-2020",
      "CSAC-2021"
    ]
  },
  {
    id: 'SHDI',
    logo: logo5,
    content_one: "With rapid development of cyberspace security, artificial intelligence and cloud computing, researchers have constructed a large number of schemes, and designed many algorithms. In the meanwhile, the needs of industry and users are also growing urgently. Therefore, it is necessary to solve the software and hardware implementations of designed schemes and algorithms.",
    content_two: "The gradual maturity of software design theory and the rapid development and production of hardware design and implementation provide a good foundation and opportunity for solving the above problems. International Software and Hardware Design and Implementation Conference would like to invite well-known researchers all over the world to present their best works about design and implementation of software and hardware on Cybersecurity schemes and algorithms. Everyone, who does the best works on above fields, will be invited to attend SHDI conference, and present their works. We would like to provide travel funding for the invited speakers.",
    years: [
      "SHDI-2019",
    ]
  },
])
const route = useRoute()
const router=useRouter()
const currentDetail = computed(() => {
  const id = route.params.id
  return detailData.find(item => item.id === id)
})
const yearData = (year) => {
  const id = currentDetail.value.id
  console.log(year)
  router.push({ path: `/conference/detail/${id}/${year}` })
}
</script>

<style scoped>
.detail-content {
  /* background: url('@/img/图片15.jpg'); */
  margin-top: 100px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  img {
    width: 20%;
    margin: auto;
    /* height:100px; */
  }

  .main {
    width: 75%;
    margin: auto;
    margin-top: 35px;
    padding:20px;
    background-color: #ffffff;
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    .txt{
      width: 70%;
      p {
          padding: 20px;
          font-size: 16px;
          text-indent: 2rem;
          line-height: 2;
          color:rgb(0,0,0,0.9);
        }
    }
    .year{
      width: 20%;
      background-color: #eeeeee;
      padding:20px;
      ul{
        /* background-color: #9f7575; */
        padding:10px 0;
        /* width: 100%; */
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        li{
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          font-size: 16px;
          color:rgb(0,0,0,0.8);
          /* padding:5px; */
        }
        /* :hover{
          background-color: #addbfa;
          color:rgb(144, 169, 169);

        } */
      }
    }
  }
}

.detail-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 55%;
  background: url('@/img/图片13.jpg') no-repeat center center;
  background-size: cover;
  opacity: 0.8;
  z-index: -1;
}
</style>