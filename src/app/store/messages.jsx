import { create } from "zustand";
import { persist } from "zustand/middleware";

// Herunder finder du fire eksempler på hvordan vi kan arbejde med Zustand.
// Alle linier der starter med -------- er kommenterede linier og skal forblive udkommenteret!
// Fjern: // forand de linier hvor der er javascript kode, altså kommenterede linier der IKKE start med --------
// Der er fire eksempler herunder, HUSK kun at fjerne kommentarene fra en ad gangen :)
// Der er lavet et route (inbox) som I kan benytte til at teste om statet "overlever rejsen" til et nyt route :)

const useStore = create((set) => ({
  messages: 1,
  setMessages: () =>
    // -------- Kommentar ----------------------------------------------
    // -------- state variablen, der medsendes som argument, indeholder det aktuelle state
    // -------- ({ ... }) er en forkortet syntaks til at returnere et objekt direkte fra en arrow function.
    // -------- Parenteserne () rundt om {} fortæller JavaScript, at det skal tolkes som et objekt, ikke som en kodeblok.
    // -------- Kode ---------------------------------------------------
    set((state) => ({ messages: state.messages + 1 })),
  // -------- Ovenstående er eksempel er fra dokumentationen, men det kan også skrives mere genkendeligt:
  // -------- Kode ---------------------------------------------------
  // set((state) => {
  //   return { messages: state.messages + 1 };
  // }),
}));
export default useStore;

// -------- Kommentar ----------------------------------------------
// -------- Alternativt kan vi benytte nedenstående syntax, hvor vi i stedet benytter get() metoden til at refererer state objektets messages property
// -------- Kode ---------------------------------------------------
// const useStore = create((set, get) => ({
//   messages: 1,
//   setMessages: () => set({ messages: get().messages + 1 }),
// }));
//export default useStore;

// -------- Kommentar ----------------------------------------------
// -------- Med persist fra zustand/middelware er det muligt at gemme sit state i ex. localhost. I option objektet definere vi
// -------- en name property, der "efterfølgende" bliver vores key i localstorage.
// -------- Kode ---------------------------------------------------
// const useStore = create(
//   persist(
//     (set) => ({
//       messages: 1,
//       setMessages: () => set((state) => ({ messages: state.messages + 1 })),
//     }),
//     {
//       name: "message-storage",
//     }
//   )
// );
// export default useStore;

// -------- Kommentar ----------------------------------------------
// -------- Samme eksempel som ovenstående, men i nedenstående syntax, benytter vi igen get() metoden til at refererer state objektets messages property
// -------- Kode ---------------------------------------------------
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
