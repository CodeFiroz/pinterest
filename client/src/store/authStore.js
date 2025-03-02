import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Logout } from "../api/auth";

const useAuthStore = create(
    persist(
        
        (set) => ({

            isAuthenticated: false,
            user: null,

            Setlogin: (user)=>{
                set({ isAuthenticated: true, user: user });
            },
            logoutUser: async ()=>{
                const loggingOut = await Logout();
                if(loggingOut.success){
                    set({ isAuthenticated: false, user: null });
                    localStorage.removeItem("auth-storage"); 
                }
            },
        }),
        {
            name: "auth-storage",
        }

    )
);

export default useAuthStore;