<template>
  <div class="bigscreen_lt">
    <div class="bigscreen_lt_top">
      <div class="bigscreen_lt_top_l">
        <img src="/public/img/光标.png" alt="" />
        <span>报警信息</span>
      </div>
    </div>
    <div class="bigscreen_lt_bottom">
      <div class="bigscreen_lt_bottom_l">
        <img src="/public/img/报警信息图标.png" alt="" />
        <div class="bigscreen_lt_bottom_lt">
          <div style="text-align: center">
            <span>98</span>
            <span>%</span>
          </div>
          <div>当前数据</div>
        </div>
      </div>
      <div class="bigscreen_lt_bottom_r">
        <div
          class="bigscreen_lt_bottom_r_nei"
          v-for="(item, index) in alarmInformationlist"
        >
          <div>
            {{ item.emergencyAlarmId }}
          </div>
          <div>{{ dayjs(item.createTime).format("YYYY-MM-DD") }}</div>
          <div
            :style="{
              color: index % 2 === 0 ? '#01D1E7' : '#DF9819',
            }"
          >
            {{ item.type }}
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
        <img
          src="/public/img/zuo.svg"
          alt=""
          @click="timeLeftClick"
          style="margin-left: 5px"
        />
        <span>{{
          dayjs(areaStatisticsFormData.startTime).format("MM月DD日")
        }}</span>
        <span>-</span>
        <span>{{
          dayjs(areaStatisticsFormData.endTime).format("MM月DD日")
        }}</span>
        <img
          src="/public/img/you.svg"
          alt=""
          @click="timeRightClick"
          style="margin-right: 5px"
        />
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
        placeholder="请输入报警类型"
        :prefix-icon="Search"
        clearable
        v-model="alarmInformationFormData.eventName"
        @change="alarmInformationlistFun"
      />
    </div>
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
        placeholder="请输入事件报告"
        :prefix-icon="Search"
        clearable
        v-model="alarmEventsFormData.type"
        @change="alarmEventslistFun"
      />
    </div>
    <div class="bigscreen_rt_bottom">
      <div class="bigscreen_rt_bottom_nei">
        <img src="/public/img/事件报告图标.png" alt="" />
        <div class="bigscreen_rt_bottom_r">
          <Vue3SeamlessScroll
            :list="alarmEventslist"
            :class-option="{
              step: 5,
            }"
            hover
            class="scrool"
          >
            <div
              v-for="(item, index) in alarmEventslist"
              :key="index"
              class="bigscreen_rt_bottom_rnei"
            >
              <span>{{ item.description }}</span>
              <div
                :style="{
                  background: ` url(${item.img}) no-repeat`,
                  'background-size': '100% 100%',
                }"
              >
                <span v-if="item.type == '工艺节点报警'">工艺节点</span>
                <span v-else>{{ item.type }}</span>
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
        v-model="sopFormData.name"
        @change="soplistFun"
        clearable
      />
    </div>
    <div class="bigscreen_rc_bottom">
      <div class="bigscreen_rc_bottom_nei">
        <div class="bigscreen_rc_bottom_nei_t">
          <span>SOP名称</span>
          <span>发布部门</span>
          <span>适用范围</span>
        </div>
        <div
          class="bigscreen_rc_bottom_nei_b"
          v-for="(item, index) in soplist"
          @click="rcClcik(item)"
        >
          <span>
            {{ item.name }}
          </span>
          <span>{{ item.time }}</span>
          <span>{{ item.scope }}</span>
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
        placeholder="请输入政策法规"
        :prefix-icon="Search"
        v-model="policiesFormData.policiesName"
        @change="policieslistFun"
        clearable
      />
    </div>
    <div class="bigscreen_rb_bottom">
      <div class="bigscreen_rb_bottom_nei">
        <div class="bigscreen_rb_bottom_l">
          <img src="/public/img/圆形标记.png" alt="" />
          <img src="/public/img/圆形标记.png" alt="" />
          <img src="/public/img/圆形标记.png" alt="" />
        </div>
        <div class="bigscreen_rb_bottom_r">
          <Vue3SeamlessScroll
            :list="policieslist"
            :class-option="{
              step: 5,
            }"
            hover
            class="scrool"
          >
            <div
              v-for="(item, index) in policieslist"
              :key="index"
              class="bigscreen_rb_bottom_rnei"
            >
              <span class="bigscreen_rb_bottom_rnei_span">
                {{ dayjs(item.createTime).format("YYYY-MM-DD") }}</span
              >
              <div
                :style="{
                  background: `url(${item.img}) no-repeat`,
                  'background-size': '100% 100%',
                }"
              >
                <span style="margin-left: 10px">{{ item.policiesName }}</span>
                <img
                  @click="rbClcik(item)"
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

  <!-- <template v-for="(item, index) in list">
    <div v-if="item.status1" class="rtDialog">
      <div class="rtDialog_top">
        <span>事件报告详情</span>
        <img :src="img9" alt="" srcset="" @click="rtcanleClick(item)" />
      </div>
      <div class="rtDialog_bottom">
        <div>
          <span>事件内容：</span>
          <span>设备检测数据异常</span>
        </div>
        <div>
          <span>事件类型：</span>
          <span>设备报警</span>
        </div>
        <div>
          <span>事件发生时间：</span>
          <span>2024-10-13</span>
        </div>
        <div>
          <span>事件发生地点：</span>
          <span>A区监控1</span>
        </div>
        <div>
          <span>事件级别：</span>
          <span>重要</span>
        </div>
        <div>
          <span>应对措施：</span>
          <span>综合应急预案SOP.doc</span>
        </div>
        <div>
          <span>处理结果：</span>
          <span>事件已完全解决</span>
        </div>
      </div>
    </div>
  </template> -->
  <template v-for="(item, index) in policieslist">
    <div v-if="item.status" class="rbDialog">
      <div class="rbDialog_top">
        <span>政策法规弹窗</span>
        <img :src="img9" alt="" srcset="" @click="rbcanleClick(item)" />
      </div>
      <div class="rbDialog_bottom">
        <div>生物安全政策法规</div>
        <div>目的</div>
        <div>保障生物领域健康和生态环境，促进生物技术可持续发展。</div>
        <div>二、适用范围</div>
        <div>
          涵盖生物研究、实验、生产、运输、经营等各类涉及生物 安全的活动。
        </div>
        <div>三、主要内容</div>
        <div>
          建立风险评估与防控体系,规范生物实验室管理。加强生物
          资源保护与利用监管。明确生物安全事故应急处置机制。 规定相关法律责任。
        </div>
        <!-- <div>四、执行与监督</div>
        <div>
          相关部门负责监督执行，对违规行为依法惩处，定期评 政策法规名称
          估政策法规实施效果并适时修订。
        </div> -->
      </div>
    </div>
  </template>
  <template v-for="(item, index) in soplist">
    <div v-if="item.status" class="rcDialog">
      <div class="rcDialog_top">
        <span>SOP详情</span>
        <img :src="img9" alt="" srcset="" @click="rccanleClick(item)" />
      </div>
      <div class="rcDialog_bottom">
        <div>物料管理标准操作程序</div>
        <div>目的</div>
        <div>保障生物领域健康和生态环境，促进生物技术可持续发展。</div>
        <div>二、适用范围</div>
        <div>
          涵盖生物研究、实验、生产、运输、经营等各类涉及生物 安全的活动。
        </div>
        <div>三、主要内容</div>
        <div>
          建立风险评估与防控体系,规范生物实验室管理。加强生物
          资源保护与利用监管。明确生物安全事故应急处置机制。 规定相关法律责任。
        </div>
        <!-- <div>四、执行与监督</div>
        <div>
          相关部门负责监督执行，对违规行为依法惩处，定期评 政策法规名称
          估政策法规实施效果并适时修订。
        </div> -->
      </div>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import { Search } from "@element-plus/icons-vue";
import center from "../../components/center.vue";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import {
  getPoliciesListApi,
  sopList,
  alarmEventsList,
  alarmInformationList,
  areaStatistics,
  getstatistics,
} from "../../api/incident";
import dayjs from "dayjs";
import img1 from "../../../public/img/黄色.png";
import img2 from "../../../public/img/绿色.png";
import img3 from "../../../public/img/红色.png";
import img4 from "../../../public/img/蓝色.png";
import img5 from "../../../public/img/红色背景框.png";
import img6 from "../../../public/img/绿色背景框.png";
import img7 from "../../../public/img/黄色背景框.png";
import img9 from "../../../public/img/叉号.png";

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
      data: [],
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
      data: [],
    },
  ],
};
const rtClick = (item) => {
  soplist.value.forEach((v) => {
    if (item.sopId == v.sopId) {
      v.status = !v.status;
    } else {
      v.status = false;
    }
  });
};
const rtcanleClick = (item) => {
  item.status = false;
};

//sop管理
const sopFormData = ref({
  name: "",
  pageNum: 1,
  pageSize: 10000,
  orderColumn: "createTime",
  orderDirection: "descending",
});
const soplist = ref<any[]>([]);
const soplistFun = async () => {
  const { data } = await sopList(sopFormData.value);
  soplist.value = data.data.rows.slice(0, 5);
};
const rcClcik = (item: any) => {
  soplist.value.forEach((v) => {
    if (item.sopId == v.sopId) {
      v.status = !v.status;
    } else {
      v.status = false;
    }
  });
};
const rccanleClick = (item: any) => {
  item.status = false;
};

//政策法规
const policiesFormData = ref({
  policiesName: "",
  pageNum: 1,
  pageSize: 10000,
  orderColumn: "createTime",
  orderDirection: "descending",
});
const policieslist = ref<any[]>([]);
const policieslistFun = async () => {
  const { data } = await getPoliciesListApi(policiesFormData.value);
  let imgList = [img5, img6, img7];
  policieslist.value = data.data.rows.map((item, index) => {
    return { ...item, img: imgList[index % imgList.length], status: false };
  });
};
const rbClcik = (item: any) => {
  policieslist.value.forEach((v) => {
    if (item.policiesId == v.policiesId) {
      v.status = !v.status;
    } else {
      v.status = false;
    }
  });
};
const rbcanleClick = (item: any) => {
  item.status = false;
};

//事件报告
const alarmEventsFormData = ref({
  type: "",
  pageNum: 1,
  pageSize: 10000,
  orderColumn: "createTime",
  orderDirection: "descending",
});
const alarmEventslist = ref<any[]>([]);
const alarmEventslistFun = async () => {
  const { data } = await alarmEventsList(alarmEventsFormData.value);
  let imgList = [img1, img2, img3, img4];
  alarmEventslist.value = data.data.rows.map((item, index) => {
    return { ...item, img: imgList[index % imgList.length], status: false };
  });
};

//报警信息
const alarmInformationFormData = ref({
  eventName: "",
  pageNum: 1,
  pageSize: 10000,
  orderColumn: "createTime",
  orderDirection: "descending",
});
const alarmInformationlist = ref<any[]>([]);
const alarmInformationlistFun = async () => {
  const { data } = await alarmInformationList(alarmInformationFormData.value);
  alarmInformationlist.value = data.data.rows.slice(0, 5);
};

const areaStatisticsFormData = ref({
  startTime: dayjs().startOf("month").format("YYYY-MM-DD"),
  endTime: dayjs().endOf("month").format("YYYY-MM-DD"),
});
const areaStatisticsFun = async () => {
  const { data } = await areaStatistics(areaStatisticsFormData.value);
  bigscreenLCoption.series[0].data = data.data.map((itme) => {
    return {
      value: itme.count,
      name: itme.manufacturer,
    };
  });
  if (bigscreenLCChart) {
    bigscreenLCChart.setOption(bigscreenLCoption);
  }
};

const timeLeftClick = () => {
  const currentStart = dayjs(
    areaStatisticsFormData.value.startTime,
    "YYYY-MM-DD"
  );
  areaStatisticsFormData.value.startTime = currentStart
    .subtract(1, "month")
    .startOf("month")
    .format("YYYY-MM-DD");
  areaStatisticsFormData.value.endTime = currentStart
    .subtract(1, "month")
    .endOf("month")
    .format("YYYY-MM-DD");
  areaStatisticsFun(); // 更新数据
};
const timeRightClick = () => {
  const currentStart = dayjs(
    areaStatisticsFormData.value.startTime,
    "YYYY-MM-DD"
  );
  areaStatisticsFormData.value.startTime = currentStart
    .add(1, "month")
    .startOf("month")
    .format("YYYY-MM-DD");
  areaStatisticsFormData.value.endTime = currentStart
    .add(1, "month")
    .endOf("month")
    .format("YYYY-MM-DD");
  areaStatisticsFun(); // 更新数据
};

const historyStatistics = async () => {
  const { data } = await getstatistics({
    dayType: "year",
  });
  let sum = new Array(12).fill(0);
  data.data.forEach((item) => {
    // 遍历每个数据集的 `data` 数组并进行累加
    item.data.forEach((value, index) => {
      sum[index] += value;
    });
  });
  bigscreenLBoption.series[0].data = sum;
  if (bigscreenLBRef.value) {
    bigscreenLBChart = echarts.init(bigscreenLBRef.value);
    bigscreenLBChart.setOption(bigscreenLBoption);
  }
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
  policieslistFun();
  soplistFun();
  alarmEventslistFun();
  alarmInformationlistFun();
  areaStatisticsFun();
  historyStatistics();
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
    background-size: 110% 110%;
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
    display: flex;
    align-items: center;
    justify-content: center;
    .bigscreen_lt_bottom_l {
      width: adaptiveWidth(100);
      height: adaptiveHeight(218);
      background: url("/public/img/报警图标底座.png") no-repeat;
      background-position: 0 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      img {
        width: adaptiveWidth(102);
        height: adaptiveHeight(104);
      }
      .bigscreen_lt_bottom_lt {
        color: #ffffff;
        margin-bottom: adaptiveHeight(20);
        div {
          &:nth-child(1) {
            span {
              &:nth-child(1) {
                font-size: adaptiveFontSize(32);
              }
              &:nth-child(2) {
                font-size: adaptiveFontSize(16);
              }
            }
          }
          &:nth-child(2) {
            font-size: adaptiveFontSize(16);
          }
        }
      }
    }
    .bigscreen_lt_bottom_r {
      width: adaptiveWidth(290);
      height: adaptiveHeight(211);
      margin-left: adaptiveWidth(15);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .bigscreen_lt_bottom_r_nei {
        width: 100%;
        height: adaptiveHeight(35);
        background: rgba(4, 30, 62);
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
          &:nth-child(1) {
            color: #ffffff;
            font-size: adaptiveFontSize(12);
            display: flex;
            align-items: center;
            margin-left: adaptiveWidth(20);
          }
          &:nth-child(2) {
            color: #ffffff;
            font-size: adaptiveFontSize(12);
          }
          &:nth-child(3) {
            font-size: adaptiveFontSize(12);
            margin-right: adaptiveWidth(15);
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .bigscreen_lc_top {
    width: 100%;
    height: adaptiveHeight(40);
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    background-size: 110% 110%;
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
        padding-left: adaptiveWidth(10);
      }
    }
    .pickerCss {
      width: adaptiveWidth(135);
      height: adaptiveHeight(24);
      border: 1px solid rgba(227, 233, 243, 0.2);
      border-radius: 5px;
      margin-right: adaptiveWidth(11);
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        color: #ffffff;
        font-size: adaptiveFontSize(12);
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
    height: adaptiveHeight(251);
    margin-top: adaptiveHeight(5);
    background: url("/public/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
    .bigscreen_rt_bottom_nei {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: adaptiveWidth(164);
        height: adaptiveHeight(159);
      }
      .bigscreen_rt_bottom_r {
        width: adaptiveWidth(265);
        height: adaptiveHeight(195);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        .bigscreen_rt_bottom_rnei {
          width: 100%;
          margin-top: adaptiveHeight(10);
          height: adaptiveHeight(45);
          background: url("/public/img/背景1.png") no-repeat;
          background-size: 100% 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          span {
            width: adaptiveWidth(140);
            color: rgba(244, 249, 255, 1);
            font-size: adaptiveFontSize(11);
            margin-left: adaptiveWidth(20);
            white-space: nowrap; /* 禁止换行 */
            overflow: hidden; /* 超出内容隐藏 */
            text-overflow: ellipsis; /* 显示省略号 */
          }
          div {
            width: adaptiveWidth(80);
            height: adaptiveHeight(35);
            color: rgba(244, 249, 255, 1);
            font-size: adaptiveFontSize(12);
            display: flex;
            justify-content: center;
            align-items: center;
            span {
              padding-bottom: adaptiveHeight(5);
            }
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .bigscreen_rc_top {
    width: 100%;
    height: adaptiveHeight(40);
    background: url("/public/img/背景-上层(1).gif") no-repeat;
    background-size: 110% 110%;
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
      width: adaptiveWidth(407);
      margin: 0 auto;
      .bigscreen_rc_bottom_nei_t {
        width: 100%;
        height: adaptiveHeight(30);
        background: url("/public/img/equipment/tabletop.png") no-repeat;
        background-size: 100% 100%;
        margin-top: adaptiveHeight(15);
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          &:nth-child(1) {
            width: 43%;
          }
          width: 28%;
          color: #9eabb7;
          font-size: adaptiveFontSize(14);
          text-align: center;
        }
      }
      .bigscreen_rc_bottom_nei_b {
        width: 100%;
        height: adaptiveHeight(33);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: adaptiveHeight(5);
        cursor: pointer;
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
        height: adaptiveHeight(33);
        background: url("/public/img/equipment/tableactive.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: adaptiveHeight(15);
        span {
          width: 33%;
          color: #58a4cb;
          text-align: center;
          position: relative;
          &:nth-child(1) {
            img {
              position: absolute;
              left: adaptiveWidth(25);
              top: adaptiveHeight(2);
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
    background-size: 110% 110%;
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
    height: adaptiveHeight(251);
    margin-top: adaptiveHeight(5);
    background: url("/public/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
    .bigscreen_rb_bottom_nei {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .bigscreen_rb_bottom_l {
        width: adaptiveWidth(20);
        height: adaptiveHeight(207);
        background: url("/img/线.png") no-repeat;
        background-size: 2px 100%;
        background-position: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          &:nth-child(2),
          &:nth-child(3) {
            margin-top: adaptiveHeight(70);
          }
        }
      }
      .bigscreen_rb_bottom_r {
        width: adaptiveWidth(381);
        height: adaptiveHeight(207);
        margin-left: adaptiveWidth(15);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        .bigscreen_rb_bottom_rnei {
          width: 100%;
          height: adaptiveHeight(57);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .bigscreen_rb_bottom_rnei_span {
            color: rgba(172, 223, 255, 1);
            font-size: adaptiveFontSize(11);
          }
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
            img {
              margin-right: adaptiveWidth(18);
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}

.rtDialog {
  width: adaptiveWidth(440);
  height: adaptiveHeight(372);
  background: url("/public/img/弹窗背景.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: adaptiveHeight(100);
  right: adaptiveWidth(480);
  z-index: 10;
  .rtDialog_top {
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
  .rtDialog_bottom {
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
.rcDialog {
  width: adaptiveWidth(440);
  height: adaptiveHeight(372);
  background: url("/public/img/弹窗背景.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: adaptiveHeight(350);
  right: adaptiveWidth(480);
  z-index: 10;
  .rcDialog_top {
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
  .rcDialog_bottom {
    width: 100%;
    height: adaptiveHeight(282);
    display: flex;
    // align-items: center;
    justify-content: space-between;
    flex-direction: column;
    div {
      font-size: adaptiveFontSize(16);
      color: #ffffff;
      margin-left: adaptiveWidth(20);
      margin-right: adaptiveWidth(20);
      &:nth-child(1) {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: adaptiveHeight(10);
      }
      &:last-child {
        margin-bottom: adaptiveHeight(20);
      }
    }
  }
}

.rbDialog {
  width: adaptiveWidth(440);
  height: adaptiveHeight(372);
  background: url("/public/img/弹窗背景.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  bottom: adaptiveHeight(40);
  right: adaptiveWidth(480);
  z-index: 10;
  .rbDialog_top {
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
  .rbDialog_bottom {
    width: 100%;
    height: adaptiveHeight(282);
    display: flex;
    // align-items: center;
    justify-content: space-between;
    flex-direction: column;
    div {
      font-size: adaptiveFontSize(16);
      color: #ffffff;
      margin-left: adaptiveWidth(20);
      margin-right: adaptiveWidth(20);
      &:nth-child(1) {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: adaptiveHeight(10);
      }
      &:last-child {
        margin-bottom: adaptiveHeight(20);
      }
    }
  }
}

.inputcss {
  width: adaptiveWidth(148);
  height: adaptiveHeight(24);
  margin-right: adaptiveWidth(11);
}
.inputcss :deep(.el-input__wrapper) {
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: none;
  font-size: adaptiveFontSize(12);
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
  font-size: adaptiveFontSize(12);
  border-radius: 2px;
}
</style>
