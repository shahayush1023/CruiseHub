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

export const contact = async (obj, conf) => {
  try {
    const { data } = await client.post(`user/contactus`, obj, conf);
    console.log("data >>>",{data});
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const checkRecord=async(obj,conf) =>{
  try{
    const { data } = await client.post(`/record/getrecordbydate`, obj, conf);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
}

export const getRecord=async(id) =>{
  try{
    const { data } = await client.get(`/record/getrecord/${id}`);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
}

export const getReview=async() =>{
  try{
    const { data } = await client.get(`/user/contactus`);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
}


export const updateRecord=async(obj,config) =>{
  console.log("obj >> " , obj)
  try{
    const { data } = await client.put(`/record/updateRecord/`,obj,config);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
}

export const login = async (obj, conf) => {
  try {
    const { data } = await client.post(`user/login`, obj, conf);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};