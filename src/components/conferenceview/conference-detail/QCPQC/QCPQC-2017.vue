<template>
  <Header></Header>
  <div class="reports-container">
    <h1 class="page-title">会议报告列表</h1>
    <div class="report-list">
      <div v-for="report in reports" :key="report.title" class="report-card">
        <h2 class="report-title">{{ report.title }}</h2>
        <p class="report-abstract">{{ report.abstract }}</p>
        <div class="speaker-info">
          <h3 class="speaker-name">报告人: {{ report.speaker.name }}</h3>
          <p class="speaker-bio">{{ report.speaker.bio }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/header/Header.vue'

const reports = [
  {
    title: "快速全同态公钥加密算法",
    abstract: "全同态密码是密码学中的长期公开问题，直到2009年才由Gentry给出了一个全同态密码的理论上的构造。针对现有的全同态公钥密码密文扩展大、密文长、密钥长、同态计算密文更新效率低等问题，基于二元截断多项式环给出了一个快速全同态公钥密码的构造。",
    speaker: {
      name: "王保仓",
      bio: "1979年3月生，河南郸城人，西安电子科技大学通信工程学院/综合业务网理论与关键技术国家重点实验室 密码学专业教授、博士生/硕士生导师，2006年12月获西安电子科技大学密码学专业博士学位。科技部重点研发计划项目课题负责人，主持国家自然科学基金项目3项，主持十三五预研项目、十二五预研项目、陕西省自然基金、华为高校合作重点项目、中电集团30所、54所高校合作项目等。中国密码学会会员。"
    }
  },
  {
    title: "Tightly Secure IBE under Constant-size Master Public Key",
    abstract: "Chen and Wee [CRYPTO, 2013] proposed the first almost tightly and adaptively secure IBE in the standard model and left two open problems which called for a tightly secure IBE with (1) constant-size master public key and/or (2) constant security loss. In this paper, we propose an IBE scheme with constant-size master public key and tighter security reduction. This (partially) solves Chen and Wee's first open problem and makes progress on the second one. Technically, our IBE scheme is built based on Wee's petit IBE scheme [TCC, 2016] in the composite-order bilinear group whose order is product of four primes. The sizes of master public key, ciphertexts, and secret keys are not only constant but also nearly optimal as Wee's petit IBE. We can prove its adaptive security in the multi-instance, multi-ciphertext setting [PKC, 2015] based on the decisional subgroup assumption and a subgroup variant of DBDH assumption. The security loss is O(log q) where q is the upper bound of the total number of secret keys and challenge ciphertexts revealed to adversary in each single IBE instance. It's much smaller than those for all known adaptively secure IBE schemes in a concrete sense.",
    speaker: {
      name: "陈洁",
      bio: "2008年本科毕业于苏州大学，2013年博士（后）毕业于新加坡南洋理工大学，同年9月加入华东师范大学任副教授，2015年起任研究员、博士生导师，2016年期间兼职任里昂高等师范学院ENS de Lyon研究员。多项研究成果以第一兼/或通讯作者发表在密码学三大会议（CRYPTO、EUROCRYPT、ASIACRYPT）、PKC及Designs, Codes and Cryptography、Theoretical Computer Science等上。近年来，担任ASIACRYPT 2017、Africacrypt 2016、ACNS 2015等著名国际会议程序委员，为IACR会议做了大量审稿工作。"
    }
  },
  {
    title: "CCA-Secure Keyed-Fully Homomorphic Encryption",
    abstract: "To simultaneously achieve CCA security and homomorphic property for encryption, Emura et al. introduced a new cryptographic primitive named keyed-homomorphic encryption, in which homomorphic ciphertext manipulations can only be performed by someone holding a devoted evaluation key which, by itself, does not enable decryption. We show how to construct CCA-secure keyed-fully homomorphic encryption (keyed-FHE) capable of evaluating any functions on encrypted data with an evaluation key.",
    speaker: {
      name: "赖俊祚",
      bio: "暨南大学计算机科学系研究员、博士生导师，广东省“珠江人才计划”引进创新团队核心成员。2010 年6月获上海交通大学博士学位。2008年8月至2014年4月在新加坡进行研究工作。研究方向为密码学与信息安全。在EUROCRYPT、ESORICS、PKC、CT-RSA、《IEEE Transactions on Information Forensics and Security》、《IEEE Transactions on Dependable and Secure Computing》、《ACM Transactions on Information and System Security》等密码学和信息安全著名国际会议和国际期刊发表30余篇论文。主持国家自然科学基金面上项目等项目。获得广东省自然科学基金杰出青年基金项目。"
    }
  },
  {
    title: "无噪声全同态加密方案的失败尝试",
    abstract: "自从2009年Gentry提出全同态加密方案以来，已经出现了很多优秀的改进方案，其中很多改进工作集中在噪声抑制方面。2014年，Nuida和Gentry等人分别提出了基于非交换代数结构的无噪声全同态方案的构造框架。可惜迄今为止，这些无噪声的FHE框架均缺乏可证明安全的实例化。尽管如此，这些失败的尝试也体现了非交性在无噪声FHE构造方面的特殊作用。本报告拟对这些非交换无噪声全同态的构造及其安全性缺陷进行分析和讨论。",
    speaker: {
      name: "王励成",
      bio: "北京邮电大学副教授、博导；1995年本科毕业于西北师范大学，2001年硕士毕业于南京大学，2007年博士毕业于上海交通大学。先后在密码方面发表论文50余篇，主持国家自然基金项目2项。目前研究兴趣：抗量子密码；区块链。"
    }
  },
  {
    title: "Faster Bootstrapping with Multiple Addends",
    abstract: "As an important cryptographic primitive in cloud computing and outsourced computation, fully homomorphic encryption (FHE) is an animated area of modern cryptography. However, the efficiency of FHE has been a bottleneck that impeding its application. According to Gentry’s blueprint, bootstrapping, which is used to decrease ciphertext errors, is the most important process in FHE. However, bootstrapping is also the most expensive process that affecting the efficiency of the whole system. Firstly, we notice that, hundreds of serial homomorphic additions take most of the time of bootstrapping. We made use of the properties of Boolean circuit to reduce the number of serial homomorphic additions by two third, and thus constructed an efficient FHE scheme with bootstrapping in 12ms. Secondly, the most expensive parts in our bootstrapping, EHCM and serial homomorphic additions, can be accelerated by parallel. This parallel may accelerate the bootstrapping. At last, we found a set of more efficient combination of parameters for our scheme. As a result, our security parameter level is 128 bits and the correctness is elevated, compared with TFHE scheme in ASIACRYPT 2016. Experiments show that the running time of our bootstrapping is 12ms, which is only 23 percent of TFHE, and is less than CGGI17.",
    speaker: {
      name: "周潭平",
      bio: "博士。"
    }
  },
  {
    title: "基于不同密钥的密文同态运算",
    abstract: "传统的同态加密方案都是单密钥的，即参与同态运算的密文都是用同一个密钥加密得到的。但在某些特殊场景中，如分布式计算或匿名计算中，很难要求参与同态运算的密文都用同一个密钥加密。这就提出了一个问题，能否允许基于不同密钥的密文进行运算？或者，能否将其转换为单密钥情形？根据不同的应用场景，我们重点介绍两个方面的内容：1、多密钥全同态加密方案的构造。主要介绍现有的几种代表性思路。2、利用不经意传输等工具对基于不同密钥的密文进行保密运算。主要围绕生物特征保密识别过程，分析基于不同密钥的密文如何进行(计算距离等)运算。",
    speaker: {
      name: "丁勇",
      bio: "男，博士，教授。"
    }
  }
];

  import {onMounted} from 'vue';

onMounted(() => {
    console.log('子组件已挂载');
});
</script>

<style scoped>
.reports-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
}

.page-title {
  text-align: center;
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  font-weight: bold;
}

.report-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.report-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.report-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.report-title {
  font-size: 24px;
  color: #2c3e50;
  margin-bottom: 10px;
  font-weight: bold;
}

.report-abstract {
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
}

.speaker-info {
  background-color: #f1f1f1;
  padding: 15px;
  border-radius: 8px;
}

.speaker-name {
  font-size: 18px;
  color: #34495e;
  margin-bottom: 10px;
  font-weight: bold;
}

.speaker-bio {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}
</style>