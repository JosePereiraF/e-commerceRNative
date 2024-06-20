import axios, { AxiosInstance } from 'axios';

export const Api: AxiosInstance = axios.create({
    baseURL: "http://192.168.1.15:8080/"
    //baseURL: "http://10.0.2.2:8080/"
})

