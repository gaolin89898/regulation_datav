import http from "../utils/http";

export function login() {
    const username = "admin";
    const password = "i6NhzLNLVifEWMsfz/ABPParezXL/p440tM7k/8Zg8eltdPpQlENDbvgENOfNfcGTngi73OLnk1bW9ycS0b5JX1HRncNNJo3Ga8D0egvjNczFkES4ddAi3Xz4L0JbwpMAgwE7joe+44ZBMOA6shTXX5usA5UVCzT7SZwiKAvFas=";
    return http.post("/login", {
        username,
        password
    });
}