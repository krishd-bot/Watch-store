import API from "./api";

export const  getWatchesAPI = async (category) => {
 const response = await API.get(`/watches?catogery=${category}`);
 return response.data;
}