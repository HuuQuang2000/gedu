<template>
  <div class="container" v-if="product">
    <div class="row">
      <div class="col-6">
        <div class="content-left">
          <div class="list-image">
           <div class="list-image-item">
             <img src="../../assets/images/image_slide.png">
           </div>
            <div class="list-image-item">
              <img src="../../assets/images/image_slide.png">
            </div>
            <div class="list-image-item">
              <img src="../../assets/images/image_slide.png">
            </div>
            <div class="list-image-item">
              <img src="../../assets/images/image_slide.png">
            </div>
            <div class="list-image-item">
              <img src="../../assets/images/image_slide.png">
            </div>
            <div class="list-image-item">
              <img src="../../assets/images/image_slide.png">
            </div>
          </div>
          <div class="image">
              <img src="../../assets/images/image_slide.png">
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="content-right">
          <h1>{{product.tieuDe}}</h1>
          <div>
            <span class="code">Mã SP: {{ product.maSP }} </span>
            <span> | 2 Đánh giá </span>| 1517 Đã bán
          </div>
          <div>
            <span class="price">{{ product.giaMoi }} ₫</span> <span class="price-sale"><strike>{{ product.giaCu }} ₫</strike></span><span class="sale">-20%</span>
          </div>
          <div class="program-sale">
            <div>
              Chương trình khuyến mãi
            </div>
            <ul>
              <li>Nhập Mã: <span>{{ product.vouchers[0].maGiamGia}} </span> Nhân Dịp Chào Mừng Năm 2024</li>
            </ul>
          </div>

          <div class="option">
            <div class="color">
                <select v-model="color">
                <option value="default" >chon mau</option>
                <option v-for="(item,index) in bienthe1 " :key="index" :value="item.giaTri">{{item.giaTri}}</option>
                </select>
            </div>
            <div class="size">
              <select v-model="size"  >
                <option value="default">chon size</option>
                <option v-for="(item,index) in bienthe2 " :key="index" :value="item.giaTri">{{item.giaTri}}</option>
              </select>
            </div>
          </div>
          <div class="instruct">
            huong dan chon size
          </div>
          <div>so luong
            <input type="number" @input="handleSoLuong" v-model="soLuong">
            <span v-if="(!sizeId || !colorId) && product.tongSp < 1"> sản phẩm đang hết hàng</span>
            <span v-else-if="(!sizeId || !colorId) && product.tongSp > 1"> {{product.tongSp}} sản phẩm có sẵn</span>
            <span v-else-if="(sizeId && colorId) && productDto?.soLuong > 1"> {{productDto.soLuong}} sản phẩm có sẵn</span>
            <span v-else> sản phẩm đang hết hàng</span>
          </div>
          <button :disabled="!productDto || productDto?.soLuong < 1 " @click="cartStore.increment">them gio hang</button>
          <button>mua ngay</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import {onMounted, ref, watch} from "vue";
import {useCartStore} from "@/stores/cart";
let product = ref();
let productDto = ref();
let bienthe1 = ref();
let bienthe2 = ref();
let color = ref("default");
let size = ref("default");
let colorId = ref();
let sizeId = ref();
let soLuong = ref(1);

const cartStore = useCartStore();
onMounted(() => {
  axios.get(`https://shoes.orisu.lol/v1/san-pham/public/4`)
      .then(response => {
        product.value = response.data;
        bienthe1.value = response.data.giaTri1List;
        bienthe2.value = response.data.giaTri2List;
      })
      .catch(e => {
        console.log(e.message)
      });

})
watch(color, (newValue) => {
  let b = [];
  bienthe2.value = product.value.giaTri2List;
  colorId.value = bienthe1.value.find(x => x.giaTri == newValue)?.id

  if (newValue != 'default'){
    for (let i = 0; i < bienthe2.value.length ; i++) {
      for (let y = 0; y < bienthe2.value[i].bienThe2.length; y++) {
        if (bienthe2.value[i].bienThe2[y].giaTri == newValue) {
          b.push(bienthe2.value[i])
          break;
        }
      }
    }
    bienthe2.value = b;
  }else {
    bienthe1.value = product.value.giaTri1List;
    bienthe2.value = product.value.giaTri2List;
    size.value="default"
  }
  productDto = product.value.bienTheDTOS.find(x => x.giaTri1 == colorId?.value && x.giaTri2== sizeId?.value);
  soLuong.value = 1;
})

const handleSoLuong = (event) => {
  if (event.target.value < 1){
    soLuong.value = 1;
  }else if (event.target.value > productDto?.soLuong){
    soLuong.value =  productDto?.soLuong;
  }else if(event.target.value > product?.value?.tongSp){
    soLuong.value =  product?.value?.tongSp;
  }

}
watch(size, (newValue) => {
  let b = [];
  bienthe1.value = product.value.giaTri1List;
  sizeId.value = bienthe2.value.find(x => x.giaTri == newValue)?.id
  if (newValue != 'default'){
    for (let i = 0; i < bienthe1.value.length ; i++) {
      for (let y = 0; y < bienthe1.value[i].bienThe2.length; y++) {
        if (bienthe1.value[i].bienThe2[y].giaTri == newValue) {
          b.push(bienthe1.value[i])
          break;
        }
      }
    }
    bienthe1.value = b;
  }else {
    bienthe1.value = product.value.giaTri1List;
    bienthe2.value = product.value.giaTri2List;
    color.value="default"
  }
  productDto = product.value.bienTheDTOS.find(x => (x.giatri1 == colorId?.value && x.giatri2== sizeId?.value));
  soLuong.value = 1;
})

</script>

<style scoped>
.content-left{
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;

}
.list-image{
  width: 10%;
  height: auto;
  margin-right: 16px;
}
.list-image-item{
  width: 100%;
  height: 60px;
  border: 1px solid gray;
  border-radius: 5px;
  margin-top: 16px;
}
.list-image-item img{
  width: 100%;
  height: 100%;
}
.image{
  width: 80%;
  height: 500px;
  background: gray;
  padding-top: 32px;
}
.image img{
  width: 100%;
  height: 100%;
}
.content-right{
  height: 500px;
}
.content-right h1{
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 32px;
}
.price{
  color: red;
  font-weight: bold;
  font-size: 20px;
}
.sale{
  color: #f83535;
  background: #f8a5a5;
}
.content-right div:nth-child(3) span {
  margin-right: 15px;
  padding: 4px;
}
.content-right div:nth-child(3){
  background: #b9b4b4;
  padding: 12px;
  margin-top: 12px;
  width: 96%;
}
.program-sale{
  margin-top: 16px;
  position: relative;
  border: 2px dashed gray;
  padding: 16px;
}
.program-sale>div{
  position: absolute;
  top: -14px;
  left: 8px;
  background: white;
  padding: 0 5px;
  font-weight: bold;
}
.program-sale span{
  color: red;
}
.option{
  display: flex;
  justify-items: center;
  justify-content: start;
  margin-top: 32px;
}
.option select{
  padding: 6px 90px 6px 6px;
  margin-right: 12px;
}
.option select option{
  padding: 12px 90px 12px 12px;
  height: 42px;
}
</style>