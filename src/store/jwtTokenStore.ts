import { create } from "zustand";

interface jwtToken {
  jwtToken: string | null;
  updateToken: (token: string) => void;
}

const useJwtTokenStore = create<jwtToken>()((set) => ({
  jwtToken: localStorage.getItem("jwtToken"),
  updateToken: (token) => {
    localStorage.setItem("jwtToken", token);
    set({ jwtToken: localStorage.getItem("jwtToken") });
  },
}));

export default useJwtTokenStore;
