(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2ec8"],{"25d3":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[e.isLoading?a("Spinner"):[a("div",[a("h1",[e._v(e._s(e.restaurant.name))]),a("p",{staticClass:"badge badge-secondary mt-1 mb-3"},[e._v(e._s(e.restaurant.categoryName))])]),a("hr"),a("ul",[a("li",[e._v("評論數："+e._s(e.restaurant.commentsLength))]),a("li",[e._v("瀏覽次數："+e._s(e.restaurant.viewCounts))])]),a("a",{attrs:{href:"#"},on:{click:function(t){return e.$router.back()}}},[e._v("回上一頁")])]],2)},r=[],s=(a("b0c0"),a("5530")),i=(a("96cf"),a("1da1")),o=a("c4c3"),c=a("2fa3"),u=a("2375"),d={name:"RestaurantDashboard",components:{Spinner:u["a"]},data:function(){return{restaurant:{id:-1,name:"",categoryName:"",commentsLength:0,viewCounts:0},isLoading:!0}},created:function(){var e=this.$route.params.id;this.fetchRestaurant(e)},beforeRouteUpdate:function(e,t,a){var n=e.params.id;this.fetchRestaurant(n),a()},methods:{fetchRestaurant:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,r,i,u,d,m,h,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isLoading=!0,a.next=4,o["a"].getRestaurant({restaurantId:e});case 4:if(n=a.sent,r=n.data,"error"!==r.status){a.next=8;break}throw new Error(r.message);case 8:i=r.restaurant,u=i.id,d=i.name,m=i.Category,h=i.Comments,l=i.viewCounts,t.restaurant=Object(s["a"])({},t.restaurant,{id:u,name:d,categoryName:m?m.name:"未分類",commentsLength:h.length,viewCounts:l}),t.isLoading=!1,a.next=18;break;case 13:a.prev=13,a.t0=a["catch"](0),t.isLoading=!1,console.log(a.t0.message),c["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 18:case"end":return a.stop()}}),a,null,[[0,13]])})))()}}},m=d,h=a("2877"),l=Object(h["a"])(m,n,r,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0b2ec8.33ede51e.js.map