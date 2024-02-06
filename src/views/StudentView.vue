<template>
  <div class="subject-view" style="height: 100vh; background-color: #252b30">
    <button class="triangle-button" @click="triangleButtonClicked"></button>

    <div class="header">
      <h1 style="color: white; font-size: 40px">生徒一覧画面</h1>
      <!-- <div class="text-right"> -->
      <button
        type="button"
        class="btn btn-info"
        style="
          background-color: #82b7be;
          color: white;
          width: 250px;
          height: 150px;
          padding: 0;
          font-size: 50px;
          font-weight: bold;
          border-radius: 15px; /* ボタンの角を丸くする */
          right: -120px;
        "
        @click="submit"
      >
        生徒登録
      </button>
      <!-- </div> -->
    </div>

    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>学生ID</th>
          <th>名前</th>
          <th>学科ID</th>
          <th>ICカードID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in apiData.students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.studentId }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.departmentId }}</td>
          <td>{{ student.icId }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SubjectView",
  data() {
    return {
      userId: null,
      apiData: { students: [] }, // APIから取得したデータを格納するオブジェクト
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("https://n3a.miyayu.xyz/api/student");
        this.apiData = response.data; // APIからのレスポンスを設定
      } catch (error) {
        console.error("APIからデータを取得中にエラーが発生しました:", error);
      }
    },
    triangleButtonClicked() {
      this.$router.push("/top");
    },
    submit() {
      this.$router.push({ name: "registerStudent" });
    },
  },
};
</script>

<style>
/* 左向きの三角形ボタンのスタイル */
.triangle-button {
  width: 0;
  height: 0;
  border-top: 4vh solid transparent;
  border-bottom: 4vh solid transparent;
  border-right: 8vh solid #bff7ff;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  top: 4vh;
  right: -4vh;
}
.subject-view h1 {
  color: white;
  font-size: 10vh !important;
  position: relative;
  top: 2.5vh;
  padding-right: 50vh;
}
.table thead th {
  background-color: #4e777c; /* ヘッダーの背景色 */
  color: white; /* ヘッダーの文字色 */
}

/* テーブルボディのスタイル */
.table tbody td {
  background-color: #3d4449; /* ボディの背景色 */
  color: white; /* ボディの文字色 */
}

/* テーブルのボーダーのスタイル */
.table th,
.table td {
  border-color: #bff7ff; /* ボーダーの色 */
}

.header {
  display: flex;
  justify-items: center;
}
</style>
