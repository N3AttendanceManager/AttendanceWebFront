<template>
  <div class="subject-view" style="height: 100vh; background-color: #252b30">
    <button class="triangle-button" @click="triangleButtonClicked"></button>
    <h1 style="color: white; font-size: 40px">科目登録画面</h1>
    <form
      class="text-center"
      style="
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
      "
    >
      <!--ID入力テキストボックス-->
      <div class="mb-3">
        <p class="text-left" style="color: white">科目</p>
        <input
          type="text"
          class="form-control form-control-lg mx-auto"
          id="id"
          v-model="name"
          style="
            background-color: #4a5660;
            width: 400px;
            height: 60px;
            border: 3px solid #bff7ff; /* ボーダーの幅 */
            border-radius: 15px; /* 丸みを増やす */
          "
        />
      </div>
      <!--パスワード入力テキストボックス-->
      <div class="mb-3 position-relative">
        <p class="text-left" style="color: white">時間</p>
        <input
          :type="showPassword ? 'text' : 'password'"
          class="form-control form-control-lg mx-auto"
          id="password"
          v-model="password"
          style="
            background-color: #4a5660;
            width: 400px;
            height: 60px;
            border: 3px solid #bff7ff; /* ボーダーの幅 */
            border-radius: 15px; /* 丸みを増やす */
          "
        />
      </div>
      <button
        type="button"
        class="btn btn-info"
        style="
          background-color: #82b7be;
          color: white;
          margin-top: 10px;
          margin-left: 290px;
          width: 110px;
          height: 60px;
          padding: 0;
          border-radius: 15px; /* ボタンの角を丸くする */
        "
        @click="submit"
      >
        登録
      </button>
    </form>
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
