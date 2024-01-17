<template>
  <Header></Header>
  <Path />
  <Content />
</template>

<script setup lang="ts">

import Header from "@/components/shoe/header.vue";
import Path from "@/components/shoe/path.vue";
import Content from "@/components/shoe/Content.vue";
</script>

<style>
.container{
  width: 90%;
  margin: 0 auto;
}
.row{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
  align-items: center;
}
.col-3{
  width: 25%;
}
.col-6{
  width: 50%;
}
</style>