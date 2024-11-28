import http from "../../utils/http";

//获取领用记录列表
export interface receiveListRes {
  pageNum: number;
  pageSize: number;
  orderColumn: string;
  orderDirection: string;
}
export function receiveList(params: receiveListRes) {
  return http.get("/manage/receive", { params });
}
