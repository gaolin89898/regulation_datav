<template>
  <div class="bigscreen_lt">
    <div class="bigscreen_lt_top">
      <div class="bigscreen_lt_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>报警信息</span>
      </div>
    </div>
    <div class="bigscreen_lt_bottom">
      <div
        style="
          width: 100px;
          height: 218px;
          background: url('/img/报警图标底座.png') no-repeat;
          background-position: 0 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
        "
      >
        <img src="/public/img/报警信息图标.png" alt="" />
        <div style="color: #ffffff; margin-bottom: 20px">
          <div style="text-align: center">
            <span style="font-size: 32px">98</span>
            <span style="font-size: 16px">%</span>
          </div>
          <div style="font-size: 16px">当前数据</div>
        </div>
      </div>
      <div class="bigscreen_lt_bottom_r">
        <div class="bigscreen_lt_bottom_r_nei" v-for="(item, index) in list3">
          <div
            style="
              color: #ffffff;
              font-size: 12px;
              display: flex;
              align-items: center;
              margin-left: 20px;
            "
          >
            {{ item.code }}
          </div>
          <div style="color: #ffffff; font-size: 12px">{{ item.time }}</div>
          <div
            :style="{
              color: index % 2 === 0 ? '#01D1E7' : '#DF9819',
              fontSize: '12px',
              marginRight: '15px',
            }"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bigscreen_lc">
    <div class="bigscreen_lc_top">
      <div class="bigscreen_lc_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>区域统计</span>
      </div>
      <div class="pickerCss">
        <img src="/public/img/zuo.svg" alt="" style="margin-left: 5px" />
        <span>7月21日</span>
        <span>-</span>
        <span>7月27日</span>
        <img src="/public/img/you.svg" alt="" style="margin-right: 5px" />
      </div>
    </div>
    <div class="bigscreen_lc_bottom">
      <div class="bigscreen_lc_bottom_nei" ref="bigscreenLCRef"></div>
    </div>
  </div>
  <div class="bigscreen_lb">
    <div class="bigscreen_lb_top">
      <div class="bigscreen_lb_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>报警历史</span>
      </div>
      <el-input
        class="inputcss"
        style="width: 148px; height: 24px; margin-right: 11px"
        placeholder="请输入报警类型"
        :prefix-icon="Search"
      />
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
        <span>事件报告</span>
      </div>
      <el-input
        class="inputcss"
        style="width: 148px; height: 24px; margin-right: 11px"
        placeholder="请输入监控报告"
        :prefix-icon="Search"
      />
    </div>
    <div class="bigscreen_rt_bottom">
      <div class="bigscreen_rt_bottom_nei">
        <img
          style="width: 163px; height: 159px"
          src="/public/img/事件报告图标.png"
          alt=""
        />
        <div class="bigscreen_rt_bottom_r">
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
              class="bigscreen_rt_bottom_rnei"
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
  <div class="bigscreen_rc">
    <div class="bigscreen_rc_top">
      <div class="bigscreen_rc_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>SOP管理</span>
      </div>
      <el-input
        class="inputcss"
        style="width: 148px; height: 24px; margin-right: 11px"
        placeholder="请输入SOP名称"
        :prefix-icon="Search"
      />
    </div>
    <div class="bigscreen_rc_bottom">
      <div class="bigscreen_rc_bottom_nei">
        <div class="bigscreen_rc_bottom_nei_t">
          <span>SOP名称</span>
          <span>发布部门</span>
          <span>适用范围</span>
        </div>
        <div class="bigscreen_rc_bottom_nei_b" v-for="(item, index) in list4">
          <span>
            {{ item.code }}
          </span>
          <span>{{ item.time }}</span>
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="bigscreen_rb">
    <div class="bigscreen_rb_top">
      <div class="bigscreen_rb_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>政策法规</span>
      </div>
      <el-input
        class="inputcss"
        style="width: 148px; height: 24px; margin-right: 11px"
        placeholder="请输入政策法规"
        :prefix-icon="Search"
      />
    </div>
    <div class="bigscreen_rb_bottom">
      <div class="bigscreen_rb_bottom_nei">
        <div
          style="
            width: 20px;
            height: 207px;
            background: url('/img/线.png') no-repeat;
            background-size: 2px 100%;
            background-position: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          "
        >
          <img src="/public/img/圆形标记.png" alt="" />
          <img style="margin-top: 70px" src="/public/img/圆形标记.png" alt="" />
          <img style="margin-top: 70px" src="/public/img/圆形标记.png" alt="" />
        </div>
        <div class="bigscreen_rb_bottom_r">
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
              class="bigscreen_rb_bottom_rnei"
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
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
// import { BorderBox1 } from "@dataview/datav-vue3/es";
import { Search } from "@element-plus/icons-vue";
import center from "../../components/center.vue";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";

const list = ref([
  {
    name: "物料A库存异常",
    img: "/img/黄色.png",
    status: "物料报警",
  },
  {
    name: "设备一监测数据异常",
    img: "/img/绿色.png",
    status: "设备报警",
  },
  {
    name: "XXX产品出现质量问题",
    img: "/img/红色.png",
    status: "质量问题",
  },
  {
    name: "XXX发生安全事故",
    img: "/img/蓝色.png",
    status: "事故问题",
  },
]);

const list2 = ref([
  {
    background: "/img/红色背景框.png",
    text: "《WHO实验室生物安全手册 (第四版)》",
  },
  {
    background: "/img/绿色背景框.png",
    text: "《WHO实验室生物安全手册 (第四版)》",
  },
  {
    background: "/img/黄色背景框.png",
    text: "《WHO实验室生物安全手册 (第四版)》",
  },
]);

const list3 = ref([
  { code: "编号1", time: "2024-10-11", name: "徐凯品" },
  { code: "编号1", time: "2024-10-11", name: "徐凯品" },
  { code: "编号1", time: "2024-10-11", name: "徐凯品" },
  { code: "编号1", time: "2024-10-11", name: "徐凯品" },
  { code: "编号1", time: "2024-10-11", name: "徐凯品" },
]);

const list4 = ref([
  {
    code: "《综合应急预案SOP》",
    time: "安全生产部",
    name: "车间应急方案",
  },
  {
    code: "《危险化学品事故专项SOP》",
    time: "安全生产部",
    name: "物料管理",
  },
  {
    code: "《综合应急预案SOP》",
    time: "安全生产部",
    name: "车间应急方案",
  },
  {
    code: "《危险化学品事故专项SOP》",
    time: "安全生产部",
    name: "物料管理",
  },
  {
    code: "《综合应急预案SOP》",
    time: "安全生产部",
    name: "车间应急方案",
  },
]);

let bigscreenLBChart: any = null;
const bigscreenLBRef = ref();
const bigscreenLBoption = {
  grid: {
    left: "6%",
    right: "6%",
    bottom: "6%",
    containLabel: true,
  },
  xAxis: {
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
    axisLabel: {
      color: "#ffffff",
    },
  },
  yAxis: {
    type: "value",
    splitLine: {
      lineStyle: {
        type: "dashed",
        color: "rgba(255,255,255,0.14)",
      },
    },
    axisLabel: {
      color: "#ffffff",
    },
  },
  series: [
    {
      data: [2, 0.5, 1, 0.7, 3, 3.5, 1, 5, 3, 2, 2, 5],
      type: "bar",
      itemStyle: {
        color: "#68B1A6", // 线条颜色
      },
    },
  ],
};

let bigscreenLCChart: any = null;
const bigscreenLCRef = ref();
const bigscreenLCoption = {
  grid: {
    left: "6%",
    right: "6%",
    bottom: "6%",
    top: "24%",
    containLabel: true,
  },

  tooltip: {
    trigger: "item",
  },
  series: [
    {
      // name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
      ],
    },
  ],
};

window.onresize = function () {
  bigscreenLCChart.resize();
  bigscreenLBChart.resize();
};

onMounted(() => {
  if (bigscreenLBRef.value) {
    bigscreenLBChart = echarts.init(bigscreenLBRef.value);
    bigscreenLBChart.setOption(bigscreenLBoption);
  }

  if (bigscreenLCRef.value) {
    bigscreenLCChart = echarts.init(bigscreenLCRef.value);
    bigscreenLCChart.setOption(bigscreenLCoption);
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
    // background-position: ;
    display: flex;
    align-items: center;
    .bigscreen_lt_top_l {
      display: flex;
      align-items: center;
      img {
        margin-left:adaptiveWidth(11);
      }
      span {
        font-weight: 600;
        font-size:adaptiveFontSize(16);
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
        padding-left:adaptiveWidth(10);
      }
    }
  }
  .bigscreen_lt_bottom {
    width: 100%;
    height:adaptiveHeight(251);
    margin-top:adaptiveHeight(5);
    background: url("/public/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .bigscreen_lt_bottom_r {
      width:adaptiveWidth(290);
      height:adaptiveHeight(211);
      margin-left:adaptiveWidth(15);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .bigscreen_lt_bottom_r_nei {
        width: 100%;
        height:adaptiveHeight(35);
        background: rgba(4, 30, 62);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
}

.bigscreen_lc {
  position: absolute;
  top:adaptiveHeight(395);
  left:adaptiveWidth(26);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .bigscreen_lc_top {
    width: 100%;
    height:adaptiveHeight(40);
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    background-size: 110% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bigscreen_lc_top_l {
      display: flex;
      align-items: center;
      img {
        margin-left:adaptiveWidth(11);
      }
      span {
        font-weight: 600;
        font-size:adaptiveFontSize(16);
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
        padding-left:adaptiveWidth(10);
      }
    }
    .pickerCss {
      width:adaptiveWidth(135);
      height:adaptiveHeight(24);
      border: 1px solid rgba(227, 233, 243, 0.2);
      border-radius: 5px;
      margin-right:adaptiveWidth(11);
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        color: #ffffff;
        font-size:adaptiveFontSize(12);
      }
    }
  }
  .bigscreen_lc_bottom {
    width: 100%;
    height:adaptiveHeight(251);
    margin-top:adaptiveHeight(5);
    background: url("/public/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
    .bigscreen_lc_bottom_nei {
      width: 100%;
      height: 100%;
    }
  }
}

.bigscreen_lb {
  position: absolute;
  bottom:adaptiveHeight(85);
  left:adaptiveWidth(26);
  .bigscreen_lb_top {
    width: 100%;
    height:adaptiveHeight(34);
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    background-size: 110% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bigscreen_lb_top_l {
      display: flex;
      align-items: center;
      img {
        margin-left:adaptiveWidth(11);
      }
      span {
        font-weight: 600;
        font-size:adaptiveFontSize(16);
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
        padding-left:adaptiveWidth(10);
      }
    }
  }
  .bigscreen_lb_bottom {
    width: 100%;
    height:adaptiveHeight(251);
    margin-top:adaptiveHeight(5);
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
  top:adaptiveHeight(91);
  right:adaptiveWidth(26);
  .bigscreen_rt_top {
    width: 100%;
    height:adaptiveHeight(40);
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    background-size: 110% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bigscreen_rt_top_l {
      display: flex;
      align-items: center;
      img {
        margin-left:adaptiveWidth(11);
      }
      span {
        font-weight: 600;
        font-size:adaptiveFontSize(16);
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
        padding-left:adaptiveWidth(10);
      }
    }
  }
  .bigscreen_rt_bottom {
    width: 100%;
    height:adaptiveHeight(251);
    margin-top:adaptiveHeight(5) ;
    background: url("/public/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
    .bigscreen_rt_bottom_nei {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .bigscreen_rt_bottom_r {
        width:adaptiveWidth(265);
        height:adaptiveHeight(195);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        .bigscreen_rt_bottom_rnei {
          width: 100%;
          height:adaptiveHeight(45);
          background: url("/public/img/背景1.png") no-repeat;
          background-size: 100% 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          span {
            color: rgba(244, 249, 255, 1);
            font-size:adaptiveFontSize(11);
            margin-left:adaptiveWidth(20);
          }
          div {
            width:adaptiveWidth(67);
            height:adaptiveHeight(31);
            color: rgba(244, 249, 255, 1);
            font-size:adaptiveFontSize(12);
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right:adaptiveWidth(22);
          }
        }
      }
    }
  }
}

.bigscreen_rc {
  position: absolute;
  top:adaptiveHeight(395);
  right:adaptiveWidth(26);
  .bigscreen_rc_top {
    width: 100%;
    height:adaptiveHeight(40);
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    background-size: 110% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bigscreen_rc_top_l {
      display: flex;
      align-items: center;
      img {
        margin-left:adaptiveWidth(11);
      }
      span {
        font-weight: 600;
        font-size:adaptiveFontSize(16);
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
        padding-left:adaptiveWidth(10);
      }
    }
  }
  .bigscreen_rc_bottom {
    width: 100%;
    height:adaptiveHeight(251);
    margin-top:adaptiveHeight(5);
    background: url("/public/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .bigscreen_rc_bottom_nei {
      width:adaptiveWidth(407);
      .bigscreen_rc_bottom_nei_t {
        width: 100%;
        height:adaptiveHeight(30);
        background: url("/public/img/equipment/tabletop.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          &:nth-child(1) {
            width: 43%;
          }
          width: 28%;
          color: #9eabb7;
          font-size:adaptiveFontSize(14);
          text-align: center;
        }
      }
      .bigscreen_rc_bottom_nei_b {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:adaptiveHeight(15);
        span {
          &:nth-child(1) {
            width: 43%;
          }
          width: 28%;
          color: #ffffff;
          font-size: 12px;
          text-align: center;
        }
      }
      .bigscreen_rc_bottom_nei_active {
        width: 100%;
        height:adaptiveHeight(33);
        background: url("/public/img/equipment/tableactive.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:adaptiveHeight(15);
        span {
          width: 33%;
          color: #58a4cb;
          text-align: center;
          position: relative;
          &:nth-child(1) {
            img {
              position: absolute;
              left:adaptiveWidth(25);
              top:adaptiveHeight(2);
            }
          }
        }
      }
    }
  }
}

.bigscreen_rb {
  position: absolute;
  bottom:adaptiveHeight(85);
  right:adaptiveWidth(26);
  .bigscreen_rb_top {
    width: 100%;
    height:adaptiveHeight(40);
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    background-size: 110% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bigscreen_rb_top_l {
      display: flex;
      align-items: center;
      img {
        margin-left: 11px;
      }
      span {
        font-weight: 600;
        font-size:adaptiveFontSize(16);
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
        padding-left:adaptiveWidth(10);
      }
    }
  }
  .bigscreen_rb_bottom {
    width: 100%;
    height:adaptiveHeight(251);
    margin-top:adaptiveHeight(5);
    background: url("/public/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
    .bigscreen_rb_bottom_nei {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .bigscreen_rb_bottom_r {
        width:adaptiveWidth(381);
        height:adaptiveHeight(207);
        margin-left:adaptiveWidth(15);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        .bigscreen_rb_bottom_rnei {
          width: 100%;
          height:adaptiveHeight(57);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          div {
            width: 100%;
            height:adaptiveHeight(38);
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
              color: rgba(255, 255, 255, 1);
              font-size:adaptiveFontSize(14);
            }
          }
        }
      }
    }
  }
}

.inputcss :deep(.el-input__wrapper) {
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: none;
}
.scroll {
  height:adaptiveHeight(195);
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
  font-size:adaptiveFontSize(12);
  border-radius: 2px;
}
</style>
