<template>
  <div class="bigscreen_lt">
    <div class="bigscreen_lt_top">
      <div class="bigscreen_lt_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>报警信息</span>
      </div>
    </div>
    <div class="bigscreen_lt_bottom">
      <div class="bigscreen_lt_bottom_t">
        <img src="/public/img/craftsmanship/infoIcon.png" alt="" />
        <div class="bigscreen_lt_bottom_tdiv">
          <span>报警信息</span>
          <br />
          <span>Alarm message</span>
        </div>
        <div class="bigscreen_lt_bottom_tdiv">
          <div class="bigscreen_lt_bottom_tdiv_l">
            <div
              style="
                width: 7px;
                height: 7px;
                background: #42c38f;
                border-radius: 50%;
              "
            ></div>
            <div
              style="
                width: 10px;
                height: 20px;
                border-left: 1px solid #42c38f;
                border-bottom: 1px solid #42c38f;
                margin-left: 3px;
              "
            ></div>
          </div>
          <div class="bigscreen_lt_bottom_tdiv_r">
            <span>一级</span>
            <span>262</span>
          </div>
        </div>
        <div class="bigscreen_lt_bottom_tdiv">
          <div class="bigscreen_lt_bottom_tdiv_l">
            <div
              style="
                width: 7px;
                height: 7px;
                background: #0574cb;
                border-radius: 50%;
              "
            ></div>
            <div
              style="
                width: 10px;
                height: 20px;
                border-left: 1px solid #0574cb;
                border-bottom: 1px solid #0574cb;
                margin-left: 3px;
              "
            ></div>
          </div>
          <div class="bigscreen_lt_bottom_tdiv_r">
            <span>二级</span>
            <span>68</span>
          </div>
        </div>
        <div class="bigscreen_lt_bottom_tdiv">
          <div class="bigscreen_lt_bottom_tdiv_l">
            <div
              style="
                width: 7px;
                height: 7px;
                background: #f96168;
                border-radius: 50%;
              "
            ></div>
            <div
              style="
                width: 10px;
                height: 20px;
                border-left: 1px solid #f96168;
                border-bottom: 1px solid #f96168;
                margin-left: 3px;
              "
            ></div>
          </div>
          <div class="bigscreen_lt_bottom_tdiv_r">
            <span>三级</span>
            <span>102</span>
          </div>
        </div>
      </div>
      <div class="bigscreen_lt_bottom_b">
        <div class="bigscreen_lt_bottom_b_nei" v-for="item in list">
          <img :src="item.img" alt="" />
          <div>
            <span style="margin-left: 25px">{{ item.status }}</span>
            <span>{{ item.name }}</span>
            <span>{{ item.type }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bigscreen_lb">
    <div class="bigscreen_lb_top">
      <div class="bigscreen_lb_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>工艺节点</span>
      </div>
      <el-input
        class="inputcss"
        style="width: 148px; height: 24px; margin-right: 11px"
        placeholder="请输入节点名称"
        :prefix-icon="Search"
      />
    </div>
    <div class="bigscreen_lb_bottom">
      <div class="bigscreen_lb_bottom_nei">
        <div class="bigscreen_lb_bottom_nei_t">
          <div style="width: 38px; height: 1px"></div>
          <div class="bigscreen_lb_bottom_nei_t_r">
            <span>节点名称</span>
            <span>所属工艺</span>
            <span>节点状态</span>
          </div>
        </div>
        <div class="bigscreen_lb_bottom_neis" v-for="item in list3">
          <img :src="item.img" alt="" />
          <div class="bigscreen_lb_bottom_neis_r">
            <span>{{ item.name }}</span>
            <span>{{ item.type }}</span>
            <span>{{ item.status }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <center></center>
  <div class="bigscreen_rt">
    <div class="bigscreen_rt_top">
      <div class="bigscreen_rt_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>工艺要素</span>
      </div>
    </div>
    <div class="bigscreen_rt_bottom">
      <div class="bigscreen_rt_bottom_count">
        <img
          src="/public/img/craftsmanship/yaosuicon.png"
          style="margin: 0 20px 0 28px"
          alt=""
        />
        <div
          style="
            height: 67px;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          "
        >
          <div style="display: flex; align-items: center">
            <span style="font-size: 18px">工艺要素</span>
            <span style="font-size: 28px; padding-left: 25px">30</span>
          </div>
          <div>
            <span>
              <img src="/public/img/craftsmanship/lanshang.png" alt="" />
              <span style="padding-left: 10px; font-size: 14px">人力要素</span>
            </span>
            <span style="padding-left: 15px">
              <img src="/public/img/craftsmanship/lvshang.png" alt="" />
              <span style="padding-left: 10px; font-size: 14px">原料要素</span>
            </span>
            <span style="padding-left: 15px">
              <img src="/public/img/craftsmanship/huangshang.png" alt="" />
              <span style="padding-left: 10px; font-size: 14px">设备要素</span>
            </span>
          </div>
        </div>
      </div>
      <div class="bigscreen_rt_bottom_nei">
        <span>隔离器工艺</span>
        <span>人力要素</span>
        <span>原料要素</span>
        <span>设备要素</span>
      </div>
      <div class="bigscreen_rt_bottom_nei">
        <span>隔离器工艺</span>
        <span>人力要素</span>
        <span>原料要素</span>
        <span>设备要素</span>
      </div>
      <div class="bigscreen_rt_bottom_nei">
        <span>隔离器工艺</span>
        <span>人力要素</span>
        <span>原料要素</span>
        <span>设备要素</span>
      </div>
    </div>
  </div>
  <div class="bigscreen_rb">
    <div class="bigscreen_rb_top">
      <div class="bigscreen_rb_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>工艺档案</span>
      </div>
    </div>
    <div class="bigscreen_rb_bottom">
      <div class="bigscreen_rb_bottom_nei">
        <div
          style="
            width: 100%;
            height: 30px;
            background: url('/img/equipment/tabletop.png') no-repeat;
            background-size: 100% 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <span
            style="
              width: 33%;
              color: #ffffff;
              text-align: center;
              font-size: 14px;
            "
            >工艺名称</span
          >
          <span
            style="
              width: 33%;
              color: #ffffff;
              text-align: center;
              font-size: 14px;
            "
            >版本号</span
          >
          <span
            style="
              width: 33%;
              color: #ffffff;
              text-align: center;
              font-size: 14px;
            "
            >工艺制定人员</span
          >
        </div>
        <div
          class="bigscreen_rb_bottom_nei_item"
          v-for="(item, index) in list2"
        >
          <div style="color: #ffffff; display: flex; align-items: center">
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
          <div style="color: #ffffff">{{ item.time }}</div>
          <div
            :style="{
              color: index % 2 === 0 ? '#01D1E7' : '#DF9819',
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

const radio1 = ref("zhou");
const list = ref([
  {
    name: "病毒加工工艺",
    img: "/img/craftsmanship/erjilan.png",
    status: "二级报警",
    type: "节点故障",
  },
  {
    name: "病毒加工工艺",
    img: "/img/craftsmanship/yijilv.png",
    status: "一级报警",
    type: "工艺异常",
  },
  {
    name: "病毒加工工艺",
    img: "/img/craftsmanship/erjilan.png",
    status: "二级报警",
    type: "节点故障",
  },
  {
    name: "病毒加工工艺",
    img: "/img/craftsmanship/sanjihong.png",
    status: "三级报警",
    type: "工艺异常",
  },
]);

const list2 = ref([
  { code: "病毒加工工艺", time: "1.0版本", name: "徐凯品" },
  { code: "病毒加工工艺", time: "1.0版本", name: "徐凯品" },
  { code: "病毒加工工艺", time: "1.0版本", name: "徐凯品" },
  { code: "病毒加工工艺", time: "1.0版本", name: "徐凯品" },
  { code: "病毒加工工艺", time: "1.0版本", name: "徐凯品" },
]);
const list3 = ref([
  {
    img: "/img/craftsmanship/1.png",
    name: "隔离器工艺",
    type: "病毒加工工艺",
    status: "进行中",
  },
  {
    img: "/img/craftsmanship/2.png",
    name: "隔离器工艺",
    type: "病毒加工工艺",
    status: "进行中",
  },
  {
    img: "/img/craftsmanship/3.png",
    name: "隔离器工艺",
    type: "病毒加工工艺",
    status: "进行中",
  },
  {
    img: "/img/craftsmanship/4.png",
    name: "隔离器工艺",
    type: "病毒加工工艺",
    status: "进行中",
  },
  {
    img: "/img/craftsmanship/1.png",
    name: "隔离器工艺",
    type: "病毒加工工艺",
    status: "进行中",
  },
  {
    img: "/img/craftsmanship/2.png",
    name: "隔离器工艺",
    type: "病毒加工工艺",
    status: "进行中",
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
  },
  yAxis: {
    type: "value",
    splitLine: {
      show: true,
      lineStyle: {
        color: ["rgba(255, 255, 255, 0.15)"],
        width: 2,
        type: "dashed",
      },
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
    justify-content: center;
    align-items: center;
    .bigscreen_lt_bottom_t {
      width: 399px;
      height: 88px;
      background: url("/public/img/craftsmanship/infoback.png") no-repeat;
      background-size: 100% 100%;
      display: flex;
      align-items: center;
      .bigscreen_lt_bottom_tdiv {
        text-align: center;
        span {
          color: #ffffff;
        }
        &:nth-child(2) {
          padding: 0 15px;
          border-right: 1px solid #3e607e;
          margin-right: 20px;
          span {
            &:nth-child(1) {
              font-size: 18px;
            }
            &:nth-child(3) {
              font-size: 8px;
            }
          }
        }
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5) {
          display: flex;
          align-items: center;
          .bigscreen_lt_bottom_tdiv_r {
            display: flex;
            flex-direction: column;
            margin-left: 5px;
            span {
              &:nth-child(1) {
                margin-top: 3px;
                font-size: 10px;
              }
              &:nth-child(2) {
                font-size: 13px;
                margin-top: 10px;
              }
            }
          }
        }
        &:nth-child(4) {
          margin: 0 20px;
        }
      }
    }
    .bigscreen_lt_bottom_b {
      width: 399px;
      margin-top: 20px;
      .bigscreen_lt_bottom_b_nei {
        display: flex;
        align-items: center;
        img {
          margin-left: 10px;
        }
        div {
          width: 305px;
          height: 28px;
          // margin-top: 20px;
          background: url("/public/img/back.png") no-repeat;
          background-size: 100% 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #ffffff;
          margin-left: 15px;
          span {
            font-size: 14px;
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
    align-items: center;
    justify-content: center;
    .bigscreen_lb_bottom_nei {
      width: 377px;
      .bigscreen_lb_bottom_nei_t {
        display: flex;
        color: #ffffff;
        .bigscreen_lb_bottom_nei_t_r {
          width: calc(100% - 38px);
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
            width: 33%;
            font-size: 16px;
            text-align: center;
          }
        }
      }
      .bigscreen_lb_bottom_neis {
        width: 100%;
        height: 40px;
        // border: 1px solid red;
        background: url("/public/img/craftsmanship/jidianback.png")
          no-repeat;
        background-position: 30px 0;
        margin-top: 15px;
        display: flex;
        .bigscreen_lb_bottom_neis_r {
          width: calc(100% - 38px);
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #ffffff;
          span {
            width: 33%;
            text-align: center;
          }
        }
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .bigscreen_rt_bottom_count {
      width: 393px;
      height: 127px;
      background: url("/public/img/yaosuback.png") no-repeat;
      background-size: 100% 100%;
      display: flex;
      align-items: center;
    }
    .bigscreen_rt_bottom_nei {
      width: 393px;
      height: 50px;
      background: url("/public/img/craftsmanship/yaosuback.png") no-repeat;
      background-size: 100% 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #ffffff;
      margin-top: 20px;
      span {
        &:nth-child(1) {
          padding-left: 20px;
        }
        &:nth-child(4) {
          padding-right: 20px;
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
  }
  .bigscreen_rb_bottom {
    width: 100%;
    height: 406px;
    margin-top: 5px;
    background: url("/public/img/bigback.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .bigscreen_rb_bottom_nei {
      width: 393px;
      height: 346px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: auto;
      .bigscreen_rb_bottom_nei_item {
        width: 100%;
        height: 50px;
        background: rgba(4, 30, 62);
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
          width: 33%;
          text-align: center;
          font-size: 14px;
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
