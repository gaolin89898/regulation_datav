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
        <div class="bigscreen_lc_bottom_nei_b" v-for="item in equipmentlist">
          <span>
            <img :src="item.img" alt="" style="margin: 0 15px 0 15px" />
            {{ item.equipmentId }}
          </span>
          <span>{{ item.equipmentName }}</span>
          <span>{{ item.equipmentType }}</span>
          <span>{{ dayjs(item.purchaseDate).format("YYYY-MM-DD") }}</span>
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
        <span>维修记录</span>
      </div>
      <el-input
        class="inputcss"
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
            item.status
              ? 'bigscreen_rc_bottom_nei_active'
              : 'bigscreen_rc_bottom_nei_b'
          "
          v-for="(item, index) in repairList"
          @click="rcClick(item)"
        >
          <span>{{ item.equipment.equipmentCode }}</span>
          <span>{{ dayjs(item.createTime).format("YYYY-MM-DD") }}</span>
          <span>{{ item.repairPersonnel }}</span>
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
        <div
          class="bigscreen_rb_bottom_r_nei"
          v-for="(item, index) in inspectionlist"
          @click="rbClick(item)"
        >
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
            {{ item.recordId }}
          </div>
          <div style="color: #ffffff; font-size: 12px">
            {{ dayjs(item.inspectionDate).format("YYYY-MM-DD") }}
          </div>
          <div
            :style="{
              color: index % 2 === 0 ? '#01D1E7' : '#DF9819',
              fontSize: '12px',
              marginRight: '15px',
            }"
          >
            {{ item.inspector }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <template v-for="item in repairList">
    <div v-if="item.status" class="rcDialog">
      <div class="rcDialog_top">
        <span>维修记录详情</span>
        <img :src="img9" alt="" srcset="" @click="rccanleClick(item)" />
      </div>
      <div class="rcDialog_bottom">
        <div class="rcDialog_bottoml">
          <div>
            <span>维修编号：</span>
            <span>{{ item.recordId }}</span>
          </div>
          <div>
            <span>设备编号：</span>
            <span>{{ item.equipment.equipmentCode }}</span>
          </div>
          <div>
            <span>维修时间：</span>
            <span>{{ dayjs(item.repairDate).format("YYYY-MM-DD") }}</span>
          </div>
          <div>
            <span>维修人员：</span>
            <span>{{ item.repairPersonnel }}</span>
          </div>
          <div>
            <span>维修费用：</span>
            <span>{{ item.repairCost }}</span>
          </div>
          <div>
            <span>维修内容：</span>
            <span>{{ item.repairContent }}</span>
          </div>
          <div>
            <span>维修原因：</span>
            <span>{{ item.faultReason }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>

  <template v-for="item in inspectionlist">
    <div v-if="item.status" class="rbDialog">
      <div class="rbDialog_top">
        <span>巡检记录详情</span>
        <img :src="img9" alt="" srcset="" @click="rbcanleClick(item)" />
      </div>
      <div class="rbDialog_bottom">
        <div class="rbDialog_bottoml">
          <div>
            <span>巡检编号：</span>
            <span> {{ item.recordId }}</span>
          </div>
          <div>
            <span>巡检时期：</span>
            <span> {{ dayjs(item.inspectionDate).format("YYYY-MM-DD") }}</span>
          </div>
          <div>
            <span>巡检人员：</span>
            <span>{{ item.inspector }}</span>
          </div>
          <div>
            <span>异常数：</span>
            <span>{{ item.anomalyCount }}</span>
          </div>
          <div>
            <span>巡检内容：</span>
            <span>{{ item.taskDescription }}</span>
          </div>
          <div>
            <span>异常说明：</span>
            <span>{{ item.anomalyDescription }}</span>
          </div>
        </div>
        <!-- <img :src="item.img" alt="" /> -->
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
import {
  equipmentRepairList,
  equipmentRepairListRes,
  dailyInspectionList,
  dailyInspectionRes,
  equipmentListRes,
  equipmentList,
} from "../../api/equipment/index";
import dayjs from "dayjs";
import img9 from "../../../public/img/叉号.png";

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

let bigscreenLBChart: any = null;
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

const rtStatus = ref(false);
const rtClick = () => {
  rtStatus.value = !rtStatus.value;
};
const rtcanleClick = () => {
  rtStatus.value = false;
};

//设备台账
const equipmentFormData = ref({
  equipmentName: "",
  pageNum: 1,
  pageSize: 10000,
  orderColumn: "createTime",
  orderDirection: "descending",
});
const equipmentlist = ref<any[]>([]);
const equipmentListFun = async () => {
  const { data } = await equipmentList(equipmentFormData.value);
  let list = data.data.rows.slice(0, 5);
  equipmentlist.value = list;
};

//巡检记录
const repairformData = ref<equipmentRepairListRes>({
  equipmentCode: "",
  pageNum: 1,
  pageSize: 10000,
  orderColumn: "createTime",
  orderDirection: "descending",
});
const repairList = ref<any[]>([]);
const equipmentRepairListFun = async () => {
  const { data } = await equipmentRepairList(repairformData.value);
  let list = data.data.rows.slice(0, 5);
  repairList.value = list.map((item) => {
    {
      return {
        ...item,
        status: false,
      };
    }
  });
};
const rcClick = async (item: any) => {
  repairList.value.forEach((v) => {
    if (item.recordId == v.recordId) {
      v.status = !v.status;
    } else {
      v.status = false;
    }
  });
};
const rccanleClick = (item: any) => {
  item.status = false;
};

//巡检记录
const inspectionformData = ref<dailyInspectionRes>({
  pageNum: 1,
  pageSize: 10000,
  orderColumn: "createTime",
  orderDirection: "descending",
});
const inspectionlist = ref<any[]>([]);
const inspectionListFun = async () => {
  const { data } = await dailyInspectionList(inspectionformData.value);
  let list = data.data.rows.slice(0, 5);
  inspectionlist.value = list.map((item) => {
    {
      return {
        ...item,
        status: false,
      };
    }
  });
};
const rbClick = (item: any) => {
  inspectionlist.value.forEach((v) => {
    if (item.recordId == v.recordId) {
      v.status = !v.status;
    } else {
      v.status = false;
    }
  });
};
const rbcanleClick = (item: any) => {
  item.status = false;
};

window.onresize = function () {
  bigscreenLBChart.resize();
};

onMounted(() => {
  if (bigscreenLBRef.value) {
    bigscreenLBChart = echarts.init(bigscreenLBRef.value);
    bigscreenLBChart.setOption(bigscreenLBoption);
  }
  equipmentRepairListFun();
  inspectionListFun();
  equipmentListFun();
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .bigscreen_lt_bottom_nei {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: adaptiveWidth(66);
        height: adaptiveHeight(60);
      }
      div {
        width: adaptiveWidth(324);
        height: adaptiveHeight(39);
        display: flex;
        align-items: center;
        &:nth-child(2) {
          margin: adaptiveHeight(18) 0;
        }
        span {
          &:nth-child(1) {
            font-size: adaptiveFontSize(12);
            color: #ffffff;
            padding: 0 adaptiveWidth(32);
          }
          &:nth-child(2) {
            font-family: youshe;
            font-size: adaptiveFontSize(20);
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
        padding-left: adaptiveWidth(10);
      }
    }
  }
  .bigscreen_lc_bottom {
    width: 100%;
    height: adaptiveHeight(251);
    margin-top: adaptiveHeight(5);
    background: url("/public/img/背景下层.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .bigscreen_lc_bottom_nei {
      width: adaptiveWidth(407);
      .bigscreen_lc_bottom_nei_t {
        width: 100%;
        height: adaptiveHeight(30);
        background: url("/public/img/equipment/tabletop.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          width: 25%;
          color: #9eabb7;
          font-size: adaptiveFontSize(14);
          text-align: center;
        }
      }
      .bigscreen_lc_bottom_nei_b {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: adaptiveHeight(15);
        span {
          width: 25%;
          color: #ffffff;
          font-size: adaptiveFontSize(12);
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
            margin-left: adaptiveWidth(10);
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
    display: flex;
    justify-content: center;
    align-items: center;
    .bigscreen_rc_bottom_nei {
      width: adaptiveWidth(407);
      .bigscreen_rc_bottom_nei_t {
        width: 100%;
        height: adaptiveHeight(30);
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
      .bigscreen_rc_bottom_nei_b {
        width: 100%;
        height: adaptiveHeight(33);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: adaptiveHeight(8);
        cursor: pointer;
        span {
          width: 33%;
          color: #ffffff;
          font-size: adaptiveFontSize(12);
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
        margin-top: adaptiveHeight(8);
        cursor: pointer;
        span {
          width: 33%;
          color: #58a4cb;
          font-size: adaptiveFontSize(12);
          text-align: center;
          position: relative;
          &:nth-child(1) {
            img {
              position: absolute;
              width: adaptiveWidth(18);
              height: adaptiveHeight(17);
              left: adaptiveWidth(25);
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
    height: adaptiveHeight(34);
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
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: adaptiveWidth(99);
      height: adaptiveHeight(211);
    }
    .bigscreen_rb_bottom_r {
      width: adaptiveWidth(290);
      height: adaptiveHeight(211);
      margin-left: adaptiveWidth(15);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .bigscreen_rb_bottom_r_nei {
        width: 100%;
        height: adaptiveHeight(35);
        background: rgba(4, 30, 62);
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
      }
    }
  }
}

.rcDialog {
  width: adaptiveWidth(440);
  height: adaptiveHeight(280);
  background: url("/public/img/弹窗背景.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: adaptiveHeight(400);
  right: adaptiveWidth(480);
  z-index: 10;
  .rcDialog_top {
    width: 100%;
    height: adaptiveHeight(45);
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font-family: youshe;
      font-size: adaptiveFontSize(20);
      color: #ffffff;
      padding-left: adaptiveWidth(15);
    }
    img {
      width: adaptiveWidth(8);
      height: adaptiveHeight(8);
      padding-right: adaptiveWidth(10);
      cursor: pointer;
    }
  }
  .rcDialog_bottom {
    width: adaptiveWidth(420);
    height: adaptiveHeight(200);
    margin: adaptiveHeight(10) auto;
    img {
      width: adaptiveWidth(99);
      height: adaptiveHeight(99);
    }
    .rcDialog_bottoml {
      height: adaptiveHeight(200);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      div {
        margin-left: adaptiveWidth(20);
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

.rbDialog {
  width: adaptiveWidth(440);
  height: adaptiveHeight(280);
  background: url("/public/img/弹窗背景.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  bottom: adaptiveHeight(90);
  right: adaptiveWidth(480);
  z-index: 10;
  .rbDialog_top {
    width: 100%;
    height: adaptiveHeight(45);
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font-family: youshe;
      font-size: adaptiveFontSize(20);
      color: #ffffff;
      padding-left: adaptiveWidth(15);
    }
    img {
      width: adaptiveWidth(8);
      height: adaptiveHeight(8);
      padding-right: adaptiveWidth(10);
      cursor: pointer;
    }
  }
  .rbDialog_bottom {
    width: adaptiveWidth(420);
    height: adaptiveHeight(200);
    margin: adaptiveHeight(10) auto;
    img {
      width: adaptiveWidth(99);
      height: adaptiveHeight(99);
    }
    .rbDialog_bottoml {
      height: adaptiveHeight(200);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      div {
        margin-left: adaptiveWidth(20);
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

.inputcss {
  width: adaptiveWidth(148);
  height: adaptiveHeight(24);
  margin-right: adaptiveWidth(11);
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
