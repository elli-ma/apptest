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
  async asyncData({ $http, route }) {
    const response = await $http.$get(
      `https://jsonplaceholder.typicode.com/comments/${route.params.id}`
    );
    // Возвращаем данные комментария в виде заглушки, чтобы не возникало ошибки во время генерации
    return { comment: response ?? {} };
  }
};
</script>
  