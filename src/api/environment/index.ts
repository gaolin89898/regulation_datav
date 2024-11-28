import http from "../../utils/http";

export const getFiveEnvironment = async () => {
    let list = [];
    const { data } = await http.get("/api/manage/event", {
        params: {
            pageSize: 10,
            pageNum: 1,
            orderDirection: "descending",
        }
    })
    if (data != null) {
        list = data.data.rows
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
        }
    })
    if (data != null) {
        list = data.data.rows
    }
    return list;
};


export const getMontEventType = async () => {
    let list = [];
    const { data } = await http.get("/api/manage/event/getWeekStatistics", {
        params: {
            dayType: "year"
        }
    })
    if (data != null) {
        list = data.data
    }
    return list;
};