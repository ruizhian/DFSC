<template>
  <Header></Header>
  <div class="content">
    <div class="project">
      <h3>Projects</h3>
      <ul>
        <li>
          <img src="@/img/项目.png" alt="">
          <span>Fully Homomorphic Encryption and Implementation</span>
        </li>
        <li>
          <img src="@/img/项目.png" alt="">
          <span>Lattice-based Cryptography and Implementation</span>
        </li>
        <li>
          <img src="@/img/项目.png" alt="">
          <span>Secure Multi-party Computation and Application</span>
        </li>
        <li>
          <img src="@/img/项目.png" alt="">
          <span>Blockchain and Application</span>
        </li>
        <li>
          <img src="@/img/项目.png" alt="">
          <span>Hardware and Sotware Implementation of Crypto</span>
        </li>
        <li>
          <img src="@/img/项目.png" alt="">
          <span>Cloud and Application</span>
        </li>
        <li>
          <img src="@/img/项目.png" alt="">
          <span>Differential Privacy and Application</span>
        </li>
        <li>
          <img src="@/img/项目.png" alt="">
          <span>AI and Application</span>
        </li>
        <li>
          <img src="@/img/项目.png" alt="">
          <span>IoT and Application</span>
        </li>
      </ul>
    </div>
    <div class="product">
      <h3>Products</h3>
      <ul>
        <li>
          <img src="@/img/产品.png" alt="">
          <span>Fully Homomorphic Encryption Implementation Demo.</span>
        </li>
        <li>
          <img src="@/img/产品.png" alt="">
          <span>Lattice-based Cryptography Implementation Demo</span>
        </li>
      </ul>
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
</script>

<style scoped>
.content {
  display: flex;
  margin-top: 100px;
  padding: 0 100px;
  justify-content: space-around;
  margin-bottom: 100px;

  /* background-color: #ae8e8e; */
  .project {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    h3 {
      background-color: rgb(195, 163, 99);
      height: 50px;
      line-height: 50px;
      padding-left: 30px;
      border-radius: 8px 8px 0 0;
      font-size: 18px;

    }

    ul {
      padding: 0 30px;

      li {
        padding: 10px 0;

        display: flex;
        align-items: center;
        cursor: pointer;
        span {
          font-size: 16px;
          margin-left: 10px;
          color: rgb(0, 0, 0, 0.8);
        }

        :hover {
          color: rgb(201, 173, 117);
          transition: color 0.3s;
        }
      }
    }
  }

  .product {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    h3 {
      background-color: rgb(162, 204, 181);
      height: 50px;
      line-height: 50px;
      padding-left: 30px;
      border-radius: 8px 8px 0 0;
      font-size: 18px;

    }

    ul {
      padding: 0 30px;

      li {
        padding: 10px 0;

        display: flex;
        align-items: center;
        cursor: pointer;

        span {
          font-size: 16px;
          margin-left: 10px;
          color: rgb(0, 0, 0, 0.8);
        }

        :hover {
          color: rgb(99, 140, 118);
        }
      }
    }
  }
}
</style>