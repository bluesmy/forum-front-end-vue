<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1>餐廳描述頁</h1>
      <!-- 餐廳資訊頁 RestaurantDetail -->
      <RestaurantDetail :initial-restaurant="restaurant" />
      <hr />
      <!-- 餐廳評論 RestaurantComments -->
      <RestaurantComments
        :restaurant-comments="restaurantComments"
        @after-delete-comment="afterDeleteComment"
      />
      <!-- 新增評論 CreateComment -->
      <CreateComment :restaurant-id="restaurant.id" @after-create-comment="afterCreateComment" />
    </template>
  </div>
</template>

<script>
import RestaurantDetail from "./../components/RestaurantDetail";
import RestaurantComments from "./../components/RestaurantComments";
import CreateComment from "./../components/CreateComment";
// STEP 1: 匯入 restaurantAPI 和 Toast 顯示提示
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
// STEP 1: 載入 Vuex
import { mapState } from "vuex";
import Spinner from "./../components/Spinner";

// STEP 6: 移除 dummyData

// STEP 4: 移除 dummyUser

export default {
  name: "Restaurant",
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
    Spinner
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: [],
      isLoading: true
      // STEP 3: 移除 currentUser 屬性
    };
  },
  // STEP 2: 從 Vuex 取得 currentUser 的資料
  computed: {
    ...mapState(["currentUser"])
  },
  beforeRouteUpdate(to, from, next) {
    const { id: restaurantId } = to.params;
    this.fetchRestaurant(restaurantId);
    next();
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    // STEP 2: 改用 async...await 語法
    async fetchRestaurant(restaurantId) {
      try {
        this.isLoading = true;
        // STEP 3: 透過 restaurantsAPI 取得餐廳資訊
        const { data, statusText } = await restaurantsAPI.getRestaurant({
          restaurantId
        });

        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        // STEP 4: 將取得的資料帶入 Vue 的 data
        this.restaurant = {
          id: data.restaurant.id,
          name: data.restaurant.name,
          categoryName: data.restaurant.Category.name,
          image: data.restaurant.image,
          openingHours: data.restaurant.opening_hours,
          tel: data.restaurant.tel,
          address: data.restaurant.address,
          description: data.restaurant.description,
          isFavorited: data.isFavorited,
          isLiked: data.isLiked
        };

        this.restaurantComments = data.restaurant.Comments;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        // STEP 5: 錯誤處理
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試"
        });
      }
    },
    afterDeleteComment(commentId) {
      // 以 filter 保留未被選擇的 comment.id
      this.restaurantComments = this.restaurantComments.filter(
        comment => comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      });
    }
  }
};
</script>