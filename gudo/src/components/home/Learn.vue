<template>
  <div class="container" style="color: black; font-size: 36px; margin-top: 36px">
    Chương trình học tại G-EDU
  </div>
  <div style="margin-top: 16px">
    <div  style="margin: 0 auto; width: 70%">
      <div class="row" style="gap: 30px;justify-content: center">
        <div class="col-3 class" v-for="(item,index) in data" key="index">
          <div style="width: 100%; height: 280px ">
            <img :src="item.image" style="width: 100%; height: 100%">
          </div>
          <div class="class-title">
            {{ item.title }}
          </div>
          <div class="class-introduce gap-x-16">
            {{ item.detail }}
          </div>
          <div class="class-detail">

            <div>
              <router-link :to="{ name: 'contact1', params: { id: item.id }}" style="text-decoration: none; color: white">
                Xem chi tiet
              </router-link>
            </div>
            <div @click="handleModal(item)">
              Dang ky
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
  const props = defineProps({
    data : {
      type : Object,
      required : true
    }
  })
const emits = defineEmits(['item'])
 const handleModal = (item) =>{
   emits('item',item)
 }
</script>

<style scoped>
.container{
  width: 88%;
  margin: 0 auto;
}

.row{
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  align-items: center;
  width: 100%;
}
.mr-16{
  margin-right: 16px;
}
.col-3{
  width: 25%;
}
.col-6{
  width: 50%;
}

.col-4{
  width: 33%;
}
.gap-x-16{
  padding: 0 16px;
}


.class-title{
  color: black;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
}

.class-introduce{
  color: black;
  font-size: 16px;
  text-align: left;
}
.class{
  border: 1px solid gray;
  border-radius: 4px;
}
.class-detail{
  display: flex;
}
.class-detail div{
  width: 50%;
  background: #3c3cf5;
  padding: 12px 0px;
  text-align: center;
  color: white;
  cursor: pointer;
  transition: all 0.2s;
}
.class-detail div:last-child{
  background: #4c4cab;
}
.class-detail div:hover{
  transform: scale(1.015);
}

</style>