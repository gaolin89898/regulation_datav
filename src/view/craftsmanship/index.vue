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
            <div style="background: #42c38f"></div>
            <div
              style="
                border-left: 1px solid #42c38f;
                border-bottom: 1px solid #42c38f;
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
            <div style="background: #0574cb"></div>
            <div
              style="
                border-left: 1px solid #0574cb;
                border-bottom: 1px solid #0574cb;
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
            <div style="background: #f96168"></div>
            <div
              style="
                border-left: 1px solid #f96168;
                border-bottom: 1px solid #f96168;
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
        <div
          class="bigscreen_lb_bottom_neis"
          v-for="item in list3"
          @click="lbClick(item)"
        >
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
      <div class="bigscreen_rt_bottom_nei" @click="rtClcik">
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

  <template v-for="item in list3">
    <div v-if="item.status1" class="lbDialog">
      <div class="lbDialog_top">
        <span>工艺节点详情</span>
        <img :src="img9" alt="" srcset="" @click="lbcanleClick(item)" />
      </div>
      <div class="lbDialog_bottom">
        <div>
          <span>节点编号：</span>
          <span>001</span>
        </div>
        <div>
          <span>节点名称：</span>
          <span>隔离器工艺</span>
        </div>
        <div>
          <span>所属工艺：</span>
          <span>病毒加工艺</span>
        </div>
        <div>
          <span>节点顺序：</span>
          <span>1</span>
        </div>
        <div>
          <span>操作描述：</span>
          <span>*******</span>
        </div>
        <div>
          <span>操作方式：</span>
          <span>**************</span>
        </div>
        <div>
          <span>所需时间：</span>
          <span>5h</span>
        </div>
        <div>
          <span>节点状态：</span>
          <span>进行中</span>
        </div>
        <div>
          <span>是否为高风险：</span>
          <span>是</span>
        </div>
      </div>
    </div>
  </template>

  <div v-if="rtstatus" class="rtDialog">
    <div class="rtDialog_top">
      <span>工艺要素详情</span>
      <img :src="img9" alt="" srcset="" @click="rtcanleClick" />
    </div>
    <div class="rtDialog_bottom">
      <div>
        <span>工艺节点：</span>
        <span>隔离器工艺</span>
      </div>
      <div>
        <span>人力要素：</span>
        <span>人力成本</span>
      </div>
      <div>
        <span>设备要素：</span>
        <span>A设备，B设备</span>
      </div>
      <div>
        <span>原料要素：</span>
        <span>原料a1瓶，原料b3瓶</span>
      </div>
      <div>
        <span>环境要素：</span>
        <span>温度原因，湿度原因。。。</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import { Search } from "@element-plus/icons-vue";
import center from "../../components/center.vue";
import img9 from "../../../public/img/叉号.png";

const list = ref([
  {
    name: "病毒加工工艺1",
    img: "/img/craftsmanship/erjilan.png",
    status: "二级报警",
    type: "节点故障",
    status1: false,
  },
  {
    name: "病毒加工工艺2",
    img: "/img/craftsmanship/yijilv.png",
    status: "一级报警",
    type: "工艺异常",
  },
  {
    name: "病毒加工工艺3",
    img: "/img/craftsmanship/erjilan.png",
    status: "二级报警",
    type: "节点故障",
  },
  {
    name: "病毒加工工艺4",
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
    name: "隔离器工艺1",
    type: "病毒加工工艺",
    status: "进行中",
    status1: false,
  },
  {
    img: "/img/craftsmanship/2.png",
    name: "隔离器工艺2",
    type: "病毒加工工艺",
    status: "进行中",
    status1: false,
  },
  {
    img: "/img/craftsmanship/3.png",
    name: "隔离器工艺3",
    type: "病毒加工工艺",
    status: "进行中",
    status1: false,
  },
  {
    img: "/img/craftsmanship/4.png",
    name: "隔离器工艺4",
    type: "病毒加工工艺",
    status: "进行中",
    status1: false,
  },
  {
    img: "/img/craftsmanship/1.png",
    name: "隔离器工艺5",
    type: "病毒加工工艺",
    status: "进行中",
    status1: false,
  },
  {
    img: "/img/craftsmanship/2.png",
    name: "隔离器工艺6",
    type: "病毒加工工艺",
    status: "进行中",
    status1: false,
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

const lbClick = (item) => {
  list3.value.forEach((v) => {
    if (item.name == v.name) {
      v.status1 = !v.status1;
    } else {
      v.status1 = false;
    }
  });
};
const lbcanleClick = (item) => {
  item.status1 = false;
};

const rtstatus = ref(false);
const rtClcik = () => {
  rtstatus.value = !rtstatus.value;
};
const rtcanleClick = () => {
  rtstatus.value = false;
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
    justify-content: center;
    align-items: center;
    .bigscreen_lt_bottom_t {
      width: adaptiveWidth(399);
      height: adaptiveHeight(88);
      background: url("/public/img/craftsmanship/infoback.png") no-repeat;
      background-size: 100% 100%;
      display: flex;
      align-items: center;
      img {
        width: adaptiveWidth(88);
        height: adaptiveHeight(88);
      }
      .bigscreen_lt_bottom_tdiv {
        text-align: center;
        span {
          color: #ffffff;
        }
        &:nth-child(2) {
          padding: 0 adaptiveWidth(15);
          border-right: 1px solid #3e607e;
          margin-right: adaptiveWidth(20);
          span {
            &:nth-child(1) {
              font-size: adaptiveFontSize(18);
            }
            &:nth-child(3) {
              font-size: adaptiveFontSize(8);
            }
          }
        }
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5) {
          display: flex;
          align-items: center;
          .bigscreen_lt_bottom_tdiv_l {
            div {
              &:nth-child(1) {
                width: adaptiveWidth(7);
                height: adaptiveHeight(7);
                border-radius: 50%;
              }
              &:nth-child(2) {
                width: adaptiveWidth(10);
                height: adaptiveHeight(20);
                margin-left: adaptiveWidth(3);
              }
            }
          }
          .bigscreen_lt_bottom_tdiv_r {
            display: flex;
            flex-direction: column;
            margin-left: adaptiveHeight(5);
            span {
              &:nth-child(1) {
                margin-top: adaptiveHeight(3);
                font-size: adaptiveFontSize(10);
              }
              &:nth-child(2) {
                font-size: adaptiveFontSize(13);
                margin-top: adaptiveHeight(10);
              }
            }
          }
        }
        &:nth-child(4) {
          margin: 0 adaptiveWidth(20);
        }
      }
    }
    .bigscreen_lt_bottom_b {
      width: adaptiveWidth(399);
      margin-top: adaptiveHeight(20);
      .bigscreen_lt_bottom_b_nei {
        display: flex;
        align-items: center;
        img {
          width: adaptiveWidth(52);
          height: adaptiveHeight(59);
          margin-left: adaptiveWidth(10);
        }
        div {
          width: adaptiveWidth(305);
          height: adaptiveHeight(28);
          // margin-top: 20px;
          background: url("/public/img/back.png") no-repeat;
          background-size: 100% 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #ffffff;
          margin-left: adaptiveWidth(15);
          span {
            font-size: adaptiveFontSize(14);
            &:nth-child(3) {
              font-size: adaptiveFontSize(20);
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
    height: adaptiveHeight(406);
    margin-top: adaptiveHeight(5);
    background: url("/public/img/bigback.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .bigscreen_lb_bottom_nei {
      width: adaptiveWidth(377);
      .bigscreen_lb_bottom_nei_t {
        display: flex;
        color: #ffffff;
        .bigscreen_lb_bottom_nei_t_r {
          width: calc(100% - adaptiveHeight(38));
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
            width: 33%;
            font-size: adaptiveFontSize(16);
            text-align: center;
          }
        }
      }
      .bigscreen_lb_bottom_neis {
        width: 100%;
        height: adaptiveHeight(40);
        background: url("/public/img/craftsmanship/jidianback.png") no-repeat;
        background-position: 30px 0;
        margin-top: adaptiveHeight(15);
        display: flex;
        cursor: pointer;
        .bigscreen_lb_bottom_neis_r {
          width: calc(100% - adaptiveHeight(38));
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #ffffff;
          span {
            width: 33%;
            font-size: adaptiveFontSize(16);
            text-align: center;
          }
        }
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
        margin-left: adaptiveHeight(11);
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .bigscreen_rt_bottom_count {
      width: adaptiveWidth(393);
      height: adaptiveHeight(127);
      background: url("/public/img/yaosuback.png") no-repeat;
      background-size: 100% 100%;
      display: flex;
      align-items: center;
    }
    .bigscreen_rt_bottom_nei {
      width: adaptiveWidth(393);
      height: adaptiveHeight(50);
      background: url("/public/img/craftsmanship/yaosuback.png") no-repeat;
      background-size: 100% 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #ffffff;
      margin-top: adaptiveHeight(20);
      cursor: pointer;
      span {
        &:nth-child(1) {
          padding-left: adaptiveWidth(20);
        }
        &:nth-child(4) {
          padding-right: adaptiveWidth(20);
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
  }
  .bigscreen_rb_bottom {
    width: 100%;
    height: adaptiveHeight(406);
    margin-top: adaptiveHeight(5);
    background: url("/public/img/bigback.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .bigscreen_rb_bottom_nei {
      width: adaptiveWidth(393);
      height: adaptiveHeight(346);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: auto;
      .bigscreen_rb_bottom_nei_item {
        width: 100%;
        height: adaptiveHeight(50);
        background: rgba(4, 30, 62);
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
          width: 33%;
          text-align: center;
          font-size: adaptiveFontSize(14);
        }
      }
    }
  }
}

.lbDialog {
  width: adaptiveWidth(440);
  height: adaptiveHeight(372);
  background: url("/public/img/弹窗背景.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  bottom: adaptiveHeight(100);
  left: adaptiveWidth(480);
  z-index: 10;
  .lbDialog_top {
    width: 100%;
    height: adaptiveHeight(60);
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
    width: 100%;
    height: adaptiveHeight(282);
    display: flex;
    // align-items: center;
    justify-content: space-between;
    flex-direction: column;
    div {
      margin-left: adaptiveWidth(30);
      &:nth-child(1) {
        margin-top: adaptiveHeight(10);
      }
      &:last-child {
        margin-bottom: adaptiveHeight(10);
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
    width: 100%;
    height: adaptiveHeight(215);
    display: flex;
    // align-items: center;
    justify-content: space-between;
    flex-direction: column;
    div {
      margin-left: adaptiveWidth(30);
      &:nth-child(1) {
        margin-top: adaptiveHeight(10);
      }
      &:last-child {
        margin-bottom: adaptiveHeight(10);
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
