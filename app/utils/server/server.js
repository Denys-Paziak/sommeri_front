import axios from 'axios';

export const backHost = "http://185.233.117.23:1337";

export const getProjects = async () => {
  try {
    const response = await axios.get(`${backHost}/api/projects?populate=*`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

export const getProject = async (id) => {
  try {
    const response = await axios.get(`${backHost}/api/projects/${id}?populate=*`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching project:", error);
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${backHost}/api/categories`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

export const getFAQ = async () => {
  try {
    const response = await axios.get(`${backHost}/api/faqs`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching FAQs:", error);
  }
};

export const getReviews = async () => {
  try {
    const response = await axios.get(`${backHost}/api/reviews?populate=*`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
};

export const getTechnologiesWay = async () => {
  try {
    const response = await axios.get(`${backHost}/api/technologies-ways?populate=technologies.image`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching technologies way:", error);
  }
};
