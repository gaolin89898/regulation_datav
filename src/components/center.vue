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
.bigscreen_ct {
  width: 840px;
  height: 119px;
  position: absolute;
  top: 132px;
  left: 50%;
  margin-left: -420px;
  display: flex;
  justify-content: space-between;
  .bigscreen_ct_l {
    width: 208px;
    height: 100%;
    span {
      color: rgba(242, 242, 242, 1);
      font-size: 24px;
    }
    .bigscreen_ct_lb {
      width: 100%;
      height: 72px;
      margin-top: 12px;
      display: flex;
      justify-content: space-between;
      div {
        width: 63px;
        height: 72px;
        background: url("/public/img/数字背景.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .bigscreen_ct_r {
    width: 353px;
    height: 100%;
    span {
      color: rgba(242, 242, 242, 1);
      font-size: 24px;
    }
    .bigscreen_ct_rb {
      width: 100%;
      height: 72px;
      margin-top: 12px;
      display: flex;
      justify-content: space-between;
      div {
        width: 63px;
        height: 72px;
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
  width: 996px;
  height: 665px;
  background: url("/public/img/网格背景.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  bottom: 140px;
  left: 50%;
  margin-left: -498px;
  display: flex;
  align-items: center;
  justify-content: center;
  .bigscreen_cb_nei {
    width: 840px;
    height: 642px;
    background: url("/public/img/主体图片.png") no-repeat;
    background-size: 100% 100%;
  }
}
</style>
