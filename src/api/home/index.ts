import http from "../../utils/http";

export function getstatistics(params: { dayType: string }) {
  return http.get("/manage/event/getWeekStatistics", { params });
}
