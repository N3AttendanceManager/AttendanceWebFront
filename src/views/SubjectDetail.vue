<template>
  <div class="subject-detail" style="height: 100vh; background-color: #252b30">
    <button class="triangle-button" @click="triangleButtonClicked"></button>
    <h1 style="color: white; font-size: 40px">授業詳細画面</h1>
    <div v-if="students && students.length > 0">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>生徒ID</th>
            <th>名前</th>
            <th>出席状況</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.id">
            <td>{{ student.studentId }}</td>
            <td>{{ student.name }}</td>
            <td>{{ getAttendanceStatus(student.id) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>出席情報がありません。</div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "SubjectDetail",
  setup() {
    const router = useRouter();
    const students = ref([]);
    const attendances = ref([]);

    const fetchAttendanceData = async () => {
      const classId = router.currentRoute.value.query.classId;
      try {
        const response = await axios.get(
          `https://n3a.miyayu.xyz/api/attendance`,
          {
            params: { classId },
          }
        );
        attendances.value = response.data.attendances
          ? response.data.attendances
          : [];
      } catch (error) {
        console.error("出席情報の取得に失敗しました:", error);
        attendances.value = [];
      }
    };

    const fetchStudentsData = async () => {
      const classId = router.currentRoute.value.query.classId;
      try {
        const response = await axios.get(`https://n3a.miyayu.xyz/api/student`, {
          params: { classId },
        });
        students.value = response.data.students ? response.data.students : [];
      } catch (error) {
        console.error("生徒情報の取得に失敗しました:", error);
        students.value = [];
      }
    };

    const getAttendanceStatus = (studentId) => {
      const attendance = attendances.value.find(
        (a) => a.studentId.toString() === studentId.toString()
      );
      return attendance ? "出席" : "欠席";
    };

    const triangleButtonClicked = () => {
      router.go(-1); // 一つ前のページに戻る
    };

    onMounted(async () => {
      await fetchAttendanceData();
      await fetchStudentsData();
    });

    return {
      students,
      getAttendanceStatus,
      triangleButtonClicked,
    };
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
  position: relative;
  top: 30px;
  right: -30px;
}
.subject-detail h1 {
  color: white;
  font-size: 80px !important;
  position: relative; /* 相対位置指定 */
  top: 20px; /* 上方向への調整 */
  right: -120px;
  padding-bottom: 3%;
}
.table thead th {
  background-color: #4e777c;
  color: white;
}
.table tbody td {
  background-color: #3d4449;
  color: white;
}
.table th,
.table td {
  border-color: #bff7ff;
}
</style>
