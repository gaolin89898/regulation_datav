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
//获取维修记录信息
export function equipmentRepairInfo(recordId: number) {
  return http.request("get", `/manage/equipment-repair/${recordId}`);
}



//获取检修记录列表
export interface inspectionRes {
  equipmentCode: string;
  pageNum: number;
  pageSize: number;
  orderColumn: string;
  orderDirection: string;
}
export function inspectionList(params: inspectionRes) {
  return http.get( "/manage/equipment-inspection", { params });
}
//获取检修记录信息
export function inspectionInfo(recordId: number) {
  return http.request("get", `/manage/equipment-inspection/${recordId}`);
}
