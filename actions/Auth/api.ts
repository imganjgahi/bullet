 import { URL_GENERAL, URL_API } from "../../utils/constants/GConst"

 import axios from '../../AxiosConfig';
import { LoginType } from "./model"
const authUrl = URL_GENERAL + URL_API 

export const AuthApi = {
    login : async (data: LoginType) => {
        return axios.post(authUrl+ "/users/login", data)
    },
    register : async (data: LoginType) => {
        return axios.post(authUrl+ "/users/register", data)
    }
}