<template>
  <div class="container" style="color: black; font-size: 36px; margin-top: 36px">
    Thư viện ảnh
  </div>
  <div class="library container">
    <div class="item">
      <img src="../../assets/images/studying_itenerary.jpg">
      <div class="preview">
        preview
      </div>
    </div>
    <div class="item">
      <img src="../../assets/images/studying_itenerary.jpg">
      <div class="preview">
        preview
      </div>
    </div>
    <div class="item">
      <img src="../../assets/images/studying_itenerary.jpg">
      <div class="preview">
        preview
      </div>
    </div>
    <div class="item">
      <img src="../../assets/images/studying_itenerary.jpg">
      <div class="preview">
        preview
      </div>
    </div> <div class="item">
    <img src="../../assets/images/studying_itenerary.jpg">
    <div class="preview">
      preview
    </div>
  </div> <div class="item">
    <img src="../../assets/images/studying_itenerary.jpg">
    <div class="preview">
      preview
    </div>
  </div> <div class="item">
    <img src="../../assets/images/studying_itenerary.jpg">
    <div class="preview">
      preview
    </div>
  </div> <div class="item">
    <img src="../../assets/images/studying_itenerary.jpg">
    <div class="preview">
      preview
    </div>
  </div> <div class="item">
    <img src="../../assets/images/studying_itenerary.jpg">
    <div class="preview">
      preview
    </div>
  </div> <div class="item">
    <img src="../../assets/images/studying_itenerary.jpg">
    <div class="preview">
      preview
    </div>
  </div> <div class="item">
    <img src="../../assets/images/studying_itenerary.jpg">
    <div class="preview">
      preview
    </div>
  </div>
    <div class="item">
      <img src="../../assets/images/studying_itenerary.jpg">
      <div class="preview">
        preview
      </div>
    </div>
    <div class="item">
      <img src="../../assets/images/studying_itenerary.jpg">
      <div class="preview">
        preview
      </div>
    </div>
    <div class="item">
      <img src="../../assets/images/studying_itenerary.jpg">
      <div class="preview">
        preview
      </div>
    </div>
    <div class="item">
      <img src="../../assets/images/studying_itenerary.jpg">
      <div class="preview">
        preview
      </div>
    </div>
    <div class="item">
      <img src="../../assets/images/studying_itenerary.jpg">
      <div class="preview">
        preview
      </div>
    </div>
    <div class="item">
      <img src="../../assets/images/studying_itenerary.jpg">
      <div class="preview">
        preview
      </div>
    </div>
    <div class="item">
      <img src="../../assets/images/studying_itenerary.jpg">
      <div class="preview">
        preview
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Library"
}
</script>

<style scoped>
.library{
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
}
.library .item{
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
  width: 16.25%;
  height: 160px;
  position: relative;
}
.library .item:nth-child(6){
  border-right: none;
}
.library .item:nth-child(12){
  border-right: none;
}
.library .item:nth-child(18){
  border-right: none;
}
.library .item:nth-child(13){
  border-bottom: none;
}
.library .item:nth-child(14){
  border-bottom: none;
}
.library .item:nth-child(15){
  border-bottom: none;
}
.library .item:nth-child(16){
  border-bottom: none;
}
.library .item:nth-child(17){
  border-bottom: none;
}
.library .item:nth-child(18){
  border-bottom: none;
}
.library .item img{
  width: 100%;
  cursor: pointer;
  height: 100%;
  z-index: -10;
}
.library .item .preview{
  position: absolute;
  top:0%;
  color: white;
  font-size: 16px;
  z-index: 9999;
  cursor: pointer;
  visibility: hidden;
  background: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  transition: all 0.05s;
}
.library .item:hover .preview{
  visibility: visible;
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