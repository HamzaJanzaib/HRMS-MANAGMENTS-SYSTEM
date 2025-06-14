
const BASE_URL: string = import.meta.BASE_URL || "http://localhost:8080/api/v1/";

const API_ENDPOINTS = {
    REGISTER: "user/register",
    LOGIN: "user/login",
    LOGOUT: "user/logout",
    GETPROFILE: "user/profile",
    CHECK_AUTH: "user/check-auth",
}

export { BASE_URL, API_ENDPOINTS };
