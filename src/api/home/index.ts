import http from "../../utils/http";

export function getstatistics(params: { dayType: string }) {
  return http.get("/manage/event/getWeekStatistics", { params });
}

//今日报警数量
export function geteventTotal() {
  return http.get("/manage/event/eventTotal");
}
