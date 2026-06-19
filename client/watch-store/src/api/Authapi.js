import API from "./api";

export const registerAPI = async (userData) => {
    const response = await API.post('/user/register', userData)
    return response.data;
}

export const loginAPI = async (userData) => {
    const response = await API.post('/user/login', userData);
    return response.data;
}