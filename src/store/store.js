import { create } from "zustand";
import fetcher from "../helpers/fetcher";
const useStore = create((set) => {
  const initialDarkMode = JSON.parse(localStorage.getItem("darkMode")) || false;
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
    countryDetail: {},
    setCountryDetail: (country) => {
      set({ countryDetail: country });
    },

    countries: [],
    setCountries: async (field) => {
      if (typeof field === "string") {
        try {
          const response = await fetcher(field);
          if (response.length > 1) return set({ countries: response });
        } catch (error) {
          console.log("Error: ", error);
        }
      } else {
        return set({ countries: field });
      }
    },

    countriesFiltered: [],
    setCountriesFiltered: async (field) => {
      if (typeof field === "string") {
        try {
          const response = await fetcher(field);
          if (response.length > 1) return set({ countriesFiltered: response });
        } catch (error) {
          console.log("Error: ", error);
        }
      } else {
        return set({ countriesFiltered: field });
      }
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
