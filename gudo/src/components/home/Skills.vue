<template>
  <div style="text-align: center ; color: gray ; font-weight: bold; font-size: 32px">
    G-EDU
  </div>
  <div style="text-align: center ; color: black ; font-weight: bold; font-size: 32px">
    Kỹ năng đạt được
  </div>
  <div class=" container" style="margin-top: 36px">
    <div class="row" >
      <div class="col-3 skill " style="padding-right: 16px">
        <div style="width: 100%; height: 280px ">
          <img src="../../assets/images/image_slide.png" style="width: 100%; height: 100%">
        </div>
        <div class="skill-title">
          Ngữ pháp
        </div>
        <div class="skill-introduce">
          Là nền tảng quan trọng nhất của ngôn ngữ, “gốc rễ” phải chắc thì cây mới vững chãi và ra hoa kết trái.
        </div>
      </div>
      <div class="col-3 skill " style="padding-right: 16px">
        <div style="width: 100%; height: 280px ">
          <img src="../../assets/images/image_slide.png" style="width: 100%; height: 100%">
        </div>
        <div class="skill-title">
          Ngữ pháp
        </div>
        <div class="skill-introduce">
          Là nền tảng quan trọng nhất của ngôn ngữ, “gốc rễ” phải chắc thì cây mới vững chãi và ra hoa kết trái.
        </div>
      </div>
      <div class="col-3 skill " style="padding-right: 16px">
        <div style="width: 100%; height: 280px ">
          <img src="../../assets/images/image_slide.png" style="width: 100%; height: 100%">
        </div>
        <div class="skill-title">
          Ngữ pháp
        </div>
        <div class="skill-introduce">
          Là nền tảng quan trọng nhất của ngôn ngữ, “gốc rễ” phải chắc thì cây mới vững chãi và ra hoa kết trái.
        </div>
      </div>
      <div class="col-3 skill ">
        <div style="width: 100%; height: 280px ">
          <img src="../../assets/images/image_slide.png" style="width: 100%; height: 100%">
        </div>
        <div class="skill-title">
          Ngữ pháp
        </div>
        <div class="skill-introduce">
          Là nền tảng quan trọng nhất của ngôn ngữ, “gốc rễ” phải chắc thì cây mới vững chãi và ra hoa kết trái.
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Skills"
}
</script>

<style scoped>
.skill-title{
  color: black;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
}

.skill-introduce{
  color: black;
  font-size: 16px;
  text-align: center;
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