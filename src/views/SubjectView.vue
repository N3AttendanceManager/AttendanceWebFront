<template>
  <div class="subject-v" style="height: 130vh; background-color: #252b30">
    <button class="triangle-button" @click="triangleButtonClicked"></button>
    <h1 style="color: white; font-size: 40px">科目一覧画面</h1>
    <div v-if="departments && departments.length">
      <h2 v-for="department in departments" :key="department.id">
        {{ department.name }}
        <div>
          <li
            v-for="subject in subjects.filter(
              (subject) => subject.departmentId === department.id
            )"
            :key="subject.id"
            @click="redirectToChooseSubject(subject.id)"
            class="clickable-text"
            style="cursor: pointer; color: white; font-size: 30px"
          >
            {{ subject.name }}
          </li>
        </div>
      </h2>
    </div>
    <p v-else-if="!departments.length">学科が見つかりません。</p>
    <p v-else>学科を読み込み中...</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SubjectView",
  data() {
    return {
      departments: [],
      subjects: [], // 科目一覧のための配列を追加
    };
  },
  created() {
    this.fetchDepartments();
    this.fetchSubjects(); // 科目一覧も取得
  },
  methods: {
    async fetchDepartments() {
      try {
        const response = await axios.get(
          "https://n3a.miyayu.xyz/api/department"
        );
        this.departments = response.data;
      } catch (error) {
        console.error("学科一覧の取得に失敗しました:", error);
      }
    },
    async fetchSubjects() {
      try {
        const response = await axios.get("https://n3a.miyayu.xyz/api/subject");
        this.subjects = response.data.subjects; // 科目のデータを格納
      } catch (error) {
        console.error("科目一覧の取得に失敗しました:", error);
      }
    },
    triangleButtonClicked() {
      this.$router.push("/top");
    },
    redirectToChooseSubject(subjectId) {
      this.$router.push({ path: "/choose", query: { subjectId } });
    },
  },
};
</script>

<style>
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
.subject-v h1 {
  color: white;
  font-size: 80px !important;
  position: relative; /* 相対位置指定 */
  top: 20px; /* 上方向への調整 */
  right: -120px;
}
.subject-v h2 {
  color: white;
  font-size: 60px !important;
  position: relative;
  top: 40px;
  right: -140px;
  /* text-decoration: underline; 下線を追加 */
}

.clickable-text {
  margin-top: 10px;
  cursor: pointer;
  color: white;
  font-size: 40px !important;
  position: relative;
  top: 0;
  right: -20px;
  font-weight: bold;
}
</style>
