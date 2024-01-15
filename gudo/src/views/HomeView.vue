<template>
  <Header />
  <Banner />
  <div style="margin: 0 auto">
    <Skills />
    <Program />

    <Learn :data="data" @item="handleGetId" />
    <Teacher />
    <Library />
    <FAQ />
    <Footer />

  </div>
  <Modal :isModal="isModal" :contact="contact" @closeModal="handleCloseModal1" @handleContact="handleContact"/>
</template>

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


.header {
  width: 92%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-logo {
  width: 50%;
}

.header-logo .logo {
  width: 180px;
  height: 100%;
}

.header-navbar {
  display: flex;
  width: 50%;
  align-items: center;
}

.header-navbar .item {
  margin-right: 12px;
  height: 100%;
  font-size: 16px;
  font-weight: bold;
  color: gray;
  cursor: pointer;
  justify-items: center;
  align-items: center;
  display: flex;
  position: relative;
}
.header-navbar .item div{
  margin-right: 12px;
  height: 100%;
  font-size: 16px;
  font-weight: bold;
  color: gray;
  cursor: pointer;
  position: relative;
}

.header-navbar .item:hover div {
color: black;
}


.header-navbar .item ul{
  font-size: 16px;
  font-weight: bold;
  color: gray;
  cursor: pointer;
  position: absolute;
  width: 200px;
  list-style-type: none;
  top: 26px;
  left: 0;
  padding: 6px;
  background: white;
  border: 1px solid gray;
  border-radius: 4px;
  visibility: hidden;
}
.header-navbar .item:hover ul{
  visibility: visible;
}

.header-navbar .item ul li{
  border-bottom: 1px solid gray;
  font-size: 16px;
  font-weight: bold;
  color: gray;
  cursor: pointer;
}
.header-navbar .item ul li:hover{
  color: black;
}

.header-navbar .item ul li:last-child{
  border-bottom: none;
}

.header-navbar .item:hover {
  color: black;
}

.header-navbar .item-select {
  margin-right: 12px;
  height: 100%;
  font-size: 16px;
  font-weight: bold;
  color: gray;
  cursor: pointer;
  justify-items: center;
  align-items: center;
  display: flex;
  position: relative;
}


.header-navbar .item-option {
  border-radius: 4px;
  border: 1px solid gray;
  padding: 2px 4px;
  font-size: 12px;
  font-weight: bold;
}

.header-navbar .item-option svg {
  margin-left: 4px;
  padding-top: 6px;
  color: gray;
}

.header-navbar .item svg {
  margin-left: 4px;
  padding-top: 6px;
  color: gray;
}

.header-navbar .item-lange {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: none;
  background: white;
  width: 100%;
  border: 1px solid gray;
  border-radius: 4px;
}


.header-navbar .item-lange li {
  text-align: center;
  padding: 4px;
}

.header-navbar .item-lange li:hover {
  background: gray;
  color: white;
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

.teacher-title{
  color: black;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin-top: 16px;
}

.teacher-introduce{
  color: black;
  font-size: 16px;
  text-align: left;
  padding: 0 16px;
  margin-top: 16px;
  margin-bottom: 16px;
}
.teacher{
  border: 1px solid gray;
  border-radius: 4px;
}
.next{
  position: absolute;
  top: 46%;
  right: 16px;
  width: 32px;
  height: 32px;
}
.next svg{
  width: 100%;
  height: 100%;
}

.prev{
  position: absolute;
  top: 46%;
  left: 0px;
  width: 32px;
  height: 32px;
}
.prev svg{
  width: 100%;
  height: 100%;
}
.slide{
  position: relative;
}





</style>

<script setup lang="ts">
import {ref} from "vue";
import image from "../assets/images/image_slide.png"
import Header from "@/components/home/header.vue";
import Banner from "@/components/home/Banner.vue";
import Skills from "@/components/home/Skills.vue";
import Program from "@/components/home/Program.vue";
import Learn from "@/components/home/Learn.vue";
import Teacher from "@/components/home/Teacher.vue";
import Library from "@/components/home/Library.vue";
import FAQ from "@/components/home/FAQ.vue";
import Footer from "@/components/home/Footer.vue";
import Modal from "@/components/home/Modal.vue";



const data = ref([
    {
      title: "Khóa học sơ cấp",
      image: image,
      detail: "Khi tham gia chương trình anh văn giao tiếp học viên sẽ được cung...",
      id :1
    },
  {
    title: "Khóa học sơ cấp",
    image: image,
    detail: "Khi tham gia chương trình anh văn giao tiếp học viên sẽ được cung...",
    id :2
  },
  {
    title: "Khóa học sơ cấp",
    image: image,
    detail: "Khi tham gia chương trình anh văn giao tiếp học viên sẽ được cung...",
    id :3
  },
  {
    title: "Khóa học sơ cấp",
    image: image,
    detail: "Khi tham gia chương trình anh văn giao tiếp học viên sẽ được cung...",
    id :4
  },
  {
    title: "Khóa học sơ cấp",
    image: image,
    detail: "Khi tham gia chương trình anh văn giao tiếp học viên sẽ được cung...",
    id :5
  },

])
const isModal = ref(false);
const isShowlangue = ref(false)
const handleSelect = () => {
  isShowlangue.value = !isShowlangue.value;
}

const contact = ref({
  email : "",
  phone : "",
  content : "",
  name : "",
  id: null,
});

const emailMessage = ref({
  notify : "vui long nhap",
  status : false,
});
const phoneMessage = ref({
  notify : "vui long nhap",
  status : false,
});
const contentMessage = ref({
  notify : "vui long nhap",
  status : false,
});
const nameMessage = ref({
  notify : "vui long nhap",
  status : false,
});


const  handleValueDate = (e) => {
  if (contact.value.email.length <1 ){
    emailMessage.value.status = true;
  }
  if (contact.value.name.length <1 ){
    nameMessage.value.status = true;
  }
  if (contact.value.content.length <1 ){
    contentMessage.value.status = true;
  }
  if (contact.value.phone.length <1 ){
    phoneMessage.value.status = true;
  }
  if (contact.value.email.length <1 ){
    alert("vui long kiem tra lai")
    e.preventDefault();
    return;
  }
  if (contact.value.name.length <1 ){
    alert("vui long kiem tra lai")
    e.preventDefault();
    return;
  }
  if (contact.value.content.length <1 ){
    alert("vui long kiem tra lai")
    e.preventDefault();
    return;
  }
  if (contact.value.phone.length <1 ){
    alert("vui long kiem tra lai")
    e.preventDefault();
    return;
  }
  console.log(contact)
  e.preventDefault();

}

const handleGetId = (item : any) =>{
  isModal.value = !isModal.value;
  contact.value = item;
}
const handleCloseModal1 = () =>{
  isModal.value = !isModal.value;
}

const  handleChange = (object, event) => {
  if (event.target.value.length > 0){
    object.status = false;
  }else {
    object.status = true
  };
}
const handleContact = (item :any) =>{
  console.log(item.value,contact.value)
}

</script>