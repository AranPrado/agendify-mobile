import axios from "axios"
import { response } from "express"
import { CreatedClient, CreatedProvider } from "model/CreatedClient"



var API_URL = 'http://127.0.0.1:3000'

const AuthService = {

    RegisterClient: async (modelClient: CreatedClient) => {

        try {
            const response = await axios.post(`${API_URL}/auth/register/clients`, {
                modelClient
            })
    
            return response
        } catch (error) {
            console.log("Deu error", error)
        }

    },
    RegisterProvider: async (modelProvider: CreatedProvider) => {
        try {

            const response = await axios.post(`${API_URL}/auth/register/providers`, {
                modelProvider
            })

            return response
        } catch (error) {
            console.log("Deu error", error)
        }

    },
    Login: async (email:string,password:string,type: "provider" | "clients") => {
        try {
            const loginModel = {
                email: email,
                password: password,
                type: type
            }

            const response = await axios.post(`${API_URL}/auth/login`, loginModel);
    
            return response;
        } catch (error) {
            console.log("Deu error", error)
        }
    },
   


}

export default AuthService;
