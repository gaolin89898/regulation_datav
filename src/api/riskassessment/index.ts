import http from "../../utils/http";

//获取阈值设置列表
export interface thresholdListRes {
  pageNum: number;
  pageSize: number;
  orderColumn: string;
  orderDirection: string;
}
export function thresholdList(params: thresholdListRes) {
  return http.get("/manage/threshold", { params });
}
