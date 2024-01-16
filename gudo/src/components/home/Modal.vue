<template>
  <div style="width: 100%; height: 100%;display: flex ; position: fixed ; inset: 0; justify-content: center; align-items: center;" v-if="props.isModal">
    <div  style="position:absolute; inset: 0; background: gray ; z-index: 10; opacity: 0.9" @click="handleCloseModal"></div>
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 20; padding: 16px ;width: 500px; height: 550px; border: 1px solid gray; border-radius: 10px; background: white" class="contact-form">
      <div @click="handleCloseModal" style="cursor: pointer; display: flex; justify-content: end">
        x
      </div>
      <form @submit="handleValueDate">
        <div class="title" style="text-align: center; font-weight: bold; font-size: 32px">
          Để lại thông tin
        </div>
        <div  style="margin-bottom: 16px">
          <div style="margin-bottom: 4px ; color: #4c4cab">
            Họ và tên (<span style="color: red">*</span>)
          </div>
          <input placeholder="Họ và tên" style="width: 100%; padding: 16px; border-radius: 24px; border: 1px solid gray;box-shadow: 0 1px 3px 0px gray" v-model="contact.name" @input="handleChange(nameMessage,$event)">

          <label v-if="nameMessage.status">{{nameMessage.notify}}</label>

        </div>
        <div style="margin-bottom: 16px">
          <div style="margin-bottom: 4px ; color: #4c4cab">
            Số điện thoai (<span style="color: red">*</span>)
          </div>
          <input placeholder="Số điện thoai" style="width: 100%; padding: 16px; border-radius: 24px; border: 1px solid gray;box-shadow: 0 1px 3px 0px gray" v-model="contact.phone" @input="handleChange(phoneMessage,$event)">
          <label v-if="phoneMessage.status">{{phoneMessage.notify}}</label>
        </div>
        <div  style="margin-bottom: 16px">
          <div style="margin-bottom: 4px ; color: #4c4cab">
            Email (<span style="color: red">*</span>)
          </div>
          <input placeholder="Email" style="width: 100%; padding: 16px; border-radius: 24px; border: 1px solid gray;box-shadow: 0 1px 3px 0px gray" @input="handleChange(emailMessage,$event)" v-model="contact.email">
          <label v-if="emailMessage.status">{{emailMessage.notify}}</label>
        </div>
        <div  style="margin-bottom: 16px">
          <div style="margin-bottom: 4px ; color: #4c4cab">
            Nội dung bạn muốn trao đổi (<span style="color: red">*</span>)
          </div>
          <textarea style="width: 100%; padding: 16px; border-radius: 4px;" v-model="contact.content"  @input="handleChange(contentMessage,$event)"></textarea>
          <label v-if="contentMessage.status">{{contentMessage.notify}}</label>
        </div>
        <div style="text-align: center">
          <button class="send-button" type="submit" style="cursor:pointer;padding: 12px 24px; color: #ffffff; background: #4c4cab; border: none; border-radius: 4px">send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, defineProps, defineEmits, watch} from "vue";

const props = defineProps({
  isModal : {
    type : Boolean,
    required : true
  }
  ,
  contact : {
    type : Object,
    required : true
  }
})
let contact = props.contact;

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
  emits('closeModal',props.isModal)
  emits('handleContact',contact)
}

const handleChange = (object, event) => {
  if (event.target.value.length > 0){
    object.status = false;
  }else {
    object.status = true
  };
}

const emits = defineEmits(['closeModal'])
const handleCloseModal = () =>{
  emits('closeModal',props.isModal)
}

</script>

<style scoped>

</style>