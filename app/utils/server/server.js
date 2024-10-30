import axios from "axios";

export const backHost = "";

export const getProjects = async (lang) => {
  try {
    const response = await axios.get(
      `${backHost}/api/projects?filters[locale][$eq]=${lang}&populate=*`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

export const getProject = async (id, lang) => {
  try {
    const response = await axios.get(
      `${backHost}/api/projects?filters[url][$eq]=${id}&filters[locale][$eq]=${lang}&populate=*`
    );

    return response.data.data[0];
  } catch (error) {
    console.error("Error fetching project:", error);
  }
};

export const getCategories = async (lang) => {
  try {
    const response = await axios.get(
      `${backHost}/api/categories?filters[locale][$eq]=${lang}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

export const getFAQ = async (lang) => {
  try {
    const response = await axios.get(
      `${backHost}/api/faqs?filters[locale][$eq]=${lang}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching FAQs:", error);
  }
};

export const getReviews = async (lang) => {
  try {
    const response = await axios.get(
      `${backHost}/api/reviews?filters[locale][$eq]=${lang}&populate=*`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
};

export const getTechnologiesWay = async (lang) => {
  try {
    const response = await axios.get(
      `${backHost}/api/technologies-ways?filters[locale][$eq]=${lang}&populate=technologies.image`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching technologies way:", error);
  }
};

export const getSimilars = async (url) => {
  try {
    const response = await axios.get(
      `${backHost}/api/projects?filters[url][$eq]=${url}&populate[similars][populate]=*`
    );

    return response.data.data[0].similars;
  } catch (error) {
    console.error("Error fetching technologies way:", error);
  }
};
