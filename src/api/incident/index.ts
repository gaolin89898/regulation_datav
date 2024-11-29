import http from "../../utils/http";

//获取政策法规列表
export interface PoliciesListCommand {
  policiesName: string;
  pageNum: number;
  pageSize: number;
  orderColumn: string;
  orderDirection: string;
}
export const getPoliciesListApi = (params: PoliciesListCommand) => {
  return http.get("/manage/policies", {
    params,
  });
};

//获取SOP列表
export interface sopListRes {
  name: string;
  pageNum: number;
  pageSize: number;
  orderColumn: string;
  orderDirection: string;
}
export function sopList(params: sopListRes) {
  return http.get("/manage/sop", { params });
}

//获取报警事件列表
export interface alarmEventsListRes {
  type: string;
  pageNum: number;
  pageSize: number;
  orderColumn: string;
  orderDirection: string;
}
export function alarmEventsList(params: alarmEventsListRes) {
  return http.get("/manage/event", { params });
}

//获取报警信息列表
export interface alarmInformationListRes {
  pageNum: number;
  pageSize: number;
  orderColumn: string;
  orderDirection: string;
}
export function alarmInformationList(params: alarmInformationListRes) {
  return http.get("/manage/emergencyAlarm", { params });
}

//区域统计
export function areaStatistics(params: { startTime: string; endTime: string }) {
  return http.get("/manage/event/getAreaStatistics", { params });
}

//报警历史统计
export function getstatistics(params: { dayType: string }) {
  return http.get("/manage/event/getWeekStatistics", { params });
}
