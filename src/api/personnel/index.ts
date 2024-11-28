import http from "../../utils/http";

//获取异常健康指标统计
export interface receiveListRes {
  dayType: string;
}
export function indicatorStatistics(params: receiveListRes) {
  return http.get("/manage/healthy/alarmStockType", { params });
}
