export const backHost = "http://185.233.117.23:1337";

export const getProjects = async () => {
  try {
    const response = await fetch(
        backHost + "/api/projects?populate=*"
    );
    return response;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

export const getProject = async (id) => {
  try {
    const response = await fetch(
        backHost + `/api/projects/${id}?populate=*`
    );
    return response;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

export const getCategories = async () => {
  try {
    const response = await fetch(
        backHost + `/api/categories`
    );
    return response;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};


export const getFAQ = async () => {
  try {
    const response = await fetch(
        backHost + `/api/faqs`
    );
    return response;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

export const getReviews = async () => {
  try {
    const response = await fetch(
        backHost + `/api/reviews?populate=*`
    );
    return response;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

export const getTechnologiesWay = async () => {
  try {
    const response = await fetch(
        backHost + `/api/technologies-ways?populate=technologies.image`
    );
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};
