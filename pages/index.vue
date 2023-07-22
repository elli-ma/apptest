
<template>
  <div class="container mx-auto">
    <h2 class="text-center text-4xl p-5">Comments</h2>
    <table
      class="table-auto w-full bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <thead>
        <tr>
          <th class="p-4 bg-blue-600 text-white text-left">id</th>
          <th class="p-4 bg-blue-600 text-white text-left">name</th>
          <th class="p-4 bg-blue-600 text-white text-left">e-mail</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="comment in paginatedComments"
          :key="comment.id"
          class="hover:bg-gray-100"
        >
            <td class="p-4">{{ comment.id }}</td>
            <td class="cursor-pointer hover:text-blue p-4"><NuxtLink :to="`comments/${comment.id}`" no-prefetch>{{ comment.name }}</NuxtLink></td>
            <td class="p-4">{{ comment.email }}</td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-center mt-5">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md mr-3 disabled:opacity-50"
      >
        Back
      </button>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md disabled:opacity-50"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemsPerPage: 10,
      currentPage: 1,
    };
  },
  async asyncData({ $http }) {
    const comments = await $http.$get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    return { comments };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.comments.length / this.itemsPerPage);
    },
    paginatedComments() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.comments.slice(startIndex, endIndex);
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToCommentDetail(commentId) {
      this.$router.push({ name: "comment-detail", params: { id: commentId } });
    },
  },
};
</script>