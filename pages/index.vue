<template>
  <h1>Index page</h1>
  <Button foo="asd" />
</template>

<script setup>
const { posts } = await $fetch("/api/post");
console.log(posts);
</script>
