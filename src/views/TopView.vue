<template>
  <div
    class="top-view d-flex flex-column justify-content-center align-items-center"
    style="height: 100vh; background-color: #252b30"
  >
    <div class="header-container mb-5">
      <h1 class="text-white" v-if="username">先生名: {{ username }}</h1>
    </div>
    <!-- ボタンを縦方向の中央に配置 -->
    <div class="button-container d-flex flex-wrap justify-content-center">
      <div class="col-6 d-flex justify-content-center mb-1">
        <button class="btn btn-info your-button-class" @click="student">
          生徒一覧
        </button>
      </div>
      <div class="col-6 d-flex justify-content-center mb-1">
        <button class="btn btn-info your-button-class" @click="subject">
          科目一覧
        </button>
      </div>
      <div class="col-6 d-flex justify-content-center mb-1">
        <button class="btn btn-info your-button-class" @click="register">
          科目登録
        </button>
      </div>
      <div class="col-6 d-flex justify-content-center mb-1">
        <button class="btn btn-info your-button-class" @click="submit">
          アナリティクス
        </button>
      </div>
    </div>

    <div class="logout-container">
      <p @click="logout" class="clickable-text logout-text">Logout</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopView",
  computed: {
    // Vuex ストアからユーザー名を取得
    username() {
      return this.$store.getters.getUsername;
    },
  },
  methods: {
    subject() {
      this.$router.push({ name: "subject" });
    },
    register() {
      this.$router.push({ name: "register" });
    },
    student() {
      this.$router.push({ name: "student" });
    },
    logout() {
      // ログアウト処理
      // Vuex ストアからユーザー名を削除
      this.$store.commit("setUsername", "");
      // ログインページにリダイレクト
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style>
.header-container {
  position: absolute;
  top: 0;
  left: 70px; /* ここを調整して左にずらす */
  padding: 100px; /* 必要に応じて調整 */
}

.text-white {
  color: white;
  font-size: 70px;
}
.your-button-class {
  background-color: #4e777c;
  color: white;
  margin: 10px 1px; /* 上下の余白は10px、左右の余白は5pxに設定 */
  width: 390px;
  height: 200px;
  padding: 0;
  border: 1px solid #bff7ff;
  border-radius: 15px;
  font-size: 70px;
  font-weight: bold;
}
.logout-container {
  position: relative;
  margin-top: 10px;
  left: -550px;
  font-size: 50px;
  /* 必要に応じて他のスタイル */
}
.logout-text {
  position: absolute;
  color: white;

  font-weight: bold;

  z-index: 1000;
  /* 他のスタイル... */
}
.button-container {
  width: 830px;
  margin-top: 100px;
}
</style>
