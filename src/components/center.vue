<template>
  <div class="bigscreen_ct">
    <div class="bigscreen_ct_l">
      <span>今日报警数量</span>
      <div class="bigscreen_ct_lb">
        <div v-for="item in count1.toString().split('')">
          <img :src="shuimg(item)" alt="" />
        </div>
      </div>
    </div>
    <div class="bigscreen_ct_r">
      <span>历史报警数量</span>
      <div class="bigscreen_ct_rb">
        <div v-for="item in count2.toString().split('')">
          <img :src="shuimg(item)" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="bigscreen_cb">
    <div class="bigscreen_cb_nei"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import img from "../../public/img/0.png";
import img1 from "../../public/img/1.png";
import img2 from "../../public/img/2.png";
import img3 from "../../public/img/3.png";
import img4 from "../../public/img/4.png";
import img5 from "../../public/img/5.png";
import img6 from "../../public/img/6.png";
import img7 from "../../public/img/7.png";
import img8 from "../../public/img/8.png";
import img9 from "../../public/img/9.png";

const count1 = ref(321);
const count2 = ref(45671);

function shuimg(val: string) {
  const img = ref("");
  switch (val) {
    case "0":
      img.value = img;
      break;
    case "1":
      img.value = img1;
      break;
    case "2":
      img.value = img2;
      break;
    case "3":
      img.value = img3;
      break;
    case "4":
      img.value = img4;
      break;
    case "5":
      img.value = img5;
      break;
    case "6":
      img.value = img6;
      break;
    case "7":
      img.value = img7;
      break;
    case "8":
      img.value = img8;
      break;
    case "9":
      img.value = img9;
      break;
    default:
      break;
  }

  return img.value;
}
</script>

<style lang="scss" scoped>
$design-width: 1920;
$design-height: 1080;

@function adaptiveWidth($px) {
  @return #{$px / $design-width * 100}vw;
}

@function adaptiveHeight($px) {
  @return #{$px / $design-height * 100}vh;
}

@function adaptiveFontSize($px) {
  @return #{$px / $design-width * 100}vw;
}
.bigscreen_ct {
  width: adaptiveWidth(840);
  height: adaptiveHeight(119);
  position: absolute;
  top: adaptiveHeight(132);
  left: 50%;
  margin-left: adaptiveWidth(-420);
  display: flex;
  justify-content: space-between;
  .bigscreen_ct_l {
    width: adaptiveWidth(208);
    height: 100%;
    span {
      color: rgba(242, 242, 242, 1);
      font-size: adaptiveFontSize(24);
    }
    .bigscreen_ct_lb {
      width: 100%;
      height: adaptiveHeight(72);
      margin-top: adaptiveHeight(12);
      display: flex;
      justify-content: space-between;
      div {
        width: adaptiveWidth(63);
        height: adaptiveHeight(72);
        background: url("/public/img/数字背景.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .bigscreen_ct_r {
    width: adaptiveWidth(353);
    height: 100%;
    span {
      color: rgba(242, 242, 242, 1);
      font-size: adaptiveFontSize(24);
    }
    .bigscreen_ct_rb {
      width: 100%;
      height: adaptiveHeight(72);
      margin-top: adaptiveHeight(12);
      display: flex;
      justify-content: space-between;
      div {
        width:adaptiveWidth(63);
        height: adaptiveHeight(72);
        background: url("/public/img/数字背景.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}

.bigscreen_cb {
  width: adaptiveWidth(996);
  height: adaptiveHeight(665);
  background: url("/public/img/网格背景.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  bottom: adaptiveHeight(140);
  left: 50%;
  margin-left: adaptiveWidth(-498);
  display: flex;
  align-items: center;
  justify-content: center;
  .bigscreen_cb_nei {
    width: adaptiveWidth(840);
    height: adaptiveHeight(642);
    background: url("/public/img/主体图片.png") no-repeat;
    background-size: 100% 100%;
  }
}
</style>
