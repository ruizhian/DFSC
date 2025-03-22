<template>
  <div class="content">
    <h1>Research || Products || Training</h1>
    <div style="margin-top: 80px;padding:0 100px;margin-bottom: 80px;">
      <div class="content-main">
        <span>Data Security and users privacy is the research hotspots. International Data Secure and Privacy-preserving
          Computation Conference would like to invite the well-known researchers all over the world to share their
          research works about data security and privacy-preserving theory, implementation and applications. Everyone,
          who
          does the best works on data security and users privacy, will be invited to attend DSPP conference, and present
          their works. We would like to provid tranvel funding for the invited speakers.
        </span>
        <img src="@/img/DFSC图片5.png" alt="">
      </div>
      <div class="content-main">
        <img src="@/img/DFSC图片6.png" alt="">
        <span>
          Code and Cryptography are two foundations of communication and CyberSecurity. They protect data, storage,
          transmission and processing.
          International Code and Cryptography and Application Conference would like to invit well-known researchers all
          over the world to present their best works about state-of-art, research trends and applications on Code and
          Cryptography. Everyone, who does the best works on above fields, will be invited to attend CCC conference, and
          present their works. We would like to provid tranvel funding for the invited speakers.
        </span>
      </div>
      <div class="content-main">
        <span>
          The threat to CyberSpace is becoming more and more serious, and situation of CyberSecurity is becoming
          extremely
          serious. Crytpography is foundation of CyberSecurity, and is the very important method to protect security of
          users and industry.
          International Cybersecurity and Applied Cryptography Conference would like to invit well-known researchers all
          over the world to present their best works about Cybersecurity and Cryptography. Everyone, who does the best
          works on above fields, will be invited to attend CSAC Conference, and present their works. We would like to
          provid tranvel funding for the invited speakers.
        </span>
        <img src="@/img/DFSC图片1.png" alt="">
      </div>
      <div class="content-main">
        <img src="@/img/DFSC图片3.png" alt="">
        <span></span>
      </div>
      <div class="content-main">
        <span>
          Data Security and users privacy is the research hotspots. International Data Secure and Privacy-preserving
          Computation Conference would like to invite the well-known researchers all over the world to share their
          research works about data security and privacy-preserving theory, implementation and applications. Everyone,
          who
          does the best works on data security and users privacy, will be invited to attend DSPP conference, and present
          their works. We would like to provid tranvel funding for the invited speakers.
        </span>
        <img src="@/img/DFSC图片2.png" alt="">
      </div>
      <div class="content-main">
        <img src="@/img/DFSC图片4.png" alt="">
        <span>
          With rapid development of cyberspace security, artificial intelligence and cloud computing, researchers have
          constructed a large number of schemes, and designed many algorithms. In the meanwhile, the needs of industry
          and
          users are also growing urgently. Therefore, it is necessary to solve the software and hardware implementations
          of designed schemes and algorithms. The gradual maturity of software design theory and the rapid development
          and
          productization of hardware design and implementation provide a good foundation and opportunity for solving the
          above problems.
        </span>
      </div>
    </div>

  </div>
</template>

<script setup>
</script>

<style scoped>
.content {
  h1 {
    margin-top: 80px;
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    color: rgb(15, 56, 105);
  }

  .content-main {
    /* width: 100%; */
    height: 380px;
    background-color: #fff;
    /* margin-top: 30px; */
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* border-radius: 10px; */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      /* 模拟立体感的阴影 */
    /* box-shadow: 5px 5px 5px rgba(169, 168, 168, 0.3); */
    img {
      width: 50%;
      height: 85%;
      box-shadow: 5px 5px 10px rgba(141, 140, 140, 0.3);
      transition: transform 0.3s ease; 
      cursor: pointer;
    }

    img:hover {
      transform: translateY(5px);
    }

    span {
      width: 45%;
      font-size: 16px;
      padding:0 20px;
      /* font-family: 'Roboto', 'Open Sans', Arial, sans-serif; */
      /* font-family: 'Playfair Display', Georgia, serif; */
      text-indent: 2em;
      line-height: 2;
      color: rgb(0,0,0,0.75);
      font-family: Arial, sans-serif;
    }
  }
}
</style>