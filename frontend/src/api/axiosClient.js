import axios from "axios";
import { store } from "../redux/store";

const axiosClient = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        "Content-Type": "application/json",
    },
});
axiosClient.interceptors.request.use(async (config) => {
    const state = store.getState();
    let token = state.user.access_token;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosClient;
