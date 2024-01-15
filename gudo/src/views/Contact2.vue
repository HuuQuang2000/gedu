<template>
  <div style="padding: 16px" class="contact-form">
    <form @submit="handleValueDate">
      <div class="title">
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
</template>

<script setup >
import {reactive, ref} from "vue";

  const contact = reactive({
    email : "",
    phone : "",
    content : "",
    name : "",
  });


  const emailMessage = reactive({
    notify : "vui long nhap",
    status : false,
  });
  const phoneMessage = reactive({
    notify : "vui long nhap",
    status : false,
  });
  const contentMessage = reactive({
    notify : "vui long nhap",
    status : false,
  });
  const nameMessage = reactive({
    notify : "vui long nhap",
    status : false,
  });


  const  handleValueDate = (e) => {
    if (contact.email.length <1 ){
      emailMessage.status = true;
    }
    if (contact.name.length <1 ){
      nameMessage.status = true;
    }
    if (contact.content.length <1 ){
      contentMessage.status = true;
    }
    if (contact.phone.length <1 ){
      phoneMessage.status = true;
    }
    if (contact.email.length <1 ){
      alert("vui long kiem tra lai")
      e.preventDefault();
      return;
    }
    if (contact.name.length <1 ){
      alert("vui long kiem tra lai")
      e.preventDefault();
      return;
    }
    if (contact.content.length <1 ){
      alert("vui long kiem tra lai")
      e.preventDefault();
      return;
    }
    if (contact.phone.length <1 ){
      alert("vui long kiem tra lai")
      e.preventDefault();
      return;
    }
    console.log(contact)
    e.preventDefault();
  }

  const  handleChange = (object, event) => {
      if (event.target.value.length > 0){
        object.status = false;
      }else {
        object.status = true;
      }
  }
</script>
<style scoped>
.contact-form .title{
  width: 100%;
  font-size: 32px;
  text-align: center;
  font-weight: 500;
}
.send-button:hover{
  opacity: 0.8;
}
</style>