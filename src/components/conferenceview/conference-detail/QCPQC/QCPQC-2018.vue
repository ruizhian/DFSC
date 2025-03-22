<template>
  <Header></Header>
  <div class="forum-schedule">
    <h1 class="forum-title">第二届全国参加者及其应用前沿论坛日程</h1>
    <div class="forum-info">
      <p><strong>论坛时间：</strong>2018年9月14日-9月16日，9月14日论坛结束</p>
      <p><strong>论坛地点：</strong>广州市紫江宾馆（广州市寺石一号路2号）</p>
    </div>

    <div class="forum-committee">
      <h2>论坛名誉主席</h2>
      <p>张定一</p>

      <h2>论坛组委会（姓氏笔画序）</h2>
      <p>丁春荣 王杰 孔凡玉 冯秉权 吕述超 任圣 许春香 李超 宋学勇 吴文玲 张万国 陈克非 陈利群 林东伯 胡磊 徐茂智 徐秋元 高德洪 曹珍喜 戴文峰 薛锐</p>

      <h2>论坛组领导</h2>
      <p>唐睿明（广州大学）</p>

      <h2>论坛筹备组成员</h2>
      <p>蒋林锋（University of Surrey） 蔡云堂（广州大学）</p>
    </div>

    <div class="schedule-table">
      <h2>论坛日程</h2>
      <table>
        <thead>
          <tr>
            <th>时间</th>
            <th>活动</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9月14日 14:00-20:00</td>
            <td>论坛注册和返回 广州市紫江宾馆</td>
          </tr>
          <tr>
            <td colspan="2" class="day-header">9月15日</td>
          </tr>
          <tr>
            <td>8:00-8:30</td>
            <td>开具合影</td>
          </tr>
          <tr>
            <td>8:30-9:10</td>
            <td>Why Cross-VM Cache Side Channel Attack on Table Lookup Realized SM4 and Square-Multiply Realized
              Public-key Algorithms is Practical (with realtime attacks demo)-特邀报告</td>
          </tr>
          <tr>
            <td>9:10-9:50</td>
            <td>如果云不可信，我们怎么办？--浅析云计算中的密码技术-特邀报告</td>
          </tr>
          <tr>
            <td>9:50-10:30</td>
            <td>小楼数椐密码算法设计-特邀报告</td>
          </tr>
          <tr>
            <td>10:30-10:50</td>
            <td>茶歇</td>
          </tr>
          <tr>
            <td>10:50-11:30</td>
            <td>基于同源的数字签名-特邀报告</td>
          </tr>
          <tr>
            <td>11:30-12:00</td>
            <td>椭圆曲线上的函数的密码学应用</td>
          </tr>
          <tr>
            <td colspan="2" class="day-header">午餐</td>
          </tr>
          <tr>
            <td>14:00-14:30</td>
            <td>量子保密通信的一些进展</td>
          </tr>
          <tr>
            <td>14:30-15:00</td>
            <td>Shor算法简介</td>
          </tr>
          <tr>
            <td>15:00-15:30</td>
            <td>基于格扣压缩感知的密码方案</td>
          </tr>
          <tr>
            <td>15:30-15:50</td>
            <td>茶歇</td>
          </tr>
          <tr>
            <td>15:50-16:20</td>
            <td>Integer Signal Recovery: Theory, Algorithms and Applications</td>
          </tr>
          <tr>
            <td>16:20-16:50</td>
            <td>同步加密应用中的数据编码方法</td>
          </tr>
          <tr>
            <td>16:50-17:20</td>
            <td>抗后门攻击密码算法</td>
          </tr>
          <tr>
            <td>17:20-17:50</td>
            <td>保护隐私的认证协议及应用</td>
          </tr>
          <tr>
            <td colspan="2" class="day-header">晚餐</td>
          </tr>
          <tr>
            <td colspan="2" class="day-header">9月16日</td>
          </tr>
          <tr>
            <td>8:00-8:40</td>
            <td>实用性基金会议计划分析-特邀报告</td>
          </tr>
          <tr>
            <td>8:40-9:20</td>
            <td>Coppersmith算法的改进与优化-特邀报告</td>
          </tr>
          <tr>
            <td>9:20-10:00</td>
            <td>InstantCryptoGram: Secure Image Retrieval Service -特邀报告</td>
          </tr>
          <tr>
            <td>10:00-10:20</td>
            <td>茶歇</td>
          </tr>
          <tr>
            <td>10:20-11:00</td>
            <td>Computing Hermite Normal Form Faster via Solving System of Linear Equations-特邀报告</td>
          </tr>
          <tr>
            <td>11:00-11:30</td>
            <td>Arithmetic Operations on Encrypted Integers</td>
          </tr>
          <tr>
            <td>11:30-12:00</td>
            <td>基于多线程全局动态加密的密钥层级加密方案</td>
          </tr>
          <tr>
            <td colspan="2" class="day-header">午餐</td>
          </tr>
          <tr>
            <td>14:00-17:30</td>
            <td>自由论坛时间</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/header/Header.vue'

</script>

<style scoped>
.forum-schedule {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
}

.forum-title {
  text-align: center;
  font-size: 32px;
  color: #2c3e50;
  margin-bottom: 20px;
}

.forum-info {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.forum-info p {
  font-size: 16px;
  color: #555;
  margin: 10px 0;
}

.forum-committee {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.forum-committee h2 {
  font-size: 20px;
  color: #34495e;
  margin-bottom: 10px;
}

.forum-committee p {
  font-size: 16px;
  color: #555;
  margin-bottom: 15px;
}

.schedule-table {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.schedule-table h2 {
  font-size: 24px;
  color: #2c3e50;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #34495e;
  color: #fff;
  font-weight: bold;
}

td {
  background-color: #f9f9f9;
}

.day-header {
  background-color: #2c3e50;
  color: #fff;
  font-weight: bold;
  text-align: center;
  padding: 10px;
}
</style>