<template>
  <div class="bigscreen_lt">
    <div class="bigscreen_lt_top">
      <div class="bigscreen_lt_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>门禁记录</span>
      </div>
    </div>
    <div class="bigscreen_lt_bottom">
      <div class="bigscreen_lt_bottom_nei" v-for="item in list">
        <img src="/public/img/personnel/人物图标.png" alt="" />
        <div
          class="bigscreen_lt_bottom_nei_r"
          :style="{
            background: `url(${item.img}) no-repeat`,
            'background-size': '100% 100%',
          }"
        >
          <div>
            <span>张建坤</span>
            <span>进入</span>
          </div>
          <div>
            <span>员工编号：YG005</span>
            <span>门禁地点：公司大门</span>
          </div>
          <div>
            <span>刷卡时间：2024-07-20 20:23:06</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bigscreen_lb">
    <div class="bigscreen_lb_top">
      <div class="bigscreen_lb_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>特征指标</span>
      </div>
      <el-input
        class="inputcss"
        style="width: 148px; height: 24px; margin-right: 11px"
        placeholder="请输入员工姓名"
        :prefix-icon="Search"
      />
    </div>
    <div class="bigscreen_lb_bottom">
      <div class="bigscreen_lb_bottom_nei" v-for="item in list2">
        <div class="bigscreen_lb_bottom_nei_count">
          <div class="left">
            <div
              :style="{
                width: '79px',
                height: '27px',
                background: `url(${item.img}) no-repeat`,
                backgroundSize: '100% 100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '13px',
                color: '#ffffff',
              }"
            >
              {{ item.name }}
            </div>
            <div style="color: #ffffff; margin-top: 10px">{{ item.code }}</div>
          </div>
          <div class="right">
            <span class="right_text">
              <span>体温：{{ item.tiwen }}℃</span>
              <span style="padding-left: 15px"
                >心率：{{ item.xinlv }}/分钟</span
              >
            </span>
            <span class="right_text">
              <span>血压：{{ item.xuya1 }}mmHg</span>
              <span style="padding-left: 15px">{{ item.xueya2 }}mmHg</span>
            </span>
            <span class="right_text">
              <span>监测时间：{{ item.time }}</span>
            </span>
          </div>
        </div>
        <div class="bigscreen_lb_bottom_nei_dizuo"></div>
      </div>
    </div>
  </div>
  <center></center>
  <div class="bigscreen_rt">
    <div class="bigscreen_rt_top">
      <div class="bigscreen_rt_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>视频监控</span>
      </div>
    </div>
    <div class="bigscreen_rt_bottom">
      <swiper :slides-per-view="1" :space-between="10" pagination>
        <swiper-slide v-for="(item, index) in slides" :key="index">
          <img :src="item.image" alt="" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <div class="bigscreen_rb">
    <div class="bigscreen_rb_top">
      <div class="bigscreen_rb_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>异常健康指标统计</span>
      </div>
      <div
        style="
          width: 65px;
          height: 24px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-right: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        <el-radio-group v-model="radio1" class="group">
          <el-radio-button label="周" value="zhou" />
          <el-radio-button label="月" value="ri" />
        </el-radio-group>
      </div>
    </div>
    <div class="bigscreen_rb_bottom">
      <div class="bigscreen_rb_bottom_nei" ref="bigscreenRBRef"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
// import { BorderBox1 } from "@dataview/datav-vue3/es";
import { Search } from "@element-plus/icons-vue";
import center from "../../components/center.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import img1 from "../../../public/img/视频监控尺寸.png";

const radio1 = ref("zhou");

const slides = [{ image: img1 }, { image: img1 }, { image: img1 }];

const list = ref([
  {
    name: "张建坤",
    code: "YG005",
    didian: "公司大门",
    time: "2024-07-20 20:23:06",
    img: "/img/personnel/红色背景.png",
  },
  {
    name: "张建坤",
    code: "YG005",
    didian: "公司大门",
    time: "2024-07-20 20:23:06",
    img: "/img/personnel/绿色背景.png",
  },
  {
    name: "张建坤",
    code: "YG005",
    didian: "公司大门",
    time: "2024-07-20 20:23:06",
    img: "/img/personnel/黄色背景.png",
  },
]);

const list2 = ref([
  {
    name: "张建坤",
    code: "YG001",
    tiwen: 36.5,
    xinlv: 75,
    xuya1: 100,
    xueya2: 145,
    time: "2024-07-20 20:23:06",
    img: "/img/personnel/名字绿色背景.png",
  },
  {
    name: "张建坤",
    code: "YG001",
    tiwen: 36.5,
    xinlv: 75,
    xuya1: 100,
    xueya2: 145,
    time: "2024-07-20 20:23:06",
    img: "/img/personnel/名字蓝色背景.png",
  },
  {
    name: "张建坤",
    code: "YG001",
    tiwen: 36.5,
    xinlv: 75,
    xuya1: 100,
    xueya2: 145,
    time: "2024-07-20 20:23:06",
    img: "/img/personnel/名字棕色背景.png",
  },
]);

const bigscreenLBRef = ref();
const bigscreenLBoption = {
  grid: {
    left: "60px",
    top: "40px",
    bottom: "40px",
  },

  xAxis: {
    type: "category",
    data: ["07-21", "07-22", "07-23", "07-24", "07-25", "07-26", "07-27"],
  },
  yAxis: {
    type: "value",
    splitLine: {
      show: true, //让网格显示
      lineStyle: {
        //网格样式
        color: ["rgba(255, 255, 255, 0.15)"], //网格的颜色
        width: 2, //网格的宽度
        type: "dashed", //网格是实实线，可以修改成虚线以及其他的类型
      },
    },
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
      smooth: true,
      symbol: "none",
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(54, 161, 255, 0.60)", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(25, 104, 255, 0)", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
    },
  ],
};

let bigscreenRBChart: any = null;
const bigscreenRBRef = ref();

const bigscreenRBoption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    data: [
      {
        name: "温度异常",
        itemStyle: { color: "#79B24C" },
      },
      {
        name: "血压异常",
        itemStyle: { color: "#68B1A6" },
      },
    ],
    textStyle: {
      color: "#ffffff",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      axisLine: {
        lineStyle: {
          color: "#ffffff", // 修改 X 轴线条颜色
        },
      },
      axisLabel: {
        color: "#ffffff", // 修改 X 轴标签颜色
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#ffffff", // 修改 Y 轴线条颜色
        },
      },
      axisLabel: {
        color: "#ffffff", // 修改 Y 轴标签颜色
      },
    },
  ],
  series: [
    {
      name: "温度异常",
      type: "bar",
      stack: "Ad",
      emphasis: {
        focus: "series",
      },
      itemStyle: {
        color: "#79B24C", // 线条颜色
      },
      data: [220, 182, 191, 234, 290, 330, 310, 320, 330, 310, 320, 310],
    },
    {
      name: "血压异常",
      type: "bar",
      stack: "Ad",
      emphasis: {
        focus: "series",
      },
      itemStyle: {
        color: "#68B1A6", // 线条颜色
      },
      data: [150, 232, 201, 154, 190, 330, 410, 420, 190, 330, 410, 420],
    },
  ],
};

onMounted(() => {
  if (bigscreenLBRef.value) {
    const bigscreenLBChart = echarts.init(bigscreenLBRef.value);
    bigscreenLBChart.setOption(bigscreenLBoption);
  }

  if (bigscreenRBRef.value) {
    bigscreenRBChart = echarts.init(bigscreenRBRef.value);
    bigscreenRBChart.setOption(bigscreenRBoption);
  }
});
</script>

<style lang="scss" scoped>
.bigscreen_lt,
.bigscreen_lb,
.bigscreen_rt,
.bigscreen_rb {
  width: 443px;
  height: 445px;
}
.bigscreen_lt {
  position: absolute;
  top: 91px;
  left: 26px;
  .bigscreen_lt_top {
    width: 100%;
    height: 34px;
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    background-size: 110% 100%;
    display: flex;
    align-items: center;
    .bigscreen_lt_top_l {
      display: flex;
      align-items: center;
      img {
        margin-left: 11px;
      }
      span {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        font-style: normal;
        text-transform: none;
        background: linear-gradient(
          to bottom,
          #c7e5fd 42%,
          #3582c7 100%
        ); /* 渐变背景 */
        background-clip: text; /* 让背景应用到文本 */
        -webkit-text-fill-color: transparent; /* 使文本颜色透明 */
        padding-left: 10px;
      }
    }
  }
  .bigscreen_lt_bottom {
    width: 100%;
    height: 406px;
    margin-top: 5px;
    background: url("/public/img/bigback.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .bigscreen_lt_bottom_nei {
      height: 92px;
      display: flex;
      align-items: center;
      &:nth-child(1) {
        margin-top: 30px;
      }
      &:nth-child(3) {
        margin-bottom: 30px;
      }
      .bigscreen_lt_bottom_nei_r {
        width: 276px;
        height: 82px;
        margin-left: 15px;
        position: relative;
        div {
          display: flex;
          &:nth-child(1) {
            position: absolute;
            top: -5px;
            left: 15px;
            span {
              &:nth-child(1) {
                color: #ffffff;
                font-size: 13px;
              }
              &:nth-child(2) {
                font-size: 10px;
                color: #00fff9;
                border: 1px solid #00fff9;
                padding: 0 3px;
                margin-left: 10px;
              }
            }
          }
          &:nth-child(2),
          &:nth-child(3) {
            color: #ffffff;
            font-size: 13px;
            display: flex;
            justify-content: space-between;
          }
          &:nth-child(2) {
            margin-top: 25px;
            span {
              &:nth-child(1) {
                margin-left: 15px;
              }
            }
          }
          &:nth-child(3) {
            margin-top: 5px;
            span {
              margin-left: 15px;
            }
          }
        }
      }
    }
  }
}

.bigscreen_lb {
  position: absolute;
  bottom: 85px;
  left: 26px;
  .bigscreen_lb_top {
    width: 100%;
    height: 34px;
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    background-size: 110% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bigscreen_lb_top_l {
      display: flex;
      align-items: center;
      img {
        margin-left: 11px;
      }
      span {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        font-style: normal;
        text-transform: none;
        background: linear-gradient(
          to bottom,
          #c7e5fd 42%,
          #3582c7 100%
        ); /* 渐变背景 */
        background-clip: text; /* 让背景应用到文本 */
        -webkit-text-fill-color: transparent; /* 使文本颜色透明 */
        padding-left: 10px;
      }
    }
  }
  .bigscreen_lb_bottom {
    width: 100%;
    height: 406px;
    margin-top: 5px;
    background: url("/public/img/bigback.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .bigscreen_lb_bottom_nei {
      width: 394px;
      height: 85px;
      position: relative;
      &:nth-child(1) {
        margin-top: 40px;
      }
      &:nth-child(3) {
        margin-bottom: 60px;
      }
      .bigscreen_lb_bottom_nei_count {
        height: 100%;
        display: flex;
        position: absolute;
        z-index: 100;
        .left {
          width: 79px;
          height: 100%;
          margin-left: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .right {
          margin-left: 30px;
          height: 50px;
          display: flex;
          flex-direction: column;
          .right_text {
            span {
              color: #ffffff;
              font-size: 13px;
            }
          }
        }
      }
      .bigscreen_lb_bottom_nei_dizuo {
        position: absolute;
        bottom: 0;
        background: url("/public/img/personnel/特质指标底座.png") no-repeat;
        background-size: 100% 100%;
        width: 100%;
        height: 49px;
      }
    }
  }
}

.bigscreen_rt {
  position: absolute;
  top: 91px;
  right: 26px;
  .bigscreen_rt_top {
    width: 100%;
    height: 34px;
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    background-size: 110% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bigscreen_rt_top_l {
      display: flex;
      align-items: center;
      img {
        margin-left: 11px;
      }
      span {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        font-style: normal;
        text-transform: none;
        background: linear-gradient(
          to bottom,
          #c7e5fd 42%,
          #3582c7 100%
        ); /* 渐变背景 */
        background-clip: text; /* 让背景应用到文本 */
        -webkit-text-fill-color: transparent; /* 使文本颜色透明 */
        padding-left: 10px;
      }
    }
  }
  .bigscreen_rt_bottom {
    width: 100%;
    height: 406px;
    margin-top: 5px;
    background: url("/public/img/bigback.png") no-repeat;
    background-size: 100% 100%;
    .bigscreen_rt_bottom_nei {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      img {
        width: 126px;
        height: 176px;
        margin-right: 28px;
      }
      .bigscreen_rt_bottom_r {
        width: 218px;
        height: 167px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div {
          width: 100%;
          height: 41px;
          background: url("/public/img/半透明背景1.png") no-repeat;
          background-size: 100% 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          span {
            font-size: 14px;
            color: rgba(255, 255, 255, 1);
            margin-left: 10px;
          }
        }
      }
    }
  }
}

.bigscreen_rb {
  position: absolute;
  bottom: 85px;
  right: 26px;
  .bigscreen_rb_top {
    width: 100%;
    height: 34px;
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-size: 110% 100%;
    .bigscreen_rb_top_l {
      display: flex;
      align-items: center;
      img {
        margin-left: 11px;
      }
      span {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        font-style: normal;
        text-transform: none;
        background: linear-gradient(
          to bottom,
          #c7e5fd 42%,
          #3582c7 100%
        ); /* 渐变背景 */
        background-clip: text; /* 让背景应用到文本 */
        -webkit-text-fill-color: transparent; /* 使文本颜色透明 */
        padding-left: 10px;
      }
    }
    .bigscreen_rb_top_r {
      display: flex;
      align-items: center;
      margin-right: 11px;
    }
  }
  .bigscreen_rb_bottom {
    width: 100%;
    height: 406px;
    margin-top: 5px;
    background: url("/public/img/bigback.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .bigscreen_rb_bottom_nei {
      width: 403px;
      height: 366px;
    }
  }
}

.inputcss :deep(.el-input__wrapper) {
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: none;
}
.scroll {
  height: 195px;
  width: 100%;
  overflow: hidden;
}

.group
  :deep(
    .el-radio-button.is-active
      .el-radio-button__original-radio:not(:disabled)
      + .el-radio-button__inner
  ) {
  background: rgba(255, 255, 255, 0.8);
  color: rgba(7, 36, 57, 1);
  border-color: rgba(255, 255, 255, 0);
  font-size: 12px;
}
.group :deep(.el-radio-button .el-radio-button__inner) {
  padding: 2px 8px;
  background: rgba(255, 255, 255, 0);
  border-color: rgba(255, 255, 255, 0);
  font-size: 12px;
  border-radius: 2px;
}
</style>
