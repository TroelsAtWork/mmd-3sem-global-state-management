import { create } from "zustand";
import { persist } from "zustand/middleware";

// const useStore = create((set) => ({
//   messages: 10,
//   increaseMessages: () => set((state) => ({ messages: state.messages + 1 })),
// }));

// export default useStore;

const useStore = create(
  persist(
    (set) => ({
      messages: 0,
      setMessages: () => set((state) => ({ messages: state.messages + 1 })),
    }),
    {
      name: "message-storage",
    }
  )
);

export default useStore;

// const useStore = create(
//   persist(
//     (set, get) => ({
//       messages: 1,
//       increaseMessages: () => set({ messages: get().messages + 1 }),
//     }),
//     {
//       name: "message-storage",
//     }
//   )
// );

// export default useStore;
