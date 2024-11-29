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
