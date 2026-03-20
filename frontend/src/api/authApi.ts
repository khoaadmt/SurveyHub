import axiosClient from "./axiosClient";
import endpoints from "./endpoint";
import { AxiosError } from "axios";

export interface LoginPayload {
    email: string;
    password: string;
}

export interface RegisterPayload {
    email: string;
    password: string;
    name: string;
}

export interface ApiError {
    message: string;
    error?: string;
    statusCode?: number;
}

const authApi = {
    login: async (payload: LoginPayload) => {
        try {
            const res = await axiosClient.post(endpoints.auth.login, payload);
            return res.data;
        } catch (err) {
            const error = err as AxiosError<ApiError>;

            throw (
                error.response?.data || {
                    message: "Network error",
                }
            );
        }
    },

    register: async (payload: RegisterPayload) => {
        try {
            const res = await axiosClient.post(
                endpoints.auth.register,
                payload,
            );
            return res.data;
        } catch (err) {
            const error = err as AxiosError<ApiError>;

            throw (
                error.response?.data || {
                    message: "Network error",
                }
            );
        }
    },
};

export default authApi;
