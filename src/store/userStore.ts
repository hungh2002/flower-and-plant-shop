import { create } from "zustand";

interface User {
  userId: number;
  username: string;
  signedIn: boolean;
  update: (user: {
    userId: number;
    username: string;
    signedIn: boolean;
  }) => void;
}

const useUserStore = create<User>()((set) => ({
  userId: 0,
  username: "Profile",
  signedIn: false,
  update: (user) =>
    set({
      userId: user.userId,
      username: user.username,
      signedIn: user.signedIn,
    }),
}));

export default useUserStore;
