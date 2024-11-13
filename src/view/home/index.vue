<template>
  <div class="bigscreen_lt">
    <div class="bigscreen_lt_top">
      <div class="bigscreen_lt_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>报警信息</span>
      </div>
    </div>
    <div class="bigscreen_lt_bottom">
      <div class="bigscreen_lt_bottom_nei">
        <div
          v-for="item in list1"
          class="bigscreen_lt_nei"
          :style="{
            background: `url(${item.back}) no-repeat`,
            'background-size': '100% 100%',
          }"
          @click="neiClick(item)"
        >
          <span class="bigscreen_lt_nei_span">{{ item.name }}</span>
          <span class="bigscreen_lt_nei_span">{{ item.level }}</span>
          <span class="bigscreen_lt_nei_span">{{ item.time }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="bigscreen_lc">
    <div class="bigscreen_lc_top">
      <div class="bigscreen_lc_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>事件报告</span>
      </div>
      <el-input
        class="inputcss"
        placeholder="请输入事件类型"
        :prefix-icon="Search"
      />
    </div>
    <div class="bigscreen_lc_bottom">
      <div class="bigscreen_lc_bottom_nei">
        <img src="/public/img/事件报告图标.png" alt="" />
        <div class="bigscreen_lc_bottom_r">
          <Vue3SeamlessScroll
            :list="list"
            :class-option="{
              step: 5,
            }"
            class="scrool"
          >
            <div
              v-for="(item, index) in list"
              :key="index"
              class="bigscreen_lc_bottom_rnei"
            >
              <span>{{ item.name }}</span>
              <div
                :style="{
                  background: ` url(${item.img}) no-repeat`,
                  'background-size': '100% 100%',
                }"
              >
                {{ item.status }}
              </div>
            </div>
          </Vue3SeamlessScroll>
        </div>
      </div>
    </div>
  </div>
  <div class="bigscreen_lb">
    <div class="bigscreen_lb_top">
      <div class="bigscreen_lb_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>报警历史</span>
      </div>
      <div class="groupCss">
        <el-radio-group v-model="radio1" class="group">
          <el-radio-button label="周" value="zhou" />
          <el-radio-button label="月" value="ri" />
        </el-radio-group>
      </div>
    </div>
    <!-- <BorderBox1 class="bigscreen_lb_bottom"> -->
    <div class="bigscreen_lb_bottom">
      <div class="bigscreen_lb_bottom_nei" ref="bigscreenLBRef"></div>
    </div>

    <!-- </BorderBox1> -->
  </div>
  <center></center>
  <div class="bigscreen_rt">
    <div class="bigscreen_rt_top">
      <div class="bigscreen_rt_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>监控报告</span>
      </div>
      <el-input
        class="inputcss"
        style="width: 148px; height: 24px; margin-right: 11px"
        placeholder="请输入监控点位"
        :prefix-icon="Search"
      />
    </div>
    <div class="bigscreen_rt_bottom">
      <div class="bigscreen_rt_bottom_nei">
        <img src="/public/img/监控报告图标.png" alt="" />
        <div class="bigscreen_rt_bottom_r">
          <div @click="rtClick"><span>JK218 科学大道点位1</span></div>
          <div><span>JK218 科学大道点位1</span></div>
          <div><span>JK218 科学大道点位1</span></div>
        </div>
      </div>
    </div>
  </div>
  <div class="bigscreen_rc">
    <div class="bigscreen_rc_top">
      <div class="bigscreen_rc_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>政策法规</span>
      </div>
      <el-input
        class="inputcss"
        placeholder="请输入政策法规名称"
        :prefix-icon="Search"
      />
    </div>
    <div class="bigscreen_rc_bottom">
      <div class="bigscreen_rc_bottom_nei">
        <div class="bigscreen_rc_bottom_l">
          <img src="/public/img/圆形标记.png" alt="" />
          <img style="margin-top: 70px" src="/public/img/圆形标记.png" alt="" />
          <img style="margin-top: 70px" src="/public/img/圆形标记.png" alt="" />
        </div>
        <div class="bigscreen_rc_bottom_r">
          <Vue3SeamlessScroll
            :list="list2"
            :class-option="{
              step: 5,
            }"
            class="scrool"
          >
            <div
              v-for="(item, index) in list2"
              :key="index"
              class="bigscreen_rc_bottom_rnei"
            >
              <span style="color: rgba(172, 223, 255, 1); font-size: 11px"
                >2024年09月23日 22:15:53</span
              >
              <div
                :style="{
                  background: `url(${item.background}) no-repeat`,
                  'background-size': '100% 100%',
                }"
              >
                <span>{{ item.text }}</span>
                <img
                  style="margin-right: 18px"
                  src="/public/img/查看详情.png"
                  alt=""
                />
              </div>
            </div>
          </Vue3SeamlessScroll>
        </div>
      </div>
    </div>
  </div>
  <div class="bigscreen_rb">
    <div class="bigscreen_rb_top">
      <div class="bigscreen_rb_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>安全生产曲线</span>
      </div>
      <div class="groupCss">
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

  <template v-for="item in list1">
    <div v-if="item.status" class="ltDialog">
      <div class="ltDialog_top">
        <span>报警信息详情</span>
        <img :src="img9" alt="" srcset="" @click="canleClick(item)" />
      </div>
      <div class="ltDialog_bottom">
        <img :src="item.img" alt="" />
        <div class="ltDialog_bottomr">
          <div>
            <span>报警级别：</span>
            <span>001</span>
          </div>
          <div>
            <span>报警类型：</span>
            <span>{{ item.name }}</span>
          </div>
          <div>
            <span>报警信息：</span>
            <span>{{ item.name }}</span>
          </div>
          <div>
            <span>报警级别：</span>
            <span>{{ item.level }}</span>
          </div>
          <div>
            <span>报警时间：</span>
            <span>{{ item.time }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>

  <div v-if="rtStatus" class="rtDialog">
    <div class="rtDialog_top">
      <span>查看监控视频</span>
      <img :src="img9" alt="" srcset="" @click="rtcanleClick" />
    </div>
    <div class="rtDialog_bottom">
      <img src="/public/img/监控视频尺寸.png" alt="" />
      <div>倍速播放×1</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import { Search } from "@element-plus/icons-vue";
import center from "../../components/center.vue";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import "../../assets/scss/index.scss";

import img1 from "../../../public/img/黄色.png";
import img2 from "../../../public/img/绿色.png";
import img3 from "../../../public/img/红色.png";
import img4 from "../../../public/img/蓝色.png";
import img5 from "../../../public/img/红色背景框.png";
import img6 from "../../../public/img/绿色背景框.png";
import img7 from "../../../public/img/黄色背景框.png";
import img9 from "../../../public/img/叉号.png";

const radio1 = ref("zhou");
const list = ref([
  {
    name: "物料A库存异常",
    img: img1,
    status: "物料报警",
  },
  {
    name: "设备一监测数据异常",
    img: img2,
    status: "设备报警",
  },
  {
    name: "XXX产品出现质量问题",
    img: img3,
    status: "质量问题",
  },
  {
    name: "XXX发生安全事故",
    img: img4,
    status: "事故问题",
  },
]);

const list2 = ref([
  {
    background: img5,
    text: "《WHO实验室生物安全手册 (第四版)》",
  },
  {
    background: img6,
    text: "《WHO实验室生物安全手册 (第四版)》",
  },
  {
    background: img7,
    text: "《WHO实验室生物安全手册 (第四版)》",
  },
]);

const list1 = ref([
  {
    name: "设备报警",
    level: "二级",
    time: "2024-07-31 22:58:15",
    icon: "",
    back: "/img/设备报警.png",
    status: false,
    img: "/img/二级.png",
  },
  {
    name: "环境数据",
    level: "三级",
    time: "2024-07-31 22:58:15",
    icon: "",
    back: "/img/环境数据.png",
    status: false,
    img: "/img/三级.png",
  },
  {
    name: "物料数据",
    level: "二级",
    time: "2024-07-31 22:58:15",
    icon: "",
    back: "/img/物料报警.png",
    status: false,
    img: "/img/二级.png",
  },
  {
    name: "工艺节点",
    level: "一级",
    time: "2024-07-31 22:58:15",
    icon: "",
    back: "/img/工艺节点.png",
    status: false,
    img: "/img/一级.png",
  },
]);

let bigscreenLBChart: any = null;
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
    axisLabel: {
      color: "rgba(255, 255, 255, 0.65)",
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
      color: "rgba(255, 255, 255, 0.65)",
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
  grid: {
    left: "60px",
    top: "40px",
    bottom: "40px",
  },
  legend: {
    data: [
      {
        name: "设备报警",
        itemStyle: { color: "RGBA(255, 169, 19, 1)" },
      },
      {
        name: "环境数据",
        itemStyle: { color: "RGBA(225, 110, 122, 1)" },
      },
      {
        name: "物料数据",
        itemStyle: { color: "RGBA(65, 195, 142, 1)" },
      },
      {
        name: "工艺节点",
        itemStyle: { color: "RGBA(210, 114, 255, 1)" },
      },
    ],
    top: "10px",
    textStyle: {
      color: "#ffffff",
    },
  },
  xAxis: {
    type: "category",
    data: ["07-21", "07-22", "07-23", "07-24", "07-25", "07-26", "07-27"],
    axisLabel: {
      color: "rgba(255, 255, 255, 0.65)",
    },
  },
  yAxis: {
    type: "value",
    splitLine: {
      show: true,
      lineStyle: {
        color: ["rgba(255, 255, 255, 0.15)"],
        type: "dashed",
      },
    },
    axisLabel: {
      color: "rgba(255, 255, 255, 0.65)",
    },
  },
  series: [
    {
      name: "设备报警",
      data: [50, 60, 90, 200, 120, 140, 80],
      type: "line",
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "RGBA(255, 169, 19, 1)", // 线条颜色
      },
      areaStyle: createAreaStyle(
        "RGBA(255, 169, 19, 0.5)",
        "rgba(255, 169, 19, 0)"
      ),
    },
    {
      name: "环境数据",
      data: [20, 40, 60, 210, 90, 140, 50],
      type: "line",
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "RGBA(225, 110, 122, 1)", // 线条颜色
      },
      areaStyle: createAreaStyle(
        "RGBA(225, 110, 122, 0.5)",
        "rgba(225, 110, 122, 0)"
      ),
    },
    {
      name: "物料数据",
      data: [200, 20, 21, 30, 200, 170, 50],
      type: "line",
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "RGBA(65, 195, 142, 1)", // 线条颜色
      },
      areaStyle: createAreaStyle(
        "RGBA(65, 195, 142, 0.5)",
        "rgba(65, 195, 142, 0)"
      ),
    },
    {
      name: "工艺节点",
      data: [200, 180, 40, 30, 50, 170, 50],
      type: "line",
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "RGBA(210, 114, 255, 1)", // 线条颜色
      },
      areaStyle: createAreaStyle(
        "RGBA(210, 114, 255, 0.5)",
        "rgba(210, 114, 255, 0)"
      ),
    },
  ],
};

const neiClick = (item) => {
  list1.value.forEach((v) => {
    if (item.name == v.name) {
      v.status = !v.status;
    } else {
      v.status = false;
    }
  });
};
const canleClick = (item) => {
  item.status = false;
};

const rtStatus = ref(false);
const rtClick = () => {
  rtStatus.value = !rtStatus.value;
};
const rtcanleClick = () => {
  rtStatus.value = false;
};

// 创建 areaStyle 的函数
function createAreaStyle(startColor: string, endColor: string) {
  return {
    color: {
      type: "linear",
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: startColor,
        },
        {
          offset: 1,
          color: endColor,
        },
      ],
      global: false,
    },
  };
}

onMounted(() => {
  if (bigscreenLBRef.value) {
    bigscreenLBChart = echarts.init(bigscreenLBRef.value);
    bigscreenLBChart.setOption(bigscreenLBoption);
  }

  if (bigscreenRBRef.value) {
    bigscreenRBChart = echarts.init(bigscreenRBRef.value);
    bigscreenRBChart.setOption(bigscreenRBoption);
  }
});
window.onresize = function () {
  bigscreenLBChart.resize();
  bigscreenRBChart.resize();
};
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
.bigscreen_lc,
.bigscreen_lb,
.bigscreen_rt,
.bigscreen_rc,
.bigscreen_rb {
  width: adaptiveWidth(443);
  height: adaptiveHeight(292);
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
    height: adaptiveHeight(251);
    margin-top: adaptiveHeight(5);
    background: url("/public/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
    .bigscreen_lt_bottom_nei {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .bigscreen_lt_nei {
        width: adaptiveWidth(93);
        height: adaptiveHeight(210);
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        &:nth-child(1) {
          margin-left: adaptiveWidth(18);
        }
        &:nth-child(4) {
          margin-right: adaptiveWidth(18);
        }
        .bigscreen_lt_nei_span {
          &:nth-child(1) {
            color: rgba(255, 255, 255, 0.8);
            font-size: adaptiveFontSize(14);
            font-weight: 400;
            padding-top: adaptiveHeight(97);
          }
          &:nth-child(2) {
            color: #ffffff;
            font-size: adaptiveFontSize(20);
            font-weight: 500;
          }
          &:nth-child(3) {
            color: rgba(255, 255, 255, 0.8);
            font-size: adaptiveFontSize(8);
            font-weight: 400;
          }
        }
      }
    }
  }
}

.bigscreen_lc {
  position: absolute;
  top: adaptiveHeight(395);
  left: adaptiveWidth(26);
  .bigscreen_lc_top {
    width: 100%;
    height: adaptiveHeight(40);
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    background-size: 110% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bigscreen_lc_top_l {
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
  .bigscreen_lc_bottom {
    width: 100%;
    height: adaptiveHeight(251);
    margin-top: adaptiveHeight(5);
    background: url("/public/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
    .bigscreen_lc_bottom_nei {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: adaptiveWidth(164);
        height: adaptiveHeight(159);
      }
      .bigscreen_lc_bottom_r {
        width: adaptiveWidth(256);
        height: adaptiveHeight(195);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;

        .bigscreen_lc_bottom_rnei {
          width: 100%;
          height: adaptiveHeight(45);
          margin-top: adaptiveHeight(10);
          background: url("/public/img/背景1.png") no-repeat;
          background-size: 100% 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          span {
            color: rgba(244, 249, 255, 1);
            font-size: adaptiveFontSize(11);
            margin-left: adaptiveWidth(20);
          }
          div {
            width: adaptiveWidth(67);
            height: adaptiveHeight(31);
            color: rgba(244, 249, 255, 1);
            font-size: adaptiveFontSize(12);
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: adaptiveWidth(22);
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
    height: adaptiveHeight(40);
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
        padding-left: adaptiveWidth(10);
      }
    }
  }
  .bigscreen_lb_bottom {
    width: 100%;
    height: adaptiveHeight(251);
    margin-top: adaptiveHeight(5);
    background: url("/public/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
    .bigscreen_lb_bottom_nei {
      width: 100%;
      height: 100%;
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
        padding-left: adaptiveWidth(10);
      }
    }
  }
  .bigscreen_rt_bottom {
    width: 100%;
    height: adaptiveHeight(251);
    margin-top: adaptiveHeight(5);
    background: url("/public/img/背景下层.png") no-repeat;
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
            margin-left: adaptiveFontSize(10);
          }
        }
      }
    }
  }
}

.bigscreen_rc {
  position: absolute;
  top: adaptiveHeight(395);
  right: adaptiveWidth(26);
  .bigscreen_rc_top {
    width: 100%;
    height: adaptiveHeight(40);
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    background-size: 110% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bigscreen_rc_top_l {
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
  .bigscreen_rc_bottom {
    width: 100%;
    height: adaptiveHeight(251);
    margin-top: adaptiveHeight(5);
    background: url("/public/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
    .bigscreen_rc_bottom_nei {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .bigscreen_rc_bottom_l {
        width: adaptiveWidth(20);
        height: adaptiveHeight(207);
        background: url("/img/线.png") no-repeat;
        background-size: 2px 100%;
        background-position: center;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .bigscreen_rc_bottom_r {
        width: adaptiveWidth(381);
        height: adaptiveHeight(207);
        margin-left: adaptiveFontSize(15);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        .bigscreen_rc_bottom_rnei {
          width: 100%;
          height: adaptiveHeight(57);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          div {
            width: 100%;
            height: adaptiveHeight(38);
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
              color: rgba(255, 255, 255, 1);
              font-size: adaptiveFontSize(14);
            }
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
      margin-right: adaptiveWidth(11);
    }
  }
  .bigscreen_rb_bottom {
    width: 100%;
    height: adaptiveHeight(251);
    margin-top: adaptiveHeight(5);
    background: url("/public/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
    .bigscreen_rb_bottom_nei {
      width: 100%;
      height: 100%;
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
      width: adaptiveWidth(99);
      height: adaptiveHeight(99);
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

.rtDialog {
  width: adaptiveWidth(440);
  height: adaptiveHeight(280);
  background: url("/public/img/弹窗背景.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: adaptiveHeight(100);
  right: adaptiveWidth(480);
  z-index: 10;
  .rtDialog_top {
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
  .rtDialog_bottom {
    width: adaptiveWidth(420);
    height: adaptiveHeight(215);
    margin-left: adaptiveWidth(10);
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: adaptiveHeight(195);
    }
    div {
      font-size: adaptiveFontSize(14);
      color: #ffffff;
    }
  }
}

.inputcss {
  // width: adaptiveWidth(148);
  height: adaptiveHeight(24);
  margin-right: adaptiveWidth(11);
}
.inputcss :deep(.el-input__wrapper) {
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: none;
  .el-input__inner {
    font-size: adaptiveFontSize(12);
  }
}
.scroll {
  height: adaptiveHeight(195);
  width: 100%;
  overflow: hidden;
}

.groupCss {
  width: adaptiveWidth(65);
  height: adaptiveHeight(24);
  border: adaptiveWidth(1) solid rgba(255, 255, 255, 0.2);
  margin-right: adaptiveWidth(11);
  display: flex;
  align-items: center;
  justify-content: center;
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
  font-size: adaptiveFontSize(12);
}
.group :deep(.el-radio-button .el-radio-button__inner) {
  padding: 2px 8px;
  background: rgba(255, 255, 255, 0);
  border-color: rgba(255, 255, 255, 0);
  font-size: adaptiveFontSize(12);
  border-radius: 2px;
}
</style>
