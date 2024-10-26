<template>
  <div class="bigscreen_lt">
    <div class="bigscreen_lt_top">
      <div class="bigscreen_lt_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>报警信息</span>
      </div>
    </div>
    <div class="bigscreen_lt_bottom">
      <div class="bigscreen_lt_bottom_nei" v-for="item in list">
        <img :src="item.img" alt="" />
        <div class="bigscreen_lt_bottom_nei_r">
          <span style="padding-left: 25px">{{ item.name }}</span>
          <span>{{ item.time }}</span>
          <span>{{ item.status }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="bigscreen_lc">
    <div class="bigscreen_lc_top">
      <div class="bigscreen_lc_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>设备台账</span>
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
    <div class="bigscreen_lc_bottom">
      <el-select
        size="small"
        class="selectcss"
        v-model="selectval2"
        style="
          width: 80px;
          position: absolute;
          right: 20px;
          top: 15px;
          z-index: 100;
        "
      >
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <div class="bigscreen_lc_bottom_nei" ref="bigscreenLCRef"></div>
    </div>
  </div>
  <div class="bigscreen_lb">
    <div class="bigscreen_lb_top">
      <div class="bigscreen_lb_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>物料类型</span>
      </div>
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
    <div class="bigscreen_lb_bottom">
      <div class="bigscreen_lb_bottom_nei" ref="bigscreenLBRef"></div>
    </div>
  </div>
  <center></center>
  <div class="bigscreen_rt">
    <div class="bigscreen_rt_top">
      <div class="bigscreen_rt_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>用量类型分析</span>
      </div>
    </div>
    <div class="bigscreen_rt_bottom">
      <div class="bigscreen_rt_bottom_nei" ref="bigscreenRTRef"></div>
    </div>
  </div>
  <div class="bigscreen_rc">
    <div class="bigscreen_rc_top">
      <div class="bigscreen_rc_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>用量趋势分析</span>
      </div>
      <div class="pickerCss">
        <img src="/public/img/zuo.svg" alt="" style="margin-left: 5px" />
        <span>7月21日</span>
        <span>-</span>
        <span>7月27日</span>
        <img src="/public/img/you.svg" alt="" style="margin-right: 5px" />
      </div>
    </div>
    <div class="bigscreen_rc_bottom">
      <el-select
        size="small"
        class="selectcss"
        v-model="selectval2"
        style="
          width: 80px;
          position: absolute;
          right: 20px;
          top: 15px;
          z-index: 100;
        "
      >
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <div class="bigscreen_rc_bottom_nei" ref="bigscreenRCRef"></div>
    </div>
  </div>
  <div class="bigscreen_rb">
    <div class="bigscreen_rb_top">
      <div class="bigscreen_rb_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>领用记录</span>
      </div>
    </div>
    <div class="bigscreen_rb_bottom">
      <div class="bigscreen_rb_bottom_nei">
        <div class="bigscreen_rb_bottom_nei_t">
          <span>物料名称</span>
          <span>领用时间</span>
          <span>领用人员</span>
          <span>领用数量</span>
        </div>
        <div
          :class="
            active == index
              ? 'bigscreen_rb_bottom_nei_active'
              : 'bigscreen_rb_bottom_nei_b'
          "
          v-for="(item, index) in list3"
        >
          <span>
            <img
              src="/public/img/equipment/tableicon.png"
              alt=""
              v-if="active == index"
            />
            {{ item.code }}
          </span>
          <span>{{ item.time }}</span>
          <span>{{ item.name }}</span>
          <span>{{ item.danwei }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import center from "../../components/center.vue";

const radio1 = ref("zhou");
const list = ref([
  {
    name: "物料一",
    img: "/img/materials/lv.png",
    status: "库存异常",
    time: "2024-10-11 12:04:58",
  },
  {
    name: "物料一",
    img: "/img/materials/lan.png",
    status: "领用异常",
    time: "2024-10-11 12:04:58",
  },
  {
    name: "物料一",
    img: "/img/materials/hong.png",
    status: "库存异常",
    time: "2024-10-11 12:04:58",
  },
]);

const selectval = ref("dian");
const options = ref([
  {
    label: "物料一",
    value: "dian",
  },
  {
    label: "物料二",
    value: "shui",
  },
]);

const selectval2 = ref("shui");
const options2 = ref([
  {
    label: "物料一",
    value: "dian",
  },
  {
    label: "物料二",
    value: "shui",
  },
]);

const active = ref(1);
const list3 = ref([
  {
    code: "物料一",
    time: "2024-10-09",
    name: "王凯",
    danwei: "1mg",
  },
  {
    code: "物料二",
    time: "2024-10-09",
    name: "王凯",
    danwei: "1mg",
  },
  {
    code: "物料三",
    time: "2024-10-09",
    name: "王凯",
    danwei: "1mg",
  },
  {
    code: "物料四",
    time: "2024-10-09",
    name: "王凯",
    danwei: "1mg",
  },
  {
    code: "物料五",
    time: "2024-10-09",
    name: "王凯",
    danwei: "1mg",
  },
]);

const bigscreenLCRef = ref();
const bigscreenLCoption = {
  grid: {
    left: "6%",
    right: "6%",
    bottom: "6%",
    top: "24%",
    containLabel: true,
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
      lineStyle: {
        color: "rgba(61, 230, 255, 1)", // 线条颜色
      },
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
              color: "rgba(61, 230, 255, 0.5)", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(61, 230, 255, 0)", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
    },
  ],
};

const bigscreenLBRef = ref();
const bigscreenLBoption = {
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

const bigscreenRTRef = ref();
const bigscreenRToption = {
  grid: {
    left: "6%",
    right: "6%",
    bottom: "6%",
    top: "24%",
    containLabel: true,
  },

  legend: {
    data: [
      {
        name: "用量类型一",
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#3EE6FF" }, // 浅色（顶部）
            { offset: 1, color: "#258A99" }, // 深色（底部）
          ]),
        },
      },
      {
        name: "用量类型二",
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#FF72A6" }, // 浅色（顶部）
            { offset: 1, color: "#FF3657" }, // 深色（底部）
          ]),
        },
      },
    ],
    top: "20px",
    textStyle: {
      color: "#ffffff",
    },
  },

  tooltip: {},
  dataset: {
    source: [
      ["product", "用量类型一", "用量类型二"],
      ["物料一", 43.3, 43.3],
      ["物料二", 43.3, 85.8],
      ["物料三", 83.1, 73.4],
      ["物料四", 86.4, 65.2],
      ["物料五", 72.4, 53.9],
      ["物料六", 72.4, 53.9],
      ["物料七", 72.4, 53.9],
    ],
  },
  xAxis: {
    type: "category",
    axisLabel: {
      color: "rgba(255, 255, 255, 0.65)",
    },
  },
  yAxis: {
    axisLabel: {
      color: "rgba(255, 255, 255, 0.65)",
    },
    splitLine: {
      lineStyle: {
        //网格样式
        color: ["rgba(255, 255, 255, 0.15)"], //网格的颜色
        type: "dashed", //网格是虚线
      },
    },
  },
  series: [
    {
      type: "bar",
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#3EE6FF" }, // 浅色（顶部）
          { offset: 1, color: "#258A99" }, // 深色（底部）
        ]),
      },
    },
    {
      type: "bar",
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#FF72A6 " }, // 浅色（顶部）
          { offset: 1, color: "#FF3657" }, // 深色（底部）
        ]),
      },
    },
  ],
};

const bigscreenRCRef = ref();
const bigscreenRCoption = {
  grid: {
    left: "6%",
    right: "6%",
    bottom: "6%",
    top: "24%",
    containLabel: true,
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

onMounted(() => {
  if (bigscreenLCRef.value) {
    const bigscreenLCChart = echarts.init(bigscreenLCRef.value);
    bigscreenLCChart.setOption(bigscreenLCoption);
  }
  if (bigscreenLBRef.value) {
    const bigscreenLBChart = echarts.init(bigscreenLBRef.value);
    bigscreenLBChart.setOption(bigscreenLBoption);
  }
  if (bigscreenRTRef.value) {
    const bigscreenRTChart = echarts.init(bigscreenRTRef.value);
    bigscreenRTChart.setOption(bigscreenRToption);
  }
  if (bigscreenRCRef.value) {
    const bigscreenRCChart = echarts.init(bigscreenRCRef.value);
    bigscreenRCChart.setOption(bigscreenRCoption);
  }
});
</script>

<style lang="scss" scoped>
.bigscreen_lt,
.bigscreen_lc,
.bigscreen_lb,
.bigscreen_rt,
.bigscreen_rc,
.bigscreen_rb {
  width: 443px;
  height: 292px;
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
    height: 251px;
    margin-top: 5px;
    background: url("/public/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .bigscreen_lt_bottom_nei {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      &:nth-child(2) {
        margin: 15px 0;
      }
      .bigscreen_lt_bottom_nei_r {
        margin-left: 20px;
        background: url("/public/img/back.png") no-repeat;
        background-size: 100% 100%;
        height: 33px;
        span {
          color: #ffffff;
          font-size: 14px;
          &:nth-child(2) {
            padding: 0 10px;
          }
          &:nth-child(3) {
            font-size: 20px;
            font-family: youshe;
            text-align: center;
            font-style: normal;
            text-transform: none;
            background: linear-gradient(
              to bottom,
              #ffffff 30%,
              #3582c7 100%
            ); /* 渐变背景 */
            background-clip: text; /* 让背景应用到文本 */
            -webkit-text-fill-color: transparent; /* 使文本颜色透明 */
          }
        }
      }
    }
  }
}

.bigscreen_lc {
  position: absolute;
  top: 395px;
  left: 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .bigscreen_lc_top {
    width: 100%;
    height: 40px;
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    background-size: 110% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bigscreen_lc_top_l {
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
  .bigscreen_lc_bottom {
    width: 100%;
    height: 251px;
    margin-top: 5px;
    background: url("/public/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    .bigscreen_lc_bottom_nei {
      width: 100%;
      height: 100%;
    }
  }
}

.bigscreen_lb {
  position: absolute;
  bottom: 85px;
  left: 26px;
  .bigscreen_lb_top {
    width: 100%;
    height: 40px;
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
    height: 251px;
    margin-top: 5px;
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
    height: 251px;
    margin-top: 5px;
    background: url("/public/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
    .bigscreen_rt_bottom_nei {
      width: 100%;
      height: 100%;
    }
  }
}

.bigscreen_rc {
  position: absolute;
  top: 395px;
  right: 26px;
  .bigscreen_rc_top {
    width: 100%;
    height: 40px;
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    background-size: 110% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bigscreen_rc_top_l {
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
  .bigscreen_rc_bottom {
    width: 100%;
    height: 251px;
    margin-top: 5px;
    background: url("/public/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    .bigscreen_rc_bottom_nei {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .bigscreen_rc_bottom_r {
        width: 381px;
        height: 207px;
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        .bigscreen_rc_bottom_rnei {
          width: 100%;
          height: 57px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          div {
            width: 100%;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
              color: rgba(255, 255, 255, 1);
              font-size: 14px;
            }
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
    height: 251px;
    margin-top: 5px;
    background: url("/public/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .bigscreen_rb_bottom_nei {
      width: 407px;
      .bigscreen_rb_bottom_nei_t {
        width: 100%;
        height: 30px;
        background: url("/public/img/equipment/tabletop.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          width: 25%;
          font-size: 14px;
          color: #9eabb7;
          text-align: center;
        }
      }
      .bigscreen_rb_bottom_nei_b {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
        span {
          width: 25%;
          color: #ffffff;
          font-size: 12px;
          text-align: center;
        }
      }
      .bigscreen_rb_bottom_nei_active {
        width: 100%;
        height: 33px;
        background: url("/public/img/equipment/tableactive.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
        span {
          width: 25%;
          color: #58a4cb;
          text-align: center;
          font-size: 12px;
          position: relative;
          &:nth-child(1) {
            img {
              position: absolute;
              left: 10px;
            }
          }
        }
      }
    }
  }
}

.pickerCss {
  width: 135px;
  height: 24px;
  border: 1px solid rgba(227, 233, 243, 0.2);
  border-radius: 5px;
  margin-right: 11px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: #ffffff;
    font-size: 12px;
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
