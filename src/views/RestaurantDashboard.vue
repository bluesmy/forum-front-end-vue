<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">{{ restaurant.categoryName }}</p>
    </div>
    <hr />
    <ul>
      <li>評論數：{{restaurant.commentsLength}}</li>
      <li>瀏覽次數：{{restaurant.viewCounts}}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">回上一頁</button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 4,
    name: "Adalberto Anderson",
    tel: "313.718.9513 x0422",
    address: "3047 Marge Key",
    opening_hours: "08:00",
    description:
      " ufun\r\n \r\nQuaerat molestiae placeat fuga et vero neque perferendis qui et. Neque ut a hic dignissimos ea voluptas. Dignissimos distinctio perspiciatis minima.\r\n \r\nRecusandae ut et. Aut ipsum officia voluptatem soluta maiores atque quia. Veniam temporibus occaecati sunt consequuntur tempora dolore. Accusamus qui eum. Possimus dolore et sequi expedita praesentium sed dolore.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=61.21382535340547",
    viewCounts: 508,
    createdAt: "2020-02-28T14:38:32.000Z",
    updatedAt: "2020-03-26T16:15:15.000Z",
    CategoryId: 4,
    Category: {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z"
    },
    Comments: [
      {
        id: 4,
        text: "In aut natus qui tempora consequatur.",
        UserId: 1,
        RestaurantId: 4,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: true,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-02T17:09:40.000Z"
        }
      },
      {
        id: 54,
        text: "Harum neque non repellendus eaque id et et aut.",
        UserId: 2,
        RestaurantId: 4,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
          isAdmin: false,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-05T12:30:53.000Z"
        }
      },
      {
        id: 104,
        text: "Et consequuntur atque officiis beatae.",
        UserId: 2,
        RestaurantId: 4,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
          isAdmin: false,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-05T12:30:53.000Z"
        }
      },
      {
        id: 3662,
        text: "123",
        UserId: 1,
        RestaurantId: 4,
        createdAt: "2020-03-17T11:57:55.000Z",
        updatedAt: "2020-03-17T11:57:55.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: true,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-02T17:09:40.000Z"
        }
      }
    ]
  }
};

export default {
  name: "RestaurantDashboard",
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        commentsLength: 0,
        viewCounts: 0
      }
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);
      const { restaurant } = dummyData;
      const { id, name, Category, Comments, viewCounts } = restaurant;
      this.restaurant = {
        ...this.restaurant,
        id,
        name,
        categoryName: Category ? Category.name : "未分類",
        commentsLength: Comments.length,
        viewCounts
      };
    }
  }
};
</script>