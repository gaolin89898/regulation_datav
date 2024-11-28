import http from "../../utils/http";

//获取工艺档案列表
export interface archiveListRes {
  pageNum: number;
  pageSize: number;
  orderColumn: string;
  orderDirection: string;
}
export function archiveList(params: archiveListRes) {
  return http.get("/manage/craft-archive", { params });
}

//获取工艺节点列表
export interface nodeListRes {
  nodeName: string;
  pageNum: number;
  pageSize: number;
  orderColumn: string;
  orderDirection: string;
}
export function nodeList(params: nodeListRes) {
  return http.get("/manage/craft-node", { params });
}
