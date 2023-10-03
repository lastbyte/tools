import clientInstance from "@clients/clientInstance";

const apiClient = clientInstance()
export const getPostById = async (id: number) => {
    return await apiClient.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

export const getIpAddress = async () => {
    return (await apiClient.get(`https://api.ipify.org/?format=json`)).data;
}
