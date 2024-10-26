<template>
  <div class="bigscreen_lt">
    <div class="bigscreen_lt_top">
      <div class="bigscreen_lt_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>监测数据</span>
      </div>
    </div>
    <div class="bigscreen_lt_bottom">
      <div class="bigscreen_lt_bottom_nei" v-for="item in list4">
        <img :src="item.img" alt="" />
        <div
          :style="{
            background: `url('${item.back}') no-repeat`,
            backgroundSize: '100% 100%',
          }"
        >
          <span>设备编号：{{ item.code }}</span>
          <span
            :style="{
              color: item.status ? '#00FFF9' : '#FFBCC0',
            }"
            >{{ item.name }}</span
          >
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
      <el-input
        class="inputcss"
        style="width: 148px; height: 24px; margin-right: 11px"
        placeholder="请输入设备名称"
        :prefix-icon="Search"
      />
    </div>
    <div class="bigscreen_lc_bottom">
      <div class="bigscreen_lc_bottom_nei">
        <div class="bigscreen_lc_bottom_nei_t">
          <span>设备编号</span>
          <span>设备名称</span>
          <span>设备型号</span>
          <span>安装时间</span>
        </div>
        <div class="bigscreen_lc_bottom_nei_b" v-for="item in list">
          <span>
            <img :src="item.img" alt="" style="margin: 0 15px 0 15px" />
            {{ item.code }}
          </span>
          <span>{{ item.name }}</span>
          <span>{{ item.status }}</span>
          <span>{{ item.time }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="bigscreen_lb">
    <div class="bigscreen_lb_top">
      <div class="bigscreen_lb_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>设备运行状态</span>
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
        <span>监控视频</span>
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
        <span>维修记录</span>
      </div>
      <el-input
        class="inputcss"
        style="width: 148px; height: 24px; margin-right: 11px"
        placeholder="请输入设备编号"
        :prefix-icon="Search"
      />
    </div>
    <div class="bigscreen_rc_bottom">
      <div class="bigscreen_rc_bottom_nei">
        <div class="bigscreen_rc_bottom_nei_t">
          <span>设备编号</span>
          <span>维修日期</span>
          <span>维修人员</span>
        </div>
        <div
          :class="
            active == index
              ? 'bigscreen_rc_bottom_nei_active'
              : 'bigscreen_rc_bottom_nei_b'
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
        </div>
      </div>
    </div>
  </div>
  <div class="bigscreen_rb">
    <div class="bigscreen_rb_top">
      <div class="bigscreen_rb_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>巡检记录</span>
      </div>
    </div>
    <div class="bigscreen_rb_bottom">
      <img src="/public/img/xujian.png" alt="" />
      <div class="bigscreen_rb_bottom_r">
        <div class="bigscreen_rb_bottom_r_nei" v-for="(item, index) in list2">
          <div
            style="
              color: #ffffff;
              font-size: 12px;
              display: flex;
              align-items: center;
            "
          >
            <div
              :style="{
                width: '13px',
                height: '13px',
                border: `1px solid ${index % 2 === 0 ? '#01D1E7' : '#DF9819'}`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 15px',
              }"
            >
              <div
                :style="{
                  width: '5px',
                  height: '5px',
                  background: index % 2 === 0 ? '#01D1E7' : '#DF9819',
                }"
              ></div>
            </div>
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
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
// import { BorderBox1 } from "@dataview/datav-vue3/es";
import { Search } from "@element-plus/icons-vue";
import center from "../../components/center.vue";

const list = ref([
  {
    code: "001",
    name: "隔离器",
    time: "2024-10-09",
    status: "型号1",
    img: "/img/红色标记-圆.png",
  },
  {
    code: "002",
    name: "隔离器",
    time: "2024-10-09",
    status: "型号2",
    img: "/img/绿色标记-圆.png",
  },
  {
    code: "003",
    name: "隔离器",
    time: "2024-10-09",
    status: "型号3",
    img: "/img/黄色标记-圆.png",
  },
  {
    code: "004",
    name: "隔离器",
    time: "2024-10-09",
    status: "型号4",
    img: "/img/蓝色标记-圆.png",
  },
  {
    code: "005",
    name: "隔离器",
    time: "2024-10-09",
    status: "型号5",
    img: "/img/紫色标记-圆.png",
  },
]);

const list4 = ref([
  {
    img: "/img/正常状态.png",
    back: "/img/绿色背景.png",
    code: "001",
    name: "生物反应器",
    status: true,
  },
  {
    img: "/img/异常状态.png",
    back: "/img/红色背景.png",
    code: "002",
    name: "隔离器",
    status: false,
  },
  {
    img: "/img/正常状态.png",
    back: "/img/绿色背景.png",
    code: "003",
    name: "生物反应器",
    status: true,
  },
]);

const selectval = ref("dian");
const options = ref([
  {
    label: "设备一",
    value: "dian",
  },
  {
    label: "设备二",
    value: "shui",
  },
]);

const list2 = ref([
  { code: "编号1", time: "2024-10-11", name: "徐凯品" },
  { code: "编号1", time: "2024-10-11", name: "徐凯品" },
  { code: "编号1", time: "2024-10-11", name: "徐凯品" },
  { code: "编号1", time: "2024-10-11", name: "徐凯品" },
  { code: "编号1", time: "2024-10-11", name: "徐凯品" },
]);

const active = ref(1);
const list3 = ref([
  {
    code: "001",
    time: "2024-10-09",
    name: "王凯",
  },
  {
    code: "002",
    time: "2024-10-09",
    name: "王凯",
  },
  {
    code: "003",
    time: "2024-10-09",
    name: "王凯",
  },
  {
    code: "004",
    time: "2024-10-09",
    name: "王凯",
  },
  {
    code: "005",
    time: "2024-10-09",
    name: "王凯",
  },
]);

const bigscreenLBRef = ref();
const bigscreenLBoption = {
  grid: {
    left: "6%",
    right: "6%",
    bottom: "6%",
    top: "15%",
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

onMounted(() => {
  if (bigscreenLBRef.value) {
    const bigscreenLBChart = echarts.init(bigscreenLBRef.value);
    bigscreenLBChart.setOption(bigscreenLBoption);
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
    align-items: center;
    justify-content: center;
    .bigscreen_lt_bottom_nei {
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        width: 324px;
        height: 39px;
        display: flex;
        align-items: center;
        &:nth-child(2) {
          margin: 18px 0;
        }
        span {
          &:nth-child(1) {
            font-size: 12px;
            color: #ffffff;
            padding: 0 32px;
          }
          &:nth-child(2) {
            font-family: youshe;
            font-size: 20px;
            // color: #ffffff;
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
    display: flex;
    justify-content: center;
    align-items: center;
    .bigscreen_lc_bottom_nei {
      width: 407px;
      .bigscreen_lc_bottom_nei_t {
        width: 100%;
        height: 30px;
        background: url("/public/img/equipment/tabletop.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          width: 25%;
          color: #9eabb7;
          font-size: 14px;
          text-align: center;
        }
      }
      .bigscreen_lc_bottom_nei_b {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
        span {
          width: 25%;
          color: #ffffff;
          font-size: 12px;
          &:nth-child(2),
          &:nth-child(3),
          &:nth-child(4) {
            text-align: center;
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
    display: flex;
    justify-content: center;
    align-items: center;
    .bigscreen_rc_bottom_nei {
      width: 407px;
      .bigscreen_rc_bottom_nei_t {
        width: 100%;
        height: 30px;
        background: url("/public/img/equipment/tabletop.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          width: 33%;
          color: #9eabb7;
          font-size: 14px;
          text-align: center;
        }
      }
      .bigscreen_rc_bottom_nei_b {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
        span {
          width: 33%;
          color: #ffffff;
          font-size: 12px;
          text-align: center;
        }
      }
      .bigscreen_rc_bottom_nei_active {
        width: 100%;
        height: 33px;
        background: url("/public/img/equipment/tableactive.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
        span {
          width: 33%;
          color: #58a4cb;
          font-size: 12px;
          text-align: center;
          position: relative;
          &:nth-child(1) {
            img {
              position: absolute;
              left: 25px;
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
    align-items: center;
    justify-content: center;
    .bigscreen_rb_bottom_r {
      width: 290px;
      height: 211px;
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .bigscreen_rb_bottom_r_nei {
        width: 100%;
        height: 35px;
        background: rgba(4, 30, 62);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
}

:deep(.selectcss) {
  .el-select__wrapper {
    background-color: transparent !important;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2)  !important;
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
