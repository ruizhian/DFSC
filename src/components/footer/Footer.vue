<template>
  <div class="foot">
    <div class="foot-top">
      <h3>Cooperation:</h3>
      <img src="@/img/图层 1(1).png" alt="">
      <img src="@/img/FTG logo.jpg" alt="">
    </div>
    <div class="foot-bottom">
      <img src="@/img/DFSC CENTERlogo.png" alt="">
      <h3>Copyright©2016 DFSC Center</h3>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.foot {
  width: 100%;
  height: 120px;
  padding:20px 0;
  background-color: rgb(75, 99, 142);
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 18px;
    color: rgb(0, 0, 0);
  }

  .foot-top {
    width: 40%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      height: 50px;
    }
  }

  .foot-bottom {
    width: 40%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
      text-align: center;
      height: 50px;
    }
  }
}
</style>