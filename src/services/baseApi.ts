import axios from "axios";

const baseApi = axios.create({
    baseURL: "https://projetodelivery.onrender.com",
});

export default baseApi;