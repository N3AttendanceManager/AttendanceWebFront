<template>
  <div
    class="d-flex justify-content-center align-items-center"
    style="height: 95vh; background-color: #252b30"
  >
    <div style="width: 100%; max-width: 400px">
      <h1
        class="text-center text-white mb-5"
        style="
          font-weight: 700;
          font-size: 45px;
          position: absolute;
          top: 20%;
          left: 35%;
          transform: translate(-50%, -50%);
          width: 400px;
          height: 34px;
        "
      >
        出欠管理アプリ
      </h1>

      <form
        class="text-center"
        style="
          position: absolute;
          top: 55%;
          left: 50%;
          transform: translate(-50%, -50%);
        "
      >
        <div class="text-center">
          <p class="text-danger" v-if="errorMessage">{{ errorMessage }}</p>
        </div>
        <!--ID入力テキストボックス-->
        <div class="mb-3">
          <p class="text-left" style="color: white">ID</p>
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
          <p class="text-left" style="color: white">パスワード</p>
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
          <span
            class="position-absolute top-0 end-0 h-100 d-flex align-items-center pe-3"
            @click="showPassword = !showPassword"
          >
            <i
              :class="showPassword ? 'bi bi-eye-fill' : 'bi bi-eye-slash-fill'"
            ></i>
          </span>
        </div>
        <!--ログインボタン-->
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
          ログイン
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      showPassword: false,
      name: "",
      password: "",
      correctName: "Taguchi", // 仮のユーザー名
      correctPassword: "ryotaro", // 仮のパスワード
      errorMessage: "",
    };
  },
  methods: {
    submit() {
      // ユーザー名とパスワードが正しいか確認
      if (
        this.name === this.correctName &&
        this.password === this.correctPassword
      ) {
        // Vuexストアにユーザー名をセット
        this.$store.commit("setUsername", this.name);

        // ログイン成功時にTopViewにリダイレクトし、ユーザーIDを渡す
        this.$router.push({ name: "top", query: { userId: this.name } });
      } else {
        // ログイン失敗時の処理
        this.errorMessage = "ログインに失敗しました。";
      }
    },
  },
};
</script>

<style>
.text-danger {
  font-size: 20px;
  font-weight: bold;
}
</style>
