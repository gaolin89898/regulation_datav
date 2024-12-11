import { getThreshold } from "@/api/manage/threshold"
import { http } from "@/utils/http"
import { computed, onMounted, reactive, ref } from "vue"

export function useThreeDeviceHook() {

  const tuRef = ref()

  // 宽高比
  const xAspectRatio = ref(0)

  const yAspectRatio = ref(0)

  const deviceStyles = ref([
    {
      style: {
        'width': '70px',
        'height': '70px',
        'backgroundColor': 'rgba(0, 0, 0, .1)',
        'top': '570px',
        'left': Math.floor(xAspectRatio.value * 2000) + "px",
      },
      top: 2430,
      left: 1520,
    },
    {
      style: {
        'width': '70px',
        'height': '150px',
        'backgroundColor': 'rgba(0, 0, 0, .1)',
        'top': '370px',
        'left': Math.floor(xAspectRatio.value * 2000) + "px",
      },
      top: 2430,
      left: 2050,
    },
    {
      style: {
        'width': '50px',
        'height': '50px',
        'backgroundColor': 'rgba(0, 0, 0, .1)',
        'top': '370px',
        'left': Math.floor(xAspectRatio.value * 2000) + "px",
      },
      top: 2460,
      left: 2350,
    },
    {
      style: {
        'width': '50px',
        'height': '50px',
        'backgroundColor': 'rgba(0, 0, 0, .1)',
        'top': '370px',
        'left': Math.floor(xAspectRatio.value * 2000) + "px",
      },
      top: 4130,
      left: 2550,
    },
    {
      style: {
        'width': '50px',
        'height': '50px',
        'backgroundColor': 'rgba(0, 0, 0, .1)',
        'top': '370px',
        'left': Math.floor(xAspectRatio.value * 2000) + "px",
      },
      top: 1930,
      left: 2500,
    }
  ])

  const list = ref([
    {
      style: {
        'width': '100px',
        'height': '200px',
        'backgroundColor': 'rgba(0, 0, 0, .1)',
        'top': '370px',
        'left': Math.floor(xAspectRatio.value * 2000) + "px",
      },
      equipmentId: 5,
      value: 0,
      thresholds: [],
      type: "设备档案"
    },
    {
      style: {
        'width': '100px',
        'height': '200px',
        'backgroundColor': 'rgba(0, 0, 0, .1)',
        'top': '370px',
        'left': Math.floor(xAspectRatio.value * 2000) + "px",
      },
      equipmentId: 6,
      value: 0,
      thresholds: [],
      type: "设备档案"
    },
    {
      style: {
        'width': '100px',
        'height': '200px',
        'backgroundColor': 'rgba(0, 0, 0, .1)',
        'top': '370px',
        'left': Math.floor(xAspectRatio.value * 2000) + "px",
      },
      equipmentId: 7,
      value: 0,
      thresholds: [],
      type: "设备档案"
    },
    {
      style: {
        'width': '100px',
        'height': '200px',
        'backgroundColor': 'rgba(0, 0, 0, .1)',
        'top': '370px',
        'left': Math.floor(xAspectRatio.value * 2000) + "px",
      },
      equipmentId: 8,
      value: 0,
      thresholds: [],
      type: "设备档案"
    },
    // {
    //   style: {
    //     'width': '100px',
    //     'height': '200px',
    //     'backgroundColor': 'rgba(0, 0, 0, .1)',
    //     'top': '370px',
    //     'left': Math.floor(xAspectRatio.value * 2000) + "px",
    //   },
    //   value: 0,
    //   thresholds: [],
    //   type: "环境档案",
    //   environmentId: 4,
    //   environment: {}
    // },
  ])

  const urlInfo = (el) => {
    // 获取图片的原始宽高
    const imgWidth = el.target.width
    const imgHeight = el.target.height
    // 获取图片的渲染宽高
    const imgClientWidth = el.target.naturalWidth
    const imgClientHeight = el.target.naturalHeight
    // 获取图片的缩放比例
    xAspectRatio.value = imgWidth / imgClientWidth
    yAspectRatio.value = imgHeight / imgClientHeight
    deviceStyles.value.forEach((item) => {
      item.style.left = Math.floor(xAspectRatio.value * item.left) + "px"
      item.style.top = Math.floor(yAspectRatio.value * item.top) + "px"
    })
  }

  onMounted(() => {
    http.get("/manage/threshold", {
      params: {
        pageNum: 1,
        pageSize: 10000
      }
    }).then((res) => {
      res.data.rows.forEach((item: any) => {
        list.value.forEach((item2: any) => {
          if (item.equipment != null && item.equipment.equipmentId === item2.equipmentId) {
            item2.thresholds.push(item)
          }
        })
      })
    }).catch((err) => { })

    http.get("/manage/environment", {
      params: {
        pageNum: 1,
        pageSize: 10000
      }
    }).then((res) => {
      res.data.rows.forEach((item: any) => {
        list.value.forEach((item2: any) => {
          if (item.environmentId === item2.environmentId) {
            item2.environment = item
          }
        })
      })
    })
    http.get("/manage/equipment", {
      params: {
        pageNum: 1,
        pageSize: 10000
      }
    }).then((res) => {
      res.data.rows.forEach((item: any) => {
        list.value.forEach((item2: any) => {
          if (item.equipmentId === item2.equipmentId) {
            item2.equipment = item
          }
        })
      })
    })
    console.log("list.value", list.value)
  })
  // setInterval(() => {
  //   list.value.forEach((item: any) => {
  //     item.thresholds.forEach((item2: any) => {
  //       item2.sensorValue = Math.floor(Math.random() * 100)
  //       console.log(item2.sensorValue)
  //     })
  //   })
  // }, 2000)
  return {
    list,
    tuRef,
    xAspectRatio,
    yAspectRatio,
    urlInfo,
    deviceStyles
  }
}