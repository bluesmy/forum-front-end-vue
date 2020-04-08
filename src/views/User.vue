<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
      <div class="card mb-3">
        <!-- UserProfileCard -->
        <UserProfileCard
          :user="user"
          :is-current-user="currentUser.id === user.id"
          :initial-is-followed="isFollowed"
        />
      </div>
      <div class="row">
        <div class="col-md-4">
          <!-- UserFollowingsCard -->
          <UserFollowingsCard :followings="followings" />
          <br />
          <!-- UserFollowersCard -->
          <UserFollowersCard :followers="followers" @change-followers="fetchUser" />
        </div>
        <div class="col-md-8">
          <!-- UserCommentsCard -->
          <UserCommentsCard :comments="comments" />
          <br />
          <!-- UserFavoritedRestaurantsCard -->
          <UserFavoritedRestaurantsCard :favoritedRestaurants="favoritedRestaurants" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserProfileCard from "./../components/UserProfileCard";
import UserFollowingsCard from "./../components/UserFollowingsCard";
import UserFollowersCard from "./../components/UserFollowersCard";
import UserCommentsCard from "./../components/UserCommentsCard";
import UserFavoritedRestaurantsCard from "./../components/UserFavoritedRestaurantsCard";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import Spinner from "./../components/Spinner";

export default {
  name: "User",
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
    Spinner
  },
  data() {
    return {
      user: {
        id: -1,
        name: "",
        email: "",
        image: "",
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0
      },
      comments: [],
      favoritedRestaurants: [],
      followers: [],
      followings: [],
      isFollowed: false,
      isLoading: true
    };
  },
  computed: {
    ...mapState(["currentUser"])
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUser(userId);
  },
  beforeRouteUpdate(to, from, next) {
    const { id: userId } = to.params;
    this.fetchUser(userId);
    next();
  },
  methods: {
    async fetchUser(userId) {
      try {
        this.isLoading = true;
        const response = await usersAPI.get({ userId });
        console.log(response);
        const { data } = response;
        if (data.status === "error") {
          throw new Error(data.message);
        }

        const { profile, isFollowed } = data;
        const {
          id,
          image,
          name,
          email,
          Followings,
          Followers,
          Comments,
          FavoritedRestaurants
        } = profile;

        const commentSet = new Set();
        this.comments = Comments.filter(
          comment =>
            comment.Restaurant &&
            !commentSet.has(comment.Restaurant.id) &&
            commentSet.add(comment.Restaurant.id)
        );

        this.user = {
          ...this.user,
          id,
          image,
          name,
          email,
          followingsLength: Followings.length,
          followersLength: Followers.length,
          commentsLength: this.comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length
        };
        this.isFollowed = isFollowed;
        this.followings = Followings;
        this.followers = Followers;
        this.favoritedRestaurants = FavoritedRestaurants;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試"
        });
      }
    }
  }
};
</script>