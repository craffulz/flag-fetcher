const fetcher = async (field) => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1${field}`);
    if (!response.ok) throw new Error("No data received from AllCountriesAPI");

    const data = await response.json();

    return data;

  } catch (error) {
    console.log("Error: ", error);
  }
};

export default fetcher;
