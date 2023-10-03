import axios, {AxiosHeaders} from "axios";

const ClientInstance = function createAxiosClient(defaultHeaders?: AxiosHeaders) {

    const instance = axios.create({headers: defaultHeaders});

    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        console.log("Request received : ", config);
        return config;
    }, function (error) {
        // Do something with request error
        console.log("request, failed : ", error);
        return Promise.reject(error);
    });

// Add a response interceptor
    axios.interceptors.response.use(function (response) {
        console.log("Response, received : ", response);
        return response;
    }, function (error) {
        console.log("request, failed : ", error);
        return Promise.reject(error);
    });

    return instance;
}

export default ClientInstance;