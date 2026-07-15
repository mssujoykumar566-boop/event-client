const API_URL = "/api";


export const api = async (
  endpoint: string,
  options?: RequestInit
) => {

  const response = await fetch(
    `${API_URL}${endpoint}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    }
  );


  const data = await response.json();

  return data;
};
