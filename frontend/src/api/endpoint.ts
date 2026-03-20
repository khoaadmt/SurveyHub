const API_BASE_URL = "http://localhost:5000";

const endpoints = {
    auth: {
        login: `${API_BASE_URL}/api/auth/login`,
        register: `${API_BASE_URL}/api/auth/register`,
    },
};

export default endpoints;
