<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input v-model="newCategoryName" type="text" class="form-control" placeholder="新增餐廳類別..." />
        </div>
        <div class="col-auto">
          <button
            type="button"
            class="btn btn-primary"
            :disabled="isProcessing"
            @click.stop.prevent="createCategory"
          >新增</button>
        </div>
      </div>
    </form>
    <Spinner v-if="isLoading" />
    <table v-else class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">{{ category.id }}</th>
          <td class="position-relative">
            <div v-show="!category.isEditing" class="category-name">{{ category.name }}</div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            />
            <span v-show="category.isEditing" class="cancel" @click="handleCancel(category.id)">✕</span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="toggleIsEditing(category.id)"
            >Edit</button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              :disabled="isProcessing"
              @click.stop.prevent="updateCategory({ categoryId: category.id, name: category.name })"
            >Save</button>
            <button
              type="button"
              class="btn btn-link mr-2"
              :disabled="isProcessing"
              @click.stop.prevent="deleteCategory(category.id)"
            >Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "@/components/AdminNav";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import Spinner from "./../components/Spinner";

export default {
  components: {
    AdminNav,
    Spinner
  },
  data() {
    return {
      newCategoryName: "",
      categories: [],
      isProcessing: false,
      isLoading: true
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        this.isLoading = true;
        const { data, statusText } = await adminAPI.categories.get();

        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        // 在每一個 category 中都添加一個 isEditing 屬性
        this.categories = data.categories.map(category => ({
          ...category,
          isEditing: false
        }));
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得分類資料，請稍候再試"
        });
      }
    },
    async createCategory() {
      try {
        this.isProcessing = true;

        const { data, statusText } = await adminAPI.categories.create({
          name: this.newCategoryName
        });

        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        // 將新的類別添加到陣列中
        this.categories.push({
          id: data.categoryId,
          name: this.newCategoryName,
          isEditing: false
        });

        this.isProcessing = false;
        this.newCategoryName = ""; // 清空原本欄位中的內容
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法新增餐廳類別，請稍候再試"
        });
      }
    },
    async deleteCategory(categoryId) {
      try {
        this.isProcessing = true;

        const { data } = await adminAPI.categories.delete({ categoryId });

        if (data.status === "error") {
          throw new Error(data.message);
        }

        // 將該餐廳類別從陣列中移除
        this.categories = this.categories.filter(
          category => category.id !== categoryId
        );
        this.isProcessing = false;
        Toast.fire({
          icon: "success",
          title: "成功刪除該餐廳類別"
        });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法刪除該餐廳類別，請稍候再試"
        });
      }
    },
    toggleIsEditing(categoryId) {
      this.categories = this.categories.map(category => {
        if (category.id !== categoryId) return category;
        // 如果迴圈中的 category.id 是欲修改的 categoryId 則改變 isEditing 的值
        return {
          ...category,
          nameCached: category.name,
          isEditing: !category.isEditing
        };
      });
    },
    async updateCategory({ categoryId, name }) {
      try {
        this.isProcessing = true;

        const { data } = await adminAPI.categories.update({
          categoryId,
          name
        });

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.isProcessing = false;
        this.toggleIsEditing(categoryId);
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法更新餐廳類別，請稍候再試"
        });
      }
    },
    handleCancel(categoryId) {
      this.categories = this.categories.map(category => {
        if (category.id !== categoryId) {
          return category;
        }

        // 將原本的類別名稱還回去
        return {
          ...category,
          name: category.nameCached
        };
      });
      this.toggleIsEditing(categoryId);
    }
  }
};
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>