<template>
  <div class="header">
    <div class="container nav">
      <div class="row nav-header">
          <div class="col-3 nav-logo">
            <div class="logo">
              <img src="../../assets/images/image_slide.png">
            </div>
          </div>
          <div class="col-6 category">
            <ul>
              <li>Tất cả sản phẩm</li>
              <li>Giày nam</li>
              <li>Giày nữ</li>
              <li>tra cứu đơn hàng</li>
              <li>chính sách đổi trả</li>
            </ul>
          </div>
          <div class="col-3 user">
            <div class="cart">
              {{cartStore.count}}
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
            </div>
            <div class="search">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </div>
            <div class="login">
              Đăng nhập
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useCartStore} from "@/stores/cart.js";

const cartStore = useCartStore();

</script>

<style scoped>

.header{
  width: 100%;
  height: 60px;
  border-bottom: 1px solid gray;
}
.nav{
  height: 100%;
}
.logo{
  width: 100px;
  height: 30px;
}
.logo img{
  width: 100%;
  height: 100%;
}
.nav-logo{
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
}
.nav-header{
  height: 100%;
}

.category ul{
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;padding: 0;
  width: 100%;
}
.category ul li{
  list-style-type: none;
  padding: 0 10px;
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
}
.user{
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
}
.user div{
margin-right: 20px;
}
.cart{
  width: 24px;
  height: 24px;
}
.cart svg{
  width: 100%;
  height: 100%;
}

.search{
  width: 24px;
  height: 24px;
}
.search svg{
  width: 100%;
  height: 100%;
}
.login{
  font-weight: bold;
  font-size: 20px;
}
.header{
  cursor: pointer;
}


</style>