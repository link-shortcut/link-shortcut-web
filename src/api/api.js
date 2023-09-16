import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  timeout: 4000,
});

export const createShortenUrl = (data) => {
  return client.post(`/api/link/create`, data);
};

export const expireShortenUrl = (data) => client.post(`/api/link/expire`, data);

export const getShortenUrlStat = (shortenPath) =>
  client.get(`/api/link/${shortenPath}`);
