import http from "../utils/http";

export function login() {
    const username = "admin";
    const password = "ltjCwwZVrGTLw4roRS+ranONt4nWElGOSyMrCV05Bb+ksmZ+nePUMpCUaXBAeG8NeO2i3qoFh533AAizfoE+KfFiivKMOfkaFOtaEygHMT+W8h0ea4uQSYIqpFBaVejs2dhDbs2J1RZgbExUobIMOe/S5m6wfv7486omJxN8NcI=";
    return http.post("/login", {
        username,
        password
    });
}