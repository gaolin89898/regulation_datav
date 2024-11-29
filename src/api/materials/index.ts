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

//获取物料档案列表
export interface materialFilesListRes {
  pageNum: number;
  pageSize: number;
  orderColumn: string;
  orderDirection: string;
}
export function materialFilesList(params: materialFilesListRes) {
  return http.get("/manage/materials", { params });
}

//获取物料库存统计
export interface getstatisticsRes {
  materialsId: number;
  dayType: string;
}
export function getstatistics(params: getstatisticsRes) {
  const { materialsId } = params;
  return http.get(`/manage/materials/stock/${materialsId}`, { params });
}

//获取领用统计
export interface receivestatisticsRes {
  materialsId: number;
  materialsName: string;
  startTime: string;
  endTime: string;
}
export function receivestatistics(params: receivestatisticsRes) {
  const { materialsId } = params;
  return http.get("/manage/receive/stock/", { params });
}
