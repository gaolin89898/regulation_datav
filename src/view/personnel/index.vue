<template>
  <div class="bigscreen_lt">
    <div class="bigscreen_lt_top">
      <div class="bigscreen_lt_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>门禁记录</span>
      </div>
    </div>
    <div class="bigscreen_lt_bottom">
      <div
        class="bigscreen_lt_bottom_nei"
        v-for="item in list"
        @click="ltClick(item)"
      >
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
      <div
        class="bigscreen_lb_bottom_nei"
        v-for="item in list2"
        @click="lbClick(item)"
      >
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
      <swiper
        :slides-per-view="1"
        :space-between="10"
        pagination
        style="width: 100%; height: 100%"
      >
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

  <template v-for="item in list">
    <div v-if="item.status" class="ltDialog">
      <div class="ltDialog_top">
        <span>查看人员信息</span>
        <img :src="img9" alt="" srcset="" @click="ltcanleClick(item)" />
      </div>
      <div class="ltDialog_bottom">
        <img src="/public/img/弹窗头像图标.png" alt="" />
        <div class="ltDialog_bottomr">
          <div>
            <span>员工编号：</span>
            <span>{{ item.code }}</span>
          </div>
          <div>
            <span>姓名：</span>
            <span>{{ item.name }}</span>
          </div>
          <div>
            <span>性别：</span>
            <span>{{ item.sex }}</span>
          </div>
          <div>
            <span>部门：</span>
            <span>{{ item.bumen }}</span>
          </div>
          <div>
            <span>岗位：</span>
            <span>{{ item.gangwei }}</span>
          </div>
          <div>
            <span>联系方式：</span>
            <span>{{ item.phone }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>

  <template v-for="item in list2">
    <div v-show="item.status" class="lbDialog">
      <div class="lbDialog_top">
        <span>趋势分析</span>
        <img :src="img9" alt="" srcset="" @click="lbcanleClick(item)" />
      </div>
      <div class="lbDialog_bottom" id="lbDialogBottom"></div>
      <el-select
        size="small"
        class="selectcss"
        v-model="selectval"
        style="width: 80px; margin-right: 11px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from "vue";
import * as echarts from "echarts";
// import { BorderBox1 } from "@dataview/datav-vue3/es";
import { Search } from "@element-plus/icons-vue";
import center from "../../components/center.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import img1 from "../../../public/img/视频监控尺寸.png";
import img9 from "../../../public/img/叉号.png";

const radio1 = ref("zhou");

const slides = [{ image: img1 }, { image: img1 }, { image: img1 }];

const list = ref([
  {
    name: "张建坤",
    code: "YG005",
    didian: "公司大门",
    time: "2024-07-20 20:23:06",
    img: "/img/personnel/红色背景.png",
    sex: "男",
    bumen: "产品研发部",
    gangwei: "药理学家",
    phone: "18546521548",
    status: false,
  },
  {
    name: "张建坤",
    code: "YG006",
    didian: "公司大门",
    time: "2024-07-20 20:23:06",
    img: "/img/personnel/绿色背景.png",
    sex: "男",
    bumen: "产品研发部",
    gangwei: "药理学家",
    phone: "18546521548",
    status: false,
  },
  {
    name: "张建坤",
    code: "YG007",
    didian: "公司大门",
    time: "2024-07-20 20:23:06",
    img: "/img/personnel/黄色背景.png",
    sex: "男",
    bumen: "产品研发部",
    gangwei: "药理学家",
    phone: "18546521548",
    status: false,
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
    status: false,
  },
  {
    name: "张建坤",
    code: "YG002",
    tiwen: 36.5,
    xinlv: 75,
    xuya1: 100,
    xueya2: 145,
    time: "2024-07-20 20:23:06",
    img: "/img/personnel/名字蓝色背景.png",
    status: false,
  },
  {
    name: "张建坤",
    code: "YG003",
    tiwen: 36.5,
    xinlv: 75,
    xuya1: 100,
    xueya2: 145,
    time: "2024-07-20 20:23:06",
    img: "/img/personnel/名字棕色背景.png",
    status: false,
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

let lbDialogBottomChart: any = null;
const lbDialogBottomoption = {
  grid: {
    left: "6%",
    right: "6%",
    bottom: "6%",
    top: "20%",
    containLabel: true,
  },

  xAxis: {
    type: "category",
    data: ["07-21", "07-22", "07-23", "07-24", "07-25", "07-26", "07-27"],
    axisLabel: {
      color: "rgba(255,255,255,0.65)",
    },
  },
  yAxis: {
    type: "value",
    splitLine: {
      show: true, //让网格显示
      lineStyle: {
        //网格样式
        color: ["rgba(255, 255, 255, 0.15)"], //网格的颜色
        type: "dashed", //网格是实实线，可以修改成虚线以及其他的类型
      },
    },
    axisLabel: {
      color: "rgba(255,255,255,0.65)",
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

const ltClick = (item) => {
  list.value.forEach((v) => {
    if (item.code == v.code) {
      v.status = !v.status;
    } else {
      v.status = false;
    }
  });
};

const ltcanleClick = (item) => {
  item.status = false;
};

const selectval = ref("dian");
const options = ref([
  {
    label: "湿度",
    value: "dian",
  },
  {
    label: "温度",
    value: "shui",
  },
]);
const lbClick = (item) => {
  list2.value.forEach((v) => {
    if (item.code == v.code) {
      v.status = !v.status;
    } else {
      v.status = false;
    }
  });
  nextTick(() => {
    const lbDialogBottomElement = document.getElementById("lbDialogBottom");
    console.log(lbDialogBottomElement);
    if (lbDialogBottomChart) {
      lbDialogBottomChart.dispose();
    }
    // 初始化新的图表实例
    lbDialogBottomChart = echarts.init(lbDialogBottomElement);
    lbDialogBottomChart.setOption(lbDialogBottomoption);
  });
};
const lbcanleClick = (item) => {
  item.status = false;
};

window.onresize = function () {
  bigscreenRBChart.resize();
  lbDialogBottomChart.resize();
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

.bigscreen_lt,
.bigscreen_lb,
.bigscreen_rt,
.bigscreen_rb {
  width: adaptiveWidth(443);
  height: adaptiveHeight(445);
}
.bigscreen_lt {
  position: absolute;
  top: adaptiveHeight(91);
  left: adaptiveWidth(26);
  .bigscreen_lt_top {
    width: 100%;
    height: adaptiveHeight(40);
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    background-size: 110% 100%;
    display: flex;
    align-items: center;
    .bigscreen_lt_top_l {
      display: flex;
      align-items: center;
      img {
        margin-left: adaptiveWidth(11);
      }
      span {
        font-weight: 600;
        font-size: adaptiveFontSize(16);
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
        padding-left: adaptiveWidth(10);
      }
    }
  }
  .bigscreen_lt_bottom {
    width: 100%;
    height: adaptiveHeight(406);
    margin-top: adaptiveHeight(5);
    background: url("/public/img/bigback.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .bigscreen_lt_bottom_nei {
      height: adaptiveHeight(92);
      display: flex;
      align-items: center;
      &:nth-child(1) {
        margin-top: adaptiveHeight(30);
      }
      &:nth-child(3) {
        margin-bottom: adaptiveHeight(30);
      }
      .bigscreen_lt_bottom_nei_r {
        width: adaptiveWidth(276);
        height: adaptiveHeight(82);
        margin-left: adaptiveWidth(15);
        position: relative;
        div {
          display: flex;
          &:nth-child(1) {
            position: absolute;
            top: adaptiveHeight(-5);
            left: adaptiveWidth(15);
            span {
              &:nth-child(1) {
                color: #ffffff;
                font-size: adaptiveFontSize(13);
              }
              &:nth-child(2) {
                font-size: adaptiveFontSize(10);
                color: #00fff9;
                border: 1px solid #00fff9;
                padding: 0 adaptiveHeight(3);
                margin-left: adaptiveWidth(10);
              }
            }
          }
          &:nth-child(2),
          &:nth-child(3) {
            color: #ffffff;
            font-size: adaptiveFontSize(13);
            display: flex;
            justify-content: space-between;
          }
          &:nth-child(2) {
            margin-top: adaptiveHeight(25);
            span {
              &:nth-child(1) {
                margin-left: adaptiveWidth(15);
              }
            }
          }
          &:nth-child(3) {
            margin-top: adaptiveHeight(5);
            span {
              margin-left: adaptiveWidth(15);
            }
          }
        }
      }
    }
  }
}

.bigscreen_lb {
  position: absolute;
  bottom: adaptiveHeight(85);
  left: adaptiveWidth(26);
  .bigscreen_lb_top {
    width: 100%;
    height: adaptiveHeight(34);
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    background-size: 110% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bigscreen_lb_top_l {
      display: flex;
      align-items: center;
      img {
        margin-left: adaptiveWidth(11);
      }
      span {
        font-weight: 600;
        font-size: adaptiveFontSize(16);
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
        padding-left: adaptiveHeight(10);
      }
    }
  }
  .bigscreen_lb_bottom {
    width: 100%;
    height: adaptiveHeight(406);
    margin-top: adaptiveHeight(5);
    background: url("/public/img/bigback.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .bigscreen_lb_bottom_nei {
      width: adaptiveWidth(394);
      height: adaptiveHeight(85);
      position: relative;
      &:nth-child(1) {
        margin-top: adaptiveHeight(40);
      }
      &:nth-child(3) {
        margin-bottom: adaptiveHeight(60);
      }
      .bigscreen_lb_bottom_nei_count {
        height: 100%;
        display: flex;
        position: absolute;
        z-index: 100;
        .left {
          width: adaptiveWidth(79);
          height: 100%;
          margin-left: adaptiveWidth(30);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .right {
          margin-left: adaptiveWidth(30);
          height: adaptiveHeight(50);
          display: flex;
          flex-direction: column;
          .right_text {
            span {
              color: #ffffff;
              font-size: adaptiveFontSize(13);
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
        height: adaptiveHeight(49);
      }
    }
  }
}

.bigscreen_rt {
  position: absolute;
  top: adaptiveHeight(91);
  right: adaptiveWidth(26);
  .bigscreen_rt_top {
    width: 100%;
    height: adaptiveHeight(40);
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    background-size: 110% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bigscreen_rt_top_l {
      display: flex;
      align-items: center;
      img {
        margin-left: adaptiveWidth(11);
      }
      span {
        font-weight: 600;
        font-size: adaptiveFontSize(16);
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
        padding-left: adaptiveHeight(10);
      }
    }
  }
  .bigscreen_rt_bottom {
    width: 100%;
    height: adaptiveHeight(406);
    margin-top: adaptiveHeight(5);
    background: url("/public/img/bigback.png") no-repeat;
    background-size: 100% 100%;
    .bigscreen_rt_bottom_nei {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      img {
        width: adaptiveWidth(126);
        height: adaptiveHeight(176);
        margin-right: adaptiveWidth(28);
      }
      .bigscreen_rt_bottom_r {
        width: adaptiveWidth(218);
        height: adaptiveHeight(167);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div {
          width: 100%;
          height: adaptiveHeight(41);
          background: url("/public/img/半透明背景1.png") no-repeat;
          background-size: 100% 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          span {
            font-size: adaptiveFontSize(14);
            color: rgba(255, 255, 255, 1);
            margin-left: adaptiveWidth(10);
          }
        }
      }
    }
  }
}

.bigscreen_rb {
  position: absolute;
  bottom: adaptiveHeight(85);
  right: adaptiveWidth(26);
  .bigscreen_rb_top {
    width: 100%;
    height: adaptiveHeight(40);
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-size: 110% 100%;
    .bigscreen_rb_top_l {
      display: flex;
      align-items: center;
      img {
        margin-left: adaptiveWidth(11);
      }
      span {
        font-weight: 600;
        font-size: adaptiveFontSize(16);
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
        padding-left: adaptiveWidth(10);
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
    height: adaptiveHeight(406);
    margin-top: adaptiveHeight(5);
    background: url("/public/img/bigback.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .bigscreen_rb_bottom_nei {
      width: adaptiveWidth(403);
      height: adaptiveHeight(366);
    }
  }
}

.ltDialog {
  width: adaptiveWidth(440);
  height: adaptiveHeight(280);
  background: url("/public/img/弹窗背景.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: adaptiveHeight(100);
  left: adaptiveWidth(480);
  z-index: 10;
  .ltDialog_top {
    width: 100%;
    height: adaptiveHeight(45);
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: adaptiveFontSize(20);
      color: #ffffff;
      padding-left: adaptiveWidth(15);
      font-family: youshe;
    }
    img {
      width: adaptiveWidth(8);
      height: adaptiveHeight(8);
      padding-right: adaptiveWidth(10);
      cursor: pointer;
    }
  }
  .ltDialog_bottom {
    width: 100%;
    height: adaptiveHeight(230);
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: adaptiveWidth(98);
      height: adaptiveHeight(98);
      margin-right: adaptiveWidth(20);
    }
    .ltDialog_bottomr {
      margin-left: adaptiveWidth(20);
      div {
        margin-top: adaptiveHeight(10);
        &:nth-child(1) {
          margin-top: 0;
        }
        span {
          font-size: adaptiveFontSize(14);
          &:nth-child(1) {
            color: #687f92;
          }
          &:nth-child(2) {
            color: #ffffff;
          }
        }
      }
    }
  }
}

.lbDialog {
  width: adaptiveWidth(440);
  height: adaptiveHeight(297);
  background: url("/public/img/弹窗背景.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  bottom: adaptiveHeight(150);
  left: adaptiveWidth(480);
  z-index: 10;
  .lbDialog_top {
    width: 100%;
    height: adaptiveHeight(45);
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: adaptiveFontSize(20);
      color: #ffffff;
      padding-left: adaptiveWidth(15);
      font-family: youshe;
    }
    img {
      width: adaptiveWidth(8);
      height: adaptiveHeight(8);
      padding-right: adaptiveWidth(10);
      cursor: pointer;
    }
  }
  .lbDialog_bottom {
    width: adaptiveWidth(440);
    height: adaptiveHeight(230);
  }
  .selectcss {
    position: absolute;
    top: adaptiveHeight(55);
    right: adaptiveWidth(10);
  }
}

:deep(.selectcss) {
  .el-select__wrapper {
    background-color: transparent !important;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2) !important;
  }
  .el-select__placeholder {
    color: rgba(255, 255, 255, 0.6) !important;
  }

  .el-select__selected-item {
    color: rgba(255, 255, 255, 0.6) !important;
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
