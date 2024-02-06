<template>
  <div class="subject-view" style="height: 100vh; background-color: #252b30">
    <button class="triangle-button" @click="triangleButtonClicked"></button>
    <h1 style="color: white; font-size: 40px">授業登録画面</h1>
    <form
      class="text-center"
      style="
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
      "
      @submit.prevent="submit"
    >
      <!--科目ID入力テキストボックス-->
      <div class="mb-3">
        <p class="text-left" style="color: white">科目ID</p>
        <input
          type="number"
          class="form-control form-control-lg mx-auto"
          id="subjectId"
          v-model="subjectId"
          style="
            background-color: #4a5660;
            width: 400px;
            height: 60px;
            border: 3px solid #bff7ff;
            border-radius: 15px;
          "
          required
        />
      </div>
      <!--授業開始日時入力テキストボックス-->
      <div class="mb-3">
        <p class="text-left" style="color: white">授業開始日時</p>
        <input
          type="datetime-local"
          class="form-control form-control-lg mx-auto"
          id="startOn"
          v-model="startOn"
          style="
            background-color: #4a5660;
            width: 400px;
            height: 60px;
            border: 3px solid #bff7ff;
            border-radius: 15px;
          "
          required
        />
      </div>
      <!--授業終了日時入力テキストボックス-->
      <div class="mb-3">
        <p class="text-left" style="color: white">授業終了日時</p>
        <input
          type="datetime-local"
          class="form-control form-control-lg mx-auto"
          id="endOn"
          v-model="endOn"
          style="
            background-color: #4a5660;
            width: 400px;
            height: 60px;
            border: 3px solid #bff7ff;
            border-radius: 15px;
          "
          required
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
          border-radius: 15px;
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
  data() {
    return {
      subjectId: null,
      startOn: "",
      endOn: "",
    };
  },
  methods: {
    triangleButtonClicked() {
      this.$router.push("/top");
    },
    async submit() {
      try {
        // フォームの入力データを検証
        if (this.subjectId === null || !this.startOn || !this.endOn) {
          alert("全てのフィールドを入力してください。");
          return;
        }

        const response = await this.$axios.post(
          "https://n3a.miyayu.xyz/api/class",
          {
            subjectId: this.subjectId,
            startOn: this.startOn,
            endOn: this.endOn,
          }
        );
        alert("授業の登録に成功しました！");
        console.log(response.data);
        // 登録成功後の処理
      } catch (error) {
        alert("授業の登録に失敗しました。");
        console.error("登録エラー", error);
        // エラー処理
      }
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
