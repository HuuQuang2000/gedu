<template>
  <table border="1px">
    <tr>
      <td>ten sp</td>
      <td>size</td>
      <td>mau</td>
      <td>so luong</td>
    </tr>
    <tr v-for="(item,index) in data" :key="index">
      <td>{{ item?.sanPhamMetadata?.tieuDe }}</td>
      <td>{{ item?.giaTriObj2?.giaTri }}</td>
      <td>{{ item?.giaTriObj1?.giaTri }}</td>
      <td>{{ item?.soLuongGioHangL }}</td>
    </tr>
  </table>
</template>

<script setup>
const data = JSON.parse(localStorage.getItem('list'));
console.log(data)

</script>

<style scoped>

</style>