import axios from "axios";

export const api = axios.create();
api.interceptors.response.use(
    (response) => response,
    (error) => {
        const { response } = error;
        if (response && response.status === 401) {
            window.location.href = "/"
        } else if (response && response.status === 403) {
            window.location.href = "/"
        }
    }
)