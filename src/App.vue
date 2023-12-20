<template>
  <v-app style="background-color: #252b30">
    <v-row justify="center" align="center" style="height: 100vh">
      <v-col cols="12" sm="8" md="4">
        <v-card
          width="1000px"
          class="mx-auto mt-3"
          style="background-color: #252b30"
        >
          <v-card-title>
            <h1
              class="display-1"
              :style="{
                color: 'white',
              }"
            >
              出欠管理アプリ
            </h1>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                prepend-icon="mdi-account-circle"
                label="ユーザ名"
                v-model="name"
                style="background-color: #edfdff"
              />
              <v-text-field
                style="background-color: #edfdff"
                v-bind:type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                prepend-icon="mdi-lock"
                v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                label="パスワード"
                v-model="password"
              />
              <v-btn
                class="info"
                :style="{
                  backgroundColor: '#82B7BE',
                  color: 'white',
                }"
                @click="submit"
                >ログイン</v-btn
              >
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      showPassword: false,
      name: "",
      password: "",
    };
  },
  methods: {
    submit() {
      console.log(this.name, this.password);
    },
  },
};
</script>
