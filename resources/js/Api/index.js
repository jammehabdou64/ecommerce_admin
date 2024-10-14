import Api from "./api";

export const getApi = async (url, token) => {
  return Api.get(url);
};

export const postApi = async (url, formData = {}) => {
  return Api.post(url, formData);
};

export const putApi = async (url, formData) => {
  return Api.put(url, formData);
};

export const patchtApi = async (url, formData) => {
  return Api.patch(url, formData);
};

export const deleteApi = async (url) => {
  return Api.delete(url);
};
