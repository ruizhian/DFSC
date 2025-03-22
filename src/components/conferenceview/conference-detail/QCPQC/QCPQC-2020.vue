<template>
  <div class="container">
    <header class="header">
      <h1>International Lattice-based Cryptography and Homomorphic Encryption Symposium</h1>
      <p>参与全球加密国际研讨会 (LCEC) - 2020</p>
    </header>
    <main class="main-content">
      <section class="intro">
        <p>随着量子计算的发展，基于格的计算和量子计算的安全性受到越来越多的关注。本次会议旨在探讨基于格的密码学和同态加密的最新进展和应用。</p>
        <p>会议将于2021年1月22日-01月03日在线举行。会议将包括主题演讲、论文报告和讨论环节。</p>
      </section>
      <section class="organizers">
        <h2>组织者</h2>
        <ul>
          <li>邢朝平</li>
          <li>冯景权</li>
          <li>许学军</li>
          <li>张磊</li>
          <li>林东岳</li>
          <li>温梓强</li>
          <li>李国强</li>
          <li>王丽萍</li>
          <li>徐晓东</li>
          <li>王华峰</li>
          <li>陈利群</li>
          <li>唐强</li>
          <li>林超</li>
          <li>高飞</li>
        </ul>
      </section>
      <section class="schedule">
        <h2>会议日程</h2>
        <div class="schedule-day">
          <h3>01月02日 (会议地点：网络视频会议)</h3>
          <table>
            <thead>
              <tr>
                <th>时间</th>
                <th>报告</th>
                <th>报告人</th>
                <th>主持人</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>8:20-8:30</td>
                <td>会议开始</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>08:30-09:10</td>
                <td>基于格的签名算法</td>
                <td>张江</td>
                <td>陈利群</td>
              </tr>
              <tr>
                <td>09:10-09:50</td>
                <td>LWE with Side Information: Attacks and Concrete Security Estimation</td>
                <td>Huiying Gong</td>
                <td></td>
              </tr>
              <tr>
                <td>09:50-10:00</td>
                <td>茶歇</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>10:00-10:40</td>
                <td>Lattice-based Crypto Implementation</td>
                <td>陈利群</td>
                <td>张磊</td>
              </tr>
              <tr>
                <td>10:40-11:20</td>
                <td>可证明安全与密码学的一些思考</td>
                <td>王文浩</td>
                <td>李国强</td>
              </tr>
              <tr>
                <td>11:20-11:40</td>
                <td>基于寄存器模型的密码学问题</td>
                <td>Xiaozhu Xiang</td>
                <td></td>
              </tr>
              <tr>
                <td>11:40-12:00</td>
                <td>茶歇</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>12:00-12:40</td>
                <td>On algorithms for solving Euclidean lattice problems in cryptography</td>
                <td>Weiqiang Wen</td>
                <td></td>
              </tr>
              <tr>
                <td>12:40-13:20</td>
                <td>Discrete Gaussian Sampling over the Integers</td>
                <td>Cong Ling</td>
                <td>陈利群</td>
              </tr>
              <tr>
                <td>13:20-14:00</td>
                <td>Adversarial Examples: Attacks and Defenses for Deep Learning</td>
                <td>Jia Liu</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="schedule-day">
          <h3>01月03日 (会议地点：网络视频会议)</h3>
          <table>
            <thead>
              <tr>
                <th>时间</th>
                <th>报告</th>
                <th>报告人</th>
                <th>主持人</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>08:30-09:10</td>
                <td>全同态加密算法设计与标准化</td>
                <td>陈利群</td>
                <td>张磊</td>
              </tr>
              <tr>
                <td>09:10-09:50</td>
                <td>基于格的密码学</td>
                <td>张磊</td>
                <td></td>
              </tr>
              <tr>
                <td>09:50-10:00</td>
                <td>茶歇</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>10:00-10:40</td>
                <td>A Uniform Formal Framework for Lattice-Based Cryptosystems</td>
                <td>潘晓峰</td>
                <td>陈利群</td>
              </tr>
              <tr>
                <td>10:40-11:20</td>
                <td>浅谈密码学中的攻击与挑战</td>
                <td>张磊</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
    <footer class="footer">
      <p>会议举办时间：2021年01月02日-01月03日</p>
      <p>会议举办地点：腾讯会议</p>
      <p>会议合作联系：陈利群 (university of Surrey)，xingjiang@email.com</p>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.main-content {
  margin-bottom: 20px;
}

.intro,
.organizers,
.schedule {
  margin-bottom: 20px;
}

h1,
h2,
h3 {
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.footer {
  text-align: center;
  font-size: 0.9em;
  color: #666;
}
</style>