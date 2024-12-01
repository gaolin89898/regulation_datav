import http from "../../utils/http";

//获取异常健康指标统计
export interface receiveListRes {
  dayType: string;
}
export function indicatorStatistics(params: receiveListRes) {
  return http.get("/manage/healthy/alarmStockType", { params });
}

//获取人员健康数据列表
export interface healthyListRes {
  name: string;
  pageNum: number;
  pageSize: number;
  orderColumn: string;
  orderDirection: string;
}

export function healthyList(params: healthyListRes) {
  return http.get("/manage/healthy", { params });
}
