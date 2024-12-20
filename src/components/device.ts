import { Client } from "@stomp/stompjs";
import { defineStore } from "pinia";
import { onMounted, ref } from "vue";

export const useDeviceStore = defineStore("pure-app", () => {
    const stompClient = ref(new Client({
        brokerURL: "/ws-api/ws",
    }))

    const tableData = ref([])

    // 当前的数据
    const currentData = ref({})

    const isShowDetail = ref(false);

    stompClient.value.onConnect = (frame) => {
        stompClient.value.subscribe('/topic/info', (greeting) => {
            console.log(JSON.parse(greeting.body))
            // 推到第一个
            tableData.value.unshift(JSON.parse(greeting.body));
        });
        stompClient.value.subscribe("/topic/data", (greeting) => {
            currentData.value = JSON.parse(greeting.body);
        });
    };

    stompClient.value.onWebSocketError = (error) => {
        // 打印具体的错误信息
        console.error('Broker reported error: ' + error);
    };

    stompClient.value.onStompError = (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
    };
    stompClient.value.activate();

    return {
        stompClient,
        tableData,
        currentData,
        isShowDetail
    }
})