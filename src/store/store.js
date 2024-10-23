import { create } from "zustand";
import fetcher from "../helpers/fetcher";

const useStore = create(async (set) => {
  const initialDarkMode = JSON.parse(localStorage.getItem("darkMode")) || false;

  const initialCountries = await fetcher("/all");

  // Setear la clase 'dark' en el <html>
  const setDarkModeClass = (darkMode) => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // Agregar la clase
    } else {
      document.documentElement.classList.remove("dark"); // Quitar la clase
    }
  };

  // Inicializar el estado
  setDarkModeClass(initialDarkMode);

  return {
    countries: initialCountries,
    setCountries: async (field) => {
      const newCountries = await fetcher(field);
      set({ countries: newCountries });
    },
    darkMode: initialDarkMode, // Estado inicial
    toggleDarkMode: () => {
      set((state) => {
        const newDarkMode = !state.darkMode;
        localStorage.setItem("darkMode", JSON.stringify(newDarkMode)); // Persistir en localStorage
        setDarkModeClass(newDarkMode); // Cambiar la clase en <html>
        return { darkMode: newDarkMode };
      });
    },
  };
});


export default useStore;
