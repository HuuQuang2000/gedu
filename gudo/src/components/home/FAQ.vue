<template>
  <div class="container" style="color: black; font-size: 36px; margin-top: 36px">
    Câu hỏi thường gặp
  </div>
  <div class="faq container">
    <div class="row">
      <div class="col-6">
        <div class="item" style="margin-right: 16px">
          <div class="title">
            KHÓA HỌC NÀY DÀNH CHO NHỮNG AI?
          </div>
          <div class="icon">
            +
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="item" style="margin-right: 16px">
          <div class="title">
            KHÓA HỌC NÀY DÀNH CHO NHỮNG AI?
          </div>
          <div class="icon">
            +
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="item" style="margin-right: 16px">
          <div class="title">
            KHÓA HỌC NÀY DÀNH CHO NHỮNG AI?
          </div>
          <div class="icon">
            +
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="item" style="margin-right: 16px">
          <div class="title">
            KHÓA HỌC NÀY DÀNH CHO NHỮNG AI?
          </div>
          <div class="icon">
            +
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="item" style="margin-right: 16px">
          <div class="title">
            KHÓA HỌC NÀY DÀNH CHO NHỮNG AI?
          </div>
          <div class="icon">
            +
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="item" style="margin-right: 16px">
          <div class="title">
            KHÓA HỌC NÀY DÀNH CHO NHỮNG AI?
          </div>
          <div class="icon">
            +
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQ"
}
</script>

<style scoped>

.faq{
  margin-top: 16px;
}
.faq .item{
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 16px;
  justify-items: center;
  align-items: center;
  padding:16px  32px ;
  margin-bottom: 16px;
}
.faq .icon{

  background: #4c4cab;
  font-size: 24px;
  padding: 8px 16px;
  color: white;
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.1s;
}

.faq .icon:hover{
  transform: scale(1.1);
}

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
</style>