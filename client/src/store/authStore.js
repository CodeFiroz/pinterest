import { create } from "zustand"
import { persist } from "zustand/middleware"

const useAuthStore = create(
    persist(
        
        (set) => ({

            isAuthenticated: false,
            user: null,

            Setlogin: (user)=>{
                set({ isAuthenticated: true, user: user });
            },
            logoutUser: ()=>{
                set({ isAuthenticated: false, user: null });
                localStorage.removeItem("auth-storage"); 
            },
        }),
        {
            name: "auth-storage",
        }

    )
);

export default useAuthStore;