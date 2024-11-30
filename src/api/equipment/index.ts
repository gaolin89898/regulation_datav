import http from "../../utils/http";

//获取维修记录列表
export interface equipmentRepairListRes {
  equipmentCode: string;
  pageNum: number;
  pageSize: number;
  orderColumn: string;
  orderDirection: string;
}
export function equipmentRepairList(params: equipmentRepairListRes) {
  return http.get("/manage/equipment-repair", { params });
}
//获取日常巡检记录列表
export interface dailyInspectionRes {
  pageNum: number;
  pageSize: number;
  orderColumn: string;
  orderDirection: string;
}
export function dailyInspectionList(params: dailyInspectionRes) {
  return http.get("/manage/equipment-daily-inspection", {
    params,
  });
}

//获取设备档案列表
export interface equipmentListRes {
  equipmentName: string;
  pageNum: number;
  pageSize: number;
  orderColumn: string;
  orderDirection: string;
}
export function equipmentList(params: equipmentListRes) {
  return http.get("/manage/equipment", { params });
}

//获取设备数据历史统计
export interface historicalStatisticsRes {
  thresholdId: number;
}
export function historicalStatisticsList(params: historicalStatisticsRes) {
  return http.get("/manage/equipment-data/history", { params });
}
