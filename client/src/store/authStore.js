import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
    persist(
        (set) => ({
            isAuthenticated: false,
            authUser: null,
              
            login: (user) => set({ isAuthenticated: true, authUser: user }),
            
            logout: () => {
                set({ isAuthenticated: false, authUser: null });
                localStorage.removeItem("auth-storage"); 
            },

            checkAuth: async () => {
              set({ loading: true }); // Start loading before API call
      
              try {
                const response = await fetch("http://localhost:4000/api/auth/verify", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  credentials: "include",
                });
      
                const data = await response.json();
      
                if (!response.ok) {
                  throw new Error(data.message || "Authentication failed");
                }
      
                set({
                  authUser: data,
                  isAuthenticated: true,
                });
      
              } catch (err) {
                console.error("Auth Error:", err);
                set({
                  authUser: null,
                  isAuthenticated: false,
                });
      
              }
            },
          
          }),
          {
            name: 'auth-storage',
            getStorage: () => localStorage,
          }
    )
)

export default useAuthStore;