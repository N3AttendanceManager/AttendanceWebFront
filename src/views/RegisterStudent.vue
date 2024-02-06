<template>
  <div class="subject-view" style="height: 100vh; background-color: #252b30">
    <button class="triangle-button" @click="triangleButtonClicked"></button>
    <h1 style="color: white; font-size: 40px">生徒登録画面</h1>
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
      <div class="mb-3">
        <label for="name" class="text-left" style="color: white">生徒名</label>
        <input
          id="name"
          type="text"
          class="form-control form-control-lg mx-auto"
          v-model="name"
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
      <div class="mb-3 position-relative">
        <label for="studentId" class="text-left" style="color: white"
          >学籍番号</label
        >
        <input
          id="studentId"
          class="form-control form-control-lg mx-auto"
          v-model="studentId"
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
      <div class="mb-3">
        <label for="departmentId" class="text-left" style="color: white"
          >学科ID</label
        >
        <input
          id="departmentId"
          type="text"
          class="form-control form-control-lg mx-auto"
          v-model="departmentId"
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
        type="submit"
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
      name: "",
      studentId: "",
      departmentId: "",
    };
  },
  methods: {
    triangleButtonClicked() {
      this.$router.push("/student");
    },
    async submit() {
      try {
        // フォームの入力データを検証
        if (!this.name || !this.studentId || !this.departmentId) {
          alert("全てのフィールドを入力してください。");
          return;
        }

        const response = await this.$axios.post(
          "https://n3a.miyayu.xyz/api/student",
          {
            studentId: this.studentId,
            name: this.name,
            departmentId: parseInt(this.departmentId, 10),
          }
        );
        alert("登録成功！");
        console.log(response.data);
        // 登録成功後の処理
      } catch (error) {
        alert("登録に失敗しました。");
        console.error("登録エラー", error);
        // エラー処理
      }
    },
  },
};
</script>

<style scoped>
.triangle-button {
  width: 0;
  height: 0;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-right: 60px solid #bff7ff;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  top: 30px;
  right: -30px;
}
</style>
