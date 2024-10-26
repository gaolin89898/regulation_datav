<template>
  <div class="bigscreen">
    <div class="bigscreen_header">
      <img
        style="position: absolute; top: 18px; left: 50%; margin-left: -241px"
        src="/public/img/高生物安全动态监管平台.png"
        alt=""
      />
      <div class="bigscreen_header_r">
        <span>{{ time }}</span>
        <span style="padding-left: 30px">{{ dayOfWeek }}</span>
        <img style="padding-left: 25px" src="/public/img/天气图标.png" alt="" />
        <img style="margin-left: 6px" src="/public/img/温度计.png" alt="" />
        <span style="padding-right: 40px">26℃</span>
      </div>
    </div>
    <div class="bigscreen_center">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
    <div class="bigscreen_bottom">
      <div class="bigscreen_bottom_nei">
        <div
          class="bigscreen_bottom_neis"
          v-for="item in btnfun"
          @click="bigscreenBtn(item.path)"
        >
          <div
            style="
              width: 112px;
              height: 56px;
              background: url('/img/dbwenan.png') no-repeat;
              background-size: 100% 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
            "
            :style="{
              color: $route.path === item.path ? '#ffffff' : '#00ABFF',
            }"
          >
            {{ item.title }}
          </div>
          <img
            v-if="$route.path === item.path"
            style="position: absolute; bottom: 0"
            src="/public/img/切换图标.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

let times: any;
let timer: any;
const time = ref<string>(dayjs().format("YYYY-MM-DD HH:mm:ss"));
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

const btnfun = [
  // {
  //     title: "总体态势",
  //     name: "home",
  //     path: "/home",
  //   },
  {
    title: "总体态势",
    name: "home",
    path: "/home",
  },
  {
    title: "人员数据",
    name: "personnel",
    path: "/personnel",
  },
  {
    title: "设备数据",
    name: "equipment",
    path: "/equipment",
  },
  {
    title: "物料数据",
    name: "materials",
    path: "/materials",
  },
  {
    title: "工艺数据",
    name: "craftsmanship",
    path: "/craftsmanship",
  },
  {
    title: "环境数据",
    name: "environment",
    path: "/environment",
  },
  {
    title: "事件管理",
    name: "incident",
    path: "/incident",
  },
];

const bigscreenBtn = (val: string) => {
  router.push({
    path: val,
  });
};

onMounted(() => {
  timer = setInterval(() => {
    time.value = dayjs().format("YYYY-MM-DD HH:mm:ss");
  }, 1000);
  setMidnightTimer();
});

onUnmounted(() => {
  // 清除定时器
  clearInterval(timer);
  clearInterval(times);
});
</script>

<style lang="scss" scoped>
.bigscreen {
  width: 100vw;
  height: 100vh;
  // background-color: #002857;
  background-color: #021322;
  position: relative;
  .bigscreen_header {
    width: 100%;
    height: 251px;
    background: url("/public/img/标题背景.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    .bigscreen_header_r {
      height: 100px;
      display: flex;
      align-items: center;
      position: absolute;
      right: 0;
      span {
        font-size: 20px;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
  .bigscreen_center {
    width: 100%;
    height: 100%;
  }
  .bigscreen_bottom {
    width: 100%;
    height: 112px;
    background: url("/public/img/底座背景.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    bottom: 0;
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
    }
  }
}
</style>
