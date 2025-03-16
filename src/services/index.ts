import { unstable_cache } from "next/cache";

// طبق داکیومنت نکست بهتر از برای درخواست ها از
// fetch
// استفاده کنیم
// دلایل زیادی وجود دارن کثل استفاده از قابلیت کشینگ و غیره

const API_URL = "https://lookee.nwhco.ir/aapi"; // it can read from env

export const getBarbers = async (
  searchQuery: string,
  servicesQuery: string
) => {
  const url = new URL(`${API_URL}/barbers`);
  const params = new URLSearchParams();

  if (searchQuery) {
    params.append("search", searchQuery);
  }

  if (servicesQuery) {
    params.append("services", servicesQuery);
  }

  url.search = params.toString();

  const cachedRequest = unstable_cache(async () => {
    try {
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error(`Failed to fetch barbers: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching barbers:", error);
      throw new Error("Request failed");
    }
  }, [searchQuery, servicesQuery]);

  return cachedRequest();
};

export const getServices = async () => {
  const url = `${API_URL}/services`;

  const cachedRequest = unstable_cache(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch services: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching services:", error);
      throw new Error("Request failed");
    }
  }, []);

  return cachedRequest();
};
