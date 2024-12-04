<template>
  <div class="bigscreen_lt">
    <div class="bigscreen_lt_top">
      <div class="bigscreen_lt_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>环境信息</span>
      </div>
    </div>
    <div class="bigscreen_lt_bottom">
      <div class="bigscreen_lt_bottom_nei">
        <div class="bigscreen_lt_bottom_nei_t">
          <span>描述</span>
          <span>位号</span>
          <span>信号</span>
        </div>
        <div
          class="bigscreen_lt_bottom_nei_b"
          v-for="(item, index) in environmentFileList"
        >
          <span>{{ `${item.description}-${item.unitName}` }}</span>
          <span>{{ item.tag }}</span>
          <span>{{ item.esignal }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="bigscreen_lb">
    <div class="bigscreen_lb_top">
      <div class="bigscreen_lb_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>历史告警统计</span>
      </div>
      <el-radio-group
        v-model="historyStatisticsData.dayType"
        @change="historyStatistics"
        class="group"
      >
        <el-radio-button label="周" value="week" />
        <el-radio-button label="月" value="month" />
      </el-radio-group>
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
        <span>区域报警统计</span>
      </div>
      <el-radio-group
        v-model="powerStaticData.dayType"
        @change="powerStaticFun"
        class="group"
      >
        <el-radio-button label="周" value="week" />
        <el-radio-button label="月" value="month" />
        <el-radio-button label="年" value="year" />
      </el-radio-group>
    </div>
    <div class="bigscreen_rt_bottom">
      <el-select
        size="small"
        class="selectcss"
        v-model="powerStaticData.type"
        @change="powerStaticFun"
        style="
          width: 80px;
          position: absolute;
          right: 20px;
          top: 15px;
          z-index: 99;
        "
      >
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <div class="bigscreen_rt_bottom_nei" ref="bigscreenRTRef"></div>
    </div>
  </div>
  <div class="bigscreen_rb">
    <div class="bigscreen_rb_top">
      <div class="bigscreen_rb_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>设备数据</span>
      </div>
      <el-radio-group
        v-model="powerByAreaTotalStaticData.dayType"
        @change="powerByAreaTotalStaticFun"
        class="group"
      >
        <el-radio-button label="周" value="week" />
        <el-radio-button label="月" value="month" />
        <el-radio-button label="年" value="year" />
      </el-radio-group>
    </div>
    <div class="bigscreen_rb_bottom">
      <div class="bigscreen_rb_bottom_nei" ref="bigscreenRBRef"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from "vue";
import * as echarts from "echarts";
import {
  environmentalFilesList,
  powerStatic,
  powerByAreaTotalStatic,
} from "../../api/environment";
import { getstatistics } from "../../api/incident";
import center from "../../components/center.vue";
import img9 from "../../../public/img/叉号.png";

const options2 = ref([
  {
    label: "电",
    value: "电",
  },
  {
    label: "水",
    value: "水",
  },
]);

//环境信息
const environmentFileFormData = ref({
  pageNum: 1,
  pageSize: 10000,
  orderColumn: "createTime",
  orderDirection: "descending",
});
const environmentFileList = ref<any[]>([]);
const environmentFileFun = async () => {
  const { data } = await environmentalFilesList(environmentFileFormData.value);
  let list = data.data.rows.slice(0, 9);
  environmentFileList.value = list.map((item, index) => {
    return {
      ...item,
      status: false,
    };
  });
};

//历史告警统计
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
    data: [],
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
      data: [],
      type: "bar",
      itemStyle: {
        color: "#68B1A6", // 线条颜色
      },
    },
  ],
};
const historyStatisticsData = ref({
  dayType: "week",
});
const historyStatistics = async () => {
  const { data } = await getstatistics({
    dayType: historyStatisticsData.value.dayType,
  });
  let sum = new Array(12).fill(0);
  data.data.forEach((item) => {
    // 遍历每个数据集的 `data` 数组并进行累加
    item.data.forEach((value, index) => {
      sum[index] += value;
    });
  });
  bigscreenLBoption.xAxis.data = data.data[0].times;
  bigscreenLBoption.series[0].data = sum;
  if (bigscreenLBRef.value) {
    bigscreenLBChart = echarts.init(bigscreenLBRef.value);
    bigscreenLBChart.setOption(bigscreenLBoption);
  }
};

//历史功耗
let bigscreenRTChart: any = null;
const bigscreenRTRef = ref();
// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint;
    const c0 = [shape.x, shape.y];
    const c1 = [shape.x - 8, shape.y - 8];
    const c2 = [xAxisPoint[0] - 8, xAxisPoint[1] - 8];
    const c3 = [xAxisPoint[0], xAxisPoint[1]];
    ctx
      .moveTo(c0[0], c0[1])
      .lineTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .closePath();
  },
});
// 绘制右侧面
const CubeRight = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint;
    const c1 = [shape.x, shape.y];
    const c2 = [xAxisPoint[0], xAxisPoint[1]];
    const c3 = [xAxisPoint[0] + 13, xAxisPoint[1] - 4];
    const c4 = [shape.x + 13, shape.y - 4];
    ctx
      .moveTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .lineTo(c4[0], c4[1])
      .closePath();
  },
});
// 绘制顶面
const CubeTop = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const c1 = [shape.x, shape.y];
    const c2 = [shape.x + 13, shape.y - 4];
    const c3 = [shape.x + 5, shape.y - 12];
    const c4 = [shape.x - 8, shape.y - 8];
    ctx
      .moveTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .lineTo(c4[0], c4[1])
      .closePath();
  },
});
echarts.graphic.registerShape("CubeLeft", CubeLeft);
echarts.graphic.registerShape("CubeRight", CubeRight);
echarts.graphic.registerShape("CubeTop", CubeTop);

const bigscreenRToption = {
  grid: {
    left: "6%",
    right: "6%",
    bottom: "6%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: [],
    axisLabel: {
      color: "#ffffff",
    },
  },
  yAxis: {
    type: "value",
    nameTextStyle: {
      color: "#ffffff",
      padding: [0, 30, 5, 0],
    },
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
      data: [],
      type: "bar",
      label: {
        normal: {
          show: true,
          position: "top",
          fontSize: 14,
          color: "#101010",
          offset: [0, -10],
        },
      },
      tooltip: {
        show: false,
      },
      itemStyle: {
        color: "transparent", // 线条颜色
      },
    },
    {
      type: "custom",
      renderItem: (params, api) => {
        const location = api.coord([api.value(0), api.value(1)]);
        return {
          type: "group",
          children: [
            {
              type: "CubeLeft",
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: "#549CF0",
              },
            },
            {
              type: "CubeRight",
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: "#2070CE",
              },
            },
            {
              type: "CubeTop",
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: "#8DC1FF",
              },
            },
          ],
        };
      },
      data: [2, 0.5, 1, 0.7, 3, 3.5, 1],
    },
  ],
};
const powerStaticData = ref({
  des: "",
  dayType: "week",
  type: "电",
});
const powerStaticFun = async () => {
  const { data } = await powerStatic(powerStaticData.value);
  bigscreenRToption.xAxis.data = data.data.time;
  bigscreenRToption.series[0].data = data.data.data;
  bigscreenRToption.series[1].data = data.data.data;
  if (bigscreenRTRef.value) {
    bigscreenRTChart = echarts.init(bigscreenRTRef.value);
    bigscreenRTChart.setOption(bigscreenRToption);
  }
};

let bigscreenRBChart: any = null;
const bigscreenRBRef = ref();

const bigscreenRBoption = {
  grid: {
    left: "6%",
    right: "6%",
    bottom: "6%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: [],
    axisLabel: {
      color: "#ffffff",
    },
  },
  yAxis: {
    type: "value",
    nameTextStyle: {
      color: "#ffffff",
      padding: [0, 30, 5, 0],
    },
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
      data: [],
      type: "bar",
      itemStyle: {
        color: "#68B1A6", // 线条颜色
      },
    },
  ],
};
const powerByAreaTotalStaticData = ref({
  des: "",
  dayType: "week",
  type: "电",
});
const powerByAreaTotalStaticFun = async () => {
  const { data } = await powerByAreaTotalStatic(
    powerByAreaTotalStaticData.value
  );
  bigscreenRBoption.xAxis.data = data.data.time;
  bigscreenRBoption.series[0].data = data.data.data;
  if (bigscreenRBRef.value) {
    bigscreenRBChart = echarts.init(bigscreenRBRef.value);
    bigscreenRBChart.setOption(bigscreenRBoption);
  }
};

window.onresize = function () {
  bigscreenLBChart.resize();
  bigscreenRBChart.resize();
  bigscreenRTChart.resize();
};

onMounted(() => {
  environmentFileFun();
  powerStaticFun();
  historyStatistics();
  powerByAreaTotalStaticFun();
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .bigscreen_lt_top {
    width: 100%;
    height: adaptiveHeight(40);
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    background-size: 110% 110%;
    display: flex;
    justify-content: space-between;
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
    .bigscreen_lt_top_r {
      color: #ffffff;
      font-size: adaptiveFontSize(14);
      margin-right: adaptiveWidth(11);
      cursor: pointer;
    }
  }
  .bigscreen_lt_bottom {
    width: 100%;
    height: adaptiveHeight(406);
    margin-top: adaptiveHeight(5);
    background: url("/public/img/bigback.png") no-repeat;
    background-size: 100% 100%;
    .bigscreen_lt_bottom_nei {
      width: adaptiveWidth(407);
      margin: 0 auto;
      .bigscreen_lt_bottom_nei_t {
        width: 100%;
        height: adaptiveHeight(30);
        margin-top: adaptiveHeight(15);
        background: url("/public/img/equipment/tabletop.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          width: 33%;
          color: #9eabb7;
          font-size: adaptiveFontSize(14);
          text-align: center;
        }
      }
      .bigscreen_lt_bottom_nei_b {
        width: 100%;
        height: adaptiveHeight(33);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: adaptiveHeight(5);
        cursor: pointer;
        span {
          width: 33%;
          color: #ffffff;
          font-size: adaptiveFontSize(12);
          text-align: center;
          white-space: nowrap; /* 禁止换行 */
          overflow: hidden; /* 超出内容隐藏 */
          text-overflow: ellipsis; /* 显示省略号 */
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
    background-size: 110% 110%;
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
    height: adaptiveHeight(406);
    margin-top: adaptiveHeight(5);
    background: url("/public/img/bigback.png") no-repeat;
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
    background-size: 110% 110%;
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
    height: adaptiveHeight(406);
    margin-top: adaptiveHeight(5);
    background: url("/public/img/bigback.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    .bigscreen_rt_bottom_nei {
      width: 100%;
      height: 100%;
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
    background-size: 110% 110%;
    .bigscreen_rb_top_l {
      display: flex;
      align-items: center;
      img {
        margin-left: 11px;
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
    width: adaptiveWidth(420);
    height: adaptiveHeight(215);
  }
}

:deep(.selectcss) {
  .el-select__wrapper {
    background-color: transparent !important;
  }
  .el-select__placeholder {
    color: #ffffff !important;
  }

  .el-select__selected-item {
    color: #ffffff !important;
  }
}

.inputcss :deep(.el-input__wrapper) {
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: none;
}
.scroll {
  height: adaptiveHeight(195);
  width: 100%;
  overflow: hidden;
}

.group {
  margin-right: adaptiveWidth(11);
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
  padding: adaptiveWidth(2) adaptiveHeight(6);
  background: rgba(255, 255, 255, 0);
  border-color: rgba(255, 255, 255, 0);
  font-size: adaptiveFontSize(12);
  border-radius: 2px;
}
</style>
