<template>
  <div class="subject-view" style="height: 100vh; background-color: #252b30">
    <button class="triangle-button" @click="triangleButtonClicked"></button>
    <h1 style="color: white; font-size: 40px">授業選択画面</h1>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.username }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DynamicTable",
  methods: {
    triangleButtonClicked() {
      this.$router.push({ name: "subject" });
    },
  },
  data() {
    return {
      users: [
        { firstName: "Mark", lastName: "Otto", username: "@mdo" },
        { firstName: "Jacob", lastName: "Thornton", username: "@fat" },
        { firstName: "Larry", lastName: "Bird", username: "@twitter" },
      ],
    };
  },
};
</script>

<style>
.triangle-button {
  width: 0;
  height: 0;
  border-top: 30px solid transparent; /* 上の透明なボーダー */
  border-bottom: 30px solid transparent; /* 下の透明なボーダー */
  border-right: 60px solid #bff7ff; /* 右側の青いボーダー */
  background-color: transparent;
  cursor: pointer;
}
.table tr {
  border: 1px solid black;
}
</style>
