 import { URL_GENERAL, URL_API } from "../../utils/constants/GConst"
 import axios from '../../AxiosConfig';
const authUrl = URL_GENERAL + URL_API 

export const AuthApi = {
    getList : async () => {
        return axios.get(authUrl+ "/tasks")
    },
    create : async (data: any) => {
        return axios.post(authUrl+ "/tasks", data)
    },
}