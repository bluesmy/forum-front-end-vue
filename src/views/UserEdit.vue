<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
const dummyUser = {
  profile: {
    id: 2,
    name: "user1",
    email: "user1@example.com",
    password: "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
    isAdmin: false,
    image: null,
    createdAt: "2020-02-28T14:38:32.000Z",
    updatedAt: "2020-03-05T12:30:53.000Z",
    Comments: [
      {
        id: 7,
        text: "Delectus voluptatem debitis unde et ut occaecati.",
        UserId: 2,
        RestaurantId: 7,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 7,
          name: "Miss Letitia Will",
          tel: "(770) 750-6811 x99988",
          address: "8145 Laisha Keys",
          opening_hours: "08:00",
          description:
            "Aut earum molestiae et ducimus adipisci ut maxime.\nVeritatis labore illum et similique cumque qui qui officia omnis.\nQui laudantium amet enim natus.\nVoluptatem quia est nam ut esse et.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=44.558618229229",
          viewCounts: 10,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-27T06:59:44.000Z",
          CategoryId: 5
        }
      },
      {
        id: 10,
        text:
          "Nulla accusamus exercitationem dolor dolorum mollitia velit corporis.",
        UserId: 2,
        RestaurantId: 10,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 10,
          name: "Corbin Gusikowski",
          tel: "(506) 198-3977",
          address: "4747 Lubowitz Brook",
          opening_hours: "08:00",
          description:
            "Aut quia aut ea nostrum quae doloremque necessitatibus. Eos illo quia et. Culpa repellat eos minus necessitatibus aut debitis accusamus.\n \rAssumenda aut itaque corrupti soluta et aut est. Hic non dignissimos odit qui. Optio doloribus rerum molestiae dolorem commodi. Culpa et officiis.\n \rCulpa laborum ea eos praesentium enim quasi eos. Nobis praesentium maxime soluta delectus eveniet reiciendis aut. Voluptates nesciunt et explicabo.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=6.84802493817025",
          viewCounts: 3,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-27T10:27:57.000Z",
          CategoryId: 5
        }
      },
      {
        id: 14,
        text: "Autem et molestiae neque quia temporibus.",
        UserId: 2,
        RestaurantId: 14,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 14,
          name: "Boyd Abbott",
          tel: "172-684-6335",
          address: "50119 Nader Via",
          opening_hours: "08:00",
          description:
            "Aut aut enim sint sed. Vero qui voluptas voluptatem velit aut et numquam. Aut nesciunt sed aliquam. Non pariatur deserunt est. Quod illo dolorem sint et inventore culpa veritatis libero a.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=67.78299128798855",
          viewCounts: 7416,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-22T05:12:58.000Z",
          CategoryId: 4
        }
      },
      {
        id: 18,
        text: "Beatae doloremque repellendus doloribus ex.",
        UserId: 2,
        RestaurantId: 18,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 18,
          name: "Ocie Deckow",
          tel: "837.390.8872 x4985",
          address: "74987 Hazel Alley",
          opening_hours: "08:00",
          description: "sit ut voluptas",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=86.47034719848816",
          viewCounts: 1,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-01T11:02:39.000Z",
          CategoryId: 3
        }
      },
      {
        id: 19,
        text: "Velit et quo repellat eligendi dolorem.",
        UserId: 2,
        RestaurantId: 19,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 19,
          name: "Coby Satterfield",
          tel: "632.061.5397 x06961",
          address: "714 Irving Row",
          opening_hours: "08:00",
          description: "praesentium",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=72.92466104442083",
          viewCounts: 0,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z",
          CategoryId: 3
        }
      },
      {
        id: 22,
        text: "Laborum hic iusto nulla.",
        UserId: 2,
        RestaurantId: 22,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 22,
          name: "Franco Mraz IV",
          tel: "322.919.2004 x425",
          address: "700 Swift Plains",
          opening_hours: "08:00",
          description: "Nisi qui enim vitae maiores nihil cupiditate qui et.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=45.40088503085442",
          viewCounts: 0,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z",
          CategoryId: 3
        }
      },
      {
        id: 23,
        text: "Neque sed voluptatem est expedita.",
        UserId: 2,
        RestaurantId: 23,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 23,
          name: "Jacynthe Trantow V",
          tel: "995-960-3344 x85204",
          address: "67354 Jonas Light",
          opening_hours: "08:00",
          description:
            "Voluptatem aut cum officia repudiandae doloremque molestiae voluptas. Quia nostrum amet sit nam ipsum dolor veritatis assumenda dignissimos. Debitis a quis ducimus non ex. Facilis omnis impedit quis necessitatibus nobis officiis. Numquam alias similique.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=40.761155965667314",
          viewCounts: 0,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z",
          CategoryId: 5
        }
      },
      {
        id: 26,
        text:
          "Exercitationem ex a porro non earum corporis inventore officiis architecto.",
        UserId: 2,
        RestaurantId: 26,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 26,
          name: "Sarai Breitenberg",
          tel: "114-064-6388 x05451",
          address: "118 Cole Dale",
          opening_hours: "08:00",
          description:
            "Reiciendis et voluptatibus officiis magni enim quia pariatur ut. Fugit illum quia totam qui omnis facere minus. Dolores qui ullam magni enim repellat impedit hic ab aspernatur. Doloribus qui deleniti quas ipsum aut et. Odit perspiciatis cupiditate inventore omnis. Ut eum voluptatem facere quaerat aliquam doloremque perspiciatis id officiis.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=93.53330481196743",
          viewCounts: 0,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z",
          CategoryId: 4
        }
      },
      {
        id: 36,
        text: "Quos molestiae sapiente cupiditate consequatur quia.",
        UserId: 2,
        RestaurantId: 36,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 36,
          name: "Telly Cole",
          tel: "1-857-419-5226",
          address: "307 Schoen Summit",
          opening_hours: "08:00",
          description:
            "Et dolores quis cum expedita voluptatem. Aspernatur et perspiciatis atque sit cupiditate sint voluptatum. Omnis magnam libero.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=75.63614517186328",
          viewCounts: 0,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z",
          CategoryId: 3
        }
      },
      {
        id: 40,
        text: "Magnam ullam esse id dolores praesentium voluptatem sit magnam.",
        UserId: 2,
        RestaurantId: 40,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 40,
          name: "Jayde King",
          tel: "1-843-220-5751 x884",
          address: "433 Elroy Trail",
          opening_hours: "08:00",
          description:
            "Non sint eos non. Qui laboriosam inventore ipsa libero rem sed iste quas.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=51.75330402381499",
          viewCounts: 2,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-08T13:13:17.000Z",
          CategoryId: 1
        }
      },
      {
        id: 43,
        text: "Consequatur facilis aliquam nulla.",
        UserId: 2,
        RestaurantId: 43,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 43,
          name: "Mrs. Noemy Watsica",
          tel: "(252) 981-9430 x3227",
          address: "1218 Dariana Ports",
          opening_hours: "08:00",
          description:
            "Animi rerum suscipit iusto id autem et. Facilis id necessitatibus quia quo est perferendis quia velit. Ea dicta aspernatur assumenda alias autem repellat odit exercitationem. Rerum praesentium voluptatem corrupti soluta aut autem sapiente dolor.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=23.889387774329695",
          viewCounts: 0,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z",
          CategoryId: 5
        }
      },
      {
        id: 44,
        text:
          "Voluptatum sunt autem et tempora minima esse repudiandae sed harum.",
        UserId: 2,
        RestaurantId: 44,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 44,
          name: "Madge Moen",
          tel: "794.584.3958 x1725",
          address: "6233 Annamae Mission",
          opening_hours: "08:00",
          description: "sed ut illum",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=33.163077027772346",
          viewCounts: 0,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z",
          CategoryId: 3
        }
      },
      {
        id: 46,
        text: "Nihil voluptatem error magnam rerum quo hic in quia.",
        UserId: 2,
        RestaurantId: 46,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 46,
          name: "Mr. Price Heathcote",
          tel: "1-234-170-6861",
          address: "178 Collins Mission",
          opening_hours: "08:00",
          description: "Unde maiores error ex.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=38.75335489939356",
          viewCounts: 20,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-24T11:04:19.000Z",
          CategoryId: 4
        }
      },
      {
        id: 54,
        text: "Harum neque non repellendus eaque id et et aut.",
        UserId: 2,
        RestaurantId: 4,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 4,
          name: "Adalberto Anderson",
          tel: "313.718.9513 x0422",
          address: "3047 Marge Key",
          opening_hours: "08:00",
          description:
            " ufun\r\n \r\nQuaerat molestiae placeat fuga et vero neque perferendis qui et. Neque ut a hic dignissimos ea voluptas. Dignissimos distinctio perspiciatis minima.\r\n \r\nRecusandae ut et. Aut ipsum officia voluptatem soluta maiores atque quia. Veniam temporibus occaecati sunt consequuntur tempora dolore. Accusamus qui eum. Possimus dolore et sequi expedita praesentium sed dolore.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=61.21382535340547",
          viewCounts: 512,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-27T10:26:09.000Z",
          CategoryId: 4
        }
      },
      {
        id: 66,
        text: "Laudantium eum vel id.",
        UserId: 2,
        RestaurantId: 16,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 16,
          name: "Aaliyah Lakin",
          tel: "1-235-923-9473 x43870",
          address: "1951 Jakubowski Villages",
          opening_hours: "08:00",
          description: "quidem",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=91.06034163072859",
          viewCounts: 0,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z",
          CategoryId: 5
        }
      },
      {
        id: 69,
        text: "Consectetur nulla natus doloribus.",
        UserId: 2,
        RestaurantId: 19,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 19,
          name: "Coby Satterfield",
          tel: "632.061.5397 x06961",
          address: "714 Irving Row",
          opening_hours: "08:00",
          description: "praesentium",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=72.92466104442083",
          viewCounts: 0,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z",
          CategoryId: 3
        }
      },
      {
        id: 71,
        text: "Voluptate nisi est.",
        UserId: 2,
        RestaurantId: 21,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 21,
          name: "Candido Connelly",
          tel: "306-741-4682",
          address: "0922 Lauren Ferry",
          opening_hours: "08:00",
          description:
            "Eos eum voluptatibus dolorem ut. Voluptate qui maxime voluptas veritatis sit. Consequatur eligendi deleniti sed itaque aut.\r\n \r\nSit recusandae ipsam repudiandae laboriosam recusandae harum qui quia dolores. Sit eum aliquid vel voluptas minus voluptatem. Quam sit natus id enim praesentium voluptas. Iste in harum quia culpa magni rerum ea iure.\r\n \r\nCupiditate quasi neque distinctio sed consequatur nulla. Inventore possimus similique beatae. Qui consequatur provident amet eveniet repudiandae sint officia. Nobis non ducimus corporis. Iure dolor corporis.",
          image: "https://i.imgur.com/9r8MUJe.jpg",
          viewCounts: 3707,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-09T06:12:01.000Z",
          CategoryId: 1
        }
      },
      {
        id: 77,
        text: "Dolor quaerat deleniti nemo doloremque dolorem vitae id eos.",
        UserId: 2,
        RestaurantId: 27,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 27,
          name: "Ms. Alex Wuckert",
          tel: "(598) 990-0851",
          address: "290 Davis Ferry",
          opening_hours: "08:00",
          description:
            "Consequatur similique earum accusamus. Veritatis facilis non. Architecto sunt velit consequatur cumque rem sit occaecati et beatae. Sequi tenetur in aspernatur labore reprehenderit. Sit velit nulla dolorem aut ea sapiente.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=17.861944116977146",
          viewCounts: 0,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z",
          CategoryId: 1
        }
      },
      {
        id: 80,
        text: "Sunt quod nihil.",
        UserId: 2,
        RestaurantId: 30,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 30,
          name: "Nikita Boyer",
          tel: "(284) 625-0408 x71025",
          address: "101 Heidenreich Roads",
          opening_hours: "08:00",
          description:
            "Labore nihil ipsum quibusdam et laboriosam. Libero deleniti doloribus placeat sit velit rerum ipsam ut repudiandae. Aspernatur dolore doloremque eos. Molestiae animi ipsa labore officia.\n \rNon quaerat eos quidem aut quam facilis quia. Veniam soluta et excepturi ratione non eos repudiandae. Eos reprehenderit rerum soluta qui commodi dolorem rerum. Qui impedit unde alias deleniti. Doloremque unde distinctio.\n \rNumquam reiciendis ex pariatur tempore repellat. Perferendis nulla voluptatum et alias. Reiciendis inventore nihil atque et quia. Earum nobis aliquid voluptas error necessitatibus. Qui perspiciatis commodi aut qui est doloribus iure fuga.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=90.49719023698857",
          viewCounts: 0,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z",
          CategoryId: 2
        }
      },
      {
        id: 83,
        text: "In impedit rem qui explicabo.",
        UserId: 2,
        RestaurantId: 33,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 33,
          name: "Kenny Dach",
          tel: "(647) 053-5104 x9921",
          address: "41601 Lesch Orchard",
          opening_hours: "08:00",
          description:
            "Sequi quo fuga recusandae perspiciatis facere sed et asperiores. In unde id excepturi et repellendus tempore voluptatibus. Et quas et unde. Consequatur quae voluptas dolorem natus odit quis doloribus.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=18.95963061671191",
          viewCounts: 0,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z",
          CategoryId: 5
        }
      },
      {
        id: 84,
        text: "Incidunt velit qui.",
        UserId: 2,
        RestaurantId: 34,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 34,
          name: "Joy Bernhard",
          tel: "033-240-2167 x43925",
          address: "6384 Norbert Pike",
          opening_hours: "08:00",
          description: "Alias ut repellat et omnis quaerat cum.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=5.417775534122438",
          viewCounts: 3,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-01T11:16:42.000Z",
          CategoryId: 3
        }
      },
      {
        id: 87,
        text: "Odit occaecati aspernatur fugit et.",
        UserId: 2,
        RestaurantId: 37,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 37,
          name: "Ms. Nona Bergstrom",
          tel: "714.113.2795 x3906",
          address: "38244 Julian Locks",
          opening_hours: "08:00",
          description: "beatae sed consectetur",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=22.026378082051433",
          viewCounts: 0,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z",
          CategoryId: 1
        }
      },
      {
        id: 95,
        text: "Cum velit minus facilis nostrum autem.",
        UserId: 2,
        RestaurantId: 45,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 45,
          name: "Anjali Kassulke",
          tel: "313-500-9523 x7668",
          address: "356 Reanna Fall",
          opening_hours: "08:00",
          description: "dolore",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=37.65242985288428",
          viewCounts: 4,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-24T10:47:55.000Z",
          CategoryId: 1
        }
      },
      {
        id: 104,
        text: "Et consequuntur atque officiis beatae.",
        UserId: 2,
        RestaurantId: 4,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 4,
          name: "Adalberto Anderson",
          tel: "313.718.9513 x0422",
          address: "3047 Marge Key",
          opening_hours: "08:00",
          description:
            " ufun\r\n \r\nQuaerat molestiae placeat fuga et vero neque perferendis qui et. Neque ut a hic dignissimos ea voluptas. Dignissimos distinctio perspiciatis minima.\r\n \r\nRecusandae ut et. Aut ipsum officia voluptatem soluta maiores atque quia. Veniam temporibus occaecati sunt consequuntur tempora dolore. Accusamus qui eum. Possimus dolore et sequi expedita praesentium sed dolore.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=61.21382535340547",
          viewCounts: 512,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-27T10:26:09.000Z",
          CategoryId: 4
        }
      },
      {
        id: 108,
        text: "Tempore omnis numquam fugiat commodi et.",
        UserId: 2,
        RestaurantId: 8,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 8,
          name: "Mr. Johnny Abshire",
          tel: "333-243-4940 x9008",
          address: "075 Murray Stream",
          opening_hours: "08:00",
          description:
            "Qui omnis optio neque sit rerum nisi. Repellat qui perferendis explicabo pariatur harum recusandae debitis. Laborum eligendi dolores ullam aliquam reiciendis sit voluptates sint quaerat. Deserunt distinctio voluptatum eveniet. Excepturi nostrum saepe non et rem itaque quidem occaecati.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=15.225573809911651",
          viewCounts: 15,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-27T10:32:10.000Z",
          CategoryId: 5
        }
      },
      {
        id: 111,
        text: "Quae sed est ad minima aut.",
        UserId: 2,
        RestaurantId: 11,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 11,
          name: "Vergie Considine",
          tel: "351.951.8030 x0330",
          address: "8865 Conrad Mill",
          opening_hours: "08:00",
          description:
            "Quia omnis natus est praesentium dolores aliquid debitis omnis molestias.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=0.7508871784973614",
          viewCounts: 1,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-09T06:09:15.000Z",
          CategoryId: 5
        }
      },
      {
        id: 119,
        text: "Qui eum qui dignissimos est libero.",
        UserId: 2,
        RestaurantId: 19,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 19,
          name: "Coby Satterfield",
          tel: "632.061.5397 x06961",
          address: "714 Irving Row",
          opening_hours: "08:00",
          description: "praesentium",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=72.92466104442083",
          viewCounts: 0,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z",
          CategoryId: 3
        }
      },
      {
        id: 120,
        text: "Architecto mollitia beatae et.",
        UserId: 2,
        RestaurantId: 20,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 20,
          name: "Ms. Stephanie Smith",
          tel: "1-574-132-5696 x54763",
          address: "1610 Piper View",
          opening_hours: "08:00",
          description:
            "Fugit inventore placeat ullam rerum quo ut. Dolorem ipsam tempore quisquam porro aspernatur dicta beatae. Magni aut in. Fugiat sit qui aut. testet",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=38.787623335517175",
          viewCounts: 0,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-25T14:41:17.000Z",
          CategoryId: 3
        }
      },
      {
        id: 121,
        text: "Reprehenderit voluptatem tempora in et et et provident ut.",
        UserId: 2,
        RestaurantId: 21,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 21,
          name: "Candido Connelly",
          tel: "306-741-4682",
          address: "0922 Lauren Ferry",
          opening_hours: "08:00",
          description:
            "Eos eum voluptatibus dolorem ut. Voluptate qui maxime voluptas veritatis sit. Consequatur eligendi deleniti sed itaque aut.\r\n \r\nSit recusandae ipsam repudiandae laboriosam recusandae harum qui quia dolores. Sit eum aliquid vel voluptas minus voluptatem. Quam sit natus id enim praesentium voluptas. Iste in harum quia culpa magni rerum ea iure.\r\n \r\nCupiditate quasi neque distinctio sed consequatur nulla. Inventore possimus similique beatae. Qui consequatur provident amet eveniet repudiandae sint officia. Nobis non ducimus corporis. Iure dolor corporis.",
          image: "https://i.imgur.com/9r8MUJe.jpg",
          viewCounts: 3707,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-09T06:12:01.000Z",
          CategoryId: 1
        }
      },
      {
        id: 123,
        text: "Nulla exercitationem saepe temporibus id fugiat eos.",
        UserId: 2,
        RestaurantId: 23,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 23,
          name: "Jacynthe Trantow V",
          tel: "995-960-3344 x85204",
          address: "67354 Jonas Light",
          opening_hours: "08:00",
          description:
            "Voluptatem aut cum officia repudiandae doloremque molestiae voluptas. Quia nostrum amet sit nam ipsum dolor veritatis assumenda dignissimos. Debitis a quis ducimus non ex. Facilis omnis impedit quis necessitatibus nobis officiis. Numquam alias similique.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=40.761155965667314",
          viewCounts: 0,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z",
          CategoryId: 5
        }
      },
      {
        id: 125,
        text:
          "Laboriosam nihil vel qui natus inventore sequi esse et perferendis.",
        UserId: 2,
        RestaurantId: 25,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 25,
          name: "Adolf Cremin",
          tel: "615-211-0544 x15613",
          address: "602 Wilhelmine Lodge",
          opening_hours: "08:00",
          description: "Error omnis blanditiis.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=1.6110317847147781",
          viewCounts: 1,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-27T10:36:44.000Z",
          CategoryId: 4
        }
      },
      {
        id: 127,
        text: "Expedita id sit totam a cupiditate voluptas.",
        UserId: 2,
        RestaurantId: 27,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 27,
          name: "Ms. Alex Wuckert",
          tel: "(598) 990-0851",
          address: "290 Davis Ferry",
          opening_hours: "08:00",
          description:
            "Consequatur similique earum accusamus. Veritatis facilis non. Architecto sunt velit consequatur cumque rem sit occaecati et beatae. Sequi tenetur in aspernatur labore reprehenderit. Sit velit nulla dolorem aut ea sapiente.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=17.861944116977146",
          viewCounts: 0,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z",
          CategoryId: 1
        }
      },
      {
        id: 137,
        text:
          "Non dolorum sapiente rem voluptas temporibus nihil modi veritatis.",
        UserId: 2,
        RestaurantId: 37,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 37,
          name: "Ms. Nona Bergstrom",
          tel: "714.113.2795 x3906",
          address: "38244 Julian Locks",
          opening_hours: "08:00",
          description: "beatae sed consectetur",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=22.026378082051433",
          viewCounts: 0,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z",
          CategoryId: 1
        }
      },
      {
        id: 139,
        text: "Rem in eius numquam aut et sint.",
        UserId: 2,
        RestaurantId: 39,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 39,
          name: "Christy Bauch",
          tel: "1-370-634-6490 x59473",
          address: "756 Dicki Ports",
          opening_hours: "08:00",
          description: "Earum aut delectus et voluptatibus ipsam deserunt ex.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=5.459083807432652",
          viewCounts: 0,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z",
          CategoryId: 2
        }
      },
      {
        id: 140,
        text:
          "Ipsam dolores voluptate est quia quibusdam voluptatem aperiam et assumenda.",
        UserId: 2,
        RestaurantId: 40,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 40,
          name: "Jayde King",
          tel: "1-843-220-5751 x884",
          address: "433 Elroy Trail",
          opening_hours: "08:00",
          description:
            "Non sint eos non. Qui laboriosam inventore ipsa libero rem sed iste quas.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=51.75330402381499",
          viewCounts: 2,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-08T13:13:17.000Z",
          CategoryId: 1
        }
      },
      {
        id: 141,
        text: "Expedita inventore dolore.",
        UserId: 2,
        RestaurantId: 41,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 41,
          name: "Bulah Cummerata",
          tel: "1-272-941-4227 x5104",
          address: "468 Lemke Isle",
          opening_hours: "08:00",
          description:
            "Autem dolorem qui dignissimos corporis alias neque veniam est. Ducimus saepe illo iste. Enim nisi rerum. Praesentium eveniet temporibus qui voluptate et est.\n \rAccusamus et et at cum nemo. Et voluptatibus excepturi non quo. Amet at quod. Hic sunt velit dolor.\n \rQuasi hic consequatur dolor. Sint laboriosam ullam ipsa atque. Cumque odit assumenda harum occaecati. Voluptatem voluptates fuga.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=77.15667863642383",
          viewCounts: 0,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z",
          CategoryId: 5
        }
      },
      {
        id: 143,
        text: "Explicabo quo rerum maiores temporibus ea quia laudantium qui.",
        UserId: 2,
        RestaurantId: 43,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 43,
          name: "Mrs. Noemy Watsica",
          tel: "(252) 981-9430 x3227",
          address: "1218 Dariana Ports",
          opening_hours: "08:00",
          description:
            "Animi rerum suscipit iusto id autem et. Facilis id necessitatibus quia quo est perferendis quia velit. Ea dicta aspernatur assumenda alias autem repellat odit exercitationem. Rerum praesentium voluptatem corrupti soluta aut autem sapiente dolor.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=23.889387774329695",
          viewCounts: 0,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z",
          CategoryId: 5
        }
      },
      {
        id: 144,
        text: "Molestiae repellendus mollitia reprehenderit sunt voluptate ut.",
        UserId: 2,
        RestaurantId: 44,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        Restaurant: {
          id: 44,
          name: "Madge Moen",
          tel: "794.584.3958 x1725",
          address: "6233 Annamae Mission",
          opening_hours: "08:00",
          description: "sed ut illum",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=33.163077027772346",
          viewCounts: 0,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-02-28T14:38:32.000Z",
          CategoryId: 3
        }
      }
    ],
    FavoritedRestaurants: [
      {
        id: 1362,
        name: "荷蘭小鬆餅",
        tel: "12312",
        address: "台北市",
        opening_hours: "11:00",
        description: "~~~!!!!!!",
        image: null,
        viewCounts: 0,
        createdAt: "2020-03-23T16:11:25.000Z",
        updatedAt: "2020-03-26T08:47:53.000Z",
        CategoryId: 992,
        Favorite: {
          UserId: 2,
          RestaurantId: 1362,
          createdAt: "2020-03-24T08:51:02.000Z",
          updatedAt: "2020-03-24T08:51:02.000Z"
        }
      },
      {
        id: 9,
        name: "Luz Schaden",
        tel: "1-712-742-4184",
        address: "4929 Wisozk Centers",
        opening_hours: "08:00",
        description:
          "Culpa deserunt molestiae eligendi est ex incidunt.\nNisi sit totam.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=6.497835218728576",
        viewCounts: 4,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-03-27T10:36:37.000Z",
        CategoryId: 5,
        Favorite: {
          UserId: 2,
          RestaurantId: 9,
          createdAt: "2020-03-24T08:51:28.000Z",
          updatedAt: "2020-03-24T08:51:28.000Z"
        }
      },
      {
        id: 5,
        name: "Mitchel Beatty",
        tel: "171-324-8413",
        address: "85408 Francisca Square",
        opening_hours: "08:00",
        description:
          "Aut cumque excepturi exercitationem libero voluptates impedit. Enim animi repellendus tempora doloremque. Esse in delectus sequi ullam sed animi.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=86.63208465551794",
        viewCounts: 82,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-03-27T10:36:30.000Z",
        CategoryId: 2,
        Favorite: {
          UserId: 2,
          RestaurantId: 5,
          createdAt: "2020-03-24T16:54:40.000Z",
          updatedAt: "2020-03-24T16:54:40.000Z"
        }
      },
      {
        id: 7,
        name: "Miss Letitia Will",
        tel: "(770) 750-6811 x99988",
        address: "8145 Laisha Keys",
        opening_hours: "08:00",
        description:
          "Aut earum molestiae et ducimus adipisci ut maxime.\nVeritatis labore illum et similique cumque qui qui officia omnis.\nQui laudantium amet enim natus.\nVoluptatem quia est nam ut esse et.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=44.558618229229",
        viewCounts: 10,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-03-27T06:59:44.000Z",
        CategoryId: 5,
        Favorite: {
          UserId: 2,
          RestaurantId: 7,
          createdAt: "2020-03-25T10:34:42.000Z",
          updatedAt: "2020-03-25T10:34:42.000Z"
        }
      }
    ],
    Followers: [
      {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
        isAdmin: false,
        image: null,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-03-05T12:30:53.000Z",
        Followship: {
          followerId: 2,
          followingId: 2,
          createdAt: "2020-03-25T07:52:27.000Z",
          updatedAt: "2020-03-25T07:52:27.000Z"
        }
      }
    ],
    Followings: [
      {
        id: 192,
        name: "Joey",
        email: "joeytan030306@gmail.com",
        password:
          "$2a$10$h63NLEefacJQPJ1xsAoMlu3zS0e9vn7lnezl6o9gQ0EAMvT9NrBrm",
        isAdmin: false,
        image: null,
        createdAt: "2020-03-23T15:21:43.000Z",
        updatedAt: "2020-03-23T15:21:43.000Z",
        Followship: {
          followerId: 2,
          followingId: 192,
          createdAt: "2020-03-23T23:46:44.000Z",
          updatedAt: "2020-03-23T23:46:44.000Z"
        }
      },
      {
        id: 132,
        name: "user888",
        email: "user888@example.com",
        password:
          "$2a$10$mOIkAG2UZ8jw5ErEUvtMneVkV.EDl71R9Ec1Va2wMymR5tCMyU3ve",
        isAdmin: false,
        image: null,
        createdAt: "2020-03-17T07:50:53.000Z",
        updatedAt: "2020-03-17T07:50:53.000Z",
        Followship: {
          followerId: 2,
          followingId: 132,
          createdAt: "2020-03-24T05:53:45.000Z",
          updatedAt: "2020-03-24T05:53:45.000Z"
        }
      },
      {
        id: 142,
        name: "user888",
        email: "user888@123.com",
        password:
          "$2a$10$c3.Mbs29E1s320x8zBZeGOF7csa0udo/wkht1sOPuNAPTTtw/YEUu",
        isAdmin: false,
        image: null,
        createdAt: "2020-03-17T07:54:09.000Z",
        updatedAt: "2020-03-17T07:54:09.000Z",
        Followship: {
          followerId: 2,
          followingId: 142,
          createdAt: "2020-03-24T06:01:14.000Z",
          updatedAt: "2020-03-24T06:01:14.000Z"
        }
      },
      {
        id: 102,
        name: "asd@asd.asd",
        email: "asd@asd.asd",
        password:
          "$2a$10$r9jgmPQGI2uN59XwkuTiX.qRORpqYDoMg8e36WJ.bw1JexPvpXVp.",
        isAdmin: false,
        image: "https://i.imgur.com/yJTFCDh.jpg",
        createdAt: "2020-03-09T06:15:49.000Z",
        updatedAt: "2020-03-09T06:16:09.000Z",
        Followship: {
          followerId: 2,
          followingId: 102,
          createdAt: "2020-03-24T06:01:44.000Z",
          updatedAt: "2020-03-24T06:01:44.000Z"
        }
      },
      {
        id: 162,
        name: "test",
        email: "test@test.com",
        password:
          "$2a$10$HzCWQezkOs9jCssiW7tjD.tYyMrX0iVxpx.cx4vWJxqlbWZMREFm2",
        isAdmin: false,
        image: null,
        createdAt: "2020-03-22T09:35:11.000Z",
        updatedAt: "2020-03-22T09:35:11.000Z",
        Followship: {
          followerId: 2,
          followingId: 162,
          createdAt: "2020-03-25T06:35:02.000Z",
          updatedAt: "2020-03-25T06:35:02.000Z"
        }
      },
      {
        id: 172,
        name: "a",
        email: "a26620236@gmail.com",
        password:
          "$2a$10$hRVJ4Mr6uAlWj3I9q7a4G.Ghavo.ra5jmEvH6GY37rewVqg0fkxoS",
        isAdmin: false,
        image: null,
        createdAt: "2020-03-23T10:29:12.000Z",
        updatedAt: "2020-03-23T10:29:12.000Z",
        Followship: {
          followerId: 2,
          followingId: 172,
          createdAt: "2020-03-25T06:35:06.000Z",
          updatedAt: "2020-03-25T06:35:06.000Z"
        }
      },
      {
        id: 72,
        name: "mohammad akhbarati",
        email: "makhbarati@gmail.com",
        password:
          "$2a$10$ljaWKqtQwgLA5BdTEhBTHeJK/Ku4ow3IHM4S5OJYmr7.anBAIl7NW",
        isAdmin: false,
        image: null,
        createdAt: "2020-02-29T23:24:32.000Z",
        updatedAt: "2020-02-29T23:24:32.000Z",
        Followship: {
          followerId: 2,
          followingId: 72,
          createdAt: "2020-03-25T07:42:57.000Z",
          updatedAt: "2020-03-25T07:42:57.000Z"
        }
      },
      {
        id: 92,
        name: "asdasd",
        email: "asdasd@asdasd.asdasd",
        password:
          "$2a$10$J4Z/hkxNtpZYM0mj/eCaM.bBRTtTC4yOwISf4d..ia9sdB0ym/9yO",
        isAdmin: false,
        image: null,
        createdAt: "2020-03-08T17:38:03.000Z",
        updatedAt: "2020-03-08T17:38:03.000Z",
        Followship: {
          followerId: 2,
          followingId: 92,
          createdAt: "2020-03-25T07:52:25.000Z",
          updatedAt: "2020-03-25T07:52:25.000Z"
        }
      },
      {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
        isAdmin: false,
        image: null,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-03-05T12:30:53.000Z",
        Followship: {
          followerId: 2,
          followingId: 2,
          createdAt: "2020-03-25T07:52:27.000Z",
          updatedAt: "2020-03-25T07:52:27.000Z"
        }
      },
      {
        id: 62,
        name: "AC",
        email: "ac@ac.com",
        password:
          "$2a$10$yB01LxQAujWjRQ0WaprYV.t5SDx6kool5Cmrt0F7TRSXGRk.W8z1m",
        isAdmin: false,
        image: null,
        createdAt: "2020-02-29T15:41:09.000Z",
        updatedAt: "2020-02-29T15:41:09.000Z",
        Followship: {
          followerId: 2,
          followingId: 62,
          createdAt: "2020-03-25T07:52:28.000Z",
          updatedAt: "2020-03-25T07:52:28.000Z"
        }
      },
      {
        id: 152,
        name: "user777",
        email: "user777@example.com",
        password:
          "$2a$10$z6NW4BS/QVlChCPCESgK1OcmLNfgi1EocyEH3IzUVzu5zyIopyopC",
        isAdmin: false,
        image: null,
        createdAt: "2020-03-17T08:03:35.000Z",
        updatedAt: "2020-03-17T08:03:35.000Z",
        Followship: {
          followerId: 2,
          followingId: 152,
          createdAt: "2020-03-25T07:52:35.000Z",
          updatedAt: "2020-03-25T07:52:35.000Z"
        }
      }
    ]
  },
  isFollowed: false
};

export default {
  data() {
    return {
      user: {
        id: -1,
        name: "",
        image: ""
      }
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  methods: {
    fetchUser(userId) {
      console.log(userId);
      const { profile } = dummyUser;
      this.user = {
        ...profile,
        id: profile.id,
        name: profile.name,
        image: profile.image
      };
    },
    handleFileChange(e) {
      const files = e.target.files;
      console.log("files", files);
      if (!files.length) {
        return (this.user.image = "");
      }
      // 如果沒有檔案則離開此函式
      // 否則產生預覽圖...
      const imageURL = window.URL.createObjectURL(files[0]);
      this.user.image = imageURL;
    },
    handleSubmit(e) {
      const form = e.target; // <form></form>
      const formData = new FormData(form);
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    }
  }
};
</script>