<script setup lang="ts">
import { ref, watch } from "vue";
import BgFour from "@/assets/screen/4_108.png";
import { useDeviceStore } from "../device";
import { useFourDeviceHook } from ".";

/** 组件name最好和菜单表中的router_name一致 */
defineOptions({
  name: "Post"
});
const { list, tuRef, xAspectRatio,yAspectRatio, urlInfo, deviceStyles } = useFourDeviceHook();
const deviceStore = useDeviceStore();
watch(() => deviceStore.currentData, (newVal) => {
  list.value.forEach(item => {
    if (newVal.content.deviceType === item.type) {
      if (newVal.content.equipmentInfo != null) {
        item.thresholds.forEach(threshold => {
          if (threshold.thresholdId === newVal?.content.equipmentInfo.thresholdId) {
            threshold.sensorValue = newVal?.content.equipmentInfo.value;
          }
        });
      }
      if (newVal.content.environmentAlarmInfo != null ) {
        item.environment.sensorValue = newVal?.content.environmentAlarmInfo.value;
      }
    }

  })
}, { deep: true });

</script>

<template>
  <div class="main">
    <div class="my-container">
      <img class="my-img" ref="tuRef" @load="urlInfo" :src="BgFour" alt="" srcset="">
      <template v-for="(item, index) in list">
        <ElPopover :width="500">
          <template #reference>
            <div class="device-1" :style="deviceStyles[index]?.style"></div>
          </template>
               {{ item?.equipment?.equipmentName }}
          <ElTable v-if="item.type =='设备档案'" :data="item.thresholds">
            <ElTableColumn width="150" prop="sensorName" label="传感器名字" />
            <ElTableColumn width="150" prop="sensorModel" label="传感器型号" />
            <ElTableColumn width="150" prop="sensorValue" label="传感器当前数值" />
          </ElTable>
          <ElForm v-if="item.type =='环境档案'">
            <ElFormItem label="名称">
              {{ item.environment?.description }}
            </ElFormItem>
            <ElFormItem label="当前环境值">
              {{ item.environment?.sensorValue }}
            </ElFormItem>
          </ElForm>

         
        </ElPopover>
      </template>

    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-dropdown-menu__item i) {
  margin: 0;
}

.search-form {
  :deep(.el-form-item) {
    margin-bottom: 12px;
  }
}

.my-container {
  position: relative;
}

.device-1 {
  // width: 100px;
  // height: 200px;
  background-color: rgba($color: #000000, $alpha: .1);
  position: absolute;
  // top: 370px;
  // left: 540px;
  cursor: pointer;
}
.my-img{
  // 旋转-90度
  transform: rotate(-90deg);
}
</style>
