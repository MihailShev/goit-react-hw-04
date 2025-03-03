import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

const urlSearchParams = {
  params: {
    client_id: "l8xdQE6Jn13MnYMcD4UpAxY1HMTjQpAJUcEtBcXnH7A",
  },
};

export const fetchSearchPhoto = async (userQuery) => {
  const response = await axios.get(
    `/search/photos?query=${userQuery}`,
    urlSearchParams
  );

  return response.data.results;
};
