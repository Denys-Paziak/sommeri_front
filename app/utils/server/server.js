const host = "http://localhost:1337";

const getProjects = async () => {
  try {
    const response = await fetch(
        host + "/api/projects?populate=*"
    );
    return response;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

const getProject = async (id) => {
  try {
    const response = await fetch(
        host + `/api/projects/${id}?populate=*`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

export { getProjects, getProject };
