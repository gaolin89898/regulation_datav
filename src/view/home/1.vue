<template>
    <div class="bigscreen">
      <div class="bigscreen_rt">
        <div class="bigscreen_rt_top">
          <div class="bigscreen_rt_top_l">
            <img src="/public/img/光标.png" alt="" />
            <span>监控报告</span>
          </div>
          <el-input
            class="inputcss"
            style="width: 148px; height: 24px; margin-right: 11px"
            placeholder="请输入监控报告"
            :prefix-icon="Search"
          />
        </div>
        <!-- <BorderBox1 class="bigscreen_rt_bottom"> -->
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
        <!-- </BorderBox1> -->
      </div>
      <div class="bigscreen_rc">
        <div class="bigscreen_rc_top">
          <div class="bigscreen_rc_top_l">
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
        <!-- <BorderBox1 class="bigscreen_rc_bottom"> -->
        <div class="bigscreen_rc_bottom">
          <div class="bigscreen_rc_bottom_nei">
            <div
              style="
                width: 20px;
                height: 207px;
                background: url('/public/img/线.png') no-repeat;
                background-size: 2px 100%;
                background-position: center;
                display: flex;
                flex-direction: column;
                align-items: center;
              "
            >
              <img src="/public/img/圆形标记.png" alt="" />
              <img
                style="margin-top: 70px"
                src="/public/img/圆形标记.png"
                alt=""
              />
              <img
                style="margin-top: 70px"
                src="/public/img/圆形标记.png"
                alt=""
              />
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
        <!-- </BorderBox1> -->
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
              <el-radio-button label="日" value="ri" />
            </el-radio-group>
          </div>
        </div>
        <!-- <BorderBox1 class="bigscreen_rb_bottom"> -->
        <div class="bigscreen_rb_bottom">
          <div class="bigscreen_rb_bottom_nei" ref="bigscreenRBRef"></div>
        </div>
        <!-- </BorderBox1> -->
      </div>
      <div class="bigscreen_ct">
        <div class="bigscreen_ct_l">
          <span>今日报警数量</span>
          <div class="bigscreen_ct_lb">
            <div v-for="item in count1.toString().split('')">
              <img :src="shuimg(item)" alt="" />
            </div>
          </div>
        </div>
        <div class="bigscreen_ct_r">
          <span>历史报警数量</span>
          <div class="bigscreen_ct_rb">
            <div v-for="item in count2.toString().split('')">
              <img :src="shuimg(item)" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="bigscreen_cb">
        <div class="bigscreen_cb_nei"></div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from "vue";
  import dayjs from "dayjs";
  import * as echarts from "echarts";
  import { Search } from "@element-plus/icons-vue";
  
  const count1 = ref(321);
  const count2 = ref(45671);
  const radio1 = ref("zhou");
  const list2 = ref([
    {
      background: "/public/img/红色背景框.png",
      text: "《WHO实验室生物安全手册 (第四版)》",
    },
    {
      background: "/public/img/绿色背景框.png",
      text: "《WHO实验室生物安全手册 (第四版)》",
    },
    {
      background: "/public/img/黄色背景框.png",
      text: "《WHO实验室生物安全手册 (第四版)》",
    },
  ]);
  
  let times: any;
  const daysInChinese = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  const dayOfWeek = ref(daysInChinese[dayjs().day()]);
  const updateDayOfWeek = () => {
    // 更新星期几
    dayOfWeek.value = daysInChinese[dayjs().day()];
  };
  const setMidnightTimer = () => {
    // 获取当前时间
    const now = dayjs();
    // 计算距离明天 0 点的时间（毫秒）
    const nextMidnight = dayjs().endOf("day").add(1, "millisecond");
    const timeUntilMidnight = nextMidnight.diff(now);
  
    // 设置定时器在 0 点更新
    times = setTimeout(() => {
      updateDayOfWeek();
      // 在 0 点之后，设置一个每天执行的定时器
      setInterval(updateDayOfWeek, 24 * 60 * 60 * 1000); // 每 24 小时更新一次
    }, timeUntilMidnight);
  };
  
  let timer: any;
  const time = ref<string>(dayjs().format("YYYY-MM-DD HH:mm:ss"));
  
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
  
  function shuimg(val: string) {
    const img = ref<string>("");
    switch (val) {
      case "0":
        img.value = "/public/img/0.png";
        break;
      case "1":
        img.value = "/public/img/1.png";
        break;
      case "2":
        img.value = "/public/img/2.png";
        break;
      case "3":
        img.value = "/public/img/3.png";
        break;
      case "4":
        img.value = "/public/img/4.png";
        break;
      case "5":
        img.value = "/public/img/5.png";
        break;
      case "6":
        img.value = "/public/img/6.png";
        break;
      case "7":
        img.value = "/public/img/7.png";
        break;
      case "8":
        img.value = "/public/img/8.png";
        break;
      case "9":
        img.value = "/public/img/9.png";
        break;
      default:
        break;
    }
  
    return img.value;
  }
  
  onMounted(() => {
    timer = setInterval(() => {
      time.value = dayjs().format("YYYY-MM-DD HH:mm:ss");
    }, 1000);
    setMidnightTimer();
    if (bigscreenLBRef.value) {
      const bigscreenLBChart = echarts.init(bigscreenLBRef.value);
      bigscreenLBChart.setOption(bigscreenLBoption);
    }
  
    if (bigscreenRBRef.value) {
      bigscreenRBChart = echarts.init(bigscreenRBRef.value);
      bigscreenRBChart.setOption(bigscreenRBoption);
    }
  });
  
  onUnmounted(() => {
    // 清除定时器
    clearInterval(timer);
    clearInterval(times);
  });
  </script>
  
  <style scoped>

  .bigscreen_rt {
    position: absolute;
    top: 91px;
    right: 26px;
  }
  .bigscreen_rt_top {
    width: 100%;
    height: 34px;
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bigscreen_rt_top_l {
    display: flex;
    align-items: center;
  }
  .bigscreen_rt_top_l img {
    margin-left: 11px;
  }
  .bigscreen_rt_top_l span {
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
  .bigscreen_rt_bottom {
    width: 100%;
    height: 251px;
    margin-top: 5px;
    background: url("/public/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
  }
  .bigscreen_rt_bottom_nei {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .bigscreen_rt_bottom_nei img {
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
  }
  .bigscreen_rt_bottom_r div {
    width: 100%;
    height: 41px;
    background: url("/public/img/半透明背景1.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bigscreen_rt_bottom_r div span {
    font-size: 14px;
    color: rgba(255, 255, 255, 1);
    margin-left: 10px;
  }
  .bigscreen_rc {
    position: absolute;
    top: 395px;
    right: 26px;
  }
  .bigscreen_rc_top {
    width: 100%;
    height: 34px;
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bigscreen_rc_top_l {
    display: flex;
    align-items: center;
  }
  .bigscreen_rc_top_l img {
    margin-left: 11px;
  }
  .bigscreen_rc_top_l span {
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
  .bigscreen_rc_bottom {
    width: 100%;
    height: 251px;
    margin-top: 5px;
    background: url("/public/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
  }
  .bigscreen_rc_bottom_nei {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bigscreen_rc_bottom_r {
    width: 381px;
    height: 207px;
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }
  .bigscreen_rc_bottom_rnei {
    width: 100%;
    height: 57px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .bigscreen_rc_bottom_rnei div {
    width: 100%;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .bigscreen_rc_bottom_rnei div span {
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
  }
  
  .bigscreen_rb {
    position: absolute;
    bottom: 85px;
    right: 26px;
  }
  .bigscreen_rb_top {
    width: 100%;
    height: 34px;
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-size: 100% 100%;
  }
  .bigscreen_rb_top_l {
    display: flex;
    align-items: center;
  }
  .bigscreen_rb_top_l img {
    margin-left: 11px;
  }
  .bigscreen_rb_top_l span {
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
  .bigscreen_rb_top_r {
    display: flex;
    align-items: center;
    margin-right: 11px;
  }
  .bigscreen_rb_bottom {
    width: 100%;
    height: 251px;
    margin-top: 5px;
    background: url("/public/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
  }
  .bigscreen_rb_bottom_nei {
    width: 100%;
    height: 100%;
  }
  .bigscreen_ct {
    width: 840px;
    height: 119px;
    position: absolute;
    top: 132px;
    left: 50%;
    margin-left: -420px;
    display: flex;
    justify-content: space-between;
  }
  .bigscreen_ct_l {
    width: 208px;
    height: 100%;
  }
  .bigscreen_ct_l span {
    color: rgba(242, 242, 242, 1);
    font-size: 24px;
  }
  .bigscreen_ct_lb {
    width: 100%;
    height: 72px;
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }
  .bigscreen_ct_lb div {
    width: 63px;
    height: 72px;
    background: url("/public/img/数字背景.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bigscreen_ct_r {
    width: 353px;
    height: 100%;
  }
  .bigscreen_ct_r span {
    color: rgba(242, 242, 242, 1);
    font-size: 24px;
  }
  /* .bigscreen_ct_r div {
    width: 100%;
    height: 72px;
    margin-top: 12px;
    background: url("/public/img/左边数字背景.png") no-repeat;
    background-size: 100% 100%;
  } */
  .bigscreen_ct_rb {
    width: 100%;
    height: 72px;
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }
  .bigscreen_ct_rb div {
    width: 63px;
    height: 72px;
    background: url("/public/img/数字背景.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bigscreen_cb {
    width: 996px;
    height: 665px;
    background: url("/public/img/网格背景.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    bottom: 140px;
    left: 50%;
    margin-left: -498px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bigscreen_cb_nei {
    width: 840px;
    height: 642px;
    background: url("/public/img/主体图片.png") no-repeat;
    background-size: 100% 100%;
  }
  .bigscreen_bottom {
    width: 100%;
    height: 112px;
    background: url("/public/img/底座背景.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    bottom: 0;
  }
  .bigscreen_bottom_nei {
    width: 860px;
    height: 75px;
    position: absolute;
    top: 15px;
    left: 50%;
    margin-left: -430px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .bigscreen_bottom_neis {
    width: 112px;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    color: rgba(255, 255, 255, 1);
    font-size: 20px;
  }
  </style>
  