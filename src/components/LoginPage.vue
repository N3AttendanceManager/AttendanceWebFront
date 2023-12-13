<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title class="text-h-center">ログイン画面</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field label="ID" required></v-text-field>
              <v-text-field
                label="パスワード"
                type="password"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary">ログイン</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoginScreen",
  // ここにログインロジックを取り扱うためのJavaScriptを追加します
};
</script>

<style scoped>
.text-h-center {
  text-align: center;
}
</style>
