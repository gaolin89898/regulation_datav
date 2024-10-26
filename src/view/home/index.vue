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
        <div class="bigscreen_lt_nei1">
          <span>设备报警</span>
          <span>二级</span>
          <span>2024-07-31 22:58:15</span>
        </div>
        <div class="bigscreen_lt_nei2">
          <span>环境数据</span>
          <span>三级</span>
          <span>2024-07-31 22:58:15</span>
        </div>
        <div class="bigscreen_lt_nei3">
          <span>物料数据</span>
          <span>二级</span>
          <span>2024-07-31 22:58:15</span>
        </div>
        <div class="bigscreen_lt_nei4" @click="nei4Click">
          <span>工艺节点</span>
          <span>三级</span>
          <span>2024-07-31 22:58:15</span>
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
        style="width: 148px; height: 24px; margin-right: 11px"
        placeholder="请输入事件类型"
        :prefix-icon="Search"
      />
    </div>
    <div class="bigscreen_lc_bottom">
      <div class="bigscreen_lc_bottom_nei">
        <img
          style="width: 163px; height: 159px"
          src="/public/img/事件报告图标.png"
          alt=""
        />
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
          <div><span>JK218 科学大道点位1</span></div>
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
        style="width: 178px; height: 24px; margin-right: 11px"
        placeholder="请输入政策法规名称"
        :prefix-icon="Search"
      />
    </div>
    <div class="bigscreen_rc_bottom">
      <div class="bigscreen_rc_bottom_nei">
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
  <div
    v-if="nei4Status"
    style="
      width: 440px;
      height: 280px;
      background: url('/img/弹窗背景.png') no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: 70px;
      left: 500px;
    "
  >
    <div
      style="
        width: 100%;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      "
    >
      <span style="font-size: 20px; color: #ffffff; padding-left: 15px"
        >报警信息详情</span
      >
      <img style="padding-right: 10px" :src="img9" alt="" srcset="" />
    </div>
    <div
      style="
        width: 100%;
        height: 230px;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      <img :src="img8" alt="" />
      <div style="margin-left: 20px">
        <div>
          <span style="color: #687f92">报警级别：</span>
          <span style="color: #ffffff">001</span>
        </div>
        <div style="margin-top: 10px">
          <span style="color: #687f92">报警类型：</span>
          <span style="color: #ffffff">设备报警</span>
        </div>
        <div style="margin-top: 10px">
          <span style="color: #687f92">报警信息：</span>
          <span style="color: #ffffff">隔离器报警</span>
        </div>
        <div style="margin-top: 10px">
          <span style="color: #687f92">报警级别：</span>
          <span style="color: #ffffff">一级</span>
        </div>
        <div style="margin-top: 10px">
          <span style="color: #687f92">报警时间：</span>
          <span style="color: #ffffff">2024-07-31 22:58:15</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import { Search } from "@element-plus/icons-vue";
import center from "../../components/center.vue";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";

import img1 from "../../../public/img/黄色.png";
import img2 from "../../../public/img/绿色.png";
import img3 from "../../../public/img/红色.png";
import img4 from "../../../public/img/蓝色.png";
import img5 from "../../../public/img/红色背景框.png";
import img6 from "../../../public/img/绿色背景框.png";
import img7 from "../../../public/img/黄色背景框.png";
import img8 from "../../../public/img/一级.png";
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

const nei4Status = ref(false);
const nei4Click = () => {
  nei4Status.value = !nei4Status.value;
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
    // background-position: 10px 0;
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
    .bigscreen_lt_bottom_nei {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .bigscreen_lt_nei1,
      .bigscreen_lt_nei2,
      .bigscreen_lt_nei3,
      .bigscreen_lt_nei4 {
        width: 93px;
        height: 210px;
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
          &:nth-child(1) {
            color: rgba(255, 255, 255, 0.8);
            font-size: 14px;
            font-weight: 400;
            padding-top: 97px;
          }
          &:nth-child(2) {
            color: #ffffff;
            font-size: 20px;
            font-weight: 500;
          }
          &:nth-child(3) {
            color: rgba(255, 255, 255, 0.8);
            font-size: 8px;
            font-weight: 400;
          }
        }
      }
      .bigscreen_lt_nei1 {
        background: url("/public/img/设备报警.png") no-repeat;
        background-size: 100% 100%;
        margin-left: 18px;
      }
      .bigscreen_lt_nei2 {
        background: url("/public/img/环境数据.png") no-repeat;
        background-size: 100% 100%;
      }
      .bigscreen_lt_nei3 {
        background: url("/public/img/物料报警.png") no-repeat;
        background-size: 100% 100%;
      }
      .bigscreen_lt_nei4 {
        background: url("/public/img/工艺节点.png") no-repeat;
        background-size: 100% 100%;
        margin-right: 18px;
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
    height: 34px;
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
    .bigscreen_lc_bottom_nei {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .bigscreen_lc_bottom_r {
        width: 265px;
        height: 195px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        .bigscreen_lc_bottom_rnei {
          width: 100%;
          height: 45px;
          background: url("/public/img/背景1.png") no-repeat;
          background-size: 100% 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          span {
            color: rgba(244, 249, 255, 1);
            font-size: 11px;
            margin-left: 20px;
          }
          div {
            width: 67px;
            height: 31px;
            color: rgba(244, 249, 255, 1);
            font-size: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 22px;
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

.bigscreen_rc {
  position: absolute;
  top: 395px;
  right: 26px;
  .bigscreen_rc_top {
    width: 100%;
    height: 34px;
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
    .bigscreen_rb_bottom_nei {
      width: 100%;
      height: 100%;
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
