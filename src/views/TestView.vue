<template>
  <div
    class="top-view d-flex flex-column justify-content-center align-items-center"
    style="height: 100vh; background-color: #252b30"
  >
    <div class="header-container mb-5">
      <h1 class="text-white" v-if="userId">先生名: {{ userId }}</h1>
    </div>

    <table class="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last</th>
          <th>Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in apiData" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.first }}</td>
          <td>{{ item.last }}</td>
          <td>{{ item.handle }}</td>
        </tr>
      </tbody>
    </table>

    <div class="logout-container">
      <p @click="logout" class="clickable-text logout-text">Logout</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopView",
  data() {
    return {
      userId: null,
      apiData: [], // APIから取得したデータを格納する配列
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch("your-api-url"); // APIのURLを指定
        const data = await response.json();
        this.apiData = data;
      } catch (error) {
        console.error("APIからデータを取得中にエラーが発生しました:", error);
      }
    },
    logout() {
      this.$router.push({ name: "login" });
    },
    // 他のメソッド...
  },
};
</script>

<style>
/* テーブルヘッダーのスタイル */
.table thead th {
  background-color: #4e777c; /* ヘッダーの背景色 */
  color: white; /* ヘッダーの文字色 */
}

/* テーブルボディのスタイル */
.table tbody td {
  background-color: #82b7be; /* ボディの背景色 */
  color: black; /* ボディの文字色 */
}

/* テーブルのボーダーのスタイル */
.table th,
.table td {
  border-color: #bff7ff; /* ボーダーの色 */
}
</style>
