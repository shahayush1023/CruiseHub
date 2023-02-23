import client from "./client";

export const getShipData = async () => {
  try {
    const { data } = await client.get("reservation/seats");
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const getSeatByType = async (type) => {
  try {
    const { data } = await client.get(`reservation/seats/${type}`);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const signup = async (obj, conf) => {
  try {
    const { data } = await client.post(`user/signup`, obj, conf);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};
