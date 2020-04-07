<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? 'admin' : 'user' }}</td>
          <td>
            <button
              v-if="currentUser.id !== user.id"
              type="button"
              class="btn btn-link"
              @click.stop.prevent="toggleUserRole({ userId: user.id, isAdmin: user.isAdmin })"
            >{{ user.isAdmin ? 'set as user' : 'set as admin' }}</button>
          </td>
        </tr>
        <tr></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AdminNav from "@/components/AdminNav";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    AdminNav
  },
  // 3. 定義 Vue 中使用的 data 資料
  data() {
    return {
      users: []
    };
  },
  computed: {
    ...mapState(["currentUser"])
  },
  // 5. 調用 `fetchUsers` 方法
  created() {
    this.fetchUsers();
  },
  methods: {
    // 4. 定義 `fetchUsers` 方法，把 `dummyData` 帶入 Vue 物件
    async fetchUsers() {
      try {
        const { data } = await adminAPI.users.get();
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.users = data.users;
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取得會員資料，請稍後再試"
        });
      }
    },
    toggleUserRole({ userId, isAdmin }) {
      console.log(isAdmin);
      // TODO: 透過 API 告知伺服器欲修改的User role...

      this.users = this.users.map(user => {
        if (user.id !== userId) {
          return user;
        }

        return {
          ...user,
          isAdmin: !user.isAdmin
        };
      });
    }
  }
};
</script>