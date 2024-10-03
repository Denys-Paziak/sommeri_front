export const backHost = "http://localhost:1337";

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

