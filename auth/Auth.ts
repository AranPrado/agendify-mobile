import { create } from "zustand";
import { response } from 'express';
import AuthService from "services/authService.service";

const useAuthStore = create((set) => ({

    email: '',
    password: '',
    isLoggedIn: false,
    error: null,
    type: '',
    setType: (type: 'client' | 'provider') => set({type}),
    setEmail: (email:string) => set({email}),
    setPassword: (password: string) => set({password}),
    setIsLoggedIn: (isLoggedIn: boolean) => set({isLoggedIn}),
    login: async (email: string, password:string,type: 'provider' | 'clients') => {
        try {
            const response = await AuthService.Login(email, password, type);

            if (response) {
                console.log("Login bem-sucedido", response);
                set({ isLoggedIn: true }); // Define como logado após o sucesso
            } else {
                console.log("Erro no login");
                set({ error: 'Login falhou' });
            }
        } catch (error) {
            console.log("Erro ao logar", error);
            set({ error: 'Erro ao tentar login' });
        }
    }


}))

export default useAuthStore;
