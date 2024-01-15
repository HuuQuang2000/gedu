<template>
  <footer>
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-3" style="height: 300px">
            <div class="item" style="margin-right: 16px">
              <div class="title" style="font-weight: bold">
                Trung tâm tiếng Hàn G-EDU
              </div>
              <div class="numberPhone">
                Điện thoại: <a href="#">038 318 5291</a>
              </div>
              <div class="email">
                Email:
                <a href="#">trungtam.gedu@gmail.com</a>
              </div>
              <div class="address">
                Địa chỉ: Số 12N7 ngõ 40, đường Xuân La, P. Xuân La, Q.Tây Hồ, Tp. Hà Nội
              </div>
            </div>
          </div>
          <div class="col-6" style="height: 300px">
            <div class="item" style="text-align: center">
              <div class="title" >
                Để lại thông tin liên hệ
              </div>
              <div class="address" style="text-align: center">
                Nếu bạn có thắc mắc hay băn khoăn về chương trình học, hãy để lại <br> thông tin, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất!
              </div>
              <div style="padding: 8px 0; display: flex;justify-content: center">
                <input style="width: 20%; height: 32px;margin-right: 16px; border-radius: 16px; border: 2px solid #a2a2a2;padding-left: 8px" placeholder="ho va ten">
                <input style="width: 20%; height: 32px;border-radius: 16px; border: 2px solid #a2a2a2;padding-left: 8px" placeholder="so dien thoai">
              </div>
              <div>
                <button class="button" style="width: 80px; height: 42px; background: #3c3cf5; border: none; border-radius: 4px; margin-top: 16px;cursor: pointer">
                  send
                </button>
              </div>
            </div>
          </div>
          <div class="col-3" style="height: 300px">
            <div class="item">
              <div class="icon">
                <div style="width: 48px; height: 48px; border-radius: 50%; border: 2px solid red ; overflow: hidden">
                  <img src="../../assets/images/image_slide.png" style="width: 100%; height: 100%">
                </div>
                <div style="width: 48px; height: 48px; border-radius: 50%; border: 2px solid red ; overflow: hidden">
                  <img src="../../assets/images/image_slide.png" style="width: 100%; height: 100%">
                </div>
                <div style="width: 48px; height: 48px; border-radius: 50%; border: 2px solid red ; overflow: hidden">
                  <img src="../../assets/images/image_slide.png" style="width: 100%; height: 100%">
                </div>
                <div style="width: 48px; height: 48px; border-radius: 50%; border: 2px solid red ; overflow: hidden">
                  <img src="../../assets/images/image_slide.png" style="width: 100%; height: 100%">
                </div>
              </div>
              <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59569.2779109323!2d105.804331!3d21.069472!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc88f002df7%3A0xc305100e8153f480!2zVHJ1bmcgdMOibSB0aeG6v25nIGjDoG4gRy1FRFU!5e0!3m2!1svi!2sus!4v1704766083435!5m2!1svi!2sus" width="400" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
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
.footer{
  background: gray;
  border-top: 1px solid black;
  padding-top: 32px ;
  padding-bottom: 32px;
  color: white;
}
.footer a {
  text-decoration: none;
  color: white;
}
.footer a:hover {
  text-decoration: none;
  color: black;
}
.footer .item .title{
  color: black;
  font-size: 20px;
  padding: 8px 0;
}

.footer .item .numberPhone{
  padding: 8px 0;
}

.footer .item .email{
  padding: 8px 0;
}

.footer .item .address{
  padding: 8px 0;
}

.footer .item .button:hover{
  opacity: 0.8;
  color: white;
}

.footer .item .icon{
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}
.footer .item .icon div{
  margin-right: 16px;
  transition: all 0.5s;
  cursor: pointer;
}
.footer .item .icon div:hover{
  border: 2px solid blue !important;
}

.footer .item .icon div img{
  margin-right: 16px;
  transition: all 0.5s;
  cursor: pointer;

}

.footer .item .icon div:hover img{
  transform: scale(1.2);
  transition: all 0.5s;
}
</style>