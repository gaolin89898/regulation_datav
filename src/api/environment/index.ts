import http from "../../utils/http";

//获取环境档案列表
export interface environmentalFilesListRes {
  pageNum: number;
  pageSize: number;
  orderColumn: string;
  orderDirection: string;
}
export function environmentalFilesList(params: environmentalFilesListRes) {
  return http.get("/manage/environment", { params });
}


//数据大屏获取环境档案区域的历史报警数量
export function historyStatistics(params: {
  description: string;
  dayType: string;
}) {
  return http.get("/manage/event/envrionment", { params });
}

export function powerByTypeStatistics(params: {
  des: string;
  dayType: string;
  type: string;
}) {
  return http.get("/manage/detection/powerByType", { params });
}

export const getFiveEnvironment = async () => {
  let list = [];
  const { data } = await http.get("/api/manage/event", {
    params: {
      pageSize: 10,
      pageNum: 1,
      orderDirection: "descending",
    },
  });
  if (data != null) {
    list = data.data.rows;
  }
  return list;
};

export const getFiveEmergencyEvent = async () => {
  let list = [];
  const { data } = await http.get("/api/manage/emergencyEvent", {
    params: {
      pageSize: 5,
      pageNum: 1,
      orderDirection: "descending",
    },
  });
  if (data != null) {
    list = data.data.rows;
  }
  return list;
};

export const getMontEventType = async () => {
  let list = [];
  const { data } = await http.get("/api/manage/event/getWeekStatistics", {
    params: {
      dayType: "year",
    },
  });
  if (data != null) {
    list = data.data;
  }
  return list;
};

