<template>
  <div class="class-view" style="height: 100vh; background-color: #252b30">
    <button class="triangle-button" @click="triangleButtonClicked"></button>
    <h1 style="color: white; font-size: 40px">授業選択画面</h1>
    <div v-if="classes.length > 0">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>科目ID</th>
            <th>開始日時</th>
            <th>終了日時</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="classItem in classes"
            :key="classItem.id"
            @click="redirectToSubjectDetail(classItem.id, classItem.startOn)"
          >
            <td>{{ classItem.subjectId }}</td>
            <td>{{ classItem.startOn }}</td>
            <td>{{ classItem.endOn }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else style="color: white; font-family: bold; font-size: large">
      授業が見つかりません。
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ChooseSubject",
  data() {
    return {
      classes: [], // 初期状態の授業一覧は空
    };
  },
  async created() {
    await this.fetchClasses();
  },
  methods: {
    async fetchClasses() {
      try {
        // 全ての授業データを取得
        const response = await axios.get("https://n3a.miyayu.xyz/api/class");
        const allClasses = response.data.classes;
        // URLクエリから科目IDを取得
        const subjectId = this.$route.query.subjectId;
        // 科目IDに基づいてフィルタリング
        this.classes = allClasses.filter(
          (c) => c.subjectId === parseInt(subjectId)
        );
      } catch (error) {
        console.error("授業一覧の取得に失敗しました:", error);
      }
    },
    redirectToSubjectDetail(classId, startOn) {
      // 遷移先のルート名が'SubjectDetail'であることを想定
      this.$router.push({ name: "detail", query: { classId, startOn } });
    },
    triangleButtonClicked() {
      this.$router.push("/subject");
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
.class-view h1 {
  color: white;
  font-size: 80px !important;
  position: relative; /* 相対位置指定 */
  top: 20px; /* 上方向への調整 */
  right: -120px;
  padding-bottom: 30px;
}
.class-view p {
  right: -130px;
  position: relative; /* 相対位置指定 */
  top: 20px; /* 上方向への調整 */
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
.subject-view {
  padding-top: 50px; /* 上からの距離 */
  padding-right: 20px; /* 右からの距離 */
  padding-left: 20px; /* 左からの距離 */
}
.table {
  margin-top: 30px;
}
</style>
