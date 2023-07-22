<template>
  <div class="container mx-auto py-10">
    <h2 class="text-center text-4xl p-5 text-blue-600 font-bold">
      {{ comment.name }}
    </h2>
    <div class="bg-white p-8 rounded-lg shadow-lg">
      <ul class="space-y-4">
        <li class="px-4 py-2 rounded-md">
          <b>postId:</b> {{ comment.postId }}
        </li>
        <li class="px-4 py-2 rounded-md"><b>id:</b> {{ comment.id }}</li>
        <li class="px-4 py-2 rounded-md"><b>e-mail:</b> {{ comment.email }}</li>
        <li class="px-4 py-2 rounded-md"><b>body:</b> {{ comment.body }}</li>
      </ul>
    </div>
  </div>
</template>
  
<script>
export default {
  async asyncData({ params }) {
    return { comment: {} };
  },
  mounted() {
    this.fetchComment();
  },
  methods: {
    async fetchComment() {
      try {
        const response = await this.$http.$get(
          `https://jsonplaceholder.typicode.com/comments/${this.$route.params.id}`
        );
        this.comment = response;
      } catch (error) {
        console.error("Ошибка при получении комментария:", error);
      }
    },
  },
  data() {
    return {
      comment: null,
    };
  },
};
</script>
  