<template>
  <div class="subject-view" style="height: 100vh; background-color: #252b30">
    <button class="triangle-button" @click="triangleButtonClicked"></button>
    <h1 style="color: white; font-size: 40px">科目一覧画面</h1>

    <h2>ITスペシャリスト科</h2>

    <p
      @click="redirectToChooseSubject"
      class="clickable-text"
      style="cursor: pointer; color: white; font-size: 30px"
    >
      ・ 基本情報対策講座
    </p>
  </div>
</template>

<script>
export default {
  name: "SubjectView",
  methods: {
    triangleButtonClicked() {
      this.$router.push("/top");
    },
    redirectToChooseSubject() {
      // ChooseSubject.vue にリダイレクト
      this.$router.push("/choose");
    },
  },
};
</script>

<style>
/* 左向きの三角形ボタンのスタイル */
.triangle-button {
  width: 0;
  height: 0;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-right: 60px solid #bff7ff;
  background-color: transparent;
  cursor: pointer;
  position: relative; /* 相対位置指定 */
  top: 30px; /* 上から20pxの位置 */
  right: -30px; /* 右から-20pxの位置（左に移動） */
}
.subject-view h1 {
  color: white;
  font-size: 80px !important;
  position: relative; /* 相対位置指定 */
  top: 20px; /* 上方向への調整 */
  right: -120px;
}
.subject-view h2 {
  color: white;
  font-size: 50px !important;
  position: relative; /* 相対位置指定 */
  top: 40px; /* 上方向への調整 */
  right: -140px;
  text-decoration: underline;
  text-decoration-color: #82b7be; /* 下線の色 */
}
.clickable-text {
  margin-top: 40px;
  cursor: pointer;
  color: white;
  font-size: 40px !important;
  position: relative; /* 相対位置指定 */
  top: 30px; /* 上方向への調整 */
  right: -140px; /* 右方向への調整 */
  font-weight: bold;
}
</style>
