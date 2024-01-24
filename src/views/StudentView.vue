<template>
  <div class="subject-view" style="height: 100vh; background-color: #252b30">
    <button class="triangle-button" @click="triangleButtonClicked"></button>
    <h1 style="color: white; font-size: 40px">生徒一覧画面</h1>
    <div class="text-right">
      <button
        type="button"
        class="btn btn-info"
        style="
          background-color: #82b7be;
          color: white;
          margin-top: -120px;
          margin-right: 50px;
          width: 250px;
          height: 150px;
          padding: 0;
          font-size: 50px;
          font-weight: bold;
          border-radius: 15px; /* ボタンの角を丸くする */
        "
        @click="submit"
      >
        生徒登録
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubjectView",
  methods: {
    triangleButtonClicked() {
      this.$router.push("/top");
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
</style>
